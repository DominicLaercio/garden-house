import { Leaf, Award, Clock } from 'lucide-react';

const highlights = [
    {
        icon: <Leaf className="w-8 h-8 text-emerald-400" />,
        title: 'Passion for Nature',
        description: 'Every garden is treated with the same love and dedication we would give our own.',
    },
    {
        icon: <Award className="w-8 h-8 text-emerald-400" />,
        title: 'Quality Guaranteed',
        description: 'We take pride in the details — from the first consultation to the final touch.',
    },
    {
        icon: <Clock className="w-8 h-8 text-emerald-400" />,
        title: 'Always On Time',
        description: 'Reliable, punctual, and consistent. Your schedule matters to us.',
    },
];

function About() {
    return (
        <section id="about" className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-emerald-950 flex flex-col items-center justify-center px-6 py-24 text-white">
            <div className="max-w-5xl w-full flex flex-col items-center gap-16">
                {/* Header */}
                <div className="text-center space-y-4">
                    <p className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Who We Are</p>
                    <h2 className="text-4xl md:text-5xl font-bold">A Garden Built with Care</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Garden House was born from a simple belief: every outdoor space deserves to flourish.
                        Founded by <span className="text-white font-semibold">James Carter</span>, a professional
                        horticulturist with over 10 years of experience, we bring expertise and genuine care
                        to every project — big or small.
                    </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {highlights.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-8 gap-4 hover:bg-white/10 transition-colors">
                            {item.icon}
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-white/60">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
