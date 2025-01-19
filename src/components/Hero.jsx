import bgpattern from "../assets/bgpattern.png";
import nexticon from "../assets/next.svg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-auto flex flex-col md:flex-row py-40 md:py-0 items-center text-white lg:px-40 px-10"
      id="home"
      style={{
        background: "linear-gradient(180deg, #2A1137 50%, #1F3442 100%)",
      }}
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center my-0 sm:my-10 xl:my-0 items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl leading-tight font-robotoSlab">
          Redefining limits beyond bits and bytes.
        </h1>
        {/* Button */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@neuralrow.com"
          target="_blank"
          className="flex items-center justify-center px-6 py-3 bg-white text-lg md:text-2xl rounded-xl text-black gap-4 mt-10 md:mt-20 self-center md:self-start"
        >
          Connect with us
          <img src={nexticon} alt="Next" className="h-5 w-5 md:h-6 md:w-6" />
        </a>
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
