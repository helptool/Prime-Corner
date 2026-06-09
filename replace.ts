import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src');

const replacements: Record<string, string> = {
  '#1A1412': '#09090B',
  '#2A1F1A': '#18181B',
  '#3A2A24': '#27272A',
  '#4A362D': '#3F3F46',
  '#8C7A6B': '#71717A',
  '#BCAAA4': '#A1A1AA',
  '#E5DACC': '#FAFAFA'
};

function walk(directory: string) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      for (const [key, value] of Object.entries(replacements)) {
        content = content.split(key).join(value);
      }
      fs.writeFileSync(filePath, content);
    }
  }
}

walk(dir);
console.log('Replaced colors');
