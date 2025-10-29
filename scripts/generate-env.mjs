#!/usr/bin/env node
/**
 * Gera um arquivo env.js para ser consumido no client (window.ENV)
 * Lê variáveis do processo em build time (Vercel) e grava em native-federation-shell-angular/env.js
 *
 * Variáveis suportadas:
 * - NG_FULL_BASE_URL: URL base do MFE Angular Full
 *   - Ex.: dev -> http://localhost:9400/
 *   - Ex.: prod -> https://mfe-labs-mf-es-angular-mfe-ng-full-two.vercel.app/
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const env = {
  NG_FULL_BASE_URL:
    process.env.NG_FULL_BASE_URL && process.env.NG_FULL_BASE_URL.trim().length > 0
      ? ensureTrailingSlash(process.env.NG_FULL_BASE_URL.trim())
      : 'http://localhost:9400/',
};

const outPath = join(projectRoot, 'env.js');
const file = `// Gerado em build time
window.ENV = ${JSON.stringify(env, null, 2)};
`;

await writeFile(outPath, file, 'utf-8');
console.log('env.js gerado em', outPath);

function ensureTrailingSlash(url) {
  return url.endsWith('/') ? url : url + '/';
}
