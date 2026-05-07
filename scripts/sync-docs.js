import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_URL = 'https://github.com/denoland/fresh.git';
const TEMP_DIR = path.join(__dirname, '..', '.temp-repo');
const DOCS_DIR = path.join(__dirname, '..', 'docs', 'en');
const REPO_DOCS_PATH = 'docs';

async function syncDocs() {
  try {
    console.log('开始同步 Fresh 文档...');
    
    // 清理并创建临时目录
    if (fs.existsSync(TEMP_DIR)) {
      console.log('清理临时目录...');
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TEMP_DIR, { recursive: true });

    console.log('克隆 Fresh 仓库...');
    const git = simpleGit(TEMP_DIR);
    await git.clone(REPO_URL, TEMP_DIR);

    // 删除现有 docs/en 目录
    if (fs.existsSync(DOCS_DIR)) {
      console.log('清理旧的英文文档...');
      fs.rmSync(DOCS_DIR, { recursive: true, force: true });
    }

    // 复制 docs 目录
    const sourceDocsPath = path.join(TEMP_DIR, REPO_DOCS_PATH);
    if (fs.existsSync(sourceDocsPath)) {
      console.log('复制文档...');
      fs.cpSync(sourceDocsPath, DOCS_DIR, { recursive: true });
      console.log('文档同步完成!');
    } else {
      console.error('在仓库中找不到 docs 目录');
    }

    // 清理临时目录
    console.log('清理临时文件...');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });

    console.log('同步成功!');
  } catch (error) {
    console.error('同步失败:', error);
    process.exit(1);
  }
}

syncDocs();
