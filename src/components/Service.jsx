
import Education from "./Education";

const services = [
  {
    id: 1,
    title: "AgriCart Farmtech",
    description: "Full Stack and AI Developer. Fine-tuned domain-specific LLMs on 8 GB of structured agricultural datasets.",
    ReadMore: "#",
  },
  {
    id: 2,
    title: "Deloitte (Capstone)",
    description: "Blockchain Developer. Designed a blockchain-powered audit trail system using fact-and-dimension data modeling.",
    ReadMore: "#",
  },
  {
    id: 3,
    title: "IIT Roorkee (SPARK)",
    description: "Research Intern. Analysed 5 years of environmental datasets across 4 sustainability indicators.",
    ReadMore: "#",
  },
  {
    id: 4,
    title: "Smart India Hackathon",
    description: "National Finalist, ranked among top teams from 1,000+ submissions nationwide.",
    ReadMore: "#",
  },
  {
    id: 5,
    title: "IEEE Hackathon",
    description: "Finalist; recognised for innovative application of AI to real-world infrastructure challenges.",
    ReadMore: "#",
  },
  {
    id: 6,
    title: "Deloitte Capstone",
    description: "Finalist; selected among top performers for a blockchain supply chain solution.",
    ReadMore: "#",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <Education />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href={service.ReadMore}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
