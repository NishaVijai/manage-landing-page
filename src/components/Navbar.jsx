import { Link } from 'react-router-dom';
// import Logo from '../assets/images/logo.svg';
import LogoLight from '../assets/images/logo.svg';
import LogoDark from '../assets/images/logo-white.svg';
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
      <div className="flex items-center justify-between md:flex-col md:gap-4 lg:flex-row lg:gap-0">
        {/* Logo */}
        <div className="p-2 md:mt-3">
          <Link to='/' title="Go to home page">
            <ImageComponent className="block dark:hidden" imageSrc={LogoLight} altText="Logo" title="Go to home page" />
            <ImageComponent className="hidden dark:block" imageSrc={LogoDark} altText="Logo Dark" title="Go to home page" />
          </Link>
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden space-x-6 md:flex transition-colors duration-200 ease-in-out">
          <li>
            <Link to='/pricing' className='hover:text-darkGrayishBlue dark:hover:bg-red-600 dark:focus:ring-red-400' title="Go to pricing page">Pricing</Link>
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
        </ul> */}

        <ul className="hidden space-x-6 md:flex transition-colors duration-200 ease-in-out">
          {[
            { to: '/', label: 'Home', title: 'Go to home page' },
            { to: '/pricing', label: 'Pricing', title: 'Go to pricing page' },
            { to: '/product', label: 'Product', title: 'Go to product page' },
            { to: '/about', label: 'About Us', title: 'Go to about page' },
            { to: '/careers', label: 'Careers', title: 'Go to careers page' },
            { to: '/community', label: 'Community', title: 'Go to community page' },
          ].map(({ to, label, title }) => (
            <li key={to}>
              <Link
                to={to}
                title={title}
                className="
          px-4 py-2 rounded-md
          text-darkGrayishBlue
          hover:text-darkBlue
          focus:outline-none focus:ring-2 focus:ring-brightRed focus:ring-offset-2
          dark:text-veryLightGray
          dark:hover:bg-red-600 dark:hover:text-white
          dark:focus:ring-red-400 dark:focus:ring-offset-veryDarkBlue
        ">
                {label}
              </Link>
            </li>
          ))}
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
            className="absolute top-6 right-6 text-3xl text-gray-900"
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
