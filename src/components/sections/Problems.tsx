import { Clock, TrendingDown, Settings, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const problems = [
    {
        title: "No Time for Daily Optimization",
        description: "Between guest communications, maintenance, and marketing, there's no time left to analyze pricing data and adjust rates daily.",
        icon: Clock,
    },
    {
        title: "Inconsistent Revenue Performance",
        description: "Your calendar shows gaps in high season from prices set too high, or you're fully booked but realize you could have charged more.",
        icon: TrendingDown,
    },
    {
        title: "Tools Without Strategy",
        description: "You tried dynamic pricing software, but felt lost in the configurations. Technology alone doesn't guarantee optimal results.",
        icon: Settings,
    },
    {
        title: "Fear of Losing Control",
        description: "You worry about delegating pricing decisions. What if someone sets rates that drive away your loyal guests or damage your reputation?",
        icon: AlertCircle,
    },

];

export function Problems() {
    return (
        <section className="w-full py-16 md:py-20 bg-bone/80 dark:bg-onyx/95">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        The Challenge
                    </Badge>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-onyx dark:text-bone lowercase leading-tight">
                        managing rental pricing shouldn't feel like guesswork
                    </h2>

                    <p className="font-sans text-base md:text-lg text-onyx/75 dark:text-bone/75 leading-relaxed">
                        We understand the daily challenges property managers face. The short-term rental market moves fast, and without the right strategy, you're leaving money on the table—or pricing yourself out of bookings.
                    </p>
                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-12">
                    {problems.map((problem, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "bg-white/40 dark:bg-cedar/20 border-onyx/5 dark:border-bone/10 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                            )}
                        >
                            <CardContent className="p-5 md:p-6 flex flex-col items-start h-full">
                                <div className="w-10 h-10 rounded-lg bg-moss/10 flex items-center justify-center mb-4 shrink-0">
                                    <problem.icon className="w-5 h-5 text-moss" />
                                </div>
                                <h3 className="font-sans font-semibold text-base md:text-lg text-onyx dark:text-bone mb-2">
                                    {problem.title}
                                </h3>
                                <p className="text-sm text-onyx/70 dark:text-bone/70 leading-relaxed">
                                    {problem.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
