const routes = module.exports = require('next-routes')()

routes
  .add({ name: 'Home', pattern: '/', page: 'Home' })
  .add({ name: '404', pattern: '/404', page: 'ErrorPage' })
  .add({ name: 'Article Page', pattern: '/:year([0-9]{4})/:month([0-9]{2})/:day([0-9]{2})/:slug', page: 'ArticlePage' })
  .add({ name: 'Category Page', pattern: '/category/:categorypath+', page: 'CategoryPage' })
  .add({ name: 'Author Page', pattern: '/author/:authorId', page: 'AuthorPage' })
  .add({ name: 'Search Results', pattern: '/search', page: 'SearchResults' })
  .add({ name: 'Coloring Contest Page', pattern: '/coloring-contest', page: 'ColoringContestPage' })
  .add({ name: 'Custom Page', pattern: '/:pageId', page: 'CustomPage' })
  .add({ name: 'Preview', pattern: '/_preview/:postId/:wpnonce', page: 'ArticlePreview' })
  .add({ name: 'SiteMap', pattern: '/sitemap.xml', page: 'ArticlePreview' })
