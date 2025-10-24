import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_fivelqs";
const EMAILJS_TEMPLATE_ID = "template_kfziiqf";
const EMAILJS_PUBLIC_KEY = "9DJly9nT8LNzIrlUr";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Form validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "komalpachouri14@gmail.com",
      href: "mailto:komalpachouri14@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8839665593",
      href: "tel:+918839665593",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "komal-pachouri",
      href: "https://linkedin.com/in/komal-pachouri-72215530b",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "komal-Pachouri",
      href: "https://github.com/komal-Pachouri",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Komal Pachouri",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4 animate-pulse-glow">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-5 rounded-xl flex items-center gap-4 hover-lift group relative overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    <info.icon className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="relative">
                    <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl mt-8">
              <h4 className="font-semibold mb-3">Why work with me?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Strong foundation in MERN stack development</li>
                <li>✓ Passionate about learning and growth</li>
                <li>✓ Dedicated to delivering quality work</li>
                <li>✓ Open to internships and collaborations</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
