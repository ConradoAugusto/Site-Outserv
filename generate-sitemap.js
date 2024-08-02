import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/sobre', changefreq: 'monthly', priority: 0.7 },
  { url: '/contato', changefreq: 'monthly', priority: 0.7 },
  { url: '/link', changefreq: 'monthly', priority: 0.7 },
  { url: '/legal/politicas-de-privacidade', changefreq: 'monthly', priority: 0.7 },
  { url: '/legal/termos-e-condicoes', changefreq: 'monthly', priority: 0.7 },
  // Adicione mais URLs conforme necessário
];

const stream = new SitemapStream({ hostname: 'https://outserv.com.br' });
const writeStream = createWriteStream('./public/sitemap.xml');

Readable.from(links).pipe(stream).pipe(writeStream);

streamToPromise(stream).then(() => {
  console.log('Sitemap criado com sucesso!');
}).catch(err => {
  console.error('Erro ao criar o sitemap:', err);
});
