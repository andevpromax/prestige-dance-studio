import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-playfair',
    display: 'swap',
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: ['normal'],
    variable: '--font-lato',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Prestige Ballroom Dance Studio',
    description:
        'Where every step tells a story. Discover the joy of ballroom dancing in a warm, professional, and inspiring environment.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={`${playfair.variable} ${lato.variable}`}>
            <body className='bg-studio-base text-cream font-body'>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
