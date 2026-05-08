#!/usr/bin/env node

import simpleGit from 'simple-git';
import { existsSync, mkdirSync, cpSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = join(__dirname, '..', 'docs');
const enLatestDir = join(docsDir, 'en', 'latest');

const REPO_URL = 'https://github.com/denoland/fresh';
const DOCS_PATH = 'docs';

async function syncDocs() {
  console.log('Starting to sync documentation from GitHub...');

  if (existsSync(enLatestDir)) {
    rmSync(enLatestDir, { recursive: true, force: true });
  }

  mkdirSync(enLatestDir, { recursive: true });

  const git = simpleGit();
  await git.clone(REPO_URL, join(__dirname, 'temp-clone'), ['--depth=1']);

  const sourceDir = join(__dirname, 'temp-clone', DOCS_PATH);
  if (existsSync(sourceDir)) {
    cpSync(sourceDir, enLatestDir, { recursive: true });
    console.log(`Documentation synced to ${enLatestDir}`);
  } else {
    console.error(`Docs path ${DOCS_PATH} not found in repo`);
  }

  rmSync(join(__dirname, 'temp-clone'), { recursive: true, force: true });
  console.log('Sync completed!');
}

syncDocs().catch(console.error);
