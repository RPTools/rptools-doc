// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RPTools Documentation',
  tagline: 'Documentation for RPTools suite',
  url: 'https://docs.rptools.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rptools', // Usually your GitHub org/user name.
  projectName: 'rptools-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'cs', 'da', 'nl', 'fr', 'de', 'it', 'ja', 'pl', 'pt-BR', 'ru', 'es-ES', 'sv-SE', 'uk']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
	        remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
	        remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RPTools Documentation',
        logo: {
          alt: 'RPTools Logo',
          src: 'img/RPTools_Logo_512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/road-map/maptool', label: 'MapTool Road Map', position: 'left'},
          {
            href: 'https://github.com/rptools/rptools-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'End User Wiki',
                to: 'https://wiki.rptools.info',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gevEtpC',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/MapTool/',
              },
              {
                label: 'Forums',
                href: 'https://forums.rptools.net/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RPTools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RPTools Team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['protobuf', 'groovy', 'java', 'regex' ],
      },
    }),
};

module.exports = config;
