import Navbar from './components/Navbar';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div className="h-screen w-screen bg-cover bg-no-repeat bg-center bg-[url(./assets/bg-image.jpg)] font-inter">
        <Navbar />
        <div className='w-screen h-[90vh] items-center justify-center flex'>
            <div className="
            flex
            flex-col
            items-center
            justify-center
            w-[80vh]
            text-center
            text-xl
            text-white
            text-shadow-black
            text-shadow-lg
            space-y-20">
                <h1>Meticulous Care. Unforgettable Beauty.</h1>
                <p>Dedicated gardening services focused on the health and aesthetic perfection of every detail in your landscape.</p>
                <Button variant='primary'>Get Your Estimate Now</Button>
            </div>
        </div>
        <div className="
        w-screen
        h-screen
        bg-gradient-to-r
        from-red-800/[.20]
        to-emerald-900/[.30]
        p-10
        flex
        flex-col
        justify-center
        text-center
        text-xl
        text-white
        text-shadow-black
        text-shadow-lg
        space-y-50">
            <div className='space-y-10'>
            <h1>Services</h1>
            <p>We offer different and specialized services that will be exactly what you need.</p>
            </div>
            <div className='flex items-end justify-center gap-3'>
                <Card
                    image="https://www.moshav.com.au/wp-content/uploads/2024/11/Garden-Maintenance.jpg"
                    title="General care and Maintenance"
                    description="Keep your garden in perfect condition with our regular maintenance services."
                />
                <Card
                    image="https://cloudimage.homeonline.com/855x451/public/uploads/gallery/articles/lead__461975594.jpg"
                    title="Custom Landscaping"
                    description="Transform your entire property with a personalized design and installation plan."
                />
                <Card
                    image="https://cdn.prod.website-files.com/65e5c1e8f206af01805b3bff/681cbf4a7b205312dd200218_fresh-green-grass-meadow-nature-vibrant-summer-palette-generated-by-artificial-intelligence-(2).jpg"
                    title="Lawn Care"
                    description="The best care for your lawn to always look alive and bright!"
                />
                <Card
                    image="https://treenewal.com/wp-content/uploads/2022/05/Tree_Pruning_and_Tree_Trimming.jpg"
                    title="Seasonal Pruning"
                    description="The strategic trimming of plants to manage their growth and health by working with, not against, their natural growth cycles and seasons."
                />
            </div>
        </div>
    </div>
  );
}

export default App;