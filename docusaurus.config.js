const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NFDI4Chem Knowledge Base',
  tagline: 'A place for all knowledge regarding to general and chemistry specific RDM',
  url: 'https://github.com/JohnJolliffe-JGU/knowledge_base',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JohnJolliffe-JGU', // Usually your GitHub org/user name.
  projectName: 'knowledge_base', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/4Chem.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          href: 'https://github.com/NFDI4Chem/knowledge_base',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Community',
          items: [
           
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/nfdi4chem',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nfdi4chem',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NFDI4Chem Website',
              to: 'https://nfdi4chem.de',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NFDI4Chem/knowledge_base',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NFDI4Chem. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/NFDI4Chem/knowledge_base',
       
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
