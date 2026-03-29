/** Inline beforeInteractive: light by default; dark only if user chose it (localStorage). */
export function themeScript(): string {
  return `(function(){try{var k='me-theme';var s=localStorage.getItem(k);var d=s==='dark';document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
}
