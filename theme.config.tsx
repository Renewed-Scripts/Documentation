import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';

function useHead() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Renewed Scripts" />
      <meta property="og:description" content="Documentation for Renewed Scripts" />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: <span>Renewed Scripts</span>,
  project: {
    link: 'https://github.com/Renewed-Scripts',
  },
  chat: {
    link: 'https://discord.com/invite/5M2ajFnQeh',
  },
  docsRepositoryBase: 'https://github.com/Renewed-Scripts/Documentation',
  footer: {
    text: 'Renewed Scripts',
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
  },

  head: useHead,
}

export default config
