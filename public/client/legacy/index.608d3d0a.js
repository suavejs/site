import"./typeof.e7ecc59b.js";import"./InputOutputToggle.c5684345.js";import"./_commonjsHelpers.cffaff9d.js";import"./asyncToGenerator.a0701408.js";import{_ as n,a as t,b as e,c as o,i,s as r,d as a,F as l,S as s,e as c,t as p,g as u,h as d,j as f,k as m,l as h,m as g,p as v,q as b,r as y,u as $,n as x,A as w,x as j,f as k,I as F,y as _,J as I,$ as S,P as A,o as E,v as N,B as T,w as R,Q as z,z as O,T as D}from"./index.edd899e0.js";import{R as H}from"./ReplWidget.060f2dc2.js";var P=[{name:".gitignore",isFolder:!1,type:"git",data:".DS_Store\nnode_modules\npublic/bundle.*\n"},{name:"package.json",isFolder:!1,type:"npm",data:'{\n  "name": "svelte-app",\n  "version": "1.0.0",\n  "devDependencies": {\n    "npm-run-all": "^4.1.5",\n    "rollup": "^1.10.1",\n    "rollup-plugin-commonjs": "^9.3.4",\n    "rollup-plugin-livereload": "^1.0.0",\n    "rollup-plugin-node-resolve": "^4.2.3",\n    "rollup-plugin-svelte": "^5.0.3",\n    "rollup-plugin-terser": "^4.0.4",\n    "svelte": "^3.0.0"\n  },\n  "dependencies": {\n    "sirv-cli": "^0.4.4"\n  },\n  "scripts": {\n    "build": "rollup -c",\n    "autobuild": "rollup -c -w",\n    "dev": "run-p start:dev autobuild",\n    "start": "sirv public --single",\n    "start:dev": "sirv public --single --dev"\n  }\n}\n'},{name:"public",isFolder:!0,type:"folder",children:[{name:"favicon.png",type:"image",isFolder:!1,data:[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,128,0,0,0,128,8,6,0,0,0,195,62,97,203,0,0,0,9,112,72,89,115,0,0,11,18,0,0,11,18,1,210,221,126,252,0,0,11,233,73,68,65,84,120,156,237,93,9,142,19,71,20,173,192,192,176,15,136,77,32,68,38,117,1,38,39,200,228,4,204,13,152,156,32,228,4,12,55,24,78,16,56,65,134,27,48,39,8,92,160,98,16,98,71,48,98,223,163,103,234,7,199,216,99,247,223,170,218,246,147,90,44,146,219,237,174,87,127,255,191,126,248,242,229,75,152,97,122,177,99,182,246,211,141,25,1,166,28,51,2,76,57,102,4,152,114,204,77,251,11,24,134,148,210,98,8,97,41,95,135,243,159,195,112,51,132,240,60,255,121,51,198,216,169,238,7,13,193,204,11,200,200,11,190,18,66,88,206,215,130,224,118,91,33,132,27,249,218,168,153,16,83,79,128,148,210,106,8,1,215,47,134,95,115,43,132,176,158,201,240,220,240,123,26,99,42,9,144,82,130,72,191,152,47,201,78,111,10,72,134,141,16,194,90,45,82,97,234,8,144,82,194,162,175,57,47,252,32,92,171,129,8,83,67,128,148,210,114,22,195,231,42,120,28,2,36,194,122,140,113,173,212,3,76,60,1,178,184,199,11,254,189,130,199,25,6,216,8,171,49,198,155,222,95,60,209,113,128,148,210,74,118,205,106,94,252,144,165,210,223,89,61,185,98,34,37,64,222,245,87,67,8,231,43,120,156,166,128,109,112,209,203,91,152,56,2,84,100,228,73,0,149,176,236,65,130,137,33,64,14,228,92,53,246,231,61,225,66,130,137,176,1,82,74,216,241,255,76,208,226,135,108,23,220,200,234,204,12,173,150,0,149,186,118,218,48,149,4,173,76,6,121,187,118,59,118,236,8,243,243,243,97,110,110,174,123,245,226,243,231,207,225,253,251,247,225,221,187,119,221,191,27,224,92,86,109,43,22,55,111,157,4,200,174,29,118,253,143,150,223,131,133,94,88,88,8,123,247,238,13,187,119,239,30,235,51,31,63,126,12,111,222,188,9,175,95,191,14,175,94,189,210,126,164,203,22,1,163,214,16,192,203,181,195,130,31,57,114,36,236,217,179,71,116,31,144,97,107,107,43,188,120,241,66,83,50,252,26,99,188,161,117,179,208,22,2,120,184,118,216,241,39,78,156,16,47,124,63,64,132,103,207,158,117,137,160,128,219,168,75,208,180,7,170,38,128,151,107,7,81,143,93,15,93,111,133,183,111,223,134,7,15,30,104,72,131,43,49,70,181,136,97,181,4,200,174,221,37,203,239,128,110,199,174,31,87,199,75,129,197,191,119,239,94,215,104,20,66,77,21,84,71,0,15,215,14,59,157,118,189,55,148,72,176,25,99,92,214,120,244,106,8,224,229,218,193,200,59,126,252,248,119,238,156,39,148,72,160,34,5,170,136,4,122,100,237,176,235,177,240,167,78,157,42,186,248,244,44,167,79,159,150,170,30,21,151,176,168,4,240,114,237,246,239,223,223,93,124,75,35,143,3,72,0,72,2,129,97,248,147,180,162,168,216,27,201,174,93,199,114,241,177,211,79,158,60,217,189,106,91,252,144,141,80,161,29,34,246,6,220,37,128,215,174,247,112,237,180,112,247,238,93,174,61,176,21,99,20,37,139,92,223,78,74,105,41,215,202,155,45,62,118,21,244,235,209,163,71,91,177,248,192,177,99,199,184,31,93,200,239,148,13,55,107,168,103,241,205,162,121,216,241,37,92,59,41,16,125,4,113,153,82,128,12,104,22,92,8,96,189,248,53,184,118,82,64,101,61,126,252,152,115,23,81,60,192,252,141,89,46,62,68,60,118,60,94,158,7,16,215,71,76,31,23,254,142,239,7,249,14,28,56,208,245,52,36,192,231,153,4,16,133,201,77,141,192,108,240,117,44,22,31,47,12,122,222,107,215,35,161,131,107,187,231,145,186,154,247,239,223,239,166,147,25,248,153,91,82,110,253,246,212,119,62,5,116,164,59,110,92,64,47,63,122,244,104,164,126,70,254,31,254,60,2,77,92,192,22,96,18,96,145,107,7,152,17,32,39,115,84,227,249,158,174,29,22,19,59,30,57,253,113,129,197,131,122,56,120,240,32,235,59,5,145,193,165,220,115,216,24,38,4,200,122,95,45,147,103,149,171,31,6,164,110,177,235,161,231,155,2,132,225,18,96,231,206,157,230,191,173,31,86,18,224,170,214,141,60,93,59,236,250,167,79,159,138,138,55,36,9,30,129,61,195,14,6,169,19,32,247,219,139,69,191,119,174,30,58,28,86,184,81,97,231,88,16,16,128,29,12,178,144,0,226,44,21,68,40,12,61,15,64,204,99,215,27,20,113,182,2,170,4,200,187,95,84,173,11,215,206,203,175,135,190,134,161,167,189,235,59,157,78,215,75,217,183,111,95,35,111,69,161,82,168,49,180,37,128,40,59,229,21,212,193,174,135,184,103,186,92,35,1,66,81,192,8,98,29,18,13,191,107,148,247,34,32,34,187,48,68,141,0,217,242,103,235,126,188,36,15,99,111,84,64,71,27,84,21,140,139,126,227,48,93,255,225,195,7,183,231,34,104,74,128,85,246,67,204,205,117,69,191,37,198,13,232,88,2,18,1,182,6,164,193,32,137,128,134,18,111,104,18,128,221,186,4,107,223,42,184,195,9,232,88,130,158,7,100,232,143,109,8,84,82,89,21,144,197,63,203,248,67,50,197,42,192,35,9,232,88,3,207,132,114,48,138,110,226,223,2,27,128,93,22,166,37,1,216,41,73,11,189,143,23,9,35,175,13,174,29,36,19,118,190,32,10,184,37,169,11,212,34,0,43,16,129,32,143,246,238,175,33,160,211,20,66,187,68,52,88,74,139,0,139,156,15,113,99,230,131,96,237,218,85,12,86,18,136,160,69,0,86,81,2,244,191,6,172,2,58,45,129,168,57,164,104,13,149,52,206,239,181,235,225,166,238,218,181,235,187,255,255,244,233,83,81,183,18,221,194,210,217,130,98,2,228,94,190,198,144,238,126,133,166,138,161,192,130,35,132,139,11,36,29,229,162,226,89,64,66,120,29,206,134,231,186,244,6,197,36,128,212,239,87,106,181,254,31,64,202,67,135,14,53,174,54,2,73,112,193,165,163,186,65,168,37,7,149,36,78,187,23,35,128,68,252,83,81,166,230,179,160,54,95,195,35,129,244,160,156,6,72,96,72,132,107,26,131,34,90,89,71,173,169,119,173,10,78,168,98,25,158,142,145,157,162,210,28,58,181,4,240,234,37,192,253,81,40,138,154,3,197,112,244,101,173,49,243,197,8,32,17,225,130,234,89,247,94,2,2,146,93,80,53,204,218,255,94,108,105,24,127,4,13,2,176,220,16,9,1,96,164,113,82,186,222,189,4,253,160,192,151,144,4,170,199,206,136,83,112,220,135,193,96,69,46,176,147,154,88,234,216,245,212,38,94,186,125,12,36,16,166,190,47,228,225,89,42,208,202,193,222,106,250,1,88,198,18,41,0,253,61,142,39,1,81,127,246,236,89,183,70,146,113,128,103,18,62,143,218,192,72,45,2,176,12,18,137,101,76,99,86,134,233,114,24,121,53,183,137,11,219,200,86,180,134,72,107,201,67,86,207,63,42,96,36,9,33,188,64,44,48,140,58,68,224,122,27,54,189,202,201,185,160,22,183,135,15,31,114,238,176,144,11,112,196,129,32,173,173,193,74,72,208,162,73,129,151,73,245,118,144,8,181,47,62,1,106,64,16,18,87,25,30,173,66,128,156,144,96,57,185,181,148,106,149,130,32,8,117,94,67,13,104,42,71,86,94,90,59,172,219,54,32,166,33,240,76,196,195,34,139,19,128,250,241,106,7,149,119,163,135,31,23,124,121,165,1,208,18,143,64,52,31,40,104,15,136,72,41,117,184,197,161,240,209,107,114,213,8,163,170,138,53,122,24,17,218,198,164,48,6,196,35,99,181,253,35,182,85,138,29,85,155,42,128,145,122,231,206,157,109,237,20,170,75,144,60,187,128,60,226,128,144,54,1,214,185,198,32,118,154,69,142,159,3,44,38,220,51,92,227,60,15,85,33,75,192,244,6,196,167,166,168,18,32,135,133,217,69,138,150,85,62,227,2,187,29,226,184,105,101,15,130,90,37,102,3,72,195,194,170,4,200,15,115,65,114,15,13,145,202,253,94,44,60,12,82,46,1,37,229,96,2,79,160,30,2,104,77,6,161,197,64,141,157,53,200,200,19,140,107,109,53,52,187,131,151,53,143,118,161,153,250,150,131,161,180,91,199,218,50,154,182,23,154,185,81,147,51,240,233,228,173,97,29,181,28,88,77,5,169,209,141,29,5,205,230,80,179,131,157,122,125,113,188,100,78,188,31,247,192,130,27,157,233,215,125,38,73,173,65,41,23,88,75,2,184,156,123,223,59,121,163,55,235,135,107,80,115,37,6,46,64,175,83,221,190,21,168,210,72,2,1,1,68,181,129,90,4,48,57,214,116,59,208,142,46,217,1,172,89,95,200,173,144,146,22,135,106,116,6,173,180,252,172,126,22,52,235,11,33,161,152,174,167,56,149,170,33,1,84,142,47,107,11,44,102,21,11,146,74,162,190,192,48,35,64,51,88,185,164,2,53,86,5,1,88,147,193,144,253,35,119,172,118,88,206,42,22,214,67,136,207,13,20,17,64,114,94,13,137,80,88,242,165,167,119,109,7,235,89,197,194,145,117,101,9,192,141,67,247,102,190,224,194,157,57,115,230,63,63,191,150,33,15,30,179,138,241,155,5,187,255,86,13,205,161,44,9,48,72,148,82,35,165,226,81,235,44,120,181,142,65,226,9,119,191,74,222,165,72,155,204,176,220,55,116,45,44,108,44,64,9,34,120,53,140,82,237,131,16,162,217,64,4,233,47,85,105,78,232,7,17,1,126,54,69,254,44,109,4,207,99,104,40,201,37,12,253,94,175,165,59,152,61,30,110,28,208,49,239,52,121,3,238,146,182,215,64,189,122,94,199,208,40,156,26,30,106,235,14,110,12,206,203,134,84,208,154,42,22,140,93,187,65,64,234,89,169,228,109,83,227,216,120,130,148,0,29,203,44,96,63,180,60,132,218,15,159,26,1,213,180,187,6,1,26,3,187,129,179,243,164,187,117,2,142,161,185,166,185,251,67,27,71,196,192,80,107,26,58,37,91,194,243,240,41,131,89,197,91,22,105,247,34,18,0,169,79,238,110,166,78,224,113,225,125,174,176,225,212,210,85,205,201,32,132,34,4,144,88,193,16,223,88,208,81,117,248,212,58,174,57,143,120,59,24,79,45,189,18,99,84,241,251,251,33,37,0,43,27,37,125,73,88,84,44,48,92,194,65,254,180,167,107,23,236,143,161,129,207,111,86,113,37,238,13,228,246,3,34,254,175,97,140,65,29,144,68,193,130,195,70,240,18,247,48,102,159,60,121,98,25,164,194,232,157,101,11,209,79,208,120,83,55,56,205,32,208,149,26,103,3,210,76,95,79,56,29,67,99,190,248,65,169,49,132,61,29,164,141,227,221,177,235,209,68,50,9,139,31,148,84,0,242,1,44,5,232,121,46,176,20,142,199,208,192,215,103,159,192,214,20,90,115,2,175,115,62,43,204,135,187,1,201,40,180,137,27,47,62,68,202,111,158,139,31,20,123,3,217,46,138,66,90,212,12,32,39,77,3,49,86,87,155,72,172,197,24,213,78,93,31,23,106,19,66,82,74,207,185,229,225,53,170,2,167,10,165,110,116,175,196,194,19,52,29,101,118,138,178,116,21,80,47,168,51,217,225,12,34,168,205,197,146,139,31,148,37,192,225,28,25,100,215,82,193,45,244,138,220,245,3,139,77,97,92,99,220,206,97,93,213,164,14,23,106,18,32,27,131,162,66,5,205,201,91,77,64,174,157,195,226,95,201,186,190,138,197,15,6,83,194,14,231,240,176,104,118,141,151,77,64,35,234,28,72,119,43,239,122,113,35,135,54,84,9,16,190,245,10,254,37,189,143,117,22,207,233,132,209,238,225,14,49,70,147,217,9,26,80,39,64,248,74,130,13,206,240,232,65,208,174,222,129,184,135,168,119,56,97,116,51,239,122,149,226,77,43,88,17,64,69,21,244,2,198,161,100,16,52,196,252,203,151,47,61,22,190,184,107,215,4,38,4,8,223,218,198,254,214,190,47,21,135,130,8,243,243,243,3,15,118,68,0,7,23,10,79,176,227,177,232,78,121,135,235,86,133,27,86,48,35,64,248,74,2,132,53,255,44,253,35,29,80,149,107,215,4,166,21,19,89,12,254,97,249,29,21,160,58,215,174,9,76,37,0,33,165,116,85,58,64,178,66,84,235,218,53,129,11,1,194,87,18,192,21,186,228,242,101,182,168,222,181,107,2,55,2,132,201,176,9,90,225,218,53,129,43,1,194,183,137,162,27,45,27,44,213,42,215,174,9,220,9,16,190,197,9,54,60,219,202,4,104,157,107,215,4,69,8,64,72,41,93,204,189,110,53,74,131,214,186,118,77,80,116,186,113,140,113,61,183,152,95,43,249,28,3,208,106,215,174,9,138,74,128,94,100,219,96,173,176,90,0,17,215,38,201,200,27,133,106,8,64,200,135,78,172,229,241,179,94,170,97,234,22,158,80,29,1,8,217,80,92,201,151,74,102,177,15,8,228,172,107,31,199,222,54,84,75,128,126,228,58,131,165,60,153,116,137,33,29,54,115,134,242,230,180,47,122,47,90,67,128,126,100,9,65,51,138,22,7,204,44,36,3,174,51,141,162,125,92,180,150,0,51,232,160,125,135,220,204,160,138,25,1,166,28,51,2,76,51,66,8,255,2,111,250,184,174,205,17,42,131,0,0,0,0,73,69,78,68,174,66,96,130]},{name:"global.css",type:"css",isFolder:!1,data:'html, body {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\nbody {\n\tcolor: #333;\n\tmargin: 0;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n}\n\na {\n\tcolor: rgb(0,100,200);\n\ttext-decoration: none;\n}\n\na:hover {\n\ttext-decoration: underline;\n}\n\na:visited {\n\tcolor: rgb(0,80,160);\n}\n\nlabel {\n\tdisplay: block;\n}\n\ninput, button, select, textarea {\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tpadding: 0.4em;\n\tmargin: 0 0 0.5em 0;\n\tbox-sizing: border-box;\n\tborder: 1px solid #ccc;\n\tborder-radius: 2px;\n}\n\ninput:disabled {\n\tcolor: #ccc;\n}\n\ninput[type="range"] {\n\theight: 0;\n}\n\nbutton {\n\tcolor: #333;\n\tbackground-color: #f4f4f4;\n\toutline: none;\n}\n\nbutton:active {\n\tbackground-color: #ddd;\n}\n\nbutton:focus {\n\tborder-color: #666;\n}\n'},{name:"index.html",type:"html",isFolder:!1,data:"<!doctype html>\n<html>\n<head>\n\t<meta charset='utf8'>\n\t<meta name='viewport' content='width=device-width'>\n\n\t<title>Svelte app</title>\n\n\t<link rel='icon' type='image/png' href='/favicon.png'>\n\t<link rel='stylesheet' href='/global.css'>\n\t<link rel='stylesheet' href='/bundle.css'>\n</head>\n\n<body>\n\t<script src='/bundle.js'><\/script>\n</body>\n</html>"}]},{name:"src",isFolder:!0,type:"folder",children:[{name:"App.svelte",type:"svelte",isFolder:!1,data:"<script>\n\texport let name = 'svelte';\n}\n\n<h1>\n\tHello, {name}!\n</h1>"},{name:"main.js",type:"javascript",isFolder:!1,data:"import App from './App.svelte';\n\nconst App = new App({\n\ttarget: document.body\n})\n\nexport default app;"}]},{name:"README.md",type:"markdown",isFolder:!1,data:"*Psst â€”Â looking for a shareable component template? Go here --\x3e [sveltejs/component-template](https://github.com/sveltejs/component-template)*\n\n---\n\n# svelte app\n\nThis is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.\n\nTo create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):\n\n```bash\nnpx degit sveltejs/template svelte-app\ncd svelte-app\n```\n\n*Note that you will need to have [Node.js](https://nodejs.org) installed.*\n\n\n## Get started\n\nInstall the dependencies...\n\n```bash\ncd svelte-app\nnpm install\n```\n\n...then start [Rollup](https://rollupjs.org):\n\n```bash\nnpm run dev\n```\n\nNavigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.\n\n\n## Deploying to the web\n\n### With [now](https://zeit.co/now)\n\nInstall `now` if you haven't already:\n\n```bash\nnpm install -g now\n```\n\nThen, from within your project folder:\n\n```bash\nnow\n```\n\nAs an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.\n\n### With [surge](https://surge.sh/)\n\nInstall `surge` if you haven't already:\n\n```bash\nnpm install -g surge\n```\n\nThen, from within your project folder:\n\n```bash\nnpm run build\nsurge public\n```\n"},{name:"rollup.config.js",type:"rollup",isFolder:!1,data:"import svelte from 'rollup-plugin-svelte';\nimport resolve from 'rollup-plugin-node-resolve';\nimport commonjs from 'rollup-plugin-commonjs';\nimport livereload from 'rollup-plugin-livereload';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nexport default {\n\tinput: 'src/main.js',\n\toutput: {\n\t\tsourcemap: true,\n\t\tformat: 'iife',\n\t\tname: 'app',\n\t\tfile: 'public/bundle.js'\n\t},\n\tplugins: [\n\t\tsvelte({\n\t\t\t// enable run-time checks when not in production\n\t\t\tdev: !production,\n\t\t\t// we'll extract any component CSS out into\n\t\t\t// a separate file â€” better for performance\n\t\t\tcss: css => {\n\t\t\t\tcss.write('public/bundle.css');\n\t\t\t}\n\t\t}),\n\n\t\t// If you have external dependencies installed from\n\t\t// npm, you'll most likely need these plugins. In\n\t\t// some cases you'll need additional configuration â€”\n\t\t// consult the documentation for details:\n\t\t// https://github.com/rollup/rollup-plugin-commonjs\n\t\tresolve({ browser: true }),\n\t\tcommonjs(),\n\n\t\t// Watch the `public` directory and refresh the\n\t\t// browser on changes when not in production\n\t\t!production && livereload('public'),\n\n\t\t// If we're building for production (npm run build\n\t\t// instead of npm run dev), minify\n\t\tproduction && terser()\n\t],\n\twatch: {\n\t\tclearScreen: false\n\t}\n};\n"}];function W(n){var t,e,o;return{c:function(){t=c("span"),e=p(n.name),this.h()},l:function(o){t=u(o,"SPAN",{style:!0,class:!0},!1);var i=d(t);e=f(i,n.name),i.forEach(m),this.h()},h:function(){h(t,"background-image","url(icons/"+n.type+".svg)"),g(t,"class","svelte-1w7kkc0"),o=v(t,"click",n.openFile)},m:function(n,o){b(n,t,o),y(t,e)},p:function(n,o){n.name&&$(e,o.name),n.type&&h(t,"background-image","url(icons/"+o.type+".svg)")},i:x,o:x,d:function(n){n&&m(t),o()}}}function C(n,t,e){var o=t.name,i=t.type,r=t.isFolder,a=t.data,l=t.icons,s=w();return n.$set=function(n){"name"in n&&e("name",o=n.name),"type"in n&&e("type",i=n.type),"isFolder"in n&&e("isFolder",r=n.isFolder),"data"in n&&e("data",a=n.data),"icons"in n&&e("icons",l=n.icons)},n.$$.update=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:1,name:1,icons:1};if((n.type||n.name||n.icons)&&!i){var t=o.slice(o.lastIndexOf(".")+1);file=l[t]}},{name:o,type:i,isFolder:r,data:a,icons:l,openFile:function(){s("open_file",{name:o,type:i,data:a})}}}var L=function(c){function p(n){var l;return t(this,p),l=e(this,o(p).call(this)),i(a(l),n,C,W,r,["name","type","isFolder","data","icons","openFile"]),l}return n(p,s),l(p,[{key:"openFile",get:function(){return this.$$.ctx.openFile}}]),p}();function U(n,t,e){var o=Object.create(n);return o.child=t[e],o}function B(n){for(var t,e,o=n.children,i=[],r=0;r<o.length;r+=1)i[r]=q(U(n,o,r));var a=function(n){return _(i[n],1,1,function(){i[n]=null})};return{c:function(){t=c("ul");for(var n=0;n<i.length;n+=1)i[n].c();this.h()},l:function(n){t=u(n,"UL",{class:!0},!1);for(var e=d(t),o=0;o<i.length;o+=1)i[o].l(e);e.forEach(m),this.h()},h:function(){g(t,"class","svelte-kfotyw")},m:function(n,o){b(n,t,o);for(var r=0;r<i.length;r+=1)i[r].m(t,null);e=!0},p:function(n,e){if(n.children){o=e.children;for(var r=0;r<o.length;r+=1){var l=U(e,o,r);i[r]?(i[r].p(n,l),j(i[r],1)):(i[r]=q(l),i[r].c(),j(i[r],1),i[r].m(t,null))}for(F(),r=o.length;r<i.length;r+=1)a(r);I()}},i:function(n){if(!e){for(var t=0;t<o.length;t+=1)j(i[t]);e=!0}},o:function(n){i=i.filter(Boolean);for(var t=0;t<i.length;t+=1)_(i[t]);e=!1},d:function(n){n&&m(t),S(i,n)}}}function G(n){for(var t,e=[n.child],o={},i=0;i<e.length;i+=1)o=T(o,e[i]);var r=new L({props:o});return r.$on("open_file",n.open_file_handler),{c:function(){r.$$.fragment.c()},l:function(n){r.$$.fragment.l(n)},m:function(n,e){R(r,n,e),t=!0},p:function(n,t){var o=n.children?z(e,[t.child]):{};r.$set(o)},i:function(n){t||(j(r.$$.fragment,n),t=!0)},o:function(n){_(r.$$.fragment,n),t=!1},d:function(n){O(r,n)}}}function M(n){for(var t,e=[n.child],o={},i=0;i<e.length;i+=1)o=T(o,e[i]);var r=new V({props:o});return{c:function(){r.$$.fragment.c()},l:function(n){r.$$.fragment.l(n)},m:function(n,e){R(r,n,e),t=!0},p:function(n,t){var o=n.children?z(e,[t.child]):{};r.$set(o)},i:function(n){t||(j(r.$$.fragment,n),t=!0)},o:function(n){_(r.$$.fragment,n),t=!1},d:function(n){O(r,n)}}}function q(n){var t,e,o,i,r,a=[M,G],l=[];function s(n){return n.child.isFolder?0:1}return e=s(n),o=l[e]=a[e](n),{c:function(){t=c("li"),o.c(),i=k(),this.h()},l:function(n){t=u(n,"LI",{class:!0},!1);var e=d(t);o.l(e),i=f(e,"\r\n        "),e.forEach(m),this.h()},h:function(){g(t,"class","svelte-kfotyw")},m:function(n,o){b(n,t,o),l[e].m(t,null),y(t,i),r=!0},p:function(n,r){var c=e;(e=s(r))===c?l[e].p(n,r):(F(),_(l[c],1,1,function(){l[c]=null}),I(),(o=l[e])||(o=l[e]=a[e](r)).c(),j(o,1),o.m(t,i))},i:function(n){r||(j(o),r=!0)},o:function(n){_(o),r=!1},d:function(n){n&&m(t),l[e].d()}}}function J(n){var t,e,o,i,r,a,l=n.expanded&&B(n);return{c:function(){t=c("span"),e=p(n.name),o=k(),l&&l.c(),i=A(),this.h()},l:function(r){t=u(r,"SPAN",{style:!0,class:!0},!1);var a=d(t);e=f(a,n.name),a.forEach(m),o=f(r,"\r\n  \r\n  "),l&&l.l(r),i=A(),this.h()},h:function(){h(t,"background-image","url(icons/"+n.type+".svg)"),g(t,"class","svelte-kfotyw"),E(t,"expanded",n.expanded),a=v(t,"click",n.toggle)},m:function(n,a){b(n,t,a),y(t,e),b(n,o,a),l&&l.m(n,a),b(n,i,a),r=!0},p:function(n,o){r&&!n.name||$(e,o.name),r&&!n.type||h(t,"background-image","url(icons/"+o.type+".svg)"),n.expanded&&E(t,"expanded",o.expanded),o.expanded?l?(l.p(n,o),j(l,1)):((l=B(o)).c(),j(l,1),l.m(i.parentNode,i)):l&&(F(),_(l,1,1,function(){l=null}),I())},i:function(n){r||(j(l),r=!0)},o:function(n){_(l),r=!1},d:function(n){n&&(m(t),m(o)),l&&l.d(n),n&&m(i),a()}}}function Q(n,t,e){var o,i=t.expanded,r=void 0!==i&&i,a=t.name,l=t.icons,s=t.children;return n.$set=function(n){"expanded"in n&&e("expanded",r=n.expanded),"name"in n&&e("name",a=n.name),"icons"in n&&e("icons",l=n.icons),"children"in n&&e("children",s=n.children)},n.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{expanded:1}).expanded&&e("type",o=r?"folder_open":"folder")},{expanded:r,name:a,icons:l,type:o,children:s,toggle:function(){e("expanded",r=!r)},open_file_handler:function(t){N(n,t)}}}var V=function(l){function c(n){var l;return t(this,c),l=e(this,o(c).call(this)),i(a(l),n,Q,J,r,["expanded","name","icons","children"]),l}return n(c,s),c}();function Y(n){var t,e=new V({props:{name:"Root",icons:n.icons,children:n.root,expanded:!0}});return e.$on("open_file",n.open_file_handler),e.$on("open_file",K),{c:function(){e.$$.fragment.c()},l:function(n){e.$$.fragment.l(n)},m:function(n,o){R(e,n,o),t=!0},p:function(n,t){var o={};n.icons&&(o.icons=t.icons),n.root&&(o.children=t.root),e.$set(o)},i:function(n){t||(j(e.$$.fragment,n),t=!0)},o:function(n){_(e.$$.fragment,n),t=!1},d:function(n){O(e,n)}}}function K(n){return console.log(n)}function X(n,t,e){var o=t.icons,i=void 0===o?{html:"html",css:"css",js:"javascript",ts:"typescript",json:"json",md:"markdown",pdf:"mdi-file-pdf",png:"image",txt:"plaintext",xls:"excel",git:"git",rollup:"rollup",svelte:"svelte"}:o,r=t.root,a=void 0===r?P:r;return n.$set=function(n){"icons"in n&&e("icons",i=n.icons),"root"in n&&e("root",a=n.root)},{icons:i,root:a,open_file_handler:function(t){N(n,t)}}}var Z=function(l){function c(n){var l;return t(this,c),l=e(this,o(c).call(this)),i(a(l),n,X,Y,r,["icons","root"]),l}return n(c,s),c}();function nn(n){var t,e,o,i,r=new Z({}),a=new H({props:{style:"background: var(--mdc-theme-background)"}});return n.replwidget_binding(a),{c:function(){t=c("div"),e=c("section"),r.$$.fragment.c(),o=k(),a.$$.fragment.c(),this.h()},l:function(n){t=u(n,"DIV",{class:!0},!1);var i=d(t);e=u(i,"SECTION",{class:!0},!1);var l=d(e);r.$$.fragment.l(l),l.forEach(m),o=f(i,"  \r\n"),a.$$.fragment.l(i),i.forEach(m),this.h()},h:function(){g(e,"class","svelte-10bsiwr"),g(t,"class","svelte-10bsiwr")},m:function(n,l){b(n,t,l),y(t,e),R(r,e,null),y(t,o),R(a,t,null),i=!0},p:function(n,t){a.$set({})},i:function(n){i||(j(r.$$.fragment,n),j(a.$$.fragment,n),i=!0)},o:function(n){_(r.$$.fragment,n),_(a.$$.fragment,n),i=!1},d:function(e){e&&m(t),O(r),n.replwidget_binding(null),O(a)}}}function tn(n,t,e){var o;return{repl:o,replwidget_binding:function(n){D[n?"unshift":"push"](function(){e("repl",o=n)})}}}export default(function(l){function c(n){var l;return t(this,c),l=e(this,o(c).call(this)),i(a(l),n,tn,nn,r,[]),l}return n(c,s),c}());
