import "./globals.css";

export const metadata = {
  title: "Abusing vercel's CI for fun and for profit",
  description: "Vercel Framer Motion animated slide deck demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen w-full flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
