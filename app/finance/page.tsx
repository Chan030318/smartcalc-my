import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FinancePage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="finance" />
      <Footer />
    </>
  );
}
