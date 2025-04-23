import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Clean Water Initiative',
  description: 'Help provide clean water to communities in need',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-proxima">
        {children}
        <Footer />
      </body>
    </html>
  );
} 