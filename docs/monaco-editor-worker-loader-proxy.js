baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.0/min/',
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return './json.worker.js';
     }
     if (label === 'css') {
       return './css.worker.js';
     }
     if (label === 'html' || label === "svelte" || label === "handlebars") {
       return './html.worker.js';
     }
     if (label === 'typescript' || label === 'javascript') {
       return './typescript.worker.js';
     }
     return './editor.worker.js';
   }
 }
importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.0/min/vs/base/worker/workerMain.js') // eslint-disable-line