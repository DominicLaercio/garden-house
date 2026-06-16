import { useState } from 'react';
import Button from './Button'
import Logo from './Logo';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (href: string) => {
        setIsMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-gradient-to-r from-emerald-900/80 to-red-900/60 backdrop-blur-sm h-20 px-4 md:px-8">
            <div className='-mt-4' onClick={() => handleScroll('#home')} style={{ cursor: 'pointer' }}>
                <Logo />
            </div>

            <div className="hidden md:flex gap-1">
                {navLinks.map(link => (
                    <Button key={link.href} variant='nav' onClick={() => handleScroll(link.href)}>
                        {link.label}
                    </Button>
                ))}
            </div>

            <button
                className="md:hidden text-white focus:outline-none px-5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {isMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-gradient-to-r from-emerald-900/95 to-red-900/90 md:hidden flex flex-col items-center py-4 space-y-4">
                    {navLinks.map(link => (
                        <Button key={link.href} variant='nav' onClick={() => handleScroll(link.href)}>
                            {link.label}
                        </Button>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
