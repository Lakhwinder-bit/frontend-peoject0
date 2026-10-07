import Link from "next/link";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.16em]
          text-secondary
        "
      >
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                text-[16px]
                text-primary-foreground/70
                transition-colors
                duration-200
                hover:text-secondary
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;