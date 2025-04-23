import './globals.css';

export const metadata = {
  title: 'Vercel London - Presentation',
  description: 'Interactive slides for Vercel London meetup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen w-full overflow-hidden font-sans">
        <div className="vercel-grid" />
        {children}
      </body>
    </html>
  );
}
