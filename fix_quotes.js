const fs = require('fs');
let content = fs.readFileSync('src/data/contentTypes.js', 'utf8');

// Fix recommendedThinkers arrays that were corrupted
content = content.replace(/\["「([a-z_]+)」", "/g, '["$1", "');
content = content.replace(/, "「([a-z_]+)」"\]/g, ', "$1"]');
content = content.replace(/, "「([a-z_]+)」", "/g, ', "$1", "');

const lines = content.split('\n');
const fixed = lines.map(line => {
  const trimmed = line.trim();
  if (trimmed.startsWith('[') || trimmed.startsWith(']') || trimmed.startsWith('{') || trimmed.startsWith('}')) return line;
  if (trimmed.startsWith('//')) return line;
  
  const quoteCount = (line.match(/"/g) || []).length;
  if (quoteCount <= 2) return line;
  
  const isStringValue = line.includes(': "') || line.includes(": '") || trimmed.startsWith('"');
  if (!isStringValue) return line;
  
  if (line.includes('[') && line.includes(']')) return line;
  
  let valueStart = line.indexOf('"');
  if (valueStart === -1) return line;
  
  let valueEnd = line.lastIndexOf('"');
  if (valueEnd === -1 || valueEnd <= valueStart) return line;
  
  let prefix = line.slice(0, valueStart + 1);
  let middle = line.slice(valueStart + 1, valueEnd);
  let suffix = line.slice(valueEnd);
  
  middle = middle.replace(/"([^"]*)"/g, '《$1》');
  
  return prefix + middle + suffix;
});

fs.writeFileSync('src/data/contentTypes.js', fixed.join('\n'));
console.log('Fixed contentTypes.js');
