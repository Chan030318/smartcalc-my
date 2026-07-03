"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLang } from "@/components/LangProvider";
import {
  addDreamCard,
  deleteDreamCard,
  loadDreamCards,
  saveDreamCards,
  updateDreamCard,
  type DreamCard,
  type DreamCardInput,
  type DreamCategory,
} from "@/lib/dreamBoard";

const CATEGORIES: DreamCategory[] = ["finance", "career", "family", "health", "impact"];

const CATEGORY_STYLES: Record<DreamCategory, string> = {
  finance: "border-amber-200 bg-amber-50 text-amber-800",
  career: "border-blue-200 bg-blue-50 text-blue-800",
  family: "border-rose-200 bg-rose-50 text-rose-800",
  health: "border-emerald-200 bg-emerald-50 text-emerald-800",
  impact: "border-violet-200 bg-violet-50 text-violet-800",
};

const COPY = {
  en: {
    eyebrow: "Dream Board",
    title: "See it first, then move toward it",
    intro:
      "Turn vague wishes into visible cards. Add the dream, give it a category, set a target date, and keep it where your next action can see it.",
    add: "New dream",
    cancel: "Cancel",
    save: "Save dream",
    update: "Update dream",
    edit: "Edit",
    delete: "Delete",
    emptyTitle: "Your board is still empty",
    emptyBody: "Start with one dream you want to see clearly this year.",
    titleLabel: "Title",
    categoryLabel: "Category",
    targetDateLabel: "Target date",
    imageUrlLabel: "Image URL",
    noteLabel: "Note",
    titlePlaceholder: "Example: First RM100,000 investment portfolio",
    imagePlaceholder: "https://example.com/dream.jpg",
    notePlaceholder: "Why this matters, or the next small action.",
    target: "Target",
    noDate: "No target date yet",
    imageFallback: "Vision image",
    categories: {
      finance: "Financial freedom",
      career: "Career",
      family: "Family",
      health: "Health",
      impact: "Impact",
    },
  },
  bm: {
    eyebrow: "Dream Board",
    title: "Nampak dahulu, baru bergerak ke arahnya",
    intro:
      "Tukar impian yang kabur menjadi kad yang jelas. Tambah impian, pilih kategori, letak tarikh sasaran, dan jadikan ia nampak supaya tindakan seterusnya lebih mudah.",
    add: "Impian baru",
    cancel: "Batal",
    save: "Simpan impian",
    update: "Kemas kini impian",
    edit: "Edit",
    delete: "Padam",
    emptyTitle: "Board anda masih kosong",
    emptyBody: "Mulakan dengan satu impian yang anda mahu nampak dengan jelas tahun ini.",
    titleLabel: "Tajuk",
    categoryLabel: "Kategori",
    targetDateLabel: "Tarikh sasaran",
    imageUrlLabel: "URL gambar",
    noteLabel: "Nota",
    titlePlaceholder: "Contoh: Portfolio pelaburan RM100,000 pertama",
    imagePlaceholder: "https://example.com/dream.jpg",
    notePlaceholder: "Kenapa ini penting, atau tindakan kecil seterusnya.",
    target: "Sasaran",
    noDate: "Belum ada tarikh sasaran",
    imageFallback: "Gambar visi",
    categories: {
      finance: "Kebebasan kewangan",
      career: "Kerjaya",
      family: "Keluarga",
      health: "Kesihatan",
      impact: "Impak",
    },
  },
  zh: {
    eyebrow: "梦想图",
    title: "先看见，才会行动",
    intro:
      "把模糊的愿望变成看得见的卡片。写下梦想、选择分类、设定目标日期，让下一步行动有一个清楚的方向。",
    add: "新增梦想",
    cancel: "取消",
    save: "保存梦想",
    update: "更新梦想",
    edit: "编辑",
    delete: "删除",
    emptyTitle: "你的梦想板还是空的",
    emptyBody: "先放下一个今年想看清楚、想靠近的梦想。",
    titleLabel: "标题",
    categoryLabel: "分类",
    targetDateLabel: "目标日期",
    imageUrlLabel: "图片网址",
    noteLabel: "备注",
    titlePlaceholder: "例：第一个 RM100,000 投资组合",
    imagePlaceholder: "https://example.com/dream.jpg",
    notePlaceholder: "为什么重要，或下一步可以做什么。",
    target: "目标",
    noDate: "还没有目标日期",
    imageFallback: "愿景图片",
    categories: {
      finance: "财务自由",
      career: "事业",
      family: "家庭",
      health: "健康",
      impact: "影响力",
    },
  },
} as const;

const EMPTY_FORM: DreamCardInput = {
  title: "",
  category: "finance",
  targetDate: "",
  imageUrl: "",
  note: "",
};

export default function DreamBoardClient() {
  const { lang } = useLang();
  const copy = COPY[lang];
  const [cards, setCards] = useState<DreamCard[]>([]);
  const [form, setForm] = useState<DreamCardInput>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sortedCards = useMemo(
    () => [...cards].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [cards],
  );

  useEffect(() => {
    setCards(loadDreamCards());
  }, []);

  useEffect(() => {
    saveDreamCards(cards);
  }, [cards]);

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setIsFormOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    setCards((current) =>
      editingId ? updateDreamCard(current, editingId, form) : addDreamCard(current, form),
    );
    resetForm();
  }

  function startEdit(card: DreamCard) {
    setForm({
      title: card.title,
      category: card.category,
      targetDate: card.targetDate ?? "",
      imageUrl: card.imageUrl ?? "",
      note: card.note ?? "",
    });
    setEditingId(card.id);
    setIsFormOpen(true);
  }

  function handleDelete(id: string) {
    setCards((current) => deleteDreamCard(current, id));
    if (editingId === id) {
      resetForm();
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#071427] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">{copy.intro}</p>
          </div>
          <button
            type="button"
            data-testid="dream-add"
            onClick={() => {
              setForm(EMPTY_FORM);
              setEditingId(null);
              setIsFormOpen(true);
            }}
            className="w-full rounded-xl bg-amber-300 px-5 py-3 text-sm font-black text-gray-950 transition-colors hover:bg-amber-200 sm:w-auto"
          >
            {copy.add}
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {isFormOpen && (
          <form onSubmit={handleSubmit} className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={copy.titleLabel}>
                <input
                  name="title"
                  data-testid="dream-title"
                  value={form.title}
                  onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                  placeholder={copy.titlePlaceholder}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-950 outline-none transition-colors focus:border-amber-400 focus:bg-white"
                />
              </Field>

              <Field label={copy.categoryLabel}>
                <select
                  name="category"
                  data-testid="dream-category"
                  value={form.category}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, category: event.target.value as DreamCategory }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-950 outline-none transition-colors focus:border-amber-400 focus:bg-white"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {copy.categories[category]}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={copy.targetDateLabel}>
                <input
                  name="targetDate"
                  data-testid="dream-target-date"
                  type="date"
                  value={form.targetDate}
                  onChange={(event) => setForm((current) => ({ ...current, targetDate: event.target.value }))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-950 outline-none transition-colors focus:border-amber-400 focus:bg-white"
                />
              </Field>

              <Field label={copy.imageUrlLabel}>
                <input
                  name="imageUrl"
                  data-testid="dream-image-url"
                  type="url"
                  value={form.imageUrl}
                  onChange={(event) => setForm((current) => ({ ...current, imageUrl: event.target.value }))}
                  placeholder={copy.imagePlaceholder}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-950 outline-none transition-colors focus:border-amber-400 focus:bg-white"
                />
              </Field>
            </div>

            <Field label={copy.noteLabel} className="mt-4">
              <textarea
                name="note"
                data-testid="dream-note"
                value={form.note}
                onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))}
                placeholder={copy.notePlaceholder}
                rows={4}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-950 outline-none transition-colors focus:border-amber-400 focus:bg-white"
              />
            </Field>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-50"
              >
                {copy.cancel}
              </button>
              <button
                type="submit"
                data-testid="dream-submit"
                className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-gray-800"
              >
                {editingId ? copy.update : copy.save}
              </button>
            </div>
          </form>
        )}

        {sortedCards.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
            <p className="text-2xl font-black text-gray-950">{copy.emptyTitle}</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600">{copy.emptyBody}</p>
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              data-testid="dream-empty-add"
              className="mt-6 rounded-xl bg-amber-300 px-5 py-3 text-sm font-black text-gray-950 transition-colors hover:bg-amber-200"
            >
              {copy.add}
            </button>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sortedCards.map((card) => (
              <article
                key={card.id}
                data-testid="dream-card"
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] bg-gray-100">
                  {card.imageUrl ? (
                    <img src={card.imageUrl} alt={copy.imageFallback} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-amber-50 text-sm font-black uppercase tracking-[0.18em] text-gray-400">
                      {copy.eyebrow}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-xs font-black ${CATEGORY_STYLES[card.category]}`}>
                      {copy.categories[card.category]}
                    </span>
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500">
                      {card.targetDate ? `${copy.target}: ${card.targetDate}` : copy.noDate}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-black leading-tight text-gray-950">{card.title}</h2>
                  {card.note && <p className="mt-3 text-sm leading-7 text-gray-600">{card.note}</p>}
                  <div className="mt-5 flex gap-2">
                    <button
                      type="button"
                      data-testid="dream-edit"
                      onClick={() => startEdit(card)}
                      className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-black text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      {copy.edit}
                    </button>
                    <button
                      type="button"
                      data-testid="dream-delete"
                      onClick={() => handleDelete(card.id)}
                      className="flex-1 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100"
                    >
                      {copy.delete}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-gray-500">{label}</span>
      {children}
    </label>
  );
}
