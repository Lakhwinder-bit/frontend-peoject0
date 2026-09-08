import React from "react";
import TestimonialCard from "../ui/testimonialCard";

const testimonials = [
  {
    review:
      "Booked an Innova for our Manali trip. The driver was punctual, polite and knew every shortcut. Easily the most stress-free family trip we've had.",
    name: "Ravneet Kaur",
    location: "Amritsar",
    initials: "RK",
    rating: 5,
  },
  {
    review:
      "We use Kapoor Travels for all our corporate airport transfers now. Clean cars, transparent fares and zero last-minute cancellations.",
    name: "Aman Sharma",
    location: "Chandigarh",
    initials: "AS",
    rating: 5,
  },
  {
    review:
      "The Shimla package was priced better than every agency I compared, and the itinerary was actually flexible. Highly recommended.",
    name: "Neha Gupta",
    location: "Delhi",
    initials: "NG",
    rating: 4,
  },
  {
    review:
      "Hired a tempo traveller for 18 people. Sanitised, spacious and the fare stayed exactly as quoted. No hidden charges at all.",
    name: "Harpreet Singh",
    location: "Ludhiana",
    initials: "HS",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

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
            Testimonials
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5 text-3xl font-extrabold leading-[1.08]
              tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[56px]
            "
          >
            Loved by families,
            <br className="hidden sm:block" />
            trusted by companies
          </h2>
        </div>

        {/* Testimonials */}
        <div className="relative mt-10 overflow-hidden sm:mt-14">
          <div className="testimonial-marquee flex w-max gap-6 py-2">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;