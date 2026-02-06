import { useState, useRef, useEffect } from 'react';
import './Poems.css';

const STORAGE_KEY = 'sejal-poem';
const FONT_STYLE_KEY = 'sejal-poem-font';

const fontStyles = [
  { id: 'elegant', label: 'Elegant', font: "'Cormorant Garamond', Georgia, serif" },
  { id: 'simple', label: 'Simple', font: "'Outfit', system-ui, sans-serif" },
  { id: 'script', label: 'Script', font: "'Dancing Script', cursive" },
  { id: 'classic', label: 'Classic', font: "'Great Vibes', cursive" },
];

const EMOJIS = ['💕', '🌸', '✨', '💖', '🌷', '⭐', '🦋', '💐', '🌙', '❤️', '🕊️', '🌺', '💝', '☀️', '🌹'];

export default function Poems() {
  const [fontStyle, setFontStyle] = useState(() => {
    try {
      return localStorage.getItem(FONT_STYLE_KEY) || 'elegant';
    } catch {
      return 'elegant';
    }
  });
  const [savedNotice, setSavedNotice] = useState(false);
  const editorRef = useRef(null);

  const currentFont = fontStyles.find((f) => f.id === fontStyle)?.font || fontStyles[0].font;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && editorRef.current) {
        editorRef.current.innerHTML = saved;
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FONT_STYLE_KEY, fontStyle);
    } catch (_) {}
  }, [fontStyle]);

  const getPlainText = () => {
    if (!editorRef.current) return '';
    return editorRef.current.innerText || '';
  };

  const getHtml = () => {
    if (!editorRef.current) return '';
    return editorRef.current.innerHTML || '';
  };

  const insertEmoji = (emoji) => {
    const el = editorRef.current;
    if (!el) return;
    el.focus();
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    const textNode = document.createTextNode(emoji);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const saveToWebsite = () => {
    try {
      localStorage.setItem(STORAGE_KEY, getHtml());
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 2000);
    } catch (_) {}
  };

  const downloadToDesktop = () => {
    const text = getPlainText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `poem-for-sejal-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page poems-page">
      <section className="poems-hero">
        <div className="container">
          <h1 className="section-title">A Poem for Sejal</h1>
          <p className="section-subtitle">
            Write your words for her. Choose a style, add emojis, and save here or to your desktop.
          </p>
        </div>
      </section>

      <section className="poems-toolbar container">
        <div className="poems-toolbar-group">
          <span className="poems-toolbar-label">Style</span>
          <select
            className="poems-font-select"
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
            aria-label="Writing style"
          >
            {fontStyles.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
        <div className="poems-toolbar-group poems-emojis">
          <span className="poems-toolbar-label">Emojis</span>
          <div className="poems-emoji-bar">
            {EMOJIS.map((emoji, i) => (
              <button
                key={i}
                type="button"
                className="poems-emoji-btn"
                onClick={() => insertEmoji(emoji)}
                aria-label={`Insert ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="poems-sheet-wrap container">
        <div
          className="poems-sheet"
          style={{ fontFamily: currentFont }}
        >
          <div
            ref={editorRef}
            className="poems-editor"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Write your poem here..."
            aria-label="Poem text"
          />
        </div>
      </section>

      <section className="poems-actions container">
        <button
          type="button"
          className="poems-btn poems-btn-save"
          onClick={saveToWebsite}
        >
          Save on website
        </button>
        <button
          type="button"
          className="poems-btn poems-btn-download"
          onClick={downloadToDesktop}
        >
          Save to desktop
        </button>
        {savedNotice && (
          <span className="poems-saved-msg">Saved on website.</span>
        )}
      </section>
    </div>
  );
}
