import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { ImageComponent } from '../components/ImageComponent';
import { AnchorComponent } from '../components/AnchorComponent';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="p-2 mt-0 md:mt-3">
          <Link to='/'>
            <ImageComponent imageSrc={Logo} altText="Logo" title="Go to home page" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 md:flex">
          <li>
            <Link to='/pricing' className='hover:text-darkGrayishBlue' title="Go to pricing page">Pricing</Link>
          </li>
          <li>
            <Link to='/product' className='hover:text-darkGrayishBlue' title="Go to product page">Product</Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-darkGrayishBlue' title="Go to about page">About Us</Link>
          </li>
          <li>
            <Link to='/careers' className='hover:text-darkGrayishBlue' title="Go to careers page">Careers</Link>
          </li>
          <li>
            <Link to='/community' className='hover:text-darkGrayishBlue' title="Go to community page">Community</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <AnchorComponent link="#" className="hidden md:block accessible-btn-red">
          Get started
        </AnchorComponent>

        {/* Hamburger Button */}
        <button
          id="menu-btn"
          className={`hamburger block md:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white space-y-8">
          <button
            className="absolute top-6 right-6 text-3xl text-gray-800"
            onClick={handleClick}
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link to='/' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to home page">Home</Link>
          <Link to='/pricing' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to pricing page">Pricing</Link>
          <Link to='/product' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to product page">Product</Link>
          <Link to='/about' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to about page">About Us</Link>
          <Link to='/careers' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to careers page">Careers</Link>
          <Link to='/community' onClick={handleLinkClick} className='text-gray-900 text-2xl font-semibold hover:text-brightRed' title="Go to community page">Community</Link>
        </div>
      )}
    </nav>
  );
};
