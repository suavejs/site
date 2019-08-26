import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.js';
		}
		if (label === 'css' || label === 'scss') {
			return './css.worker.js';
		}
		if (label === 'html' || label === 'handlebars') {
			return './html.worker.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.js';
		}
		return './editor.worker.js';
	}
}

 monaco.editor.defineTheme('oceanic-next',
    {
        "base": "vs-dark",
        "inherit": true,
        "rules": [
          {
            "foreground": "65737e",
            "token": "comment"
          },
          {
            "foreground": "65737e",
            "token": "punctuation.definition.comment"
          },
          {
            "foreground": "cdd3de",
            "token": "variable"
          },
          {
            "foreground": "c594c5",
            "token": "keyword"
          },
          {
            "foreground": "c594c5",
            "token": "storage.type"
          },
          {
            "foreground": "c594c5",
            "token": "storage.modifier"
          },
          {
            "foreground": "5fb3b3",
            "token": "keyword.operator"
          },
          {
            "foreground": "5fb3b3",
            "token": "constant.other.color"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation"
          },
          {
            "foreground": "5fb3b3",
            "token": "meta.tag"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.definition.tag"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.separator.inheritance.php"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.definition.tag.html"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.definition.tag.begin.html"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.definition.tag.end.html"
          },
          {
            "foreground": "5fb3b3",
            "token": "punctuation.section.embedded"
          },
          {
            "foreground": "5fb3b3",
            "token": "keyword.other.template"
          },
          {
            "foreground": "5fb3b3",
            "token": "keyword.other.substitution"
          },
          {
            "foreground": "eb606b",
            "token": "entity.name.tag"
          },
          {
            "foreground": "eb606b",
            "token": "meta.tag.sgml"
          },
          {
            "foreground": "eb606b",
            "token": "markup.deleted.git_gutter"
          },
          {
            "foreground": "6699cc",
            "token": "entity.name.function"
          },
          {
            "foreground": "6699cc",
            "token": "meta.function-call"
          },
          {
            "foreground": "6699cc",
            "token": "variable.function"
          },
          {
            "foreground": "6699cc",
            "token": "support.function"
          },
          {
            "foreground": "6699cc",
            "token": "keyword.other.special-method"
          },
          {
            "foreground": "6699cc",
            "token": "meta.block-level"
          },
          {
            "foreground": "f2777a",
            "token": "support.other.variable"
          },
          {
            "foreground": "f2777a",
            "token": "string.other.link"
          },
          {
            "foreground": "f99157",
            "token": "constant.numeric"
          },
          {
            "foreground": "f99157",
            "token": "constant.language"
          },
          {
            "foreground": "f99157",
            "token": "support.constant"
          },
          {
            "foreground": "f99157",
            "token": "constant.character"
          },
          {
            "foreground": "f99157",
            "token": "variable.parameter"
          },
          {
            "foreground": "f99157",
            "token": "keyword.other.unit"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "string"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "constant.other.symbol"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "constant.other.key"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "entity.other.inherited-class"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "markup.heading"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "markup.inserted.git_gutter"
          },
          {
            "foreground": "99c794",
            "fontStyle": "normal",
            "token": "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
          },
          {
            "foreground": "fac863",
            "token": "entity.name.class"
          },
          {
            "foreground": "fac863",
            "token": "entity.name.type.class"
          },
          {
            "foreground": "fac863",
            "token": "support.type"
          },
          {
            "foreground": "fac863",
            "token": "support.class"
          },
          {
            "foreground": "fac863",
            "token": "support.orther.namespace.use.php"
          },
          {
            "foreground": "fac863",
            "token": "meta.use.php"
          },
          {
            "foreground": "fac863",
            "token": "support.other.namespace.php"
          },
          {
            "foreground": "fac863",
            "token": "markup.changed.git_gutter"
          },
          {
            "foreground": "ec5f67",
            "token": "entity.name.module.js"
          },
          {
            "foreground": "ec5f67",
            "token": "variable.import.parameter.js"
          },
          {
            "foreground": "ec5f67",
            "token": "variable.other.class.js"
          },
          {
            "foreground": "ec5f67",
            "fontStyle": "italic",
            "token": "variable.language"
          },
          {
            "foreground": "cdd3de",
            "token": "meta.group.braces.curly.js constant.other.object.key.js string.unquoted.label.js"
          },
          {
            "foreground": "d8dee9",
            "token": "meta.class-method.js entity.name.function.js"
          },
          {
            "foreground": "d8dee9",
            "token": "variable.function.constructor"
          },
          {
            "foreground": "d8dee9",
            "token": "meta.class.js meta.class.property.js meta.method.js string.unquoted.js entity.name.function.js"
          },
          {
            "foreground": "bb80b3",
            "token": "entity.other.attribute-name"
          },
          {
            "foreground": "99c794",
            "token": "markup.inserted"
          },
          {
            "foreground": "ec5f67",
            "token": "markup.deleted"
          },
          {
            "foreground": "bb80b3",
            "token": "markup.changed"
          },
          {
            "foreground": "5fb3b3",
            "token": "string.regexp"
          },
          {
            "foreground": "5fb3b3",
            "token": "constant.character.escape"
          },
          {
            "fontStyle": "underline",
            "token": "*url*"
          },
          {
            "fontStyle": "underline",
            "token": "*link*"
          },
          {
            "fontStyle": "underline",
            "token": "*uri*"
          },
          {
            "foreground": "ab7967",
            "token": "constant.numeric.line-number.find-in-files - match"
          },
          {
            "foreground": "99c794",
            "token": "entity.name.filename.find-in-files"
          },
          {
            "foreground": "6699cc",
            "fontStyle": "italic",
            "token": "tag.decorator.js entity.name.tag.js"
          },
          {
            "foreground": "6699cc",
            "fontStyle": "italic",
            "token": "tag.decorator.js punctuation.definition.tag.js"
          },
          {
            "foreground": "ec5f67",
            "fontStyle": "italic",
            "token": "source.js constant.other.object.key.js string.unquoted.label.js"
          },
          {
            "foreground": "fac863",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "fac863",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "c594c5",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "c594c5",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "d8dee9",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "d8dee9",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "6699cc",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "6699cc",
            "token": "source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "ab7967",
            "token": "source.json meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "ab7967",
            "token": "source.json meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "ec5f67",
            "token": "source.json meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "ec5f67",
            "token": "source.json meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "f99157",
            "token": "source.json meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "f99157",
            "token": "source.json meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "fac863",
            "token": "source.json meta meta.structure.dictionary.json string.quoted.double.json - meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "fac863",
            "token": "source.json meta meta.structure.dictionary.json punctuation.definition.string - meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          },
          {
            "foreground": "c594c5",
            "token": "source.json meta.structure.dictionary.json string.quoted.double.json - meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json"
          },
          {
            "foreground": "c594c5",
            "token": "source.json meta.structure.dictionary.json punctuation.definition.string - meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string"
          }
        ],
        "colors": {
          "editor.foreground": "#CDD3DE",
          "editor.background": "#1B2B34",
          "editor.selectionBackground": "#4f5b66",
          "editor.lineHighlightBackground": "#65737e55",
          "editorCursor.foreground": "#c0c5ce",
          "editorWhitespace.foreground": "#65737e",
          "editorIndentGuide.background": "#65737F",
          "editorIndentGuide.activeBackground": "#FBC95A"
        }
})

export const commonOpts = ({
    theme: 'oceanic-next',
    fontSize: 16,
    fontWeight: '500',
    formatOnType: true,
    formatOnPaste: true,
    highlightActiveIndentGuide: true,
    renderLineHighlight: "gutter",
    lineNumbersMinChars: 2,
    showFoldingControls: "always",
    tabCompletion: "on",
    autoClosingBrackets: 'languageDefined',
    autoClosingQuotes: 'languageDefined',
    autoIndent: true,
    autoSurround: 'languageDefined',
    automaticLayout: true,
    scrollBeyondLastLine: false,
    foldingStrategy: 'indentation',
    fontLigatures: true,
    readOnly: false,
    minimap: {
        enabled: false
    }
 })

// export let html = monaco.editor.create(document.getElementById('markup'), {
// 	value: [
//         '<h1 id="greeting"></h1>',
//         '<input id="name" value="world"/>'
// 	].join('\n'),
//     language: 'html',
//     ...commonOpts
// });
// export let style = monaco.editor.create(document.getElementById('style'), {
// 	value: [
//         'h1 {\n  color: tomato;\n}',
//         'label {\n  display: block;\n  padding: 1rem;\n}',
//         'input {\n  background: #f1f1f1;\n  border: 1px solid #ccc;\n  padding: .5rem;\n  border-radius: 4px;\n}'
// 	].join('\n'),
//     language: 'css',
//     ...commonOpts
// });
// export let ts = monaco.editor.create(document.getElementById('script'), {
// 	value: [
//         'let greeting = document.getElementById("greeting");',
//         'let nameRef = document.getElementById("name");',
//         'function x() {',
//         '\tgreeting.innerHTML = `Hello, ${nameRef.value}!!`',
// 		'\tconsole.log(nameRef.value);',
//         '}',
//         'nameRef.oninput = x;',
//         'x();'
// 	].join('\n'),
//     language: 'typescript',
//     ...commonOpts
// });




// export const source = () => `${html.getValue()}<style>${style.getValue()}</style><script>${ts.getValue()}<\/script>`;
// const frame = document.createElement('iframe');
// frame.srcdoc = source();
// frame.sandbox = "allow-scripts";
// frame.style.height = '100%';
// frame.style.width = '100%'
// let output = document.getElementById('output');
// output.appendChild(frame);

// export function updateSource() {
//     frame.srcdoc = source();
// }

// document.getElementById('code').addEventListener('keyup', updateSource);
export default monaco;
// function onCodeChange(event) {
//     if (event !== void 0) {
//       updateHash();
//       updateLocalStorage();
//     }
  
//     showProcessingIndicator();
  
//     getService()
//       .then(service => {
//         return service.getEmitOutput(tsEditor.getModel().uri.toString())
//       }, hideProcessingIndicator)
//       .then((result) => {
//         if (result.emitSkipped) {
//           return false;
//         }
  
//         if (!result.outputFiles || !result.outputFiles[0]) {
//           return false;
//         }
  
//         return result.outputFiles[0].text;
//       }, hideProcessingIndicator)
//       .then(text => {
//         if (typeof text === 'string') {
//             tsOutput = text;
//         }
  
//         return !!text;
//       }, hideProcessingIndicator)
//       .then(updated => {
//         hideProcessingIndicator();
//       }, hideProcessingIndicator)
//   }

// function getService() {
//     return monaco.languages.typescript.getTypeScriptWorker()
//       .then(worker => worker(tsEditor.getModel().uri))
//   }

// function updateOutput() {
//     monaco.languages.typescript.getTypeScriptWorker().then(worker => {
//       worker(State.inputModel.uri).then((client, a) => {
//         if (typeof window.client === "undefined") {
//           UI.renderVersion();

//           expose global
//           window.client = client;
//           UI.console();
//         }

//         client.getEmitOutput(State.inputModel.uri.toString()).then(result => {
//           State.outputModel.setValue(result.outputFiles[0].text);
//         });
//       });
//     });
//   }