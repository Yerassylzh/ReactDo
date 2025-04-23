export default function OverlayLoader() {
  return (
    <div
      id="loader"
      className="fixed h-screen w-screen inset-0 bg-blue-500/10 flex items-center justify-center z-50"
    >
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
