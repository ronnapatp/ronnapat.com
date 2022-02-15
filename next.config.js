module.exports = {
    async redirects() {
        return [
          {
            source: '/en-us/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/th-th/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/contact',
            destination: '/en-us/contact',
            permanent: false,
          },
          {
            source: '/cookie',
            destination: '/en-us/cookie',
            permanent: false,
          },
          {
            source: '/donate',
            destination: 'https://www.buymeacoffee.com/ronnapatp',
            permanent: false,
          },
          {
            source: '/en-us/donate',
            destination: 'https://www.buymeacoffee.com/ronnapatp',
            permanent: false,
          },
        ]
      },
}