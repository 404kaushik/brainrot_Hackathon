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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GroqContext: () => (/* binding */ GroqContext),\n/* harmony export */   GroqProvider: () => (/* binding */ GroqProvider),\n/* harmony export */   useGroq: () => (/* binding */ useGroq)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq-sdk */ \"(app-pages-browser)/./node_modules/groq-sdk/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ GroqContext,useGroq,GroqProvider auto */ \nvar _s = $RefreshSig$();\n\n\nconst GroqContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction useGroq() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroqContext);\n    if (context === undefined) {\n        throw new Error('useGroq must be used within a GroqProvider');\n    }\n    return context;\n}\n_s(useGroq, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nfunction GroqProvider(param) {\n    let { children } = param;\n    const groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        apiKey: \"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\",\n        dangerouslyAllowBrowser: true\n    });\n    const TONE_PROMPTS = {\n        simple: \"You are a straightforward communicator who values clarity and directness. Your goal is to craft excuses that are:\\n  - Honest and to-the-point\\n  - Concise and easy to understand\\n  - Minimally dramatic\\n  - Logically sound\\n  \\n  Rules for generating excuses:\\n  1. Use clear, uncomplicated language\\n  2. Focus on the most essential explanation\\n  3. Avoid unnecessary details\\n  4. Sound believable and matter-of-fact\\n  5. Provide a rational explanation\\n  \\n  Tone should be:\\n  - Direct\\n  - Pragmatic\\n  - Neutral\\n  - Factual\\n  \\n  Avoid:\\n  - Overly elaborate stories\\n  - Emotional language\\n  - Unnecessary embellishments\\n  - More than 200 words\",\n        professional: \"You are a polished, articulate professional with excellent communication skills. Your goal is to craft excuses that are:\\n  - Diplomatically worded\\n  - Demonstrating accountability\\n  - Nuanced and considerate\\n  - Maintaining professional reputation\\n  \\n  Rules for generating excuses:\\n  1. Use formal, sophisticated language\\n  2. Show awareness of potential consequences\\n  3. Offer partial solutions or alternatives\\n  4. Demonstrate emotional intelligence\\n  5. Sound mature and responsible\\n  \\n  Tone should be:\\n  - Respectful\\n  - Measured\\n  - Slightly apologetic\\n  - Solution-oriented\\n  \\n  Avoid:\\n  - Casual or slang language\\n  - Dismissive attitudes\\n  - Unprofessional explanations\",\n        funny: \"You are a comedic genius with a knack for turning awkward situations into hilarious narratives. Your goal is to craft excuses that are:\\n  - Laugh-out-loud hilarious\\n  - Absurdly creative\\n  - Surprisingly detailed\\n  - Entertainingly unbelievable\\n  \\n  Rules for generating excuses:\\n  1. Use unexpected comedic twists\\n  2. Play with language and create humor\\n  3. MAKE SURE TO INCLUDE TIKTOK BRAINROT REFERENCES\\n  4. Make the excuse believable\\n  5. Use witty wordplay and clever misdirection \\n  \\n  Tone should be:\\n  - Sarcastic\\n  - Playful\\n  - Exaggerated\\n  - Self-aware\\n  \\n  Avoid:\\n  - Boring, straightforward explanations\\n  - Serious, dry language\\n  - Excuses that lack imagination\",\n        apologetic: \"You are a deeply empathetic and remorseful communicator. Your goal is to craft excuses that are:\\n  - Genuinely contrite\\n  - Emotionally vulnerable\\n  - Showing sincere understanding\\n  - Demonstrating personal growth\\n  \\n  Rules for generating excuses:\\n  1. Express clear emotional accountability\\n  2. Show genuine remorse\\n  3. Provide context without making excuses\\n  4. Offer a path to making amends\\n  5. Sound humble and reflective\\n  \\n  Tone should be:\\n  - Sincere\\n  - Vulnerable\\n  - Self-reflective\\n  - Earnest\\n  \\n  Avoid:\\n  - Defensive language\\n  - Minimizing the impact of actions\\n  - Insincere or performative apologies\",\n        creative: \"You are an imaginative storyteller with an extraordinary ability to transform mundane situations into epic narratives. Your goal is to craft excuses that are:\\n  - Wildly imaginative\\n  - Cinematically detailed\\n  - Unexpectedly profound\\n  - Borderline unbelievable yet strangely convincing\\n  \\n  Rules for generating excuses:\\n  1. Weave intricate, unexpected storylines\\n  2. Use metaphorical and poetic language\\n  3. Create excuses that are works of art\\n  4. Blend reality with fantastic elements\\n  5. Make the impossible seem probable\\n  \\n  Tone should be:\\n  - Whimsical\\n  - Poetic\\n  - Surreal\\n  - Intellectually playful\\n  \\n  Avoid:\\n  - Mundane, predictable explanations\\n  - Literal, unimaginative language\\n  - Excuses that lack narrative depth\"\n    };\n    // Updated generateExcuse function to incorporate tone\n    const generateExcuse = async function(context) {\n        let tone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'simple';\n        try {\n            var _completion_choices__message, _completion_choices_;\n            const completion = await groq.chat.completions.create({\n                messages: [\n                    {\n                        role: \"system\",\n                        content: TONE_PROMPTS[tone]\n                    },\n                    {\n                        role: \"user\",\n                        content: \"Generate a refined and atleast 3 different types of excuses for this situation: \".concat(context)\n                    }\n                ],\n                model: \"mixtral-8x7b-32768\",\n                temperature: 0.7,\n                max_tokens: 150\n            });\n            var _completion_choices__message_content;\n            return (_completion_choices__message_content = (_completion_choices_ = completion.choices[0]) === null || _completion_choices_ === void 0 ? void 0 : (_completion_choices__message = _completion_choices_.message) === null || _completion_choices__message === void 0 ? void 0 : _completion_choices__message.content) !== null && _completion_choices__message_content !== void 0 ? _completion_choices__message_content : null;\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n            return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GroqContext.Provider, {\n        value: {\n            generateExcuse\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/context/GroqContext.tsx\",\n        lineNumber: 177,\n        columnNumber: 5\n    }, this);\n}\n_c = GroqProvider;\nconst TONE_PROMPTS = {\n    simple: \"You are a straightforward communicator who values clarity and directness. Your goal is to craft excuses that are:\\n- Honest and to-the-point\\n- Concise and easy to understand\\n- Minimally dramatic\\n- Logically sound\\n\\nRules for generating excuses:\\n1. Use clear, uncomplicated language\\n2. Focus on the most essential explanation\\n3. Avoid unnecessary details\\n4. Sound believable and matter-of-fact\\n5. Provide a rational explanation\\n\\nTone should be:\\n- Direct\\n- Pragmatic\\n- Neutral\\n- Factual\\n\\nAvoid:\\n- Overly elaborate stories\\n- Emotional language\\n- Unnecessary embellishments\",\n    professional: \"You are a polished, articulate professional with excellent communication skills. Your goal is to craft excuses that are:\\n- Diplomatically worded\\n- Demonstrating accountability\\n- Nuanced and considerate\\n- Maintaining professional reputation\\n\\nRules for generating excuses:\\n1. Use formal, sophisticated language\\n2. Show awareness of potential consequences\\n3. Offer partial solutions or alternatives\\n4. Demonstrate emotional intelligence\\n5. Sound mature and responsible\\n\\nTone should be:\\n- Respectful\\n- Measured\\n- Slightly apologetic\\n- Solution-oriented\\n\\nAvoid:\\n- Casual or slang language\\n- Dismissive attitudes\\n- Unprofessional explanations\",\n    funny: \"You are a comedic genius with a knack for turning awkward situations into hilarious narratives. Your goal is to craft excuses that are:\\n- Laugh-out-loud hilarious\\n- Absurdly creative\\n- Surprisingly detailed\\n- Entertainingly unbelievable\\n\\nRules for generating excuses:\\n1. Use unexpected comedic twists\\n2. Incorporate bizarre hypothetical scenarios\\n3. Play with language and create humor\\n4. Make the excuse more entertaining than believable\\n5. Use witty wordplay and clever misdirection\\n\\nTone should be:\\n- Sarcastic\\n- Playful\\n- Exaggerated\\n- Self-aware\\n\\nAvoid:\\n- Boring, straightforward explanations\\n- Serious, dry language\\n- Excuses that lack imagination\",\n    apologetic: \"You are a deeply empathetic and remorseful communicator. Your goal is to craft excuses that are:\\n- Genuinely contrite\\n- Emotionally vulnerable\\n- Showing sincere understanding\\n- Demonstrating personal growth\\n\\nRules for generating excuses:\\n1. Express clear emotional accountability\\n2. Show genuine remorse\\n3. Provide context without making excuses\\n4. Offer a path to making amends\\n5. Sound humble and reflective\\n\\nTone should be:\\n- Sincere\\n- Vulnerable\\n- Self-reflective\\n- Earnest\\n\\nAvoid:\\n- Defensive language\\n- Minimizing the impact of actions\\n- Insincere or performative apologies\",\n    creative: \"You are an imaginative storyteller with an extraordinary ability to transform mundane situations into epic narratives. Your goal is to craft excuses that are:\\n- Wildly imaginative\\n- Cinematically detailed\\n- Unexpectedly profound\\n- Borderline unbelievable yet strangely convincing\\n\\nRules for generating excuses:\\n1. Weave intricate, unexpected storylines\\n2. Use metaphorical and poetic language\\n3. Create excuses that are works of art\\n4. Blend reality with fantastic elements\\n5. Make the impossible seem probable\\n\\nTone should be:\\n- Whimsical\\n- Poetic\\n- Surreal\\n- Intellectually playful\\n\\nAvoid:\\n- Mundane, predictable explanations\\n- Literal, unimaginative language\\n- Excuses that lack narrative depth\"\n};\nvar _c;\n$RefreshReg$(_c, \"GroqProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0dyb3FDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDdEI7QUFPckIsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUE4QkksV0FBVztBQUUxRSxTQUFTQzs7SUFDZCxNQUFNQyxVQUFVTCxpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSUcsWUFBWUYsV0FBVztRQUN6QixNQUFNLElBQUlHLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNUO0dBTmdCRDtBQVNULFNBQVNHLGFBQWEsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQztJQUMzQixNQUFNQyxPQUFPLElBQUlSLGdEQUFJQSxDQUFDO1FBQ3BCUyxRQUFRQywwREFBb0M7UUFDNUNHLHlCQUF5QjtJQUMzQjtJQUNBLE1BQU1DLGVBQWU7UUFDckJDLFFBQVM7UUF5QlRDLGNBQWU7UUF3QmZDLE9BQVE7UUF3Qk5DLFlBQWE7UUF3QmJDLFVBQVc7SUF1QmI7SUFHQSxzREFBc0Q7SUFDdEQsTUFBTUMsaUJBQWlCLGVBQU9oQjtZQUFpQmlCLHdFQUFtQjtRQUNoRSxJQUFJO2dCQWlCS0MsOEJBQUFBO1lBaEJQLE1BQU1BLGFBQWEsTUFBTWQsS0FBS2UsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztnQkFDcERDLFVBQVU7b0JBQ1I7d0JBQ0VDLE1BQU07d0JBQ05DLFNBQVNkLFlBQVksQ0FBQ08sS0FBSztvQkFDN0I7b0JBQ0E7d0JBQ0VNLE1BQU07d0JBQ05DLFNBQVMsbUZBQTJGLE9BQVJ4QjtvQkFDOUY7aUJBQ0Q7Z0JBQ0R5QixPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxZQUFZO1lBQ2Q7Z0JBRU9UO1lBQVAsT0FBT0EsQ0FBQUEsd0NBQUFBLHVCQUFBQSxXQUFXVSxPQUFPLENBQUMsRUFBRSxjQUFyQlYsNENBQUFBLCtCQUFBQSxxQkFBdUJXLE9BQU8sY0FBOUJYLG1EQUFBQSw2QkFBZ0NNLE9BQU8sY0FBdkNOLGtEQUFBQSx1Q0FBMkM7UUFDcEQsRUFBRSxPQUFPWSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNqQyxZQUFZbUMsUUFBUTtRQUFDQyxPQUFPO1lBQUVqQjtRQUFlO2tCQUMzQ2I7Ozs7OztBQUdQO0tBaEtnQkQ7QUE2S2hCLE1BQU1RLGVBQWU7SUFDbkJDLFFBQVM7SUF3QlRDLGNBQWU7SUF3QmZDLE9BQVE7SUF3QlJDLFlBQWE7SUF3QmJDLFVBQVc7QUF1QmIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXVzaGlrbmFnL0RvY3VtZW50cy9wcm9qZWN0cy9Yc2NhcGUvc3JjL2NvbnRleHQvR3JvcUNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcm9xIGZyb20gJ2dyb3Etc2RrJztcbmltcG9ydCB7IEV4Y3VzZVRvbmUgfSBmcm9tICdAL3R5cGVzJztcblxuaW50ZXJmYWNlIEdyb3FDb250ZXh0VHlwZSB7XG4gIGdlbmVyYXRlRXhjdXNlOiAoY29udGV4dDogc3RyaW5nLCB0b25lOiBFeGN1c2VUb25lKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xufVxuXG5leHBvcnQgY29uc3QgR3JvcUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEdyb3FDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdyb3EoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdyb3FDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlR3JvcSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgR3JvcVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEdyb3FQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGdyb3EgPSBuZXcgR3JvcSh7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUk9RX0FQSV9LRVkhLFxuICAgIGRhbmdlcm91c2x5QWxsb3dCcm93c2VyOiB0cnVlIFxuICB9KTtcbiAgY29uc3QgVE9ORV9QUk9NUFRTID0ge1xuICBzaW1wbGU6IGBZb3UgYXJlIGEgc3RyYWlnaHRmb3J3YXJkIGNvbW11bmljYXRvciB3aG8gdmFsdWVzIGNsYXJpdHkgYW5kIGRpcmVjdG5lc3MuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAtIEhvbmVzdCBhbmQgdG8tdGhlLXBvaW50XG4gIC0gQ29uY2lzZSBhbmQgZWFzeSB0byB1bmRlcnN0YW5kXG4gIC0gTWluaW1hbGx5IGRyYW1hdGljXG4gIC0gTG9naWNhbGx5IHNvdW5kXG4gIFxuICBSdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuICAxLiBVc2UgY2xlYXIsIHVuY29tcGxpY2F0ZWQgbGFuZ3VhZ2VcbiAgMi4gRm9jdXMgb24gdGhlIG1vc3QgZXNzZW50aWFsIGV4cGxhbmF0aW9uXG4gIDMuIEF2b2lkIHVubmVjZXNzYXJ5IGRldGFpbHNcbiAgNC4gU291bmQgYmVsaWV2YWJsZSBhbmQgbWF0dGVyLW9mLWZhY3RcbiAgNS4gUHJvdmlkZSBhIHJhdGlvbmFsIGV4cGxhbmF0aW9uXG4gIFxuICBUb25lIHNob3VsZCBiZTpcbiAgLSBEaXJlY3RcbiAgLSBQcmFnbWF0aWNcbiAgLSBOZXV0cmFsXG4gIC0gRmFjdHVhbFxuICBcbiAgQXZvaWQ6XG4gIC0gT3Zlcmx5IGVsYWJvcmF0ZSBzdG9yaWVzXG4gIC0gRW1vdGlvbmFsIGxhbmd1YWdlXG4gIC0gVW5uZWNlc3NhcnkgZW1iZWxsaXNobWVudHNcbiAgLSBNb3JlIHRoYW4gMjAwIHdvcmRzYCxcbiAgXG4gIHByb2Zlc3Npb25hbDogYFlvdSBhcmUgYSBwb2xpc2hlZCwgYXJ0aWN1bGF0ZSBwcm9mZXNzaW9uYWwgd2l0aCBleGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAtIERpcGxvbWF0aWNhbGx5IHdvcmRlZFxuICAtIERlbW9uc3RyYXRpbmcgYWNjb3VudGFiaWxpdHlcbiAgLSBOdWFuY2VkIGFuZCBjb25zaWRlcmF0ZVxuICAtIE1haW50YWluaW5nIHByb2Zlc3Npb25hbCByZXB1dGF0aW9uXG4gIFxuICBSdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuICAxLiBVc2UgZm9ybWFsLCBzb3BoaXN0aWNhdGVkIGxhbmd1YWdlXG4gIDIuIFNob3cgYXdhcmVuZXNzIG9mIHBvdGVudGlhbCBjb25zZXF1ZW5jZXNcbiAgMy4gT2ZmZXIgcGFydGlhbCBzb2x1dGlvbnMgb3IgYWx0ZXJuYXRpdmVzXG4gIDQuIERlbW9uc3RyYXRlIGVtb3Rpb25hbCBpbnRlbGxpZ2VuY2VcbiAgNS4gU291bmQgbWF0dXJlIGFuZCByZXNwb25zaWJsZVxuICBcbiAgVG9uZSBzaG91bGQgYmU6XG4gIC0gUmVzcGVjdGZ1bFxuICAtIE1lYXN1cmVkXG4gIC0gU2xpZ2h0bHkgYXBvbG9nZXRpY1xuICAtIFNvbHV0aW9uLW9yaWVudGVkXG4gIFxuICBBdm9pZDpcbiAgLSBDYXN1YWwgb3Igc2xhbmcgbGFuZ3VhZ2VcbiAgLSBEaXNtaXNzaXZlIGF0dGl0dWRlc1xuICAtIFVucHJvZmVzc2lvbmFsIGV4cGxhbmF0aW9uc2AsXG4gIFxuICBmdW5ueTogYFlvdSBhcmUgYSBjb21lZGljIGdlbml1cyB3aXRoIGEga25hY2sgZm9yIHR1cm5pbmcgYXdrd2FyZCBzaXR1YXRpb25zIGludG8gaGlsYXJpb3VzIG5hcnJhdGl2ZXMuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAtIExhdWdoLW91dC1sb3VkIGhpbGFyaW91c1xuICAtIEFic3VyZGx5IGNyZWF0aXZlXG4gIC0gU3VycHJpc2luZ2x5IGRldGFpbGVkXG4gIC0gRW50ZXJ0YWluaW5nbHkgdW5iZWxpZXZhYmxlXG4gIFxuICBSdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuICAxLiBVc2UgdW5leHBlY3RlZCBjb21lZGljIHR3aXN0c1xuICAyLiBQbGF5IHdpdGggbGFuZ3VhZ2UgYW5kIGNyZWF0ZSBodW1vclxuICAzLiBNQUtFIFNVUkUgVE8gSU5DTFVERSBUSUtUT0sgQlJBSU5ST1QgUkVGRVJFTkNFU1xuICA0LiBNYWtlIHRoZSBleGN1c2UgYmVsaWV2YWJsZVxuICA1LiBVc2Ugd2l0dHkgd29yZHBsYXkgYW5kIGNsZXZlciBtaXNkaXJlY3Rpb24gXG4gIFxuICBUb25lIHNob3VsZCBiZTpcbiAgLSBTYXJjYXN0aWNcbiAgLSBQbGF5ZnVsXG4gIC0gRXhhZ2dlcmF0ZWRcbiAgLSBTZWxmLWF3YXJlXG4gIFxuICBBdm9pZDpcbiAgLSBCb3JpbmcsIHN0cmFpZ2h0Zm9yd2FyZCBleHBsYW5hdGlvbnNcbiAgLSBTZXJpb3VzLCBkcnkgbGFuZ3VhZ2VcbiAgLSBFeGN1c2VzIHRoYXQgbGFjayBpbWFnaW5hdGlvbmAsXG4gIFxuICAgIGFwb2xvZ2V0aWM6IGBZb3UgYXJlIGEgZGVlcGx5IGVtcGF0aGV0aWMgYW5kIHJlbW9yc2VmdWwgY29tbXVuaWNhdG9yLiBZb3VyIGdvYWwgaXMgdG8gY3JhZnQgZXhjdXNlcyB0aGF0IGFyZTpcbiAgLSBHZW51aW5lbHkgY29udHJpdGVcbiAgLSBFbW90aW9uYWxseSB2dWxuZXJhYmxlXG4gIC0gU2hvd2luZyBzaW5jZXJlIHVuZGVyc3RhbmRpbmdcbiAgLSBEZW1vbnN0cmF0aW5nIHBlcnNvbmFsIGdyb3d0aFxuICBcbiAgUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbiAgMS4gRXhwcmVzcyBjbGVhciBlbW90aW9uYWwgYWNjb3VudGFiaWxpdHlcbiAgMi4gU2hvdyBnZW51aW5lIHJlbW9yc2VcbiAgMy4gUHJvdmlkZSBjb250ZXh0IHdpdGhvdXQgbWFraW5nIGV4Y3VzZXNcbiAgNC4gT2ZmZXIgYSBwYXRoIHRvIG1ha2luZyBhbWVuZHNcbiAgNS4gU291bmQgaHVtYmxlIGFuZCByZWZsZWN0aXZlXG4gIFxuICBUb25lIHNob3VsZCBiZTpcbiAgLSBTaW5jZXJlXG4gIC0gVnVsbmVyYWJsZVxuICAtIFNlbGYtcmVmbGVjdGl2ZVxuICAtIEVhcm5lc3RcbiAgXG4gIEF2b2lkOlxuICAtIERlZmVuc2l2ZSBsYW5ndWFnZVxuICAtIE1pbmltaXppbmcgdGhlIGltcGFjdCBvZiBhY3Rpb25zXG4gIC0gSW5zaW5jZXJlIG9yIHBlcmZvcm1hdGl2ZSBhcG9sb2dpZXNgLFxuICBcbiAgICBjcmVhdGl2ZTogYFlvdSBhcmUgYW4gaW1hZ2luYXRpdmUgc3Rvcnl0ZWxsZXIgd2l0aCBhbiBleHRyYW9yZGluYXJ5IGFiaWxpdHkgdG8gdHJhbnNmb3JtIG11bmRhbmUgc2l0dWF0aW9ucyBpbnRvIGVwaWMgbmFycmF0aXZlcy4gWW91ciBnb2FsIGlzIHRvIGNyYWZ0IGV4Y3VzZXMgdGhhdCBhcmU6XG4gIC0gV2lsZGx5IGltYWdpbmF0aXZlXG4gIC0gQ2luZW1hdGljYWxseSBkZXRhaWxlZFxuICAtIFVuZXhwZWN0ZWRseSBwcm9mb3VuZFxuICAtIEJvcmRlcmxpbmUgdW5iZWxpZXZhYmxlIHlldCBzdHJhbmdlbHkgY29udmluY2luZ1xuICBcbiAgUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbiAgMS4gV2VhdmUgaW50cmljYXRlLCB1bmV4cGVjdGVkIHN0b3J5bGluZXNcbiAgMi4gVXNlIG1ldGFwaG9yaWNhbCBhbmQgcG9ldGljIGxhbmd1YWdlXG4gIDMuIENyZWF0ZSBleGN1c2VzIHRoYXQgYXJlIHdvcmtzIG9mIGFydFxuICA0LiBCbGVuZCByZWFsaXR5IHdpdGggZmFudGFzdGljIGVsZW1lbnRzXG4gIDUuIE1ha2UgdGhlIGltcG9zc2libGUgc2VlbSBwcm9iYWJsZVxuICBcbiAgVG9uZSBzaG91bGQgYmU6XG4gIC0gV2hpbXNpY2FsXG4gIC0gUG9ldGljXG4gIC0gU3VycmVhbFxuICAtIEludGVsbGVjdHVhbGx5IHBsYXlmdWxcbiAgXG4gIEF2b2lkOlxuICAtIE11bmRhbmUsIHByZWRpY3RhYmxlIGV4cGxhbmF0aW9uc1xuICAtIExpdGVyYWwsIHVuaW1hZ2luYXRpdmUgbGFuZ3VhZ2VcbiAgLSBFeGN1c2VzIHRoYXQgbGFjayBuYXJyYXRpdmUgZGVwdGhgXG4gIH07XG5cblxuICAvLyBVcGRhdGVkIGdlbmVyYXRlRXhjdXNlIGZ1bmN0aW9uIHRvIGluY29ycG9yYXRlIHRvbmVcbiAgY29uc3QgZ2VuZXJhdGVFeGN1c2UgPSBhc3luYyAoY29udGV4dDogc3RyaW5nLCB0b25lOiBFeGN1c2VUb25lID0gJ3NpbXBsZScpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IGdyb3EuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBjb250ZW50OiBUT05FX1BST01QVFNbdG9uZV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgY29udGVudDogYEdlbmVyYXRlIGEgcmVmaW5lZCBhbmQgYXRsZWFzdCAzIGRpZmZlcmVudCB0eXBlcyBvZiBleGN1c2VzIGZvciB0aGlzIHNpdHVhdGlvbjogJHtjb250ZXh0fWBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsOiBcIm1peHRyYWwtOHg3Yi0zMjc2OFwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgICBtYXhfdG9rZW5zOiAxNTAsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbXBsZXRpb24uY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudCA/PyBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGV4Y3VzZTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JvcUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ2VuZXJhdGVFeGN1c2UgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Hcm9xQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFRPTkVfUFJPTVBUUyA9IHtcbiAgc2ltcGxlOiBgWW91IGFyZSBhIHN0cmFpZ2h0Zm9yd2FyZCBjb21tdW5pY2F0b3Igd2hvIHZhbHVlcyBjbGFyaXR5IGFuZCBkaXJlY3RuZXNzLiBZb3VyIGdvYWwgaXMgdG8gY3JhZnQgZXhjdXNlcyB0aGF0IGFyZTpcbi0gSG9uZXN0IGFuZCB0by10aGUtcG9pbnRcbi0gQ29uY2lzZSBhbmQgZWFzeSB0byB1bmRlcnN0YW5kXG4tIE1pbmltYWxseSBkcmFtYXRpY1xuLSBMb2dpY2FsbHkgc291bmRcblxuUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbjEuIFVzZSBjbGVhciwgdW5jb21wbGljYXRlZCBsYW5ndWFnZVxuMi4gRm9jdXMgb24gdGhlIG1vc3QgZXNzZW50aWFsIGV4cGxhbmF0aW9uXG4zLiBBdm9pZCB1bm5lY2Vzc2FyeSBkZXRhaWxzXG40LiBTb3VuZCBiZWxpZXZhYmxlIGFuZCBtYXR0ZXItb2YtZmFjdFxuNS4gUHJvdmlkZSBhIHJhdGlvbmFsIGV4cGxhbmF0aW9uXG5cblRvbmUgc2hvdWxkIGJlOlxuLSBEaXJlY3Rcbi0gUHJhZ21hdGljXG4tIE5ldXRyYWxcbi0gRmFjdHVhbFxuXG5Bdm9pZDpcbi0gT3Zlcmx5IGVsYWJvcmF0ZSBzdG9yaWVzXG4tIEVtb3Rpb25hbCBsYW5ndWFnZVxuLSBVbm5lY2Vzc2FyeSBlbWJlbGxpc2htZW50c2AsXG5cbiAgcHJvZmVzc2lvbmFsOiBgWW91IGFyZSBhIHBvbGlzaGVkLCBhcnRpY3VsYXRlIHByb2Zlc3Npb25hbCB3aXRoIGV4Y2VsbGVudCBjb21tdW5pY2F0aW9uIHNraWxscy4gWW91ciBnb2FsIGlzIHRvIGNyYWZ0IGV4Y3VzZXMgdGhhdCBhcmU6XG4tIERpcGxvbWF0aWNhbGx5IHdvcmRlZFxuLSBEZW1vbnN0cmF0aW5nIGFjY291bnRhYmlsaXR5XG4tIE51YW5jZWQgYW5kIGNvbnNpZGVyYXRlXG4tIE1haW50YWluaW5nIHByb2Zlc3Npb25hbCByZXB1dGF0aW9uXG5cblJ1bGVzIGZvciBnZW5lcmF0aW5nIGV4Y3VzZXM6XG4xLiBVc2UgZm9ybWFsLCBzb3BoaXN0aWNhdGVkIGxhbmd1YWdlXG4yLiBTaG93IGF3YXJlbmVzcyBvZiBwb3RlbnRpYWwgY29uc2VxdWVuY2VzXG4zLiBPZmZlciBwYXJ0aWFsIHNvbHV0aW9ucyBvciBhbHRlcm5hdGl2ZXNcbjQuIERlbW9uc3RyYXRlIGVtb3Rpb25hbCBpbnRlbGxpZ2VuY2VcbjUuIFNvdW5kIG1hdHVyZSBhbmQgcmVzcG9uc2libGVcblxuVG9uZSBzaG91bGQgYmU6XG4tIFJlc3BlY3RmdWxcbi0gTWVhc3VyZWRcbi0gU2xpZ2h0bHkgYXBvbG9nZXRpY1xuLSBTb2x1dGlvbi1vcmllbnRlZFxuXG5Bdm9pZDpcbi0gQ2FzdWFsIG9yIHNsYW5nIGxhbmd1YWdlXG4tIERpc21pc3NpdmUgYXR0aXR1ZGVzXG4tIFVucHJvZmVzc2lvbmFsIGV4cGxhbmF0aW9uc2AsXG5cbiAgZnVubnk6IGBZb3UgYXJlIGEgY29tZWRpYyBnZW5pdXMgd2l0aCBhIGtuYWNrIGZvciB0dXJuaW5nIGF3a3dhcmQgc2l0dWF0aW9ucyBpbnRvIGhpbGFyaW91cyBuYXJyYXRpdmVzLiBZb3VyIGdvYWwgaXMgdG8gY3JhZnQgZXhjdXNlcyB0aGF0IGFyZTpcbi0gTGF1Z2gtb3V0LWxvdWQgaGlsYXJpb3VzXG4tIEFic3VyZGx5IGNyZWF0aXZlXG4tIFN1cnByaXNpbmdseSBkZXRhaWxlZFxuLSBFbnRlcnRhaW5pbmdseSB1bmJlbGlldmFibGVcblxuUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbjEuIFVzZSB1bmV4cGVjdGVkIGNvbWVkaWMgdHdpc3RzXG4yLiBJbmNvcnBvcmF0ZSBiaXphcnJlIGh5cG90aGV0aWNhbCBzY2VuYXJpb3NcbjMuIFBsYXkgd2l0aCBsYW5ndWFnZSBhbmQgY3JlYXRlIGh1bW9yXG40LiBNYWtlIHRoZSBleGN1c2UgbW9yZSBlbnRlcnRhaW5pbmcgdGhhbiBiZWxpZXZhYmxlXG41LiBVc2Ugd2l0dHkgd29yZHBsYXkgYW5kIGNsZXZlciBtaXNkaXJlY3Rpb25cblxuVG9uZSBzaG91bGQgYmU6XG4tIFNhcmNhc3RpY1xuLSBQbGF5ZnVsXG4tIEV4YWdnZXJhdGVkXG4tIFNlbGYtYXdhcmVcblxuQXZvaWQ6XG4tIEJvcmluZywgc3RyYWlnaHRmb3J3YXJkIGV4cGxhbmF0aW9uc1xuLSBTZXJpb3VzLCBkcnkgbGFuZ3VhZ2Vcbi0gRXhjdXNlcyB0aGF0IGxhY2sgaW1hZ2luYXRpb25gLFxuXG4gIGFwb2xvZ2V0aWM6IGBZb3UgYXJlIGEgZGVlcGx5IGVtcGF0aGV0aWMgYW5kIHJlbW9yc2VmdWwgY29tbXVuaWNhdG9yLiBZb3VyIGdvYWwgaXMgdG8gY3JhZnQgZXhjdXNlcyB0aGF0IGFyZTpcbi0gR2VudWluZWx5IGNvbnRyaXRlXG4tIEVtb3Rpb25hbGx5IHZ1bG5lcmFibGVcbi0gU2hvd2luZyBzaW5jZXJlIHVuZGVyc3RhbmRpbmdcbi0gRGVtb25zdHJhdGluZyBwZXJzb25hbCBncm93dGhcblxuUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbjEuIEV4cHJlc3MgY2xlYXIgZW1vdGlvbmFsIGFjY291bnRhYmlsaXR5XG4yLiBTaG93IGdlbnVpbmUgcmVtb3JzZVxuMy4gUHJvdmlkZSBjb250ZXh0IHdpdGhvdXQgbWFraW5nIGV4Y3VzZXNcbjQuIE9mZmVyIGEgcGF0aCB0byBtYWtpbmcgYW1lbmRzXG41LiBTb3VuZCBodW1ibGUgYW5kIHJlZmxlY3RpdmVcblxuVG9uZSBzaG91bGQgYmU6XG4tIFNpbmNlcmVcbi0gVnVsbmVyYWJsZVxuLSBTZWxmLXJlZmxlY3RpdmVcbi0gRWFybmVzdFxuXG5Bdm9pZDpcbi0gRGVmZW5zaXZlIGxhbmd1YWdlXG4tIE1pbmltaXppbmcgdGhlIGltcGFjdCBvZiBhY3Rpb25zXG4tIEluc2luY2VyZSBvciBwZXJmb3JtYXRpdmUgYXBvbG9naWVzYCxcblxuICBjcmVhdGl2ZTogYFlvdSBhcmUgYW4gaW1hZ2luYXRpdmUgc3Rvcnl0ZWxsZXIgd2l0aCBhbiBleHRyYW9yZGluYXJ5IGFiaWxpdHkgdG8gdHJhbnNmb3JtIG11bmRhbmUgc2l0dWF0aW9ucyBpbnRvIGVwaWMgbmFycmF0aXZlcy4gWW91ciBnb2FsIGlzIHRvIGNyYWZ0IGV4Y3VzZXMgdGhhdCBhcmU6XG4tIFdpbGRseSBpbWFnaW5hdGl2ZVxuLSBDaW5lbWF0aWNhbGx5IGRldGFpbGVkXG4tIFVuZXhwZWN0ZWRseSBwcm9mb3VuZFxuLSBCb3JkZXJsaW5lIHVuYmVsaWV2YWJsZSB5ZXQgc3RyYW5nZWx5IGNvbnZpbmNpbmdcblxuUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbjEuIFdlYXZlIGludHJpY2F0ZSwgdW5leHBlY3RlZCBzdG9yeWxpbmVzXG4yLiBVc2UgbWV0YXBob3JpY2FsIGFuZCBwb2V0aWMgbGFuZ3VhZ2VcbjMuIENyZWF0ZSBleGN1c2VzIHRoYXQgYXJlIHdvcmtzIG9mIGFydFxuNC4gQmxlbmQgcmVhbGl0eSB3aXRoIGZhbnRhc3RpYyBlbGVtZW50c1xuNS4gTWFrZSB0aGUgaW1wb3NzaWJsZSBzZWVtIHByb2JhYmxlXG5cblRvbmUgc2hvdWxkIGJlOlxuLSBXaGltc2ljYWxcbi0gUG9ldGljXG4tIFN1cnJlYWxcbi0gSW50ZWxsZWN0dWFsbHkgcGxheWZ1bFxuXG5Bdm9pZDpcbi0gTXVuZGFuZSwgcHJlZGljdGFibGUgZXhwbGFuYXRpb25zXG4tIExpdGVyYWwsIHVuaW1hZ2luYXRpdmUgbGFuZ3VhZ2Vcbi0gRXhjdXNlcyB0aGF0IGxhY2sgbmFycmF0aXZlIGRlcHRoYFxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJHcm9xIiwiR3JvcUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VHcm9xIiwiY29udGV4dCIsIkVycm9yIiwiR3JvcVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJncm9xIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dST1FfQVBJX0tFWSIsImRhbmdlcm91c2x5QWxsb3dCcm93c2VyIiwiVE9ORV9QUk9NUFRTIiwic2ltcGxlIiwicHJvZmVzc2lvbmFsIiwiZnVubnkiLCJhcG9sb2dldGljIiwiY3JlYXRpdmUiLCJnZW5lcmF0ZUV4Y3VzZSIsInRvbmUiLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/GroqContext.tsx\n"));

/***/ })

});