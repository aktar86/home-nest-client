import {
  FaHome,
  FaHandshake,
  FaChartLine,
  FaFileContract,
  FaKey,
  FaSearchLocation,
} from "react-icons/fa";
import useAuth from "../../Hook/useAuth";

const Services = () => {
  const { darkMode } = useAuth();
  const services = [
    {
      id: 1,
      title: "Buy a Property",
      description:
        "Find your dream home from our vast database of verified listings. We offer virtual tours and detailed neighborhood insights.",
      icon: <FaHome className="text-4xl text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      id: 2,
      title: "Sell Your Property",
      description:
        "List your property with professional photography and reach thousands of potential buyers every day.",
      icon: <FaHandshake className="text-4xl text-green-600" />,
      bg: "bg-green-50",
    },
    {
      id: 3,
      title: "Property Management",
      description:
        "We handle maintenance, tenant screening, and rent collection so you can enjoy your passive income stress-free.",
      icon: <FaKey className="text-4xl text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      id: 4,
      title: "Legal Assistance",
      description:
        "Our legal experts help you with title deed verification, mutation, and all paperwork to ensure a safe transaction.",
      icon: <FaFileContract className="text-4xl text-red-600" />,
      bg: "bg-red-50",
    },
    {
      id: 5,
      title: "Market Analysis",
      description:
        "Get real-time data on property price trends in your area to make informed investment decisions.",
      icon: <FaChartLine className="text-4xl text-orange-600" />,
      bg: "bg-orange-50",
    },
    {
      id: 6,
      title: "Smart Search",
      description:
        "Use our advanced filters to find properties by location, price range, amenities, and proximity to schools/hospitals.",
      icon: <FaSearchLocation className="text-4xl text-teal-600" />,
      bg: "bg-teal-50",
    },
  ];

  return (
    <section
      className={`py-20 ${darkMode ? "bg-gray-800 text-white" : "bg-white "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold ">
            Comprehensive Real Estate Solutions
          </p>
          <p className="mt-4 text-lg ">
            Whether you are buying your first home or managing a multi-million
            dollar portfolio, we have the tools to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold  mb-3">{service.title}</h3>
              <p className=" leading-relaxed">{service.description}</p>
              <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
