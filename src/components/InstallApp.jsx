import { useState, useEffect, useRef } from 'react';
import './InstallApp.css';

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') setIsInstalled(true);
      } catch (_) {
        showInstructions();
      }
    } else {
      showInstructions();
    }
  };

  const showInstructions = () => {
    if (detailsRef.current) {
      detailsRef.current.open = true;
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  if (isInstalled) return null;

  return (
    <div className="install-app-wrap">
      <div className="install-app-card">
        <p className="install-app-heading">Use Sejal as an app</p>
        <button type="button" className="install-app-btn" onClick={handleInstall}>
          Install app
        </button>
        <p className="install-app-hint">
          {deferredPrompt
            ? 'Click above to add Sejal to your home screen or apps.'
            : 'If nothing happens, use the steps below for your device.'}
        </p>
      </div>
      <details ref={detailsRef} className="install-app-help">
        <summary>How to install on my device</summary>
        <ul>
          <li><strong>Android (Chrome):</strong> Menu (⋮) → “Install app” or “Add to Home screen”</li>
          <li><strong>iPhone/iPad (Safari):</strong> Share → “Add to Home Screen”</li>
          <li><strong>Windows (Chrome/Edge):</strong> Install icon in the address bar or Menu → “Install Sejal”</li>
          <li><strong>Mac (Chrome):</strong> Install icon in the address bar</li>
        </ul>
      </details>
    </div>
  );
}
