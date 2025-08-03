import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  let vite: any;
  if (!isProduction) {
    // Development mode with Vite
    const viteModule = await import('vite');
    vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    // Production mode - serve static files
    app.use(express.static(path.resolve(__dirname, 'dist')));
  }

  // Define routes that should use SSR for SEO benefits
  const ssrRoutes = [
    '/',
    '/products',
    '/product',
    '/category',
    '/about-us',
    '/contact-us',
    '/terms',
    '/return-policy'
  ];

  // Define routes that should use CSR for better interactivity
  const csrRoutes = [
    '/faq',
    '/account',
    '/cart',
    '/checkout',
    '/login',
    '/register',
    '/admin',
    '/search'
  ];

  // Helper function to determine if route should use SSR
  const shouldUseSSR = (url: string): boolean => {
    // Remove query parameters and hash
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    // Check if it's a CSR route
    const isCSRRoute = csrRoutes.some(route => 
      cleanUrl.startsWith(route) || cleanUrl === route
    );
    
    if (isCSRRoute) return false;
    
    // Check if it's an SSR route
    const isSSRRoute = ssrRoutes.some(route => 
      cleanUrl.startsWith(route) || cleanUrl === route
    );
    
    return isSSRRoute;
  };

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template: string;
      let render: any;

      if (!isProduction) {
        // Development - use Vite
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // Production - use built files
        template = fs.readFileSync(
          path.resolve(__dirname, 'dist/index.html'),
          'utf-8'
        );
        render = (await import('./dist/entry-server.js')).render;
      }

      if (shouldUseSSR(url)) {
        // SSR: Render on server for SEO-critical pages
        console.log(`🔍 SSR rendering: ${url}`);
        const { html } = await render(url);
        const finalHtml = template.replace(`<!--app-html-->`, html);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      } else {
        // CSR: Send empty shell for client-side rendering
        console.log(`⚡ CSR rendering: ${url}`);
        const finalHtml = template.replace(`<!--app-html-->`, '<div id="root"></div>');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      }
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`✅ ${isProduction ? 'Production' : 'Development'} server running at http://localhost:${port}`);
  });
}

createServer();
