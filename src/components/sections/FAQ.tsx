import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
    {
        question: "How does RevFactor charge for its services?",
        answer: "We use a success-based model—a percentage of your rental revenue. This means our success is directly tied to yours: when you earn more, we earn more. There are no hidden fees or upfront costs. The exact percentage depends on your property portfolio, and we discuss this transparently during your initial consultation.",
    },
    {
        question: "What kind of results can I expect?",
        answer: "While we can't guarantee specific numbers (market conditions vary), our clients typically see a 20-30% revenue increase within the first 90 days after optimization. We're committed to improving your performance from day one and provide monthly reports showing clear progress. If your revenue grows, we both win.",
    },
    {
        question: "Will I lose control over my pricing?",
        answer: "Absolutely not. You always have the final say. We agree on your pricing strategy upfront—including minimum rates, blackout dates, or any other preferences. You'll receive monthly reports with full transparency, and you can adjust parameters anytime. Think of us as your expert advisor, not a dictator.",
    },
    {
        question: "How do you access my listings? Is it secure?",
        answer: "We never need your passwords. You simply add us as a co-host on Airbnb or grant delegate access through your Property Management System (PMS). This is a standard, secure method that platforms like Airbnb provide. We can only manage pricing and view data—we can't access financial information or make unauthorized changes.",
    },
    {
        question: "Do you handle guest communication and property management?",
        answer: "No, we specialize exclusively in revenue management—pricing strategy and optimization. However, we know the industry well and can recommend trusted partners for guest communication, cleaning, maintenance, or full property management if you need those services.",
    },
    {
        question: "Is this worth it if I only have one or two properties?",
        answer: "Absolutely. Whether you have 1 property or 20, professional pricing management makes a significant difference. For single-property owners, every dollar of revenue counts, and our clients with just one listing often see the biggest relative improvement. Our percentage-based model ensures it's affordable and aligned with your earnings.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="w-full py-16 md:py-20 bg-bone dark:bg-onyx">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-10 md:mb-12">
                    <Badge
                        variant="secondary"
                        className="bg-moss/10 text-moss hover:bg-moss/20 rounded-full uppercase text-xs tracking-wide px-3 py-1 font-semibold border-none"
                    >
                        Questions?
                    </Badge>

                    <h2 className="font-serif text-3xl md:text-4xl text-onyx dark:text-[#E8E6E0] lowercase leading-tight">
                        everything you need to know
                    </h2>

                    <p className="font-sans text-base md:text-lg text-onyx/75 dark:text-[#E8E6E0]/80 leading-relaxed">
                        Clear answers about pricing, process, and what to expect.
                    </p>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-onyx/10 dark:border-bone/10">
                            <AccordionTrigger className="text-left font-sans font-semibold text-base md:text-lg text-onyx dark:text-[#E8E6E0] hover:text-moss dark:hover:text-moss hover:no-underline py-5 transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm md:text-base text-onyx/75 dark:text-[#E8E6E0]/80 leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    );
}
