const glob = require('glob');

let markdownFiles = glob.sync('docs/recipes/**/*.md').map(f => '/' + f.replace('docs/',''));

module.exports = {
  title: 'Bedard Family Favorite Recipes',
  description: 'A curated list of recipe favorites from around the net.',
  themeConfig: {
    repo: 'bobonthenet/BedardFamilyFavoriteRecipes',
    editLinks: true,
    editLinkText: 'Help improve this page!',
    docsDir: 'docs',
    sidebar: [ 
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Recipes',
        children: [...markdownFiles]
      },
      {
        title: 'About Me',
        path: '/About'
      }
    ],
    displayAllHeaders: false,
    lastUpdated: 'Last Updated'
  }//,
  //base: '/BedardFamilyFavoriteRecipes/'
}