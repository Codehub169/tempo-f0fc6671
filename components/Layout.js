import { Inter } from 'next/font/google';

// Initialize Inter font with specific subsets and variable for Tailwind CSS
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Layout component to provide consistent structure and styling
export default function Layout({ children }) {
  return (
    // Apply the Inter font class to the main div for global font styling
    // Add a subtle background color from the palette for warmth
    <div className={`${inter.variable} font-sans bg-hueneu-light-bg min-h-screen flex flex-col text-hueneu-primary`}>
      {/* Main content area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer: Can be simple or include social links, copyright etc. */}
      <footer className="w-full py-8 bg-hueneu-secondary text-center text-hueneu-primary-dark/70 text-sm">
        <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
        <p className="mt-1">Designs that whisper loud stories.</p>
      </footer>
    </div>
  );
}
