// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alécol',
  tagline: '(Apprentissage Lecture & Calcul On-Line)',
  url: 'https://gylgyl2000.github.io',
  baseUrl: '/alecol-dev-wiki/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cropped-logo-Alecol.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Frederic7101', // Usually your GitHub org/user name.
  projectName: 'RepoAlecol', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  /** i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  }, */

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gylgyl2000/alecol-dev-wiki/',
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Alécol',
        logo: {
          alt: 'alecol',
          src: 'img/cropped-logo-Alecol.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Installation/installation',
            position: 'left',
            label: 'Installation',
          },
          {
            type: 'doc',
            docId: 'Backend_Serveur/Serveur',
            position: 'left',
            label: 'Backend',
          },
          {
            type: 'doc',
            docId: 'Frontend_Application/Application/index_html',
            position: 'left',
            label: 'Frontend',
          },
          {
            type: 'doc',
            docId: 'API/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'Documents/Conception_detaillee',
            position: 'left',
            label: 'Documents',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/Frederic7101/RepoAlecol',
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
                label: 'Tutoriel',
                to: '/docs/tutoriel',
              },
            ],
          },
          {
            title: 'Aide',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/fr/docs',
              },
              /* {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              }, */
            ],
          },
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/Frederic7101/RepoAlecol',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alécol, Inc. Créé avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
