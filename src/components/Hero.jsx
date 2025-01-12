import bgpattern from "../assets/bgpattern.png";
import nexticon from "../assets/next.svg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-auto flex flex-col md:flex-row py-20 lg:py-0 items-center bg-[#1F3442] text-white lg:px-40 px-4"
      id="home"
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl leading-tight">
          Redefining limits beyond bits and bytes.
        </h1>
        {/* Button */}
        <button className="flex items-center justify-center px-6 py-3 bg-[#D9D9D9] text-lg md:text-2xl rounded-md text-black gap-4 mt-10 md:mt-20 self-center md:self-start">
          Connect with us
          <img src={nexticon} alt="Next" className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 h-full w-full hidden md:block">
        <img
          src={bgpattern}
          alt="Pattern Background"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
