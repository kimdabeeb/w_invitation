/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAVERMAPS_CLIENT_ID: string
  VITE_APP_KAKAOCOPY_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    navermaps: typeof import('navermaps');
  }
}


declare module "*.mp4" {
  const src: string;
  export default src; 
}