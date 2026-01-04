import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const realEstateFaqs = [
    {
      question: "How do I schedule a physical site visit?",
      answer:
        "You can click the 'Schedule Tour' button on the property detail page. Choose your preferred date and time, and our agent will confirm the appointment via email or phone.",
    },
    {
      question: "Are the property prices negotiable?",
      answer:
        "While some listed prices are fixed by developers, many individual sellers are open to negotiation. You can submit your offer directly through the 'Contact Agent' section.",
    },
    {
      question: "What legal documents should I check before buying?",
      answer:
        "You should verify the Title Deed, Mutation Certificate, No Objection Certificate (NOC), and tax clearance receipts. We recommend consulting a legal expert to verify these documents.",
    },
    {
      question: "How can I list my own property for sale?",
      answer:
        "Simply create an account, go to your 'Dashboard', and click on 'Add Property'. Fill in the details, upload high-quality photos, and our team will review and publish it within 24 hours.",
    },
    {
      question: "Is there any commission or service fee?",
      answer:
        "Browsing and contacting agents is free. However, a standard service fee may apply upon the successful closing of a deal, depending on the agreement with the specific agent or agency.",
    },
    {
      question: "Can I get help with home loans and financing?",
      answer:
        "Yes! We have partnerships with several banks and financial institutions. You can use our 'Loan Calculator' or contact our finance desk for assistance with the application process.",
    },
    {
      question: "How do I know if a property listing is verified?",
      answer:
        "Look for the 'Verified' badge on the property thumbnail. This badge indicates that our team has physically visited the location and checked the ownership documents.",
    },
    {
      question:
        "What is the difference between a 'Ready' and 'Under-Construction' property?",
      answer:
        "'Ready' properties are available for immediate move-in, while 'Under-Construction' properties are usually cheaper but require a waiting period until the project is completed.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-20">
      {realEstateFaqs.map((item, index) => (
        <div key={index} className="mb-2 border-b">
          <button
            className="w-full text-left py-4 flex justify-between items-center font-semibold"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-gray-500 transition-all">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
