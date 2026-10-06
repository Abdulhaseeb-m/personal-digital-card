import { Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactLinks() {
  return (
    <section className="contact-section" aria-label="Contact information">
      <a
        href={`mailto:${profile.email}`}
        className="contact-btn"
        aria-label="Send an email to Abdul Haseeb Memon"
      >
        <Mail size={20} />
        Contact Me
      </a>
    </section>
  );
}

