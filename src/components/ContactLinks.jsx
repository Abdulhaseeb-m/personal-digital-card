import { Mail, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';

const contacts = [
  {
    key: 'email',
    label: 'Email Me',
    value: profile.email,
    icon: Mail,
    href: `mailto:${profile.email}`,
    className: 'contact-card--email',
  },
];

export default function ContactLinks() {
  return (
    <section className="contact-section" aria-label="Contact information">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-grid">
        {contacts.map(({ key, label, value, icon: Icon, href, className }) => (
          <a
            key={key}
            href={href}
            className={`contact-card ${className}`}
            aria-label={label}
          >
            <span className="contact-card-icon">
              <Icon size={20} />
            </span>
            <span className="contact-card-text">
              <span className="contact-card-label">{label}</span>
              <span className="contact-card-value">{value}</span>
            </span>
            <ChevronRight size={18} className="contact-card-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
