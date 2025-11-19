import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Shield, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description:
        "Years of experience supporting American logistics companies with compliance and operational excellence.",
    },
    {
      icon: Award,
      title: "Full-Service Support",
      description:
        "From company registration to daily operations, we guide you through every step of building a compliant business.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description:
        "We don't just help you start—we ensure your business meets all regulatory requirements for long-term success.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About BluePeak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BluePeak specializes in helping individuals and businesses establish
            and manage logistics companies in the USA. We provide comprehensive
            guidance in opening and fully operating logistics companies in
            America.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
