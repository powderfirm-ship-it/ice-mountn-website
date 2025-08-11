interface AvatarInitialsProps {
  name: string;
  size?: number;
}

const PALETTE = [
  "bg-blue-600",
  "bg-emerald-600", 
  "bg-rose-600",
  "bg-amber-600",
  "bg-violet-600",
  "bg-cyan-600"
];

export default function AvatarInitials({ name, size = 40 }: AvatarInitialsProps) {
  // Derive initials: first letter of first + last tokens of the name
  const tokens = name.trim().split(/\s+/);
  let initials: string;
  
  if (tokens.length >= 2) {
    // First letter of first token + first letter of last token
    initials = tokens[0].charAt(0) + tokens[tokens.length - 1].charAt(0);
  } else if (tokens.length === 1) {
    // First two letters of single token
    initials = tokens[0].substring(0, 2);
  } else {
    // Fallback
    initials = "??";
  }
  
  // Deterministic bg color from name hash
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = hash % PALETTE.length;
  const bgColor = PALETTE[colorIndex];
  
  return (
    <div
      className={`rounded-full text-white font-medium inline-flex items-center justify-center ${bgColor}`}
      style={{ width: size, height: size }}
      aria-label={`Avatar for ${name}`}
      role="img"
    >
      {initials.toUpperCase()}
    </div>
  );
}
