const glob = require('glob');

let markdownFiles = glob.sync('docs/recipes/**/*.md').map(f => '/' + f.replace('docs/',''));

module.exports = {
  title: 'Bedard Family Favorite Recipes',
  description: 'A curated list of recipe favorites from around the net.',
  themeConfig: {
    sidebar: markdownFiles,
    displayAllHeaders: false,
    lastUpdated: 'Last Updated'
  },
  base: '/BedardFamilyFavoriteRecipes/'
}