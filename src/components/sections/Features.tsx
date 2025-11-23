import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Handshake, Lightbulb, Shield, Target, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: "Clarity",
      description:
        "Regulations can be confusing — we make them simple. You get clear explanations, transparent steps, and guidance that removes stress and uncertainty. No guessing, no overwhelming terminology — just clarity at every stage.",
      color: "orange",
    },
    {
      icon: Target,
      title: "Accuracy",
      description:
        "In trucking compliance, every detail matters. We handle all filings with precision to ensure your company is properly registered, fully compliant, and audit-ready from day one. Avoid costly mistakes — choose accuracy.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Personal Support",
      description:
        "We don't operate like a call center. You receive direct, human support from specialists who know your business and stay connected through every step of the process. Real communication, real accountability.",
      color: "orange",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We stay with you beyond setup. From audits to renewals to compliance updates, BluePeak becomes part of your operational backbone — guiding your growth and protecting your business for the long run.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We believe in honest work, transparent processes, and doing things the right way. No shortcuts, no hidden fees, no rushed filings. You can trust that every action is taken with your best interest in mind.",
      color: "orange",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver service at the highest standard. From documentation to safety management, our work reflects consistency, professionalism, and deep industry expertise. Excellence isn't our goal — it's our baseline.",
      color: "blue",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#00357a]">
            Why Choose BluePeak
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl mx-auto leading-relaxed">
            At BluePeak, we go beyond basic filings and paperwork — we become a
            long-term partner in building your business. Here's why companies
            nationwide choose us to guide their setup and compliance journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.85, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8, 
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 400 } 
              }}
            >
              <Card className={`h-full border-2 transition-all duration-300 ${
                feature.color === "orange" 
                  ? "hover:border-[#ff751f]/50 hover:shadow-xl hover:shadow-[#ff751f]/20" 
                  : "hover:border-[#00357a]/50 hover:shadow-xl hover:shadow-[#00357a]/20"
              }`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      feature.color === "orange" ? "bg-[#ff751f]/10" : "bg-[#00357a]/10"
                    }`}>
                      <feature.icon className={`h-6 w-6 ${
                        feature.color === "orange" ? "text-[#ff751f]" : "text-[#00357a]"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight mb-2 text-[#00357a]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#aaaaaa]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}