import { motion } from "framer-motion";
import { Instagram, Mail, Send } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/bluepeaksafety",
    },
    {
      icon: Send,
      label: "Telegram Channel",
      href: "https://t.me/BluePeak_Safety",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/bluepeak.service?igsh=MXR2YTl1b2VscTM1eg==",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@bluepeaksafety.com",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#00357a]">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your trucking business? Contact us today for a
            consultation.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <img 
              src="https://harmless-tapir-303.convex.cloud/api/storage/5f3b194a-da44-4234-bcb9-25a155afbb2b" 
              alt="BluePeak" 
              className="w-full max-w-2xl h-auto object-contain rounded-2xl shadow-lg" 
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-8">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-white shadow-md border border-gray-100 text-[#00357a] hover:bg-[#ff751f] hover:text-white hover:shadow-lg transition-all duration-300"
                title={link.label}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}