import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

// function useHead() {
//   return (
//     <>
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta property="og:title" content="Renewed Scripts" />
//       <meta property="og:description" content="Documentation for Renewed Scripts" />
//     </>
//   );
// }


function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://renewed.dev${asPath}`;
  const description = frontMatter.description || "Documentation for Renewed resources for FiveM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/renewed.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Docs';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}




// const config: DocsThemeConfig = {
//   logo: <span>Renewed Scripts</span>,
//   project: {
//     link: 'https://github.com/Renewed-Scripts',
//   },
//   chat: {
//     link: 'https://discord.com/invite/5M2ajFnQeh',
//   },
//   docsRepositoryBase: 'https://github.com/Renewed-Scripts/Documentation',
//   footer: {
//     text: 'Renewed Scripts',
//   },

//   sidebar: {
//     defaultMenuCollapseLevel: 1,
//   },

//   head: useHead,
// }


const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '40px',
        background: "url('https://avatars.githubusercontent.com/u/103452336?s=200&v=4') no-repeat left",
        backgroundSize: '40px',
        fontWeight: 550,
      }}
    >
      Documentation
    </div>
  ),  project: {
    link: 'https://github.com/Renewed-Scripts',
  },
  chat: {
    link: 'https://discord.com/invite/5M2ajFnQeh',
  },
  docsRepositoryBase: 'https://github.com/Renewed-Scripts/Documentation',
  footer: {
    text: 'Renewed Scripts',
  },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps: useNextSeoProps,
}






export default config
