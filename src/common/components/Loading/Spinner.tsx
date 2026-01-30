export default function Spinner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`aspect-square w-8 border-2 border-white/20 border-t-white rounded-full animate-spin ${className}`}
      aria-hidden
    />
  );
}
