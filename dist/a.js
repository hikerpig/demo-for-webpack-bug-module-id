(self["webpackChunksame_module_test"] = self["webpackChunksame_module_test"] || []).push([[786],{

/***/ 394:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

setTimeout(() => {
    __webpack_require__.e(/* import() */ 374).then(__webpack_require__.bind(__webpack_require__, 374)).then(() => {
        console.log('async a loaded');
    })

    __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(__webpack_require__, 70)).then(() => {
        console.log('async b loaded');
    })

}, 1000)


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(394));
/******/ }
]);