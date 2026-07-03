import BeginnerGuide from "@/components/BeginnerGuide";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        <BeginnerGuide />
      </main>
      <Footer />
    </>
  );
}
