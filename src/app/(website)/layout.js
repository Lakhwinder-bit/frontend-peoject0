import Navbar from "@/shared/navbar/navbar";
import Footer from "@/shared/footer/footer";
import SheruChatbot from "@/features/chatbot/compontent/SheruChatbot";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <SheruChatbot />
    </>
  );
}