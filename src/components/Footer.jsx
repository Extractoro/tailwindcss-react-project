import logo from "../assets/logo.png";
import fb from "../assets/facebook.png";
import inst from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twit from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-14 inline-block items-center"
            />
            <span>XYZ</span>
          </a>
          <p className="md:w-1/2">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div className="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded focus:outline-none"
            />
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask question?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to play?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                (012) 1234-567-890
              </a>
              <a href="/" className="block hover:text-gray-300">
                123 xyz xyz
              </a>
              <a href="/" className="block hover:text-gray-300">
                qwuerybaihefv, qiwu - hrebcl
              </a>
              <a href="/" className="block hover:text-gray-300">
                095467
              </a>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 justify-between sm:items-center my-8">
        <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <img
            src={fb}
            alt="Facebook"
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={inst}
            alt="Instagram"
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={twit}
            alt="Twitter"
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
