if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(l.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"63ef7993073941ebc300732d167b6f14"},{url:"assets/ActionsMenu-BXOjvYu9.css",revision:null},{url:"assets/ActionsMenu-DwPXa-7R.js",revision:null},{url:"assets/enqueueRelatedStreams-D6hSsOZB.js",revision:null},{url:"assets/hls-BdzRFHu8.js",revision:null},{url:"assets/imsc.all.min-B7x7tHTt.js",revision:null},{url:"assets/index-B1vevX22.css",revision:null},{url:"assets/index-wmVoKqK-.js",revision:null},{url:"assets/setAudioStreams-DO6WpFIv.js",revision:null},{url:"assets/setDiscoveries-Ba7qfhcd.js",revision:null},{url:"assets/setSubtitles-2Y7jyE77.js",revision:null},{url:"assets/Settings-Bb0B-BkV.js",revision:null},{url:"assets/Settings-DrSMNOCs.css",revision:null},{url:"assets/sortable.esm-BhoLyUOZ.js",revision:null},{url:"assets/start-BQDXwqsJ.js",revision:null},{url:"assets/UpdatePrompt-C0lvHntI.js",revision:null},{url:"assets/UpdatePrompt-DZu1ZhCf.css",revision:null},{url:"assets/virtual_pwa-register-Ctw5HrMg.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"594f5a783c4cdd1aceb80372f5d187dd"},{url:"calendar-schedule-fill.png",revision:"0d05747d7169fdf291006a50e8771eac"},{url:"flyingdarkfox_banner.webp",revision:"b196fbb00e5fa8d41193ada56fd70b42"},{url:"heart-fill.png",revision:"70a7b805de9841dffdb2b04d23f1ed2c"},{url:"logo192.png",revision:"54d21dccbc9840dded97be3181171c07"},{url:"logo512.png",revision:"54d21dccbc9840dded97be3181171c07"},{url:"memories-fill.png",revision:"441fea54950a091b97c43033c9d1728e"},{url:"NotoSans.woff2",revision:"f21d1ef695deca99e8d998633d9446ff"},{url:"remixicon.woff2",revision:"1eb52ba94ba5954f1b310d0bebe4cca2"},{url:"manifest.webmanifest",revision:"77f7baa4a47364f98beab659f5456905"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
