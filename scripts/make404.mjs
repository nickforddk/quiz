import { copyFile, access } from 'fs/promises';

async function run() {
  try {
    await access('dist/index.html');
  } catch {
    console.error('dist/index.html not found (build may have failed).');
    process.exit(1);
  }
  try {
    await copyFile('dist/index.html', 'dist/404.html');
    console.log('Created dist/404.html for GitHub Pages SPA fallback.');
  } catch (e) {
    console.error('Failed to create 404.html:', e);
    process.exit(1);
  }
}
run();