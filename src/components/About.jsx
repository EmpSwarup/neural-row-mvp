import bgpattern from "../assets/bgpattern.png";

const About = () => {
  return (
    <section
      className="relative w-full h-auto py-5 lg:py-16 bg-white"
      id="about-us"
    >
      <h2 className="text-3xl text-center text-gray-800 mb-5 lg:mb-20">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-0 lg:px-40 bg-[#1F3442]">
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-xl text-white">
            NeuralRow is an AI-driven technology consulting firm committed to
            innovation in artificial intelligence and machine learning. We
            leverage cutting-edge AI technologies to develop transformative
            solutions addressing the complex challenges of today’s world,
            empowering industries and communities to thrive in a rapidly
            evolving future.
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-1 h-full w-full hidden lg:block">
          <img
            src={bgpattern}
            alt="Pattern Background"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
