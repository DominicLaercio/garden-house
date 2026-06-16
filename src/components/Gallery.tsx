const photos = [
    {
        src: 'https://www.moshav.com.au/wp-content/uploads/2024/11/Garden-Maintenance.jpg',
        alt: 'Garden Maintenance',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://cdn.prod.website-files.com/65e5c1e8f206af01805b3bff/681cbf4a7b205312dd200218_fresh-green-grass-meadow-nature-vibrant-summer-palette-generated-by-artificial-intelligence-(2).jpg',
        alt: 'Lawn Care',
        span: 'col-span-1 row-span-2',
    },
    {
        src: 'https://treenewal.com/wp-content/uploads/2022/05/Tree_Pruning_and_Tree_Trimming.jpg',
        alt: 'Tree Pruning',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://cloudimage.homeonline.com/855x451/public/uploads/gallery/articles/lead__461975594.jpg',
        alt: 'Custom Landscaping',
        span: 'col-span-2 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
        alt: 'Beautiful Garden',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
        alt: 'Garden Path',
        span: 'col-span-1 row-span-1',
    },
];

function Gallery() {
    return (
        <section id="gallery" className="w-full min-h-screen bg-gradient-to-b from-emerald-950 to-stone-900 flex flex-col items-center justify-center px-6 py-24 text-white">
            <div className="max-w-6xl w-full flex flex-col items-center gap-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <p className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Our Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Spaces We've Transformed</h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">
                        A glimpse of the gardens, lawns, and landscapes we've had the pleasure of bringing to life.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4 w-full">
                    {photos.map((photo) => (
                        <div
                            key={photo.alt}
                            className={`${photo.span} overflow-hidden rounded-2xl group`}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
