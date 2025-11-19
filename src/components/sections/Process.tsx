import { Phone, Settings, Zap, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Discovery Call & Free Analysis",
        description: "Schedule a call with us. We'll conduct a free revenue audit of your listing, review current performance, and identify opportunities.",
        icon: Phone,
    },
    {
        number: "02",
        title: "Setup & Integration",
        description: "We integrate with your platforms securely (Airbnb co-host or PMS connection) and configure your custom pricing strategy together.",
        icon: Settings,
    },
    {
        number: "03",
        title: "Daily Optimization",
        description: "Our system and expert team monitor your market 24/7, adjusting prices automatically and manually when opportunities arise.",
        icon: Zap,
    },
    {
        number: "04",
        title: "Monthly Review & Strategy",
        description: "Receive detailed monthly reports with insights and recommendations. Schedule quarterly strategy reviews to align on goals and adjustments.",
        icon: FileText,
    },
];

export function Process() {
    return (
        <section id="how-it-works" className="w-full py-16 md:py-20 bg-bone">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Simple Process
                    </Badge>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-onyx lowercase leading-tight">
                        how we work together
                    </h2>

                    <p className="font-sans text-base md:text-lg text-onyx/75 max-w-2xl mx-auto leading-relaxed">
                        From first call to ongoing optimization, we make it effortless.
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mt-12 md:mt-16 relative">

                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-moss/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="bg-white/40 border-onyx/10 rounded-2xl relative"
                        >
                            <CardContent className="p-6 flex flex-col items-start h-full">

                                {/* Step Number */}
                                <div className="w-12 h-12 rounded-full bg-cedar/10 flex items-center justify-center mb-4 shrink-0 self-start md:self-center md:bg-bone md:border-2 md:border-cedar/10 z-10">
                                    <span className="font-serif text-xl text-cedar font-semibold">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-10 h-10 rounded-lg bg-moss/10 flex items-center justify-center mb-4 shrink-0 text-moss">
                                    <step.icon className="w-5 h-5" />
                                </div>

                                <h3 className="font-sans font-semibold text-base md:text-lg text-onyx mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-onyx/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
