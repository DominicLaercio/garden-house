import { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Carousel from './components/Carousel';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeasonalPruningImage from './assets/pruning-tree-silhouette.png';
import CustomLandscapingImage from './assets/flower-silhouette.png';
import LawnMowingImage from './assets/lawn-mowing-silhouette.png';
import GeneralCareImage from './assets/general-care-silhouette.png';

const services = [
    {
        id: 1,
        image: "https://www.moshav.com.au/wp-content/uploads/2024/11/Garden-Maintenance.jpg",
        image2: GeneralCareImage,
        title: "General Care and Maintenance",
        description: "Keep your garden in perfect condition with our regular maintenance services."
    },
    {
        id: 2,
        image: "https://cloudimage.homeonline.com/855x451/public/uploads/gallery/articles/lead__461975594.jpg",
        image2: CustomLandscapingImage,
        title: "Custom Landscaping",
        description: "Transform your entire property with a personalized design and installation plan."
    },
    {
        id: 3,
        image: "https://cdn.prod.website-files.com/65e5c1e8f206af01805b3bff/681cbf4a7b205312dd200218_fresh-green-grass-meadow-nature-vibrant-summer-palette-generated-by-artificial-intelligence-(2).jpg",
        image2: LawnMowingImage,
        title: "Lawn Care",
        description: "The best care for your lawn to always look alive and bright!"
    },
    {
        id: 4,
        image: "https://treenewal.com/wp-content/uploads/2022/05/Tree_Pruning_and_Tree_Trimming.jpg",
        image2: SeasonalPruningImage,
        title: "Seasonal Pruning",
        description: "Strategic trimming to manage plant growth and health, working with their natural growth cycles."
    }
];

function App() {
    const [selectedService, setSelectedService] = useState(services[0]);

    const scrollToContact = () => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full font-inter">
            <Navbar />

            {/* Hero */}
            <section
                id="home"
                className="h-screen w-full bg-cover bg-no-repeat bg-center bg-[url(./assets/bg-image.jpg)] flex items-center justify-center"
            >
                <div className="flex flex-col items-center justify-center text-center text-white text-shadow-black text-shadow-lg space-y-10 px-6 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Meticulous Care. Unforgettable Beauty.</h1>
                    <p className="text-xl text-white/90">
                        Dedicated gardening services focused on the health and aesthetic perfection of every detail in your landscape.
                    </p>
                    <Button variant='primary' onClick={scrollToContact}>Get Your Estimate Now</Button>
                </div>
            </section>

            {/* About */}
            <About />

            {/* Services */}
            <section
                id="services"
                className="w-full min-h-screen bg-gradient-to-r from-red-800/20 to-emerald-900/30 bg-stone-900 flex flex-col justify-center items-center text-center text-white text-shadow-black text-shadow-lg p-10"
            >
                <div className="flex gap-5 w-full max-w-6xl p-5">
                    <div className="w-1/3 h-auto flex flex-col gap-10 justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
                        <p className="text-white/70 text-lg">We offer different and specialized services that will be exactly what you need.</p>
                    </div>
                    <div className="w-2/3 p-5 flex flex-col items-center">
                        <img
                            src={selectedService.image2}
                            alt={selectedService.title}
                            className="h-80 drop-shadow-xl drop-shadow-black rounded-lg mb-4 object-contain"
                        />
                        <div className="h-24 flex items-center">
                            <p className="text-lg">{selectedService.description}</p>
                        </div>
                        <Carousel
                            services={services}
                            selectedService={selectedService}
                            onSelectService={setSelectedService}
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <Gallery />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
