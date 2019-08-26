<script>
  import files from './defaultTree.js';
    import Branch from './Branch.svelte';
    export let icons = {
      html: 'html',
      css: 'css',
      js: 'javascript',
      ts: 'typescript',
      json: 'json',
      md: 'markdown',
      pdf: 'mdi-file-pdf',
      png: 'image',
      txt: 'plaintext',
      xls: 'excel',
      git: 'git',
      rollup: 'rollup',
      svelte: 'svelte'
    }
    export let root = files;
  //   export let root = [
  //   {
  //     name: '.git',
  //     type: 'file',
  //     file: 'git'
  //   },
  //   {
  //     name: 'node_modules',
  //     type: 'folder',
  //   },
  //   {
  //     name: 'public',
  //     type: 'folder',
  //     children: [
  //       {
  //         name: 'static',
  //         type: 'folder',
  //         children: [{
  //           name: 'logo.png',
  //           type: 'file',
  //           file: 'image',
  //         }],
  //       },
  //       {
  //         name: 'favicon.ico',
  //         type: 'file',
  //         file: 'image',
  //       },
  //       {
  //         name: 'index.html',
  //         type: 'file',
  //         file: 'html',
  //       },
  //     ],
  //   },
  //   {
  //     name: '.gitignore',
  //     type: 'file',
  //     file: 'git',
  //   },
  //   {
  //     name: 'babel.config.js',
  //     type: 'file',
  //     file: 'babel',
  //   },
  //   {
  //     name: 'package.json',
  //     type: 'file',
  //     file: 'npm',
  //   },
  //   {
  //     name: 'README.md',
  //     type: 'file',
  //     file: 'markdown',
  //   },
  //   {
  //     name: 'vue.config.js',
  //     type: 'file',
  //     file: 'javascript',
  //   },
  //   {
  //     name: 'yarn.lock',
  //     type: 'file',
  //     file: 'plaintext',
  //   },
  // ]
  // </script>
  
  <Branch on:open_file on:open_file={(e) => console.log(e)} name="Root" {icons} children={root} expanded/>