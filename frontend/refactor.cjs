const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      content = content.replace(/background:\s*'white'/g, "background: 'var(--color-surface)'");
      content = content.replace(/backgroundColor:\s*'white'/g, "backgroundColor: 'var(--color-surface)'");
      content = content.replace(/background:\s*'(#fff|#FFFFFF)'/gi, "background: 'var(--color-surface)'");
      content = content.replace(/backgroundColor:\s*'(#fff|#FFFFFF)'/gi, "backgroundColor: 'var(--color-surface)'");
      content = content.replace(/color:\s*'var\(--color-ink\)'/g, "color: 'var(--color-text-primary)'");
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir('c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages');
processDir('c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/components');
