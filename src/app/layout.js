import './globals.css';
import NavBar from '@/components/Navigation/NavBar';

export const metadata = {
  title: "Nghia Pham's Portfolio",
  description: 'My portfolio',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bodyColor overflow-x-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
