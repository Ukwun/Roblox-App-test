export default function Footer() {
  return (
    <footer className="w-full border-t py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Landing Marketplace
      </div>
    </footer>
  );
}
