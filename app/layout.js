export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen w-full">{children}</body>
    </html>
  );
}
