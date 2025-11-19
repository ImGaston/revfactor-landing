import { useState } from "react";
import { Menu, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Header height offset
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false); // Close mobile menu if open
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    const navLinks = [
        { name: "How It Works", id: "how-it-works" },
        { name: "Services", id: "services" },
        { name: "Results", id: "results" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-bone/95 backdrop-blur-md border-b border-onyx/10 py-4">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Logo */}
                <img
                    src="/images/RevFactor_SecondaryLogo_Onyx.png"
                    alt="RevFactor"
                    className="h-7 md:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={scrollToTop}
                />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <span
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-sans font-medium text-onyx/70 hover:text-cedar transition-colors cursor-pointer"
                        >
                            {link.name}
                        </span>
                    ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">

                    {/* Client Portal Button (Always Visible) */}
                    <a
                        href="https://owner.revfactor.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 bg-cedar text-bone px-4 py-2 rounded-full text-sm font-sans font-semibold hover:bg-cedar/90 transition-all"
                    >
                        Client Portal
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Mobile Client Portal Icon (Small screens) */}
                    <a
                        href="https://owner.revfactor.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:hidden flex items-center justify-center w-9 h-9 bg-cedar text-bone rounded-full hover:bg-cedar/90 transition-all"
                        aria-label="Client Portal"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="text-onyx hover:text-cedar">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-bone border-l border-onyx/10">
                            <div className="flex flex-col h-full">
                                <div
                                    onClick={scrollToTop}
                                    className="mb-8 cursor-pointer" // Removed text-specific classes
                                >
                                    <img
                                        src="/images/RevFactor_SecondaryLogo_Onyx.png"
                                        alt="RevFactor"
                                        className="h-8 w-auto"
                                    />
                                </div>

                                <nav className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.id)}
                                            className="w-full text-left px-4 py-3 rounded-lg text-base font-sans font-medium text-onyx hover:bg-moss/10 hover:text-cedar transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    ))}
                                </nav>

                                <div className="border-t border-onyx/10 my-6"></div>

                                <a
                                    href="https://owner.revfactor.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-cedar text-bone px-4 py-3 rounded-lg text-base font-sans font-semibold hover:bg-cedar/90 transition-all"
                                >
                                    Client Portal
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
}
