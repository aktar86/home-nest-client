import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Arifur Rahman",
      role: "Property Buyer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Finding my dream home was so easy with this platform. The verified listings gave me peace of mind, and the site visit was arranged within hours!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Home Seller",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "I listed my apartment and got serious buyers within a week. The dashboard is very intuitive and the support team is extremely helpful.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Miller",
      role: "Investor",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      review:
        "The market analytics and legal document assistance provided here are top-notch. Truly a one-stop solution for real estate investors.",
      rating: 4,
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Real stories from people who found their perfect place with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <FaQuoteLeft className="text-blue-100 text-4xl absolute top-6 right-8" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-400" : "text-gray-200"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">"{item.review}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
