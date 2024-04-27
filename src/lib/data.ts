export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Learn',
    url: '/learn',
    submenu: [
      {
        title: 'Languages',
        url: '/languages',
        submenu: [
          {
            title: 'Java',
            url: '/java',
          },
          {
            title: 'JavaScritp',
            url: '/javascript',
          },
          {
            title: 'Python',
            url: '/python',
          },
          {
            title: 'Rust',
            url: '/rust',
          },
          {
            title: 'TypeScript',
            url: '/typescript',
          },
        ]
      },
      {
        title: 'Engineering',
        url: '/engineering',
      },
      {
        title: 'Architecture',
        url: '/architecture',
      },
      {
        title: 'Best Pratices',
        url: '/best-pratices',
      },
    ],
  },
  {
    title: 'News',
    url: '/news',
  },
  {
    title: 'About Me',
    url: '/aboutme',
  },
]