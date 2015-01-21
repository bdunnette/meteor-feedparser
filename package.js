Package.describe({
  name: 'danimal:feedparser',
  summary: ' /* Fill me in! */ ',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('FeedParser', 'server');
  api.addFiles('feedparser.js');
});

Npm.depends({
    feedparser: '0.19.2'
})
