import { Link } from 'react-router-dom';
import FooterLogo from '../assets/images/logo-white.svg';
import FacebookLogo from '../assets/images/icon-facebook.svg';
import YoutubeLogo from '../assets/images/icon-youtube.svg';
import TwitterLogo from '../assets/images/icon-twitter.svg';
import PinterestLogo from '../assets/images/icon-pinterest.svg';
import InstagramLogo from '../assets/images/icon-instagram.svg';
import { ImageComponent } from '../components/ImageComponent';
import { AnchorComponent } from '../components/AnchorComponent';

export const FooterComponent = () => {
  return (
    <footer className='bg-veryDarkBlue'>
      <div className='container flex flex-wrap flex-col-reverse justify-between gap-4 px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <ImageComponent className="h-8" imageSrc={FooterLogo} altText="Logo in white color" />
          </div>

          {/* Social links container */}
          <div className='flex justify-center space-x-4'>
            <AnchorComponent link="#">
              <ImageComponent className="h-8" imageSrc={FacebookLogo} altText="FacebookLogo" />
            </AnchorComponent>
            <AnchorComponent link="#">
              <ImageComponent className="h-8" imageSrc={YoutubeLogo} altText="YoutubeLogo" />
            </AnchorComponent>
            <AnchorComponent link="#">
              <ImageComponent className="h-8" imageSrc={TwitterLogo} altText="TwitterLogo" />
            </AnchorComponent>
            <AnchorComponent link="#">
              <ImageComponent className="h-8" imageSrc={PinterestLogo} altText="PinterestLogo" />
            </AnchorComponent>
            <AnchorComponent link="#">
              <ImageComponent className="h-8" imageSrc={InstagramLogo} altText="InstagramLogo" />
            </AnchorComponent>
          </div>
        </div>

        {/* List container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white text-left dark:text-center">
            <Link to='/' className='accessible-text-light hover:accessible-text-dark focus:accessible-text-dark' title="Go to home page">Home</Link>

            <Link to='/pricing' className="accessible-text-light hover:accessible-text-dark focus:accessible-text-dark" title="Go to pricing page">Pricing</Link>

            <Link to='/product' className="accessible-text-light hover:accessible-text-dark focus:accessible-text-dark" title="Go to product page">Product</Link>

          </div>
          <div className="flex flex-col space-y-3 text-white text-left dark:text-center">
            <Link to='/about' className="accessible-text-light hover:accessible-text-dark focus:accessible-text-dark" title="Go to about page">About Us</Link>

            <Link to='/careers' className="accessible-text-light hover:accessible-text-dark focus:accessible-text-dark" title="Go to careers page">Careers</Link>

            <Link to='/community' className="accessible-text-light hover:accessible-text-dark focus:accessible-text-dark" title="Go to community page">Community</Link>
          </div>
        </div>

        {/* Input container */}
        <div className="flex flex-col gap-4 justify-between">
          <form action="">
            <div className="flex space-x-3">
              <input type="text" className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox" />
              <button className="px-6 py-2 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none accessible-btn-red">
                Go
              </button>
            </div>
          </form>

          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
