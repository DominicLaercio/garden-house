import { useState } from 'react';
import Button from './Button'
import Logo from './Logo';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-emerald-900/[.50] to-red-800/[.30] h-20 px-4 md:px-8">
        <div className='-mt-4'>
            <Logo />
        </div>

        <div className="hidden md:flex gap-1">
            <Button variant='nav'>Home</Button>
            <Button variant='nav'>Services</Button>
            <Button variant='nav'>Gallery</Button>
            <Button variant='nav'>Contact</Button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none px-5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-gradient-to-r from-emerald-900/[.90] to-red-800/[.90] md:hidden flex flex-col items-center py-4 space-y-4">
            <Button variant='nav' onClick={toggleMenu}>Home</Button>
            <Button variant='nav' onClick={toggleMenu}>Services</Button>
            <Button variant='nav' onClick={toggleMenu}>Gallery</Button>
            <Button variant='nav' onClick={toggleMenu}>Contact</Button>
          </div>
        )}
    </nav>
  );
}

export default Navbar;
