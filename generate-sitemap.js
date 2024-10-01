import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

// Defina suas rotas manualmente
const routes = [
  '/',
  '/sobre',
  '/contato',
  '/blog',
  '/link',
  '/legal/politicas-de-privacidade',
  '/legal/termos-e-condicoes',
];
async function generateSitemap() {
  const smStream = new SitemapStream({
    hostname: 'https://outserv.com.br',
  });

  routes.forEach(route => {
    smStream.write({ url: route.replace(/:.*$/, ''), changefreq: 'daily', priority: 0.7 });
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap gerado com sucesso!');
}

generateSitemap().catch((err) => {
  console.error('Erro ao gerar o sitemap:', err);
});
