import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";

export default function Contact() {
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:karimhnfy1@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  karimhnfy1@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+201044258597"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (+20) 01044258597
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">Cairo, Egypt</span>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/karim74"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/kaghim_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://twitter.com/kaghim_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="1fb452d8-183e-484c-a535-35122b02d000"
              />
              <input
                type="hidden"
                name="subject"
                value="New Message From Portfolio"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start ms-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Kareem Mohamed"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start ms-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-start ms-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}