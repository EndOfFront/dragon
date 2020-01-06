/// <reference types="react-scripts" />
interface Window {
  electron: any;
  Draggabilly: any;
}
declare namespace JSX {
  import { WebviewTag } from 'electron';
  interface IntrinsicElements {
      'webview': WebviewTag
  }
}
declare module '*.ico' {
  const src: string;
  export default src;
}