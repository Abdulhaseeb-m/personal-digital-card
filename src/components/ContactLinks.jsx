import { Phone, Mail, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';

const contacts = [
  {
    key: 'phone',
    label: 'Call Me',
    value: profile.phone,
    icon: Phone,
    href: `tel:${profile.phone}`,
    className: 'contact-card--phone',
  },
  {
    key: 'email',
    label: 'Email Me',
    value: profile.email,
    icon: Mail,
    href: `mailto:${profile.email}`,
    className: 'contact-card--email',
  },
  
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: profile.phone,
    icon: MessageCircle,
    href: `https://wa.me/${profile.whatsapp}`,
    className: 'contact-card--whatsapp',
  },
  {
    key: 'location',
    label: 'Location',
    value: profile.location,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
    className: 'contact-card--location',
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
            target={key === 'location' ? '_blank' : undefined}
            rel={key === 'location' ? 'noopener noreferrer' : undefined}
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
