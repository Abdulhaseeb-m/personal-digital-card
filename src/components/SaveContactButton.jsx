import { UserPlus } from 'lucide-react';
import { profile } from '../data/profile';

export default function SaveContactButton({ onToast }) {
  const handleSave = () => {
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${profile.name}`,
      `N:${profile.name.split(' ').reverse().join(';')};;;`,
      `TEL;TYPE=CELL:${profile.phone}`,
      `EMAIL:${profile.email}`,
      `ORG:${profile.organization}`,
      `TITLE:${profile.title}`,
      `URL:${profile.social.portfolio}`,
      `ADR;TYPE=HOME:;;${profile.location};;;;`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onToast?.('Contact card downloaded successfully!');
  };

  return (
    <button
      className="save-contact-btn"
      onClick={handleSave}
      aria-label="Save contact card"
    >
      <UserPlus />
      Save Contact
    </button>
  );
}
