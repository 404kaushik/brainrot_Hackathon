"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/context/GroqContext.tsx":
/*!*************************************!*\
  !*** ./src/context/GroqContext.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GroqContext: () => (/* binding */ GroqContext),\n/* harmony export */   GroqProvider: () => (/* binding */ GroqProvider),\n/* harmony export */   useGroq: () => (/* binding */ useGroq)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq-sdk */ \"(app-pages-browser)/./node_modules/groq-sdk/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ GroqContext,useGroq,GroqProvider auto */ \nvar _s = $RefreshSig$();\n\n\nconst GroqContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction useGroq() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroqContext);\n    if (context === undefined) {\n        throw new Error('useGroq must be used within a GroqProvider');\n    }\n    return context;\n}\n_s(useGroq, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nfunction GroqProvider(param) {\n    let { children } = param;\n    const groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        apiKey: \"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\",\n        dangerouslyAllowBrowser: true\n    });\n    // Updated generateExcuse function to incorporate tone\n    const generateExcuse = async function(context) {\n        let tone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'simple';\n        try {\n            var _completion_choices__message, _completion_choices_;\n            const completion = await groq.chat.completions.create({\n                messages: [\n                    {\n                        role: \"system\",\n                        content: TONE_PROMPTS[tone]\n                    },\n                    {\n                        role: \"user\",\n                        content: \"Generate a refined excuse for this situation: \".concat(context)\n                    }\n                ],\n                model: \"mixtral-8x7b-32768\",\n                temperature: 0.7,\n                max_tokens: 150\n            });\n            var _completion_choices__message_content;\n            return (_completion_choices__message_content = (_completion_choices_ = completion.choices[0]) === null || _completion_choices_ === void 0 ? void 0 : (_completion_choices__message = _completion_choices_.message) === null || _completion_choices__message === void 0 ? void 0 : _completion_choices__message.content) !== null && _completion_choices__message_content !== void 0 ? _completion_choices__message_content : null;\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n            return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GroqContext.Provider, {\n        value: {\n            generateExcuse\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/context/GroqContext.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c = GroqProvider;\nvar _c;\n$RefreshReg$(_c, \"GroqProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0dyb3FDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDdEI7QUFPckIsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUE4QkksV0FBVztBQUUxRSxTQUFTQzs7SUFDZCxNQUFNQyxVQUFVTCxpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSUcsWUFBWUYsV0FBVztRQUN6QixNQUFNLElBQUlHLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNUO0dBTmdCRDtBQVNULFNBQVNHLGFBQWEsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQztJQUMzQixNQUFNQyxPQUFPLElBQUlSLGdEQUFJQSxDQUFDO1FBQ3BCUyxRQUFRQywwREFBb0M7UUFDNUNHLHlCQUF5QjtJQUMzQjtJQUdBLHNEQUFzRDtJQUN0RCxNQUFNQyxpQkFBaUIsZUFBT1Y7WUFBaUJXLHdFQUFtQjtRQUNoRSxJQUFJO2dCQWlCS0MsOEJBQUFBO1lBaEJQLE1BQU1BLGFBQWEsTUFBTVIsS0FBS1MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztnQkFDcERDLFVBQVU7b0JBQ1I7d0JBQ0VDLE1BQU07d0JBQ05DLFNBQVNDLFlBQVksQ0FBQ1IsS0FBSztvQkFDN0I7b0JBQ0E7d0JBQ0VNLE1BQU07d0JBQ05DLFNBQVMsaURBQXlELE9BQVJsQjtvQkFDNUQ7aUJBQ0Q7Z0JBQ0RvQixPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxZQUFZO1lBQ2Q7Z0JBRU9WO1lBQVAsT0FBT0EsQ0FBQUEsd0NBQUFBLHVCQUFBQSxXQUFXVyxPQUFPLENBQUMsRUFBRSxjQUFyQlgsNENBQUFBLCtCQUFBQSxxQkFBdUJZLE9BQU8sY0FBOUJaLG1EQUFBQSw2QkFBZ0NNLE9BQU8sY0FBdkNOLGtEQUFBQSx1Q0FBMkM7UUFDcEQsRUFBRSxPQUFPYSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUM1QixZQUFZOEIsUUFBUTtRQUFDQyxPQUFPO1lBQUVsQjtRQUFlO2tCQUMzQ1A7Ozs7OztBQUdQO0tBdENnQkQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXVzaGlrbmFnL0RvY3VtZW50cy9wcm9qZWN0cy9Yc2NhcGUvc3JjL2NvbnRleHQvR3JvcUNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcm9xIGZyb20gJ2dyb3Etc2RrJztcbmltcG9ydCB7IEV4Y3VzZVRvbmUgfSBmcm9tICdAL3R5cGVzJztcblxuaW50ZXJmYWNlIEdyb3FDb250ZXh0VHlwZSB7XG4gIGdlbmVyYXRlRXhjdXNlOiAoY29udGV4dDogc3RyaW5nLCB0b25lOiBFeGN1c2VUb25lKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xufVxuXG5leHBvcnQgY29uc3QgR3JvcUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEdyb3FDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdyb3EoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdyb3FDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlR3JvcSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgR3JvcVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEdyb3FQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGdyb3EgPSBuZXcgR3JvcSh7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUk9RX0FQSV9LRVkhLFxuICAgIGRhbmdlcm91c2x5QWxsb3dCcm93c2VyOiB0cnVlIFxuICB9KTtcblxuXG4gIC8vIFVwZGF0ZWQgZ2VuZXJhdGVFeGN1c2UgZnVuY3Rpb24gdG8gaW5jb3Jwb3JhdGUgdG9uZVxuICBjb25zdCBnZW5lcmF0ZUV4Y3VzZSA9IGFzeW5jIChjb250ZXh0OiBzdHJpbmcsIHRvbmU6IEV4Y3VzZVRvbmUgPSAnc2ltcGxlJyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZ3JvcS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFRPTkVfUFJPTVBUU1t0b25lXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBgR2VuZXJhdGUgYSByZWZpbmVkIGV4Y3VzZSBmb3IgdGhpcyBzaXR1YXRpb246ICR7Y29udGV4dH1gXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtb2RlbDogXCJtaXh0cmFsLTh4N2ItMzI3NjhcIixcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgbWF4X3Rva2VuczogMTUwLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgPz8gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBleGN1c2U6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyb3FDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdlbmVyYXRlRXhjdXNlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JvcUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJHcm9xIiwiR3JvcUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VHcm9xIiwiY29udGV4dCIsIkVycm9yIiwiR3JvcVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJncm9xIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dST1FfQVBJX0tFWSIsImRhbmdlcm91c2x5QWxsb3dCcm93c2VyIiwiZ2VuZXJhdGVFeGN1c2UiLCJ0b25lIiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJUT05FX1BST01QVFMiLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImNob2ljZXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/GroqContext.tsx\n"));

/***/ })

});