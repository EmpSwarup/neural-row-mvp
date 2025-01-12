const Footer = () => {
  return (
    <footer className="bg-[#556570] text-white py-8" id="contact-us">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold">Contact Us</h2>

        {/* Contact Email */}
        <a
          href="mailto:connect@neuralrow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg text-yellow-400 hover:underline"
        >
          connect@neuralrow.com
        </a>

        {/* Address */}
        <p className="text-sm text-gray-300">Kathmandu, Nepal</p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} NeuralRow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
