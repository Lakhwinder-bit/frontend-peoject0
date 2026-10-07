import ContactInfoCards from "@/features/contact/compontent/ContactInfoCards";
import ContactForm from "@/features/contact/compontent/ContactForm";
import ContactLocation from "@/features/contact/compontent/ContactLocation";

import HeroPage from "@/shared/compontent/common/heroPage";
import BusinessHours from "@/features/contact/compontent/BusinessHours";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

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

    </div>
  );
}