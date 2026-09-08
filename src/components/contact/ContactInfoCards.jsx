import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "CALL US",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: Mail,
    title: "EMAIL",
    value: "bookings@kapoortravels.in",
    href: "mailto:bookings@kapoortravels.in",
  },
  {
    icon: MapPin,
    title: "OFFICE",
    value: "Sector 34–A, Chandigarh",
    href: "https://maps.google.com/?q=SCO+42+Sector+34-A+Chandigarh",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-border/80 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card"
            >
              <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-accent text-primary ring-1 ring-secondary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {item.title}
              </p>

              <p className="mt-2 text-sm font-semibold text-card-foreground">
                {item.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}