import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Check } from 'lucide-react';

export default function QRCodeSection({ onToast }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Abdul Haseeb Memon – Digital Card',
          text: 'Check out my digital contact card!',
          url,
        });
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        onToast?.('Profile link copied!');
      } catch {
        onToast?.('Could not copy link');
      }
    }
  };

  if (!url) return null;

  return (
    <section className="qr-section" aria-label="Share my contact">
      <h2 className="section-title">Share My Contact</h2>
      <div className="qr-card">
        <div className="qr-wrapper">
          <QRCodeSVG
            value={url}
            size={160}
            bgColor="#ffffff"
            fgColor="#0B0F19"
            level="M"
            includeMargin={false}
          />
        </div>
        <p className="qr-hint">Scan to open this profile</p>
        <button
          className="share-btn"
          onClick={handleShare}
          aria-label="Share profile"
        >
          <Share2 />
          Share Profile
        </button>
      </div>
    </section>
  );
}
