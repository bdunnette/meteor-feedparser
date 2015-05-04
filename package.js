Package.describe({
  name: 'bdunnette:feedparser',
  summary: 'Meteor package for node-feedparser.',
  version: '1.0.3',
  git: 'https://github.com/bdunnette/meteor-feedparser'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('feedparser.js');
  api.export('FeedParser', 'server');
});

Npm.depends({
    feedparser: '1.0.1'
})
