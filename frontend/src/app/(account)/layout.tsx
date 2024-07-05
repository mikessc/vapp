import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import UiProvider from '@/lib/UiProvider';
import ReduxProvider from '@/redux/provider';
import Footer from '@/components/Footer';
import NavBarComponent from '@/components/NavBarComponent';
import MainMenu from '@/components/MainMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vets4Vets',
  description: 'Created Using Next.js 14 and Next UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <UiProvider>
            <NavBarComponent />
            <main>{children}</main>
            <Footer />
          </UiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
