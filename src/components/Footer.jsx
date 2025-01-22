import TwitterLogo from "../assets/twitter.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import GmailLogo from "../assets/gmail.svg";
import YoutubeLogo from "../assets/youtube.svg";
import GithubLogo from "../assets/github.svg";
import MediumLogo from "../assets/medium.svg";
import MailLogo from "../assets/gmail2.svg";
import LocationLogo from "../assets/location.svg";

const Footer = () => {
  return (
    <footer
      className="bg-[#0E456A] text-white py-10 flex flex-col items-center space-y-8 text-lg md:text-2xl xl:text-xl px-10"
      id="contact-us"
    >
      {/* Services Section */}
      {/* Services Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-[#848FA5] text-center mb-6">Services</h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-0 md:space-y-0 text-lg md:text-2xl xl:text-xl">
          <ul className="list-disc pl-5 space-y-4">
            <li>Data Analysis</li>
            <li>AI Integration</li>
            <li>Website Design & Development</li>
          </ul>
          <ul className="list-disc pl-5 space-y-4">
            <li>Training & Support</li>
            <li>Digital Marketing</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
      </div>

      {/* Contact and Follow Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0 text-lg md:text-2xl xl:text-xl">
        {/* Contact Us */}
        <div className="flex items-center space-x-4">
          <p className="font-bold">Contact Us:</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:opacity-80">
              <img src={TwitterLogo} alt="X" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <img src={LinkedInLogo} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a
              href="mailto:connect@neuralrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80"
            >
              <img src={GmailLogo} alt="Gmail" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex items-center space-x-4 md:pr-20">
          <p className="font-bold">Follow us:</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:opacity-80">
              <img src={YoutubeLogo} alt="YouTube" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <img src={GithubLogo} alt="GitHub" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <img src={MediumLogo} alt="Medium" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl border-t border-dashed border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <div className="flex flex-col items-start justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <img src={LocationLogo} alt="Location" className="h-5 w-5" />
            <p>446600, Kathmandu, Bagmati, Nepal</p>
          </div>
          <a
            href="mailto:connect@neuralrow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
          >
            <img src={MailLogo} alt="Mail" className="h-5 w-5 mr-2" />
            connect@neuralrow.com
          </a>
        </div>
        <a href="#" className="h-fit hover:underline md:pr-40">
          Privacy Policy
        </a>
      </div>

      <p className="text-[#848FA5] text-center">
        © 2025 <span className="text-white">NeuralRow</span> | All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
