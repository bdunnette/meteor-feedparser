Package.describe({
  name: 'danimal:feedparser',
  summary: 'Meteor package for node-feedparser.',
  version: '1.0.1',
  git: 'https://github.com/dan335/meteor-feedparser'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('FeedParser', 'server');
  api.addFiles('feedparser.js');
});

Npm.depends({
    feedparser: '0.19.2'
})
