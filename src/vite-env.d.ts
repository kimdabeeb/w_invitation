/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare global {
  interface Window {
    navermaps: typeof import('navermaps');
    Cypress: unknown;
    }
}

interface Window {
  Kakao: any;
}

declare module "*.mp4";