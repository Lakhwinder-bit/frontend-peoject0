import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow">
        <Sparkles className="size-5" />
      </div>

      {/* Logo Text */}
      <div className="leading-none">
        <div className="text-lg text-white font-extrabold tracking-tight text-foreground">
          Kapoor Travels
        </div>


      </div>
    </div>
  );
}