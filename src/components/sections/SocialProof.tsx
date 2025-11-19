import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const metrics = [
    {
        number: "25%",
        label: "Average Revenue Increase",
        sublabel: "in first 90 days",
    },
    {
        number: "50+",
        label: "Properties Managed",
        sublabel: "across the US",
    },
    {
        number: "90%",
        label: "Client Retention Rate",
        sublabel: "year over year",
    },
];

const testimonials = [
    {
        quote: "RevFactor increased my rental income by 22% in the first year. I finally sleep well knowing experts are optimizing my rates daily—no more constant price tweaking.",
        name: "Sarah Mitchell",
        role: "Property Manager, Miami",
        properties: "5 properties",
        initials: "SM",
    },
    {
        quote: "The monthly reports are incredibly clear. I understand exactly what's driving my revenue and feel confident about our pricing strategy for the first time.",
        name: "James Rodriguez",
        role: "Vacation Rental Owner, Austin",
        properties: "2 properties",
        initials: "JR",
    },
    {
        quote: "I was skeptical about giving up pricing control, but RevFactor respects my boundaries while consistently outperforming what I did manually. Best decision I made.",
        name: "Emily Chen",
        role: "STR Host, Portland",
        properties: "3 properties",
        initials: "EC",
        className: "md:col-span-2 md:max-w-lg md:mx-auto w-full",
    },
];

export function SocialProof() {
    return (
        <section id="results" className="w-full py-16 md:py-20 bg-bone/80 dark:bg-onyx/95">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Part 1: Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-b border-onyx/10 pb-12 md:pb-16">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <span className="text-4xl md:text-5xl font-serif text-cedar dark:text-[#E8E6E0] font-medium">
                                {metric.number}
                            </span>
                            <span className="text-sm md:text-base font-sans font-semibold text-onyx dark:text-[#E8E6E0] mt-2">
                                {metric.label}
                            </span>
                            <span className="text-xs text-onyx/60 dark:text-[#E8E6E0]/70 mt-1">
                                {metric.sublabel}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Part 2: Section Header */}
                <div className="flex flex-col items-center text-center mt-12 md:mt-16 space-y-4">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Proven Results
                    </Badge>

                    <p className="font-serif text-4xl md:text-5xl font-bold text-onyx dark:text-bone lowercase leading-tight max-w-2xl">
                        trusted by property managers who demand results
                    </p>
                </div>

                {/* Part 3: Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "bg-white/50 dark:bg-cedar/20 border-onyx/10 dark:border-bone/10 hover:shadow-lg transition-shadow",
                                testimonial.className
                            )}
                        >
                            <CardContent className="p-6 md:p-7 flex flex-col h-full">
                                <Quote className="w-8 h-8 text-moss/30 mb-4 fill-current" />

                                <p className="text-sm md:text-base text-onyx/70 dark:text-bone/70 font-medium leading-relaxed mb-6 italic flex-grow">
                                    "{testimonial.quote}"
                                </p>

                                <div className="border-t border-onyx/10 pt-4 flex items-center gap-3 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-moss/20 flex items-center justify-center shrink-0">
                                        <span className="text-moss font-semibold text-sm">{testimonial.initials}</span>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <p className="font-sans font-semibold text-sm md:text-base text-onyx dark:text-bone">
                                            {testimonial.name}
                                        </p>
                                        <span className="text-xs text-onyx dark:text-bone">
                                            {testimonial.role} • {testimonial.properties}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
