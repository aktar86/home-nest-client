import { FaHome, FaUsers, FaAward, FaCity } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: <FaHome className="text-4xl" />,
      value: "12,500+",
      label: "Properties Listed",
      color: "text-blue-500",
    },
    {
      id: 2,
      icon: <FaUsers className="text-4xl" />,
      value: "8,200+",
      label: "Happy Clients",
      color: "text-green-500",
    },
    {
      id: 3,
      icon: <FaCity className="text-4xl" />,
      value: "120+",
      label: "Prime Locations",
      color: "text-purple-500",
    },
    {
      id: 4,
      icon: <FaAward className="text-4xl" />,
      value: "25+",
      label: "Industry Awards",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="relative py-40 bg-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon with animated ring */}
              <div
                className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-${
                  stat.color.split("-")[1]
                }-500/50 transition-all duration-500 transform group-hover:-translate-y-2`}
              >
                <div className={`${stat.color}`}>{stat.icon}</div>
              </div>

              {/* Number/Value */}
              <h3 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>

              {/* Small underline decoration */}
              <div className="w-8 h-1 bg-white/10 mt-4 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
