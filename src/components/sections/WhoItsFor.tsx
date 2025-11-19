import { CheckCircle2, XCircle, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const perfectFit = [
    "Manage 1-20+ short-term rental properties and want to maximize revenue without the daily pricing grind",
    "Value data-driven decisions but don't have time to analyze market trends and adjust rates yourself",
    "Use or are considering dynamic pricing tools but need expert guidance to get real results",
    "Want transparency and control—you appreciate clear reporting and staying involved in strategy",
    "See revenue management as a partnership and investment, not a quick fix or magic solution",
];

const notFit = [
    "You prefer 100% automated solutions with zero human involvement or strategic input",
    "You're not open to adjusting pricing based on market data and prefer fixed emotional rates",
    "You need full-service property management including cleaning, guest communication, and maintenance",
    "You expect guaranteed income without market dependency or aren't willing to trust the optimization process",
];

export function WhoItsFor() {
    return (
        <section className="w-full py-16 md:py-20 bg-bone/80">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Is This For You?
                    </Badge>

                    <h2 className="font-serif text-3xl md:text-4xl text-onyx lowercase leading-tight">
                        we work best with committed hosts
                    </h2>

                    <p className="font-sans text-base md:text-lg text-onyx/75 max-w-2xl mx-auto leading-relaxed">
                        RevFactor isn't for everyone—and that's okay. Here's who we're built to serve.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">

                    {/* Perfect Fit Card */}
                    <Card className="bg-moss/5 border-2 border-moss/20 rounded-2xl shadow-sm">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full">
                            <CheckCircle2 className="w-8 h-8 text-moss mb-3" />
                            <h3 className="font-sans font-bold text-lg md:text-xl text-onyx mb-6">
                                Perfect fit if you...
                            </h3>

                            <ul className="space-y-4">
                                {perfectFit.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-moss shrink-0 mt-1" />
                                        <span className="text-sm md:text-base text-onyx/80 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Not Fit Card */}
                    <Card className="bg-onyx/5 border border-onyx/10 rounded-2xl shadow-sm">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full">
                            <XCircle className="w-8 h-8 text-onyx/40 mb-3" />
                            <h3 className="font-sans font-bold text-lg md:text-xl text-onyx mb-6">
                                Not the right fit if you...
                            </h3>

                            <ul className="space-y-4">
                                {notFit.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Minus className="w-4 h-4 text-onyx/40 shrink-0 mt-1" />
                                        <span className="text-sm md:text-base text-onyx/70 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                </div>

            </div>
        </section>
    );
}
