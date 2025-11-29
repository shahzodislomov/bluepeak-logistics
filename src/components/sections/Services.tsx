import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, HeadphonesIcon, ShieldCheck } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Company Registration & Setup",
      items: [
        "LLC / INC formation",
        "MC & DOT registration",
        "Complete documentation",
        "Compliance setup",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Safety & Compliance",
      items: [
        "Safety audits",
        "FMCSA requirements",
        "Risk management",
        "Policy creation",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Full Operational Support & Business Growth",
      items: [
        "Dispatching support",
        "Back-office management",
        "Business optimization",
        "Long-term consulting",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#00357a]">
            Our Services
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl mx-auto">
            Comprehensive solutions for building and managing your logistics
            business in the USA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.18, type: "spring", bounce: 0.35 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 350 } 
              }}
            >
              <Card className="h-full border-none shadow-lg rounded-[2.5rem] p-2 bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-2 pt-8 px-8">
                  <CardTitle className="text-left text-2xl font-bold text-[#00357a] leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-[#ff751f] mt-2 shrink-0 shadow-sm" />
                        <span className="text-base font-medium text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}