import { useState, useCallback } from 'react';
import ProfileHeader from './components/ProfileHeader';
import SaveContactButton from './components/SaveContactButton';
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
      <SaveContactButton onToast={showToast} />
      <SocialLinks />
      <ContactLinks />
      <QRCodeSection onToast={showToast} />
      <Footer />
      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
    </div>
  );
}
