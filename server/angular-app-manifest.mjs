
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SIPO/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OXAU76KG.js",
      "chunk-D255CWL4.js",
      "chunk-GB7557WW.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-24R6JFKB.js",
      "chunk-GB7557WW.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3NYS7SHN.js"
    ],
    "route": "/SIPO/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFIYLVTE.js",
      "chunk-D255CWL4.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23607, hash: '62876af597aef162dd97ee96b402e737008da47af129775df2fba81711dc7592', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17231, hash: 'e5cb84650966bb01cdb064f8850dbd61d4cf84f2d6e81000a889209c04faa325', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82372, hash: 'e73e089510262e19aa95f53743c26c3955074ef11e6723c5a67e917f9f6365cf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82476, hash: '339ef00ed5ef6296f03485525c5fd26ef8f7e3778a6f4d95eb02ea1f0b3d1b7d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 82476, hash: 'e2234c43092cb606695a57a5c9c882dcf0045fa705f346848a9d0cc9e9f8c84f', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-WXI3XYL2.css': {size: 14754, hash: 'moX9OulxQI4', text: () => import('./assets-chunks/styles-WXI3XYL2_css.mjs').then(m => m.default)}
  },
};
