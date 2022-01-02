module.exports = {
    async redirects() {
        return [
          {
            source: '/en-us/blog',
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
        ]
      },
}