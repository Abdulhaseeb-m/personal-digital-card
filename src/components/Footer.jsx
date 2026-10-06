import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        &copy; {profile.footerYear} {profile.name}
      </p>
      <p className="footer-tagline">{profile.footerTagline}</p>
    </footer>
  );
}
