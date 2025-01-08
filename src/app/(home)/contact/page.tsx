import { ContactBackgroundDecoration } from "@/components/(home)/pages/contact/contact-background-decoration";
import { ContactForm } from "@/components/(home)/pages/contact/contact-form";
import { ContactHeader } from "@/components/(home)/pages/contact/contact-header";
import { ContactInformation } from "@/components/(home)/pages/contact/contact-information";
import { ContactOfficeHours } from "@/components/(home)/pages/contact/contact-office-hours";
import { ContactQuickOptions } from "@/components/(home)/pages/contact/contact-quick-options";

const ContactPage = () => (
  <>
    <ContactBackgroundDecoration />
    <div className="container relative mx-auto px-4 py-16">
      <ContactHeader />
      <ContactQuickOptions />
      <section id="send-message" className="slide-up grid gap-8 pt-24 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-8">
          <ContactInformation />
          <ContactOfficeHours />
        </div>
      </section>
    </div>
  </>
);

export default ContactPage;
