"use strict";
exports.__esModule = true;
var _12_lib_1 = require("./12-lib");
// si vous avez mis default lors de l'export 
// pas besoin d'utiliser les accolades lors de l'import 
console.log(_12_lib_1["default"](10, 12));
// transformer ts => js
// pas besoin de préciser les fichiers à importer 
// tsc 12-module.ts && node 12-module.js
