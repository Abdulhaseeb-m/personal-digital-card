import { Globe } from 'lucide-react';
import { profile } from '../data/profile';

// Custom brand icons (lucide-react doesn't include brand/social icons)
const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const SnapchatIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.006 2C8.09 2 6.016 4.678 6.016 7.64c0 .97.344 2.076.559 2.694.11.316-.07.648-.398.75a.98.98 0 0 1-.3.048c-.372 0-.7-.152-1.08-.152-.5 0-.934.355-.934.788 0 .555.676.87 1.348 1.09 1.078.351 1.246.605 1.164 1.098-.14.84-.71 1.527-1.32 2.152-.273.28-.117.668.23.797.97.36 1.754.238 2.34.652.437.308.52.93 1.52 1.258.7.23 1.59.383 2.855.383s2.156-.152 2.855-.383c1-.328 1.082-.95 1.52-1.258.585-.414 1.37-.293 2.34-.652.346-.13.503-.516.23-.797-.61-.625-1.18-1.312-1.32-2.152-.083-.493.086-.747 1.164-1.098.672-.22 1.348-.535 1.348-1.09 0-.433-.434-.788-.934-.788-.38 0-.707.152-1.08.152a.98.98 0 0 1-.3-.047c-.328-.102-.508-.434-.398-.75.215-.619.559-1.723.559-2.695C17.986 4.678 15.922 2 12.006 2z" />
  </svg>
);

const links = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: LinkedinIcon,
    url: profile.social.linkedin,
    className: 'social-card--linkedin',
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: GithubIcon,
    url: profile.social.github,
    className: 'social-card--github',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: InstagramIcon,
    url: profile.social.instagram,
    className: 'social-card--instagram',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    icon: FacebookIcon,
    url: profile.social.facebook,
    className: 'social-card--facebook',
  },
  {
    key: 'snapchat',
    label: 'Snapchat',
    icon: SnapchatIcon,
    url: profile.social.snapchat,
    className: 'social-card--snapchat',
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    icon: Globe,
    url: profile.social.portfolio,
    className: 'social-card--portfolio',
  },
];

export default function SocialLinks() {
  return (
    <section className="social-section" aria-label="Social links">
      <h2 className="section-title">Connect With Me</h2>
      <div className="social-grid">
        {links.map(({ key, label, icon: Icon, url, className }) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card ${className}`}
            aria-label={`Visit my ${label} profile`}
          >
            <span className="social-card-icon">
              <Icon size={20} />
            </span>
            <span className="social-card-label">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
