import { LineChart, UserCheck, BarChart3, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
    {
        title: "Dynamic Pricing",
        description: "Expert-configured software reviews your rates daily, adjusting for demand, local events, and market trends to capture every revenue opportunity.",
        icon: LineChart,
    },
    {
        title: "Dedicated Expert",
        description: "A human revenue manager monitors your property, catches special opportunities, and applies strategic adjustments that algorithms alone miss.",
        icon: UserCheck,
    },
    {
        title: "Data & Reporting",
        description: "Monthly reports show your performance metrics, market insights, and strategy adjustments—complete transparency into what's working and why.",
        icon: BarChart3,
    },
    {
        title: "Custom Strategy",
        description: "Personalized pricing rules based on your goals. Set your boundaries, we optimize within them. Your preferences always respected.",
        icon: Target,
    },
];

export function HowWeHelp() {
    return (
        <section id="services" className="w-full py-16 md:py-20 bg-bone dark:bg-onyx">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

                {/* Left Column - Service Overview */}
                <div className="flex flex-col items-start space-y-6 md:sticky md:top-24">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Our Approach
                    </Badge>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-onyx dark:text-bone lowercase leading-tight">
                        pricing intelligence meets human expertise
                    </h2>

                    <p className="font-sans text-base md:text-lg text-onyx/75 dark:text-bone/75 leading-relaxed mt-4">
                        RevFactor acts as your dedicated revenue management team. We analyze market data, adjust your pricing daily, and design a custom strategy for your properties—all while keeping you informed and in control.
                    </p>

                    <p className="font-sans text-base text-onyx/70 italic leading-relaxed border-l-2 border-cedar/30 pl-4">
                        "Think of us as your strategic revenue partner: you enjoy higher earnings and peace of mind, while we handle the complex optimization work."
                    </p>
                </div>

                {/* Right Column - 4 Service Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
                    {pillars.map((pillar, index) => (
                        <Card
                            key={index}
                            className="bg-white/50 dark:bg-cedar/20 border-onyx/10 dark:border-bone/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full"
                        >
                            <CardContent className="p-5 flex flex-col items-start h-full">
                                <div className="w-8 h-8 rounded-lg bg-cedar/10 flex items-center justify-center text-cedar mb-3 shrink-0">
                                    <pillar.icon className="w-4 h-4" />
                                </div>
                                <h3 className="font-sans font-bold text-base md:text-lg text-onyx dark:text-bone mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-onyx/70 dark:text-bone/70 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
