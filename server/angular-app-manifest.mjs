
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-24R6JFKB.js",
      "chunk-GB7557WW.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3NYS7SHN.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFIYLVTE.js",
      "chunk-D255CWL4.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23602, hash: '3781dbacecf64bf6dccaa5f9cf18285049860de772573d494ba96167c88e2b79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17226, hash: '7ff79ff29f058cd729533cdc7df0f88e277651404df7dc54bf74dff34267accc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 82471, hash: '97f5cab26230edce553fae36b549974cbff9efc54a417c1271d270a123cb8895', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82367, hash: '3497982787277be53bb579caaa4c41806f4a1f1d7f0f95ec7949461135a2fab5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82471, hash: '377425cdf92290050611fac2793ef3ee9a0acb33535b83457e23cbc342024f1c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-WXI3XYL2.css': {size: 14754, hash: 'moX9OulxQI4', text: () => import('./assets-chunks/styles-WXI3XYL2_css.mjs').then(m => m.default)}
  },
};
