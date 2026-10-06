import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => onHide(), 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  return (
    <div
      className={`toast ${visible ? 'toast--visible' : ''}`}
      role="alert"
      aria-live="polite"
    >
      <CheckCircle />
      {message}
    </div>
  );
}
