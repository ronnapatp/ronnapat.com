module.exports = {
  async redirects() {
    return [
      {
        source: "/en-us/blog",
        destination: "https://blog.ronnapat.com",
        permanent: false,
      },
      {
        source: "/th-th/blog",
        destination: "https://blog.ronnapat.com",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "https://blog.ronnapat.com",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/en-us/contact",
        permanent: false,
      },
      {
        source: "/cookie",
        destination: "/en-us/cookie",
        permanent: false,
      },
      {
        source: "/donate",
        destination: "https://www.buymeacoffee.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/en-us/donate",
        destination: "https://www.buymeacoffee.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/tw-bot",
        destination: "https://github.com/ronnapatp/twitter-bot",
        permanent: false,
      },
      {
        source: "/b/tw-bot",
        destination: "https://blog.ronnapat.com/blog/my-twitter-bot",
        permanent: false,
      },
      {
        source: "/b/my-web",
        destination: "https://blog.ronnapat.com/blog/my-website",
        permanent: false,
      },
    ];
  },
};
