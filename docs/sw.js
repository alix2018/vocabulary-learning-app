if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-all-vGS0.css",revision:null},{url:"assets/index-BSj7Jlim.js",revision:null},{url:"index.html",revision:"d2b0bc6d855b1a9331b9be68807309ec"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"210e37e3a6d990a888c824555e7b6400"},{url:"apple-touch-icon.png",revision:"27a7a2f2bc4e2cb205b707d5f706bc0a"},{url:"android-chrome-192x192.png",revision:"ec9fd5b9c8026789707c1f88a32001b7"},{url:"android-chrome-512x512.png",revision:"363b2828e0c1e99c39b36dbf36e9790c"},{url:"manifest.webmanifest",revision:"e78662df44a593e6ebe11b30ca0b2706"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
