module.exports = {
  ci: {
    collect: {
      url: [
        'https://alazharschool.com/',
        'https://alazharschool.com/services',
        'https://alazharschool.com/blog/articles/learn-quran-online',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
      },
    },
  },
}
