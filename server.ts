import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      const template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );

      const transformedTemplate = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { html } = await render();

      const finalHtml = transformedTemplate.replace(`<!--app-html-->`, html);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(5173, () => {
    console.log('✅ SSR server running at http://localhost:5173');
  });
}

createServer();
