import { TrendingUp, BarChart3, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Hero() {
    return (
        <section id="hero" className="w-full py-16 md:py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                {/* Left Column */}
                <div className="flex flex-col items-start space-y-6 md:space-y-8">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Revenue Management for Short-Term Rentals
                    </Badge>

                    <div className="space-y-4 md:space-y-6">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-onyx leading-tight font-medium">
                            Strategic Revenue Management for Short-Term Rentals
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-onyx/75 leading-relaxed">
                            Drive higher revenue with data-driven pricing and expert strategy. Stay in control while we optimize every booking.
                        </p>
                    </div>

                    <div className="space-y-4 mt-2">
                        <div className="flex items-start gap-3 text-onyx/90">
                            <TrendingUp className="w-5 h-5 text-moss shrink-0 mt-1" />
                            <span className="text-sm md:text-base font-medium">Average 25%+ revenue increase per property</span>
                        </div>
                        <div className="flex items-start gap-3 text-onyx/90">
                            <BarChart3 className="w-5 h-5 text-moss shrink-0 mt-1" />
                            <span className="text-sm md:text-base font-medium">Data-driven pricing updated daily—no guesswork</span>
                        </div>
                        <div className="flex items-start gap-3 text-onyx/90">
                            <Handshake className="w-5 h-5 text-moss shrink-0 mt-1" />
                            <span className="text-sm md:text-base font-medium">Success-based fee: we win when you win</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto mt-4">
                        <Button
                            size="lg"
                            className="bg-cedar text-bone hover:bg-cedar/90 rounded-full font-bold uppercase text-xs tracking-wider px-8 py-6 transition-all hover:scale-105 hover:shadow-lg"
                        >
                            Get Free Revenue Analysis
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-cedar text-cedar hover:bg-cedar/5 rounded-full font-bold uppercase text-xs tracking-wider px-8 py-6 transition-all hover:scale-105 hover:shadow-lg bg-transparent"
                        >
                            Book a Call
                        </Button>
                    </div>

                    <p className="text-xs text-onyx/60 font-medium">
                        Trusted by 50+ property managers across the US
                    </p>
                </div>

                {/* Right Column - Hero Card */}
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                    <Card className="w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl border border-onyx/10 overflow-hidden shadow-xl relative bg-gradient-to-br from-cedar/20 to-moss/20">
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-bone/90 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-serif text-4xl text-cedar font-bold">+28%</p>
                                    <p className="text-sm text-onyx/80 font-medium mt-1">Revenue Growth</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-onyx/60 uppercase tracking-wide font-semibold">Performance</p>
                                    <p className="text-xs text-onyx/60 mt-1">Average client increase<br />in 90 days</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Decorative background element */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cedar/5 rounded-full blur-3xl"></div>
                </div>

            </div>
        </section>
    );
}
