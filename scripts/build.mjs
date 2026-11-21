import { mkdir, cp, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'assets']) {
  await cp(file, `dist/${file}`, { recursive: true });
}
await writeFile('dist/.nojekyll', '');
console.log('Sitio construido en dist/');
