import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Rocket, Shield, TrendingUp } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Company Setup",
      description:
        "Quick and compliant company registration to get your business running without delays.",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Expert guidance ensuring your business meets all American safety and regulatory requirements.",
    },
    {
      icon: FileCheck,
      title: "Full Management Support",
      description:
        "Complete operational support from documentation to daily business management.",
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description:
        "Strategic consultation to help your logistics business scale sustainably.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description:
        "Clear, reliable processes with no hidden fees or unexpected complications.",
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Why Choose BluePeak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We guide you through every step of launching a compliant logistics
            company with expertise and dedication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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
