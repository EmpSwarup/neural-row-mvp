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
      className="bg-[#0E456A] text-white py-10 flex flex-col items-center space-y-8"
      id="contact-us"
    >
      {/* Services Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-[#848FA5] text-3xl text-center mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base justify-between">
          <ul className="list-none text-center md:text-left space-y-2">
            <li>Data Analysis</li>
            <li>AI Integration</li>
            <li>Website Design & Development</li>
          </ul>
          <ul className="list-none text-center md:text-left space-y-2">
            <li>Training & Support</li>
            <li>Digital Marketing</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
      </div>

      {/* Contact and Follow Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Contact Us */}
        <div className="flex flex-row space-y-4">
          <p className="font-bold text-lg">Contact Us :-</p>
          <div className="flex items-center space-x-4">
            {/* Replace these placeholders with actual links */}
            <a href="#" className="text-white hover:opacity-80">
              <img src={TwitterLogo} alt="X" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:opacity-80">
              <img src={LinkedInLogo} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@neuralrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80"
            >
              <img src={GmailLogo} alt="Gmail" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-row items-center md:items-end space-y-4">
          <p className="font-bold text-lg">Follow us :-</p>
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
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <img src={LocationLogo} alt="Location" className="h-5 w-5" />
            <p>446600, Kathmandu, Bagmati, Nepal</p>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@neuralrow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-lg text-[#FFD700] hover:underline"
          >
            <img src={MailLogo} alt="Mail" className="h-5 w-5" />
            connect@neuralrow.com
          </a>
        </div>
        <a href="#" className="text-[#FFD700] hover:underline">
          Privacy Policy
        </a>
      </div>

      <p className="text-[#848FA5] text-sm">
        © 2025 <span className="text-white">NeuralRow</span> | All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
