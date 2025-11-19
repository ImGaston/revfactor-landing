import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Part 1: Final CTA Section */}
            <section className="w-full py-16 md:py-20 bg-tobacco text-bone">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bone lowercase leading-tight">
                        ready to maximize your rental revenue?
                    </h2>

                    <p className="font-sans text-base md:text-lg text-bone/80 mt-4 md:mt-6 max-w-2xl mx-auto">
                        Stop leaving money on the table. Let our experts optimize your pricing while you focus on what matters.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <Button
                            size="lg"
                            className="bg-bone text-tobacco hover:bg-bone/90 rounded-full font-bold uppercase text-xs tracking-wider px-8 py-6 transition-all hover:scale-105"
                        >
                            Get Free Revenue Analysis
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-bone text-bone bg-transparent hover:bg-bone/10 rounded-full font-bold uppercase text-xs tracking-wider px-8 py-6 transition-all hover:scale-105"
                        >
                            Schedule a Call
                        </Button>
                    </div>

                    <p className="text-xs md:text-sm text-bone/60 mt-6 font-medium">
                        No commitment required • Free analysis • 5-minute setup
                    </p>
                </div>
            </section>

            {/* Part 2: Footer */}
            <footer className="w-full py-12 md:py-16 bg-onyx text-bone border-t border-bone/10">
                <div className="max-w-6xl mx-auto px-4 md:px-6">

                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

                        {/* Column 1: Brand */}
                        <div className="flex flex-col items-start">
                            <img
                                src="/images/RevFactor_SecondaryLogo_Bone.png"
                                alt="RevFactor"
                                className="h-8 md:h-9 w-auto hover:opacity-80 transition-opacity cursor-pointer"
                                onClick={scrollToTop}
                            />
                            <span className="text-sm text-bone/60 italic mt-4">
                                intelligent pricing for inspired stays
                            </span>
                            <span className="text-xs text-bone/50 mt-4">
                                Founded in 2025
                            </span>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-semibold text-bone uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">About Us</a>
                                <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">How It Works</a>
                                <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">Pricing</a>
                                <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">Contact</a>
                            </nav>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-semibold text-bone uppercase tracking-wider mb-4">
                                Get in Touch
                            </h3>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center gap-2 text-sm text-bone/70">
                                    <Mail className="w-4 h-4 shrink-0" />
                                    <span>hello@revfactor.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-bone/70">
                                    <Phone className="w-4 h-4 shrink-0" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-bone/70">
                                    <MapPin className="w-4 h-4 shrink-0" />
                                    <span>Serving property managers across the US</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-bone/50">
                            © 2025 RevFactor. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-xs text-bone/50 hover:text-bone/70 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs text-bone/50 hover:text-bone/70 transition-colors">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
