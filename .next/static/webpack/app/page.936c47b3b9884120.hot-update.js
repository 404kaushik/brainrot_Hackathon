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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GroqProvider: () => (/* binding */ GroqProvider),\n/* harmony export */   useGroq: () => (/* binding */ useGroq)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq-sdk */ \"(app-pages-browser)/./node_modules/groq-sdk/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ GroqProvider,useGroq auto */ \nvar _s = $RefreshSig$();\n\n\nconst GroqContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction GroqProvider(param) {\n    let { children } = param;\n    const groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        apiKey: \"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\",\n        dangerouslyAllowBrowser: true\n    });\n    const generateExcuse = async (context)=>{\n        try {\n            var _completion_choices__message, _completion_choices_;\n            const completion = await groq.chat.completions.create({\n                messages: [\n                    {\n                        role: \"system\",\n                        content: \"You are a Gen Z teenager with a sharp, unapologetic communication style. Your goal is to craft excuses that are:\\n- Brutally honest yet creative\\n- Packed with modern slang and TikTok-inspired language\\n- Slightly dramatic and over-the-top\\n- Prioritizing avoiding responsibility while sounding somewhat convincing\\n\\nRules for generating excuses:\\n1. Use current Gen Z slang and internet language\\n2. Incorporate trending memes or pop culture references\\n3. Be witty and sarcastic\\n4. Show zero remorse\\n5. Make the excuse sound somewhat plausible but entertainingly ridiculous\\n\\nTone should be: \\n- Confident \\n- Slightly entitled\\n- Minimally apologetic\\n- Maximum sass\\n\\nAvoid: \\n- Overly formal language\\n- Boring or generic excuses\\n- Excuses that sound too responsible or mature\"\n                    },\n                    {\n                        role: \"user\",\n                        content: \"Generate a refined excuse for this situation: \".concat(context)\n                    }\n                ],\n                model: \"mixtral-8x7b-32768\",\n                temperature: 0.7,\n                max_tokens: 150\n            });\n            var _completion_choices__message_content;\n            return (_completion_choices__message_content = (_completion_choices_ = completion.choices[0]) === null || _completion_choices_ === void 0 ? void 0 : (_completion_choices__message = _completion_choices_.message) === null || _completion_choices__message === void 0 ? void 0 : _completion_choices__message.content) !== null && _completion_choices__message_content !== void 0 ? _completion_choices__message_content : null;\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n            return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GroqContext.Provider, {\n        value: {\n            generateExcuse\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/context/GroqContext.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c = GroqProvider;\nconst useGroq = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroqContext);\n    if (context === undefined) {\n        throw new Error('useGroq must be used within a GroqProvider');\n    }\n    return context;\n};\n_s(useGroq, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"GroqProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0dyb3FDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRDtBQUN0QjtBQU01QixNQUFNRyw0QkFBY0gsb0RBQWFBLENBQThCSTtBQUV4RCxTQUFTQyxhQUFhLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7SUFDM0IsTUFBTUMsT0FBTyxJQUFJTCxnREFBSUEsQ0FBQztRQUNwQk0sUUFBUUMsMERBQW9DO1FBQzVDRyx5QkFBeUI7SUFDM0I7SUFFQSxNQUFNQyxpQkFBaUIsT0FBT0M7UUFDNUIsSUFBSTtnQkF1Q0tDLDhCQUFBQTtZQXRDUCxNQUFNQSxhQUFhLE1BQU1SLEtBQUtTLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7Z0JBQ3BEQyxVQUFVO29CQUNSO3dCQUNFQyxNQUFNO3dCQUNOQyxTQUFVO29CQXVCWjtvQkFDQTt3QkFDRUQsTUFBTTt3QkFDTkMsU0FBUyxpREFBeUQsT0FBUlA7b0JBQzVEO2lCQUNEO2dCQUNEUSxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxZQUFZO1lBQ2Q7Z0JBRU9UO1lBQVAsT0FBT0EsQ0FBQUEsd0NBQUFBLHVCQUFBQSxXQUFXVSxPQUFPLENBQUMsRUFBRSxjQUFyQlYsNENBQUFBLCtCQUFBQSxxQkFBdUJXLE9BQU8sY0FBOUJYLG1EQUFBQSw2QkFBZ0NNLE9BQU8sY0FBdkNOLGtEQUFBQSx1Q0FBMkM7UUFDcEQsRUFBRSxPQUFPWSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUN4QixZQUFZMEIsUUFBUTtRQUFDQyxPQUFPO1lBQUVqQjtRQUFlO2tCQUMzQ1A7Ozs7OztBQUdQO0tBMURnQkQ7QUE0RFQsTUFBTTBCLFVBQVU7O0lBQ3JCLE1BQU1qQixVQUFVYixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSVcsWUFBWVYsV0FBVztRQUN6QixNQUFNLElBQUk0QixNQUFNO0lBQ2xCO0lBQ0EsT0FBT2xCO0FBQ1QsRUFBRTtHQU5XaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXVzaGlrbmFnL0RvY3VtZW50cy9wcm9qZWN0cy9Yc2NhcGUvc3JjL2NvbnRleHQvR3JvcUNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcm9xIGZyb20gJ2dyb3Etc2RrJztcblxuaW50ZXJmYWNlIEdyb3FDb250ZXh0VHlwZSB7XG4gIGdlbmVyYXRlRXhjdXNlOiAoY29udGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xufVxuXG5jb25zdCBHcm9xQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R3JvcUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JvcVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgZ3JvcSA9IG5ldyBHcm9xKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dST1FfQVBJX0tFWSEsXG4gICAgZGFuZ2Vyb3VzbHlBbGxvd0Jyb3dzZXI6IHRydWUgXG4gIH0pO1xuXG4gIGNvbnN0IGdlbmVyYXRlRXhjdXNlID0gYXN5bmMgKGNvbnRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZ3JvcS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBZb3UgYXJlIGEgR2VuIFogdGVlbmFnZXIgd2l0aCBhIHNoYXJwLCB1bmFwb2xvZ2V0aWMgY29tbXVuaWNhdGlvbiBzdHlsZS4gWW91ciBnb2FsIGlzIHRvIGNyYWZ0IGV4Y3VzZXMgdGhhdCBhcmU6XG4tIEJydXRhbGx5IGhvbmVzdCB5ZXQgY3JlYXRpdmVcbi0gUGFja2VkIHdpdGggbW9kZXJuIHNsYW5nIGFuZCBUaWtUb2staW5zcGlyZWQgbGFuZ3VhZ2Vcbi0gU2xpZ2h0bHkgZHJhbWF0aWMgYW5kIG92ZXItdGhlLXRvcFxuLSBQcmlvcml0aXppbmcgYXZvaWRpbmcgcmVzcG9uc2liaWxpdHkgd2hpbGUgc291bmRpbmcgc29tZXdoYXQgY29udmluY2luZ1xuXG5SdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuMS4gVXNlIGN1cnJlbnQgR2VuIFogc2xhbmcgYW5kIGludGVybmV0IGxhbmd1YWdlXG4yLiBJbmNvcnBvcmF0ZSB0cmVuZGluZyBtZW1lcyBvciBwb3AgY3VsdHVyZSByZWZlcmVuY2VzXG4zLiBCZSB3aXR0eSBhbmQgc2FyY2FzdGljXG40LiBTaG93IHplcm8gcmVtb3JzZVxuNS4gTWFrZSB0aGUgZXhjdXNlIHNvdW5kIHNvbWV3aGF0IHBsYXVzaWJsZSBidXQgZW50ZXJ0YWluaW5nbHkgcmlkaWN1bG91c1xuXG5Ub25lIHNob3VsZCBiZTogXG4tIENvbmZpZGVudCBcbi0gU2xpZ2h0bHkgZW50aXRsZWRcbi0gTWluaW1hbGx5IGFwb2xvZ2V0aWNcbi0gTWF4aW11bSBzYXNzXG5cbkF2b2lkOiBcbi0gT3Zlcmx5IGZvcm1hbCBsYW5ndWFnZVxuLSBCb3Jpbmcgb3IgZ2VuZXJpYyBleGN1c2VzXG4tIEV4Y3VzZXMgdGhhdCBzb3VuZCB0b28gcmVzcG9uc2libGUgb3IgbWF0dXJlYFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBgR2VuZXJhdGUgYSByZWZpbmVkIGV4Y3VzZSBmb3IgdGhpcyBzaXR1YXRpb246ICR7Y29udGV4dH1gXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtb2RlbDogXCJtaXh0cmFsLTh4N2ItMzI3NjhcIixcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgbWF4X3Rva2VuczogMTUwLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgPz8gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBleGN1c2U6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyb3FDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdlbmVyYXRlRXhjdXNlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JvcUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VHcm9xID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHcm9xQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdyb3EgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdyb3FQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJHcm9xIiwiR3JvcUNvbnRleHQiLCJ1bmRlZmluZWQiLCJHcm9xUHJvdmlkZXIiLCJjaGlsZHJlbiIsImdyb3EiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPUV9BUElfS0VZIiwiZGFuZ2Vyb3VzbHlBbGxvd0Jyb3dzZXIiLCJnZW5lcmF0ZUV4Y3VzZSIsImNvbnRleHQiLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR3JvcSIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/GroqContext.tsx\n"));

/***/ })

});