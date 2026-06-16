import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Button from './Button';

const contactInfo = [
    {
        icon: <Phone className="w-5 h-5 text-emerald-400" />,
        label: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567',
    },
    {
        icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
        label: 'WhatsApp',
        value: '+1 (555) 123-4567',
        href: 'https://wa.me/15551234567',
    },
    {
        icon: <Mail className="w-5 h-5 text-emerald-400" />,
        label: 'Email',
        value: 'hello@gardenhouse.com',
        href: 'mailto:hello@gardenhouse.com',
    },
    {
        icon: <MapPin className="w-5 h-5 text-emerald-400" />,
        label: 'Location',
        value: 'Sydney, NSW — Australia',
        href: undefined,
    },
];

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Opens the default email client with the form data pre-filled
        const subject = encodeURIComponent(`Garden House Enquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:hello@gardenhouse.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    const inputClass = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors";

    return (
        <section id="contact" className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-emerald-950 flex flex-col items-center justify-center px-6 py-24 text-white">
            <div className="max-w-5xl w-full flex flex-col items-center gap-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <p className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Let's Talk About Your Garden</h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">
                        Ready for a transformation? Send us a message and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 justify-center">
                        {contactInfo.map((item) => (
                            <div key={item.label} className="flex items-center gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-white hover:text-emerald-400 transition-colors font-medium">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    {sent ? (
                        <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-10 text-center gap-4">
                            <div className="text-5xl">🌿</div>
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                            <p className="text-white/60">Thank you for reaching out. We'll be in touch shortly.</p>
                            <Button variant="secondary" onClick={() => setSent(false)}>Send Another</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                                <input
                                    name="phone"
                                    placeholder="Phone (optional)"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell us about your garden and what you need..."
                                value={form.message}
                                onChange={handleChange}
                                className={`${inputClass} resize-none`}
                            />
                            <Button variant="primary">Send Message</Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
