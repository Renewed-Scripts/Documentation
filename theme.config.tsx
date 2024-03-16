import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Renewed Documentation</span>,
  project: {
    link: 'https://github.com/Renewed-Scripts',
  },
  chat: {
    link: 'https://discord.com/invite/5M2ajFnQeh',
  },
  docsRepositoryBase: 'https://github.com/Renewed-Scripts/Documentation',
  footer: {
    text: 'Renewed Scripts Documentation',
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
