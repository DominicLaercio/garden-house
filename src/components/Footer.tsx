import Logo from './Logo';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

function Footer() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-emerald-950 border-t border-white/10 text-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="-mt-4">
                    <Logo />
                </div>

                <nav className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                    {navLinks.map(link => (
                        <button
                            key={link.href}
                            onClick={() => handleScroll(link.href)}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <p className="text-white/40 text-sm text-center">
                    &copy; {new Date().getFullYear()} Garden House. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
