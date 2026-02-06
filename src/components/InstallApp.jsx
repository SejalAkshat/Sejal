import { useState, useEffect } from 'react';
import './InstallApp.css';

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
      setIsInstalled(true);
    }
  };

  if (isInstalled) return null;

  return (
    <div className="install-app-wrap">
      {showInstall && deferredPrompt && (
        <div className="install-app-banner">
          <span className="install-app-text">Install Sejal on your device</span>
          <div className="install-app-actions">
            <button type="button" className="install-app-btn" onClick={handleInstall}>
              Install app
            </button>
            <button type="button" className="install-app-dismiss" onClick={() => setShowInstall(false)} aria-label="Dismiss">
              ×
            </button>
          </div>
        </div>
      )}
      <details className="install-app-help">
        <summary>How to install as app</summary>
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
