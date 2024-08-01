interface OverlayProps {
  isMenuOpen: boolean;
}

export function Overlay({ isMenuOpen }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-70 ${isMenuOpen ? "block" : "hidden"}`}
    />
  );
}
