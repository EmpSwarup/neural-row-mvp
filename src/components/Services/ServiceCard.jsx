const ServiceCard = ({ image, title, description, bgColor }) => {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Image Section */}
      <div
        className="h-60 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Bottom Text Section */}
      <div
        className="px-10 pt-6 pb-14 text-start"
        style={{ backgroundColor: bgColor }} // Dynamic color passed as bgColor
      >
        <h3 className="text-2xl text-white">{title}</h3>
        <p className="text-lg text-[#848FA5] mt-2">&quot;{description}&quot;</p>
      </div>
    </div>
  );
};

export default ServiceCard;
