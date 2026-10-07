import Navbar from "@/shared/navbar/navbar";
import Footer from "@/shared/footer/footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}