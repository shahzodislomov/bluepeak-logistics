import { Mountain } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/ea4122b5-7fc3-4e81-9b2d-0a436ad6dffd" alt="BluePeak" className="h-6" />
            </div>
            <p className="text-sm text-muted-foreground">
              Where Excellence Meets Its Peak. Building compliant logistics
              businesses in the USA.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://t.me/bluepeaksafety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Telegram: @bluepeaksafety
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/BluePeak_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Channel: BluePeak Safety
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bluepeaksafety.com"
                  className="hover:text-primary transition-colors"
                >
                  info@bluepeaksafety.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} BluePeak. All rights reserved. |{" "}
            <a
              href="https://bluepeaksafety.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              bluepeaksafety.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
