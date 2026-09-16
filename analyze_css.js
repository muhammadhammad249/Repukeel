const fs = require('fs');
const css = fs.readFileSync('dmcamaster.css', 'utf8');

// Find all root CSS variables
const rootMatches = css.match(/:root\s*{([^}]+)}/g);
if (rootMatches) {
  console.log("Root Variables:");
  console.log(rootMatches[0].split(';').map(s => s.trim()).filter(s => s.startsWith('--')).join('\n'));
} else {
  console.log("No root variables found.");
}

// Check for font-family
const fontMatches = css.match(/font-family:[^;]+;/g);
if (fontMatches) {
  console.log("\nFont Families used:");
  const uniqueFonts = [...new Set(fontMatches)];
  console.log(uniqueFonts.join('\n'));
}

// Let's also look for common background colors and text colors
const bgMatches = css.match(/background-color:(#[a-fA-F0-9]{3,6}|rgba?\([^)]+\)|[a-z]+)/g);
if (bgMatches) {
  const uniqueBgs = [...new Set(bgMatches)];
  console.log("\nBackground Colors used:");
  console.log(uniqueBgs.slice(0, 20).join('\n'));
}
