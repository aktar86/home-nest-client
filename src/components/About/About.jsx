import { FaCheckCircle, FaAward, FaUsers, FaBuilding } from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, label: "Properties Sold", value: "2,500+", icon: <FaBuilding /> },
    { id: 2, label: "Happy Clients", value: "1,800+", icon: <FaUsers /> },
    { id: 3, label: "Awards Won", value: "15+", icon: <FaAward /> },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Images Block */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Building"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm uppercase tracking-wider">
                Years of Experience
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-0"></div>
          </div>

          {/* Right Side: Content Block */}
          <div className="lg:w-1/2">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
              About Our Company
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              We Help You Find Your <br />
              <span className="text-blue-600">Dream Property</span> Since 2012
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our journey started with a simple goal: to make property buying
              and selling transparent and stress-free. Today, we are one of the
              leading real estate platforms, trusted by thousands of homeowners
              and investors.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {[
                "Verified and Legal Documented Properties",
                "Expert Guidance from Local Agents",
                "Transparent Pricing with No Hidden Costs",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-10">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center md:text-left">
                  <div className="text-blue-600 text-2xl mb-1 flex justify-center md:justify-start">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
