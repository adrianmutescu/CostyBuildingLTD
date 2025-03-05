import { useState } from 'react';
import { Phone, Mail, ArrowRight, Home, Building2, Construction, Hammer, CheckCircle2 } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import ScrollToTop from './ScrollToTop';

// Import images from each folder
const imagesOne = import.meta.glob('../Assets/one/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsOne = Object.values(imagesOne).map((img) => img.default);

const imagesTwo = import.meta.glob('../Assets/two/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsTwo = Object.values(imagesTwo).map((img) => img.default);

const imagesThree = import.meta.glob('../Assets/three/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsThree = Object.values(imagesThree).map((img) => img.default);

const imagesFour = import.meta.glob('../Assets/four/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsFour = Object.values(imagesFour).map((img) => img.default);

const imagesFive = import.meta.glob('../Assets/five/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsFive = Object.values(imagesFive).map((img) => img.default);

const imagesSix = import.meta.glob('../Assets/six/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsSix = Object.values(imagesSix).map((img) => img.default);

const imagesSeven = import.meta.glob('../Assets/seven/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsSeven = Object.values(imagesSeven).map((img) => img.default);

const imagesEight = import.meta.glob('../Assets/eight/*.jpeg', { eager: true }) as Record<string, { default: string }>;
const imagePathsEight = Object.values(imagesEight).map((img) => img.default);



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [
    { icon: Home, title: 'Roofing & Loft Conversions', description: 'Transform your unused loft space into a beautiful living area' },
    { icon: Building2, title: 'House Extensions', description: 'Expand your living space with custom-built extensions' },
    { icon: Construction, title: 'Refurbishments', description: 'Complete home renovation and modernisation services' },
    { icon: Hammer, title: 'General Construction', description: 'High-quality construction work for all your needs' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Loft Conversion',
      image: imagePathsOne[2],
      description: 'Loft transformed into a spacious master suite with dormers and improved insulation.',
      location: 'Barnet, London, N2 9BD',
      fullDescription: 'This project focused on transforming an old, underutilized loft into a bright and spacious master bedroom with an en-suite bathroom. The renovation involved extensive structural work, including reinforcing the roof, installing dormer windows for extra headroom and natural light, and upgrading insulation for year-round comfort. Our team carefully rebuilt sections of the roof to ensure durability while maintaining the home’s character. The result is a seamless extension of the living space that blends style with functionality.',
      progressImages: [
        imagePathsOne[3],
        imagePathsOne[6],
        imagePathsOne[5],
        imagePathsOne[1],
        imagePathsOne[0],
        imagePathsOne[4]
      ]
    },
    {
      id: 2,
      title: 'Full Roof Rebuild: Strength, Style & Efficiency',
      image: imagePathsTwo[3],
      description: 'Complete roof rebuild with reinforced structure, new insulation, and slate tiling for durability and efficiency.',
      location: 'Barnet, London, NW4 3TS',
      fullDescription: `This project involved a full roof reconstruction to enhance structural integrity, insulation, and aesthetics. The process included stripping the old roof, reinforcing the framework, and installing a brand-new slate tile system for long-term durability. We also improved insulation for better energy efficiency and added modern ventilation features. The result is a high-quality, weather-resistant roof that enhances both the home's functionality and appearance.`,
      progressImages: [
        imagePathsTwo[4],
        imagePathsTwo[8],
        imagePathsTwo[7],
        imagePathsTwo[2],
        imagePathsTwo[1],
        imagePathsTwo[6],
        imagePathsTwo[5],
        imagePathsTwo[0]
      ]
    },
    {
      id: 3,
      title: 'Complete Roof Rebuild with Structural Upgrade & Modern Tiling',
      image: imagePathsThree[3],
      description: 'Reinforced roof rebuild with new insulation and durable tiled finish for strength and efficiency.',
      location: 'Mount Pleasant, St. Albans, AL3 4QH',
      fullDescription: 'This project involved a complete roof rebuild, starting with the removal of the old structure and the installation of a reinforced timber framework to ensure long-term strength and stability. High-performance insulation was added to improve energy efficiency and climate control. The final stage included the installation of modern, weather-resistant tiles, offering both durability and an aesthetically pleasing finish. The result is a structurally sound, energy-efficient, and visually appealing roof built to withstand the elements for years to come.',
      progressImages: [
        imagePathsThree[5],
        imagePathsThree[10],
        imagePathsThree[9],
        imagePathsThree[2],
        imagePathsThree[1],
        imagePathsThree[7],
        imagePathsThree[6],
        imagePathsThree[0],
        imagePathsThree[4],
        imagePathsThree[8]
      ]
    },
    {
      id: 4,
      title: 'Loft Expansion: A Stronger, Brighter Living Space',
      image: imagePathsFour[2],
      description: 'Loft extension with reinforced structure, improved insulation, and a newly tiled roof for durability and comfort.',
      location: 'Haringey, London, N6 4TD',
      fullDescription: 'This project focused on expanding and strengthening an existing loft space by upgrading its structure, insulation, and roofing. The work involved reinforcing the wooden framework, creating a more open and stable interior, and adding high-performance insulation for year-round comfort. The exterior received a fresh slate tile roof, ensuring weather resistance and long-lasting durability. The result is a well-insulated, spacious loft ready for transformation into a comfortable living area.',
      progressImages: [
        imagePathsFour[3],
        imagePathsFour[6],
        imagePathsFour[5],
        imagePathsFour[1],
        imagePathsFour[0],
        imagePathsFour[4]
      ]
    },
    {
      id: 5,
      title: 'Roof Structure Overhaul: Strength & Efficiency Redefined',
      image: imagePathsFive[6],
      description: 'Complete roof rebuild with reinforced timber framework, enhanced insulation, and a durable slate tile finish.',
      location: 'Hammersmith and Fulham, London, SW6 1QD',
      fullDescription: 'This project involved a full-scale roof reconstruction, starting with a complete strip-down of the old structure. We reinforced the timber framework to improve strength and stability, ensuring long-term durability. High-performance insulation was installed to enhance energy efficiency and temperature control. Finally, we completed the project with a fresh slate tile finish, providing a weather-resistant and visually appealing result. The upgraded roof now offers a solid foundation for future interior development while significantly improving the home’s overall efficiency and appearance.',
      progressImages: [
        imagePathsFive[8],
        imagePathsFive[16],
        imagePathsFive[14],
        imagePathsFive[4],
        imagePathsFive[3],
        imagePathsFive[10],
        imagePathsFive[9],
        imagePathsFive[0],
        imagePathsFive[7],
        imagePathsFive[12],
        imagePathsFive[1],
        imagePathsFive[15],
        imagePathsFive[13],
        imagePathsFive[5],
        imagePathsFive[2],
        imagePathsFive[11]
      ]
    },
    {
      id: 6,
      title: 'Roof Transformation: From Framework to Finish',
      image: imagePathsSix[6],
      description: 'Complete roof rebuild with a reinforced structure, upgraded insulation, and high-quality slate tiling.',
      location: 'St. Albans, AL2 2HP',
      fullDescription: 'This project focused on a full roof transformation, from the initial framework construction to the final tiling. We began by reinforcing the timber structure to ensure long-term durability and stability. Next, we installed high-performance insulation to enhance energy efficiency and indoor comfort. Finally, the roof was finished with premium slate tiles, providing a sleek, weather-resistant exterior. The result is a structurally sound, well-insulated, and visually appealing roof built to last.',
      progressImages: [
        imagePathsSix[8],
        imagePathsSix[14],
        imagePathsSix[13],
        imagePathsSix[4],
        imagePathsSix[3],
        imagePathsSix[10],
        imagePathsSix[9],
        imagePathsSix[1],
        imagePathsSix[7],
        imagePathsSix[11],
        imagePathsSix[2],
        imagePathsSix[0],
        imagePathsSix[12],
        imagePathsSix[5]
      ]
    },
    {
      id: 7,
      title: 'Roof Reconstruction: Strength, Space & Efficiency',
      image: imagePathsSeven[3],
      description: 'Full roof rebuild with a reinforced structure, spacious interior, and high-quality tiled finish for durability.',
      location: 'St. Albans, AL2 3XF',
      fullDescription: 'This project involved a complete roof reconstruction to create a stronger, more spacious, and energy-efficient structure. We began by reinforcing the timber framework to enhance stability and longevity. The interior space was carefully designed to maximize openness, allowing for future conversion into a functional living area. High-quality insulation was integrated for improved thermal performance, followed by the installation of durable tiled roofing to ensure long-term weather resistance. The result is a solid, well-ventilated, and aesthetically refined roof built to last.',
      progressImages: [
        imagePathsSeven[4],
        imagePathsSeven[8],
        imagePathsSeven[7],
        imagePathsSeven[2],
        imagePathsSeven[1],
        imagePathsSeven[6],
        imagePathsSeven[5],
        imagePathsSeven[0]
      ]
    },
    {
      id: 8,
      title: 'Dormer Roof Upgrade: Strength, Insulation & Natural Light',
      image: imagePathsEight[2],
      description: 'New dormer roof with reinforced structure, upgraded insulation, and sleek slate tiling for durability and style.',
      location: 'London, N10 3AY',
      fullDescription: 'This project involved a complete upgrade to a dormer roof, enhancing both functionality and aesthetics. We started by reinforcing the roof structure to ensure long-term stability. High-performance insulation was installed to improve energy efficiency and comfort. The project also included the integration of dormer windows, bringing in more natural light and adding valuable headroom. Finally, we installed high-quality slate tiles for a durable and weather-resistant finish. The result is a modern, well-insulated, and visually appealing dormer roof that adds both style and practicality to the home.',
      progressImages: [
        imagePathsEight[3],
        imagePathsEight[6],
        imagePathsEight[5],
        imagePathsEight[1],
        imagePathsEight[0],
        imagePathsEight[4]
      ]
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo + Company Name */}
      <div className="flex items-center space-x-3">
        <img src="../Assets/logo/costylogo.png" alt="Costy Building LTD Logo" className="h-20 w-25" />
        <span className="text-2xl font-bold text-gray-800">Costy Building LTD</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>

    {/* Mobile Navigation Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 pb-4">
        <a href="#home" className="block py-2 text-gray-600 hover:text-gray-900">Home</a>
        <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
        <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    )}
  </div>
</nav>






      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Expert Roofing & Construction Services</h1>
            <p className="text-xl mb-8">Specialising in Roofing, Loft Conversions, House Extensions & Refurbishing</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-gray-600 mb-8 text-lg">
              With over 10 years of experience in the construction industry, we've built our reputation on quality workmanship and exceptional customer service. Our team specialises in transforming homes through expert roofing, innovative loft conversions, and stunning house extensions.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We pride ourselves on delivering projects on time and within budget, with a focus on clear communication and attention to detail. Our skilled craftsmen use only the highest quality materials to ensure lasting results that exceed our clients' expectations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Past Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Ready to start your project? Get in touch with us for a free consultation and quote.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <Phone className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <a href="tel:+447405112620" className="hover:underline">
    +44 7405112620
  </a>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <Mail className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <a href="mailto:ccolibaba0@gmail.com" className="hover:underline">
    ccolibaba0@gmail.com
  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Costy Building LTD</h3>
              <p className="text-gray-400">
                Professional construction services for all your building needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
  <Phone className="h-5 w-5 mr-2" />
  <a href="tel:+447405112620" className="hover:underline">
    +44 7405112620
  </a>
</li>

<li className="flex items-center">
  <Mail className="h-5 w-5 mr-2" />
  <a target='_blank' href="mailto:ccolibaba0@gmail.com" className="hover:underline">
    ccolibaba0@gmail.com
  </a>
</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Costy Building LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
