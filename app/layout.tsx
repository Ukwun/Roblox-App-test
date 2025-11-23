import "./globals.css";

export const metadata = {
  title: "RoCart - Fast, Safe Item Buying",
  description: "Buy in-game items instantly with automated delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-white">
        {children}
      </body>
    </html>
  );
}
