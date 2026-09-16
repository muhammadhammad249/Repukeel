const fs = require('fs');
const css = fs.readFileSync('dmcamaster.css', 'utf8');

const colors = css.match(/#[0-9a-fA-F]{3,6}\b/g);
if (colors) {
  const counts = {};
  colors.forEach(c => {
    c = c.toLowerCase();
    counts[c] = (counts[c] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  console.log("Top Hex Colors:");
  console.log(sorted.slice(0, 30).map(x => `${x[0]}: ${x[1]}`).join('\n'));
}

const rgbColors = css.match(/rgba?\([^)]+\)/g);
if (rgbColors) {
    const counts = {};
    rgbColors.forEach(c => {
      counts[c] = (counts[c] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log("\nTop RGB Colors:");
    console.log(sorted.slice(0, 30).map(x => `${x[0]}: ${x[1]}`).join('\n'));
}
