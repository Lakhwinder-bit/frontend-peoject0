import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocation from "@/components/contact/ContactLocation";
import BusinessHours from "@/components/contact/BusinessHours";
import HeroPage from "@/components/ui/common/heroPage";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <HeroPage
        currentPage="Contact"
        title="Let's plan your"
        highlight="next journey"
        description="Tell us where you're going, when you're travelling and how many people are coming. We'll take care of the rest."
      />

      {/* Contact cards */}
      <ContactInfoCards />

      {/* Main contact area */}
      <section className="section-y bg-background">
        <div className="container-app grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

          {/* Left */}
          <ContactForm />

          {/* Right */}
          <div className="space-y-5">
            <ContactLocation />

            <BusinessHours />
          </div>

        </div>
      </section>

    </main>
  );
}