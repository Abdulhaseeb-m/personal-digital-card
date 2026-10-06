import { useState, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ProfileHeader from './components/ProfileHeader';
import SocialLinks from './components/SocialLinks';
import ContactLinks from './components/ContactLinks';
import QRCodeSection from './components/QRCodeSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState({ message: '', visible: false });

  const showToast = useCallback((message) => {
    setToast({ message, visible: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="app">
      <ProfileHeader />
      <SocialLinks />
      <ContactLinks />
      <QRCodeSection onToast={showToast} />
      <Footer />
      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
