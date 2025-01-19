import ServiceCard from "./ServiceCard";
import DataAnalyticsImg from "../../assets/dataanalytics.svg";
import AIImg from "../../assets/ai.svg";
import WebDevelopmentImg from "../../assets/webdev.svg";
import DigitalMarketingImg from "../../assets/digitalmarketing.svg";
import TrainingImg from "../../assets/training.svg";
import MobileDevImg from "../../assets/mobiledev.svg";

const Services = () => {
  const services = [
    {
      image: DataAnalyticsImg,
      title: "Data Analytics",
      description: "Precision Analysis, Powerful Outcomes.",
      bgColor: "#284A72",
    },
    {
      image: AIImg,
      title: "AI Integration",
      description: "The Future is Intelligent—Join the Evolution.",
      bgColor: "#5C48B6",
    },
    {
      image: WebDevelopmentImg,
      title: "Website Design & Development",
      description: "Where Creativity Meets Code.",
      bgColor: "#515589",
    },
    {
      image: DigitalMarketingImg,
      title: "Digital Marketing",
      description: "Marketing That Speaks to Your Audience.",
      bgColor: "#2D64A1",
    },
    {
      image: TrainingImg,
      title: "Training & Support",
      description: "Training Minds, Supporting Journeys.",
      bgColor: "#631E87",
    },
    {
      image: MobileDevImg,
      title: "Mobile Application Development",
      description: "Apps that Engage, Innovate, and Perform.",
      bgColor: "#0B5266",
    },
  ];

  return (
    <section className="py-16 bg-white lg:px-40 px-4" id="services">
      <h2 className="text-3xl text-center text-gray-800 mb-5 lg:mb-20">
        Our Services
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
