import React from "react";
import { Input, TextArea } from "components/ui/components";

const ContactUs: React.FC = () => {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Contact Us</h2>
        <p className="text-base-content mb-6">Have a question or feedback? We'd love to hear from you.</p>
        <form className="space-y-4">
            <Input
              id="name"
              type="text"
              label="Name"
              placeholder="Your Name"
              className="w-full"
            />
          
            <Input
                id="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                className="w-full"
            />

            <TextArea
              id="message"
              label="Message"
              rows={4}
              placeholder="Your message..."
              className="w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
                Send Message
            </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
