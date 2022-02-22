module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, process: false };

    return config;
  },
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
        destination: "/en-us/donate",
        permanent: false,
      },
      {
        source: "/d/patreon",
        destination: "https://www.patreon.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/d/buymeacoffee",
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
      {
        source: "/s/github",
        destination: "https://github.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/s/twitter",
        destination: "https://twitter.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/s/facebook",
        destination: "https://facebook.com/pieronnapatp",
        permanent: false,
      },
      {
        source: "/s/mail",
        destination: "mailto:me@ronnapat.com",
        permanent: false,
      },
    ];
  },
};
