import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const RAW_BASE_URL = 'https://raw.githubusercontent.com/denoland/fresh/main/www/static/docs';
const PUBLIC_DIR = './docs/public';

const IMAGE_FILES = [
  'architecture-flow-v2.svg',
  'deno-deploy-gh-action.jpg',
  'fresh-daisyui-showcase.jpg',
  'fresh-partial-docs.png',
  'getting-started-1-init.jpg',
  'getting-started-2-about.png',
  'getting-started-3-countdown.png'
];

async function downloadImage(filename) {
  const url = `${RAW_BASE_URL}/${filename}`;
  const destPath = `${PUBLIC_DIR}/${filename}`;
  
  console.log(`Downloading ${filename}...`);
  
  try {
    execSync(`curl -sL "${url}" -o "${destPath}"`, { stdio: 'pipe' });
    console.log(`✓ Downloaded ${filename}`);
    return true;
  } catch (error) {
    console.log(`✗ Failed to download ${filename}`);
    return false;
  }
}

async function main() {
  if (!existsSync(PUBLIC_DIR)) {
    mkdirSync(PUBLIC_DIR, { recursive: true });
    console.log(`Created directory: ${PUBLIC_DIR}`);
  }

  console.log('Starting image sync from denoland/fresh...\n');
  
  let succeeded = 0;
  for (const filename of IMAGE_FILES) {
    const success = await downloadImage(filename);
    if (success) succeeded++;
  }
  
  console.log(`\nSync complete: ${succeeded}/${IMAGE_FILES.length} files downloaded`);
}

main().catch(console.error);
