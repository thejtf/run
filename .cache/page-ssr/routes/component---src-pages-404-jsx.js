"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 5224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external "/Users/jtf/run/node_modules/react/index.js"
var index_js_ = __webpack_require__(5584);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/hooks/useSiteMetadata.js
var useSiteMetadata = __webpack_require__(2712);
;// CONCATENATED MODULE: ./src/components/Header/index.jsx
const Header=()=>{const{logo,siteUrl,navLinks}=(0,useSiteMetadata/* default */.Z)();return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("nav",{className:"db flex justify-between w-100 ph5-l",style:{marginTop:'3rem'}},/*#__PURE__*/index_js_default().createElement("div",{className:"dib w-25 v-mid"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:siteUrl,className:"link dim"},/*#__PURE__*/index_js_default().createElement("picture",null,/*#__PURE__*/index_js_default().createElement("img",{className:"dib w3 h3 br-100",alt:"logo",src:logo})))),/*#__PURE__*/index_js_default().createElement("div",{className:"dib w-75 v-mid tr"},navLinks.map((n,i)=>/*#__PURE__*/index_js_default().createElement("a",{key:i,href:n.url,className:"light-gray link dim f6 f5-l mr3 mr4-l"},n.name)))));};/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Layout/style.module.scss
// Exports
/* harmony default export */ const style_module = ({
	"body": "style-module--body--a1572"
});

;// CONCATENATED MODULE: ./src/components/Layout/index.jsx
const Layout=({children})=>{const{siteTitle,description}=(0,useSiteMetadata/* default */.Z)();return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,{bodyAttributes:{class:style_module.body}},/*#__PURE__*/index_js_default().createElement("html",{lang:"en"}),/*#__PURE__*/index_js_default().createElement("title",null,siteTitle),/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/index_js_default().createElement("meta",{name:"keywords",content:"running"}),/*#__PURE__*/index_js_default().createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})),/*#__PURE__*/index_js_default().createElement(components_Header,null),/*#__PURE__*/index_js_default().createElement("div",{className:"pa3 pa5-l"},children));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 2712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4718);
const useSiteMetadata=()=>{const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("666401299");return site.siteMetadata;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ 7291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5584);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5224);
/* harmony import */ var src_hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2712);
const NotFoundPage=()=>{const{siteUrl}=(0,src_hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"f-headline"},"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"This page doesn't exist."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"moon-gray"},"If you wanna more message, you could visit",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"moon-gray b",href:siteUrl},siteUrl)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jsx.js.map