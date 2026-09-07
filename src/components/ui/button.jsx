import { cloneElement, isValidElement } from "react";

export default function Button({
  children,
  asChild = false,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const variantStyles = {
    default:
      "bg-primary text-primary-foreground shadow-soft hover:bg-primary-light",

    hero:
      "gradient-sunset text-secondary-foreground shadow-glow hover:brightness-105 hover:-translate-y-0.5",

    premium:
      "gradient-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift",

    glass:
      "glass-dark text-primary-foreground hover:bg-white/15",

    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",

    success:
      "bg-success text-success-foreground shadow-sm hover:bg-success/90",

    outline:
      "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:border-primary/30",

    secondary:
      "bg-secondary text-secondary-foreground shadow-xs hover:brightness-105",

    ghost:
      "hover:bg-accent hover:text-accent-foreground",

    link:
      "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: "h-10 px-5 py-2",
    sm: "h-9 rounded-lg px-3.5 text-xs",
    lg: "h-12 rounded-2xl px-7 text-base",
    xl: "h-14 rounded-2xl px-9 text-base",
    icon: "h-10 w-10",
  };

  const buttonClassName = `
        relative inline-flex items-center justify-center gap-2
        whitespace-nowrap rounded-xl text-sm font-semibold
        cursor-pointer transition-all duration-300
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
        disabled:pointer-events-none
        disabled:opacity-50
        disabled:cursor-not-allowed
        active:scale-[0.97]
        [&_svg]:pointer-events-none
        [&_svg]:size-4
        [&_svg]:shrink-0
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `;

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: `${buttonClassName} ${children.props.className || ""}`,
    });
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}