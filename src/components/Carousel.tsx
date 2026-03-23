import { useState, useEffect } from 'react';
import Card from './Card';

interface Service {
    id: number;
    image: string;
    title: string;
    description: string;
}
interface CarouselProps {
    services: Service[];
    selectedService: Service;
    onSelectService: (service: Service) => void;
}

const CARD_WIDTH = 400;
const CARD_HEIGHT = 250;
const CARD_GAP = 20;
const CAROUSEL_WIDTH = '50%';
const CAROUSEL_HEIGHT = 'auto';

function Carousel({ services, selectedService, onSelectService }: CarouselProps) {
    const [extendedServices, setExtendedServices] = useState<Service[]>([]);
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" item
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const lastService = services[services.length - 1];
        const firstService = services[0];
        const newExtendedServices = [lastService, ...services, firstService];
        setExtendedServices(newExtendedServices);

        const selectedIndex = services.findIndex(s => s.id === selectedService.id);
        if (selectedIndex !== -1 && (currentIndex - 1) !== selectedIndex) {
            setCurrentIndex(selectedIndex + 1);
        }
    // Only run this when the original services array changes.
    }, [services]);

    const handlePrev = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        onSelectService(services[newIndex < 1 ? services.length - 1 : newIndex - 1]);

        if (newIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(services.length);
            }, 500); // Must match the transition duration
        }
        setIsTransitioning(true);
    };

    const handleNext = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        onSelectService(services[newIndex > services.length ? 0 : newIndex - 1]);

        if (newIndex > services.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500); // Must match the transition duration
        }
        setIsTransitioning(true);
    };

    return (
        <div className="mt-8 flex flex-col items-center gap-4" style={{ width: CAROUSEL_WIDTH, height: CAROUSEL_HEIGHT }}>
            <div className='relative w-full flex items-center justify-center'>
                <button onClick={handlePrev} className="absolute left-0 z-20 bg-white/30 rounded-full p-4 text-2xl text-black hover:bg-white/50 transition-colors focus:outline-none -translate-x-1/2" aria-label="Previous service">
                    &lt;
                </button>
                {/* This container creates the fade effect on the sides */}
                <div className="
                    relative w-full overflow-hidden
                    before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-emerald-900/[.30] before:to-transparent
                    after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-emerald-900/[.30] after:to-transparent
                ">
                    {/*
                      The main sliding container. It's a flexbox that holds all the cards.
                      The transform logic slides the container to center the active card.
                    */}
                    <div
                        className={`flex items-center p-2 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{
                            gap: `${CARD_GAP}px`,
                            // We slide by (CARD_WIDTH + CARD_GAP) for each index.
                            // The offset is adjusted to re-center the card (half of width) within the container.
                            transform: `translateX(calc(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px + 50% - ${CARD_WIDTH / 2}px))`,
                        }}
                    >
                        {extendedServices.map((service, index) => (
                            <div key={`${service.id}-${index}`} className="flex-shrink-0" style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }} onClick={() => onSelectService(service)}>
                            <Card
                                image={service.image}
                                title={service.title}
                                isActive={selectedService.id === service.id && index > 0 && index <= services.length} />
                        </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className="absolute right-0 z-20 bg-white/30 rounded-full p-4 text-2xl text-black hover:bg-white/50 transition-colors focus:outline-none translate-x-1/2" aria-label="Next service">
                    &gt;
                </button>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2">
                {services.map((service, index) => (
                    <button
                        key={service.id}
                        onClick={() => onSelectService(services[index])}
                        className={`w-4 h-4 rounded-full transition-colors duration-300 ${selectedService.id === service.id ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;