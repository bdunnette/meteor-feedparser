Package.describe({
  name: 'danimal:feedparser',
  summary: 'Meteor package for node-feedparser.',
  version: '1.0.2',
  git: 'https://github.com/dan335/meteor-feedparser'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('feedparser.js');
  api.export('FeedParser', 'server');
});

Npm.depends({
    feedparser: '0.19.2'
})
