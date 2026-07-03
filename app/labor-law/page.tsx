import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LaborLawPage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="labor-law" />
      <Footer />
    </>
  );
}
