import React from "react";
import FAQItem from "../ui/faqTem";

const FAQ = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* Left Content */}
          <div className="mx-auto max-w-3xl self-start text-center">

            {/* Badge */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-secondary/40
                bg-accent
                px-4
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              FAQ
            </span>

            {/* Heading */}
            <h2
              className="
                mt-5 text-3xl font-extrabold leading-[1.08]
                tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[56px]
              "
            >
              Everything you
              <br />
              may want to ask
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-muted-foreground
                sm:text-lg
              "
            >
              Still unsure about something? Our travel desk is a
              phone call away, 24 hours a day.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">

            <FAQItem
              question="How do I confirm a booking with Kapoor Travels?"
              answer="You can confirm your booking by sharing your travel details with our team. Once the vehicle, route and fare are confirmed, we will share the booking confirmation with you."
            />

            <FAQItem
              question="Are the fares shown inclusive of taxes and tolls?"
              answer="Our fixed fares include the applicable driver allowance, GST and fuel. Tolls and parking charges are billed separately at actuals where applicable."
            />

            <FAQItem
              question="Can I cancel or reschedule my trip?"
              answer="Yes. Cancellation and rescheduling are available depending on your booking type and how close the request is to the scheduled journey."
            />

            <FAQItem
              question="Are your drivers experienced with hill routes?"
              answer="Yes. Our drivers are experienced with highway and hill routes and are familiar with popular destinations across Himachal Pradesh and Punjab."
            />

            <FAQItem
              question="Do you provide vehicles for weddings and corporate events?"
              answer="Yes. We provide cars, SUVs, tempo travellers, mini buses and luxury buses for weddings, corporate events, group travel and other special occasions."
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;