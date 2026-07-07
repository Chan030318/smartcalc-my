export type DreamCategory = "finance" | "career" | "family" | "health" | "impact";

export type DreamCard = {
  id: string;
  title: string;
  category: DreamCategory;
  targetDate?: string;
  progress?: number;
  imageUrl?: string;
  note?: string;
  createdAt: string;
};

export type DreamCardInput = {
  title: string;
  category: DreamCategory;
  targetDate?: string;
  progress?: number;
  imageUrl?: string;
  note?: string;
};

const STORAGE_KEY = "smartcalc-dream-board";

export function loadDreamCards(): DreamCard[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isDreamCard) : [];
  } catch {
    return [];
  }
}

export function saveDreamCards(cards: DreamCard[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

export function createDreamCard(input: DreamCardInput): DreamCard {
  return {
    ...normalizeInput(input),
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
}

export function addDreamCard(cards: DreamCard[], input: DreamCardInput) {
  return [createDreamCard(input), ...cards];
}

export function updateDreamCard(cards: DreamCard[], id: string, input: DreamCardInput) {
  return cards.map((card) => (card.id === id ? { ...card, ...normalizeInput(input) } : card));
}

export function deleteDreamCard(cards: DreamCard[], id: string) {
  return cards.filter((card) => card.id !== id);
}

function normalizeInput(input: DreamCardInput): DreamCardInput {
  return {
    title: input.title.trim(),
    category: input.category,
    targetDate: input.targetDate?.trim() || undefined,
    progress: normalizeProgress(input.progress),
    imageUrl: input.imageUrl?.trim() || undefined,
    note: input.note?.trim() || undefined,
  };
}

function normalizeProgress(value: number | undefined): number {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round(value)));
}

function isDreamCard(value: unknown): value is DreamCard {
  const card = value as Partial<DreamCard>;

  return (
    typeof card.id === "string" &&
    typeof card.title === "string" &&
    isDreamCategory(card.category) &&
    typeof card.createdAt === "string"
  );
}

function isDreamCategory(value: unknown): value is DreamCategory {
  return value === "finance" || value === "career" || value === "family" || value === "health" || value === "impact";
}
