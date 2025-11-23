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
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                y: -15, 
                scale: 1.03,
                rotateX: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 350 } 
              }}
            >
              <Card className="h-full border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
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