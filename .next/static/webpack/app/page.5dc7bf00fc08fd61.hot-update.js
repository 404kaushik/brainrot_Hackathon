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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GroqProvider: () => (/* binding */ GroqProvider),\n/* harmony export */   useGroq: () => (/* binding */ useGroq)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! groq-sdk */ \"(app-pages-browser)/./node_modules/groq-sdk/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ GroqProvider,useGroq auto */ \nvar _s = $RefreshSig$();\n\n\nconst GroqContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction GroqProvider(param) {\n    let { children } = param;\n    const groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        apiKey: \"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\",\n        dangerouslyAllowBrowser: true\n    });\n    // Tone-specific system prompts for excuse generation\n    const TONE_PROMPTS = {\n        simple: \"You are a straightforward communicator who values clarity and directness. Your goal is to craft excuses that are:\\n    - Honest and to-the-point\\n    - Concise and easy to understand\\n    - Minimally dramatic\\n    - Logically sound\\n\\n    Rules for generating excuses:\\n    1. Use clear, uncomplicated language\\n    2. Focus on the most essential explanation\\n    3. Avoid unnecessary details\\n    4. Sound believable and matter-of-fact\\n    5. Provide a rational explanation\\n\\n    Tone should be:\\n    - Direct\\n    - Pragmatic\\n    - Neutral\\n    - Factual\\n\\n    Avoid:\\n    - Overly elaborate stories\\n    - Emotional language\\n    - Unnecessary embellishments\",\n        professional: \"You are a polished, articulate professional with excellent communication skills. Your goal is to craft excuses that are:\\n    - Diplomatically worded\\n    - Demonstrating accountability\\n    - Nuanced and considerate\\n    - Maintaining professional reputation\\n\\n    Rules for generating excuses:\\n    1. Use formal, sophisticated language\\n    2. Show awareness of potential consequences\\n    3. Offer partial solutions or alternatives\\n    4. Demonstrate emotional intelligence\\n    5. Sound mature and responsible\\n\\n    Tone should be:\\n    - Respectful\\n    - Measured\\n    - Slightly apologetic\\n    - Solution-oriented\\n\\n    Avoid:\\n    - Casual or slang language\\n    - Dismissive attitudes\\n    - Unprofessional explanations\",\n        funny: \"You are a comedic genius with a knack for turning awkward situations into hilarious narratives. Your goal is to craft excuses that are:\\n    - Laugh-out-loud hilarious\\n    - Absurdly creative\\n    - Surprisingly detailed\\n    - Entertainingly unbelievable\\n\\n    Rules for generating excuses:\\n    1. Use unexpected comedic twists\\n    2. Incorporate bizarre hypothetical scenarios\\n    3. Play with language and create humor\\n    4. Make the excuse more entertaining than believable\\n    5. Use witty wordplay and clever misdirection\\n\\n    Tone should be:\\n    - Sarcastic\\n    - Playful\\n    - Exaggerated\\n    - Self-aware\\n\\n    Avoid:\\n    - Boring, straightforward explanations\\n    - Serious, dry language\\n    - Excuses that lack imagination\",\n        apologetic: \"You are a deeply empathetic and remorseful communicator. Your goal is to craft excuses that are:\\n    - Genuinely contrite\\n    - Emotionally vulnerable\\n    - Showing sincere understanding\\n    - Demonstrating personal growth\\n\\n    Rules for generating excuses:\\n    1. Express clear emotional accountability\\n    2. Show genuine remorse\\n    3. Provide context without making excuses\\n    4. Offer a path to making amends\\n    5. Sound humble and reflective\\n\\n    Tone should be:\\n    - Sincere\\n    - Vulnerable\\n    - Self-reflective\\n    - Earnest\\n\\n    Avoid:\\n    - Defensive language\\n    - Minimizing the impact of actions\\n    - Insincere or performative apologies\",\n        creative: \"You are an imaginative storyteller with an extraordinary ability to transform mundane situations into epic narratives. Your goal is to craft excuses that are:\\n    - Wildly imaginative\\n    - Cinematically detailed\\n    - Unexpectedly profound\\n    - Borderline unbelievable yet strangely convincing\\n\\n    Rules for generating excuses:\\n    1. Weave intricate, unexpected storylines\\n    2. Use metaphorical and poetic language\\n    3. Create excuses that are works of art\\n    4. Blend reality with fantastic elements\\n    5. Make the impossible seem probable\\n\\n    Tone should be:\\n    - Whimsical\\n    - Poetic\\n    - Surreal\\n    - Intellectually playful\\n\\n    Avoid:\\n    - Mundane, predictable explanations\\n    - Literal, unimaginative language\\n    - Excuses that lack narrative depth\"\n    };\n    const generateExcuse = async (context)=>{\n        try {\n            var _completion_choices__message, _completion_choices_;\n            const completion = await groq.chat.completions.create({\n                messages: [\n                    {\n                        role: \"system\",\n                        content: \"You are a Gen Z teenager with a sharp, unapologetic communication style. Your goal is to craft excuses that are:\\n- Brutally honest yet creative\\n- Packed with modern slang and TikTok-inspired language\\n- Slightly dramatic and over-the-top\\n- Prioritizing avoiding responsibility while sounding somewhat convincing\\n\\nRules for generating excuses:\\n1. Use current Gen Z slang and internet language\\n2. Incorporate trending memes or pop culture references\\n3. Be witty and sarcastic\\n4. Show zero remorse\\n5. Make the excuse sound somewhat plausible but entertainingly ridiculous\\n\\nTone should be: \\n- Confident \\n- Slightly entitled\\n- Minimally apologetic\\n- Maximum sass\\n\\nAvoid: \\n- Overly formal language\\n- Boring or generic excuses\\n- Excuses that sound too responsible or mature\"\n                    },\n                    {\n                        role: \"user\",\n                        content: \"Generate a refined excuse for this situation: \".concat(context)\n                    }\n                ],\n                model: \"mixtral-8x7b-32768\",\n                temperature: 0.7,\n                max_tokens: 150\n            });\n            var _completion_choices__message_content;\n            return (_completion_choices__message_content = (_completion_choices_ = completion.choices[0]) === null || _completion_choices_ === void 0 ? void 0 : (_completion_choices__message = _completion_choices_.message) === null || _completion_choices__message === void 0 ? void 0 : _completion_choices__message.content) !== null && _completion_choices__message_content !== void 0 ? _completion_choices__message_content : null;\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n            return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GroqContext.Provider, {\n        value: {\n            generateExcuse\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/context/GroqContext.tsx\",\n        lineNumber: 190,\n        columnNumber: 5\n    }, this);\n}\n_c = GroqProvider;\nconst useGroq = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroqContext);\n    if (context === undefined) {\n        throw new Error('useGroq must be used within a GroqProvider');\n    }\n    return context;\n};\n_s(useGroq, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"GroqProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0dyb3FDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRDtBQUN0QjtBQU01QixNQUFNRyw0QkFBY0gsb0RBQWFBLENBQThCSTtBQUd4RCxTQUFTQyxhQUFhLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7SUFDM0IsTUFBTUMsT0FBTyxJQUFJTCxnREFBSUEsQ0FBQztRQUNwQk0sUUFBUUMsMERBQW9DO1FBQzVDRyx5QkFBeUI7SUFDM0I7SUFFQSxxREFBcUQ7SUFDdkQsTUFBTUMsZUFBZTtRQUNmQyxRQUFTO1FBd0JUQyxjQUFlO1FBd0JmQyxPQUFRO1FBd0JSQyxZQUFhO1FBd0JiQyxVQUFXO0lBdUJiO0lBR0YsTUFBTUMsaUJBQWlCLE9BQU9DO1FBQzVCLElBQUk7Z0JBdUNLQyw4QkFBQUE7WUF0Q1AsTUFBTUEsYUFBYSxNQUFNZCxLQUFLZSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNwREMsVUFBVTtvQkFDUjt3QkFDRUMsTUFBTTt3QkFDTkMsU0FBVTtvQkF1Qlo7b0JBQ0E7d0JBQ0VELE1BQU07d0JBQ05DLFNBQVMsaURBQXlELE9BQVJQO29CQUM1RDtpQkFDRDtnQkFDRFEsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsWUFBWTtZQUNkO2dCQUVPVDtZQUFQLE9BQU9BLENBQUFBLHdDQUFBQSx1QkFBQUEsV0FBV1UsT0FBTyxDQUFDLEVBQUUsY0FBckJWLDRDQUFBQSwrQkFBQUEscUJBQXVCVyxPQUFPLGNBQTlCWCxtREFBQUEsNkJBQWdDTSxPQUFPLGNBQXZDTixrREFBQUEsdUNBQTJDO1FBQ3BELEVBQUUsT0FBT1ksT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtZQUMxQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDOUIsWUFBWWdDLFFBQVE7UUFBQ0MsT0FBTztZQUFFakI7UUFBZTtrQkFDM0NiOzs7Ozs7QUFHUDtLQXRMZ0JEO0FBd0xULE1BQU1nQyxVQUFVOztJQUNyQixNQUFNakIsVUFBVW5CLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJaUIsWUFBWWhCLFdBQVc7UUFDekIsTUFBTSxJQUFJa0MsTUFBTTtJQUNsQjtJQUNBLE9BQU9sQjtBQUNULEVBQUU7R0FOV2lCIiwic291cmNlcyI6WyIvVXNlcnMva2F1c2hpa25hZy9Eb2N1bWVudHMvcHJvamVjdHMvWHNjYXBlL3NyYy9jb250ZXh0L0dyb3FDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JvcSBmcm9tICdncm9xLXNkayc7XG5cbmludGVyZmFjZSBHcm9xQ29udGV4dFR5cGUge1xuICBnZW5lcmF0ZUV4Y3VzZTogKGNvbnRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcbn1cblxuY29uc3QgR3JvcUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEdyb3FDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gR3JvcVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgZ3JvcSA9IG5ldyBHcm9xKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dST1FfQVBJX0tFWSEsXG4gICAgZGFuZ2Vyb3VzbHlBbGxvd0Jyb3dzZXI6IHRydWUgXG4gIH0pO1xuXG4gIC8vIFRvbmUtc3BlY2lmaWMgc3lzdGVtIHByb21wdHMgZm9yIGV4Y3VzZSBnZW5lcmF0aW9uXG5jb25zdCBUT05FX1BST01QVFMgPSB7XG4gICAgICBzaW1wbGU6IGBZb3UgYXJlIGEgc3RyYWlnaHRmb3J3YXJkIGNvbW11bmljYXRvciB3aG8gdmFsdWVzIGNsYXJpdHkgYW5kIGRpcmVjdG5lc3MuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAgIC0gSG9uZXN0IGFuZCB0by10aGUtcG9pbnRcbiAgICAtIENvbmNpc2UgYW5kIGVhc3kgdG8gdW5kZXJzdGFuZFxuICAgIC0gTWluaW1hbGx5IGRyYW1hdGljXG4gICAgLSBMb2dpY2FsbHkgc291bmRcblxuICAgIFJ1bGVzIGZvciBnZW5lcmF0aW5nIGV4Y3VzZXM6XG4gICAgMS4gVXNlIGNsZWFyLCB1bmNvbXBsaWNhdGVkIGxhbmd1YWdlXG4gICAgMi4gRm9jdXMgb24gdGhlIG1vc3QgZXNzZW50aWFsIGV4cGxhbmF0aW9uXG4gICAgMy4gQXZvaWQgdW5uZWNlc3NhcnkgZGV0YWlsc1xuICAgIDQuIFNvdW5kIGJlbGlldmFibGUgYW5kIG1hdHRlci1vZi1mYWN0XG4gICAgNS4gUHJvdmlkZSBhIHJhdGlvbmFsIGV4cGxhbmF0aW9uXG5cbiAgICBUb25lIHNob3VsZCBiZTpcbiAgICAtIERpcmVjdFxuICAgIC0gUHJhZ21hdGljXG4gICAgLSBOZXV0cmFsXG4gICAgLSBGYWN0dWFsXG5cbiAgICBBdm9pZDpcbiAgICAtIE92ZXJseSBlbGFib3JhdGUgc3Rvcmllc1xuICAgIC0gRW1vdGlvbmFsIGxhbmd1YWdlXG4gICAgLSBVbm5lY2Vzc2FyeSBlbWJlbGxpc2htZW50c2AsXG5cbiAgICAgIHByb2Zlc3Npb25hbDogYFlvdSBhcmUgYSBwb2xpc2hlZCwgYXJ0aWN1bGF0ZSBwcm9mZXNzaW9uYWwgd2l0aCBleGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAgIC0gRGlwbG9tYXRpY2FsbHkgd29yZGVkXG4gICAgLSBEZW1vbnN0cmF0aW5nIGFjY291bnRhYmlsaXR5XG4gICAgLSBOdWFuY2VkIGFuZCBjb25zaWRlcmF0ZVxuICAgIC0gTWFpbnRhaW5pbmcgcHJvZmVzc2lvbmFsIHJlcHV0YXRpb25cblxuICAgIFJ1bGVzIGZvciBnZW5lcmF0aW5nIGV4Y3VzZXM6XG4gICAgMS4gVXNlIGZvcm1hbCwgc29waGlzdGljYXRlZCBsYW5ndWFnZVxuICAgIDIuIFNob3cgYXdhcmVuZXNzIG9mIHBvdGVudGlhbCBjb25zZXF1ZW5jZXNcbiAgICAzLiBPZmZlciBwYXJ0aWFsIHNvbHV0aW9ucyBvciBhbHRlcm5hdGl2ZXNcbiAgICA0LiBEZW1vbnN0cmF0ZSBlbW90aW9uYWwgaW50ZWxsaWdlbmNlXG4gICAgNS4gU291bmQgbWF0dXJlIGFuZCByZXNwb25zaWJsZVxuXG4gICAgVG9uZSBzaG91bGQgYmU6XG4gICAgLSBSZXNwZWN0ZnVsXG4gICAgLSBNZWFzdXJlZFxuICAgIC0gU2xpZ2h0bHkgYXBvbG9nZXRpY1xuICAgIC0gU29sdXRpb24tb3JpZW50ZWRcblxuICAgIEF2b2lkOlxuICAgIC0gQ2FzdWFsIG9yIHNsYW5nIGxhbmd1YWdlXG4gICAgLSBEaXNtaXNzaXZlIGF0dGl0dWRlc1xuICAgIC0gVW5wcm9mZXNzaW9uYWwgZXhwbGFuYXRpb25zYCxcblxuICAgICAgZnVubnk6IGBZb3UgYXJlIGEgY29tZWRpYyBnZW5pdXMgd2l0aCBhIGtuYWNrIGZvciB0dXJuaW5nIGF3a3dhcmQgc2l0dWF0aW9ucyBpbnRvIGhpbGFyaW91cyBuYXJyYXRpdmVzLiBZb3VyIGdvYWwgaXMgdG8gY3JhZnQgZXhjdXNlcyB0aGF0IGFyZTpcbiAgICAtIExhdWdoLW91dC1sb3VkIGhpbGFyaW91c1xuICAgIC0gQWJzdXJkbHkgY3JlYXRpdmVcbiAgICAtIFN1cnByaXNpbmdseSBkZXRhaWxlZFxuICAgIC0gRW50ZXJ0YWluaW5nbHkgdW5iZWxpZXZhYmxlXG5cbiAgICBSdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuICAgIDEuIFVzZSB1bmV4cGVjdGVkIGNvbWVkaWMgdHdpc3RzXG4gICAgMi4gSW5jb3Jwb3JhdGUgYml6YXJyZSBoeXBvdGhldGljYWwgc2NlbmFyaW9zXG4gICAgMy4gUGxheSB3aXRoIGxhbmd1YWdlIGFuZCBjcmVhdGUgaHVtb3JcbiAgICA0LiBNYWtlIHRoZSBleGN1c2UgbW9yZSBlbnRlcnRhaW5pbmcgdGhhbiBiZWxpZXZhYmxlXG4gICAgNS4gVXNlIHdpdHR5IHdvcmRwbGF5IGFuZCBjbGV2ZXIgbWlzZGlyZWN0aW9uXG5cbiAgICBUb25lIHNob3VsZCBiZTpcbiAgICAtIFNhcmNhc3RpY1xuICAgIC0gUGxheWZ1bFxuICAgIC0gRXhhZ2dlcmF0ZWRcbiAgICAtIFNlbGYtYXdhcmVcblxuICAgIEF2b2lkOlxuICAgIC0gQm9yaW5nLCBzdHJhaWdodGZvcndhcmQgZXhwbGFuYXRpb25zXG4gICAgLSBTZXJpb3VzLCBkcnkgbGFuZ3VhZ2VcbiAgICAtIEV4Y3VzZXMgdGhhdCBsYWNrIGltYWdpbmF0aW9uYCxcblxuICAgICAgYXBvbG9nZXRpYzogYFlvdSBhcmUgYSBkZWVwbHkgZW1wYXRoZXRpYyBhbmQgcmVtb3JzZWZ1bCBjb21tdW5pY2F0b3IuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAgIC0gR2VudWluZWx5IGNvbnRyaXRlXG4gICAgLSBFbW90aW9uYWxseSB2dWxuZXJhYmxlXG4gICAgLSBTaG93aW5nIHNpbmNlcmUgdW5kZXJzdGFuZGluZ1xuICAgIC0gRGVtb25zdHJhdGluZyBwZXJzb25hbCBncm93dGhcblxuICAgIFJ1bGVzIGZvciBnZW5lcmF0aW5nIGV4Y3VzZXM6XG4gICAgMS4gRXhwcmVzcyBjbGVhciBlbW90aW9uYWwgYWNjb3VudGFiaWxpdHlcbiAgICAyLiBTaG93IGdlbnVpbmUgcmVtb3JzZVxuICAgIDMuIFByb3ZpZGUgY29udGV4dCB3aXRob3V0IG1ha2luZyBleGN1c2VzXG4gICAgNC4gT2ZmZXIgYSBwYXRoIHRvIG1ha2luZyBhbWVuZHNcbiAgICA1LiBTb3VuZCBodW1ibGUgYW5kIHJlZmxlY3RpdmVcblxuICAgIFRvbmUgc2hvdWxkIGJlOlxuICAgIC0gU2luY2VyZVxuICAgIC0gVnVsbmVyYWJsZVxuICAgIC0gU2VsZi1yZWZsZWN0aXZlXG4gICAgLSBFYXJuZXN0XG5cbiAgICBBdm9pZDpcbiAgICAtIERlZmVuc2l2ZSBsYW5ndWFnZVxuICAgIC0gTWluaW1pemluZyB0aGUgaW1wYWN0IG9mIGFjdGlvbnNcbiAgICAtIEluc2luY2VyZSBvciBwZXJmb3JtYXRpdmUgYXBvbG9naWVzYCxcblxuICAgICAgY3JlYXRpdmU6IGBZb3UgYXJlIGFuIGltYWdpbmF0aXZlIHN0b3J5dGVsbGVyIHdpdGggYW4gZXh0cmFvcmRpbmFyeSBhYmlsaXR5IHRvIHRyYW5zZm9ybSBtdW5kYW5lIHNpdHVhdGlvbnMgaW50byBlcGljIG5hcnJhdGl2ZXMuIFlvdXIgZ29hbCBpcyB0byBjcmFmdCBleGN1c2VzIHRoYXQgYXJlOlxuICAgIC0gV2lsZGx5IGltYWdpbmF0aXZlXG4gICAgLSBDaW5lbWF0aWNhbGx5IGRldGFpbGVkXG4gICAgLSBVbmV4cGVjdGVkbHkgcHJvZm91bmRcbiAgICAtIEJvcmRlcmxpbmUgdW5iZWxpZXZhYmxlIHlldCBzdHJhbmdlbHkgY29udmluY2luZ1xuXG4gICAgUnVsZXMgZm9yIGdlbmVyYXRpbmcgZXhjdXNlczpcbiAgICAxLiBXZWF2ZSBpbnRyaWNhdGUsIHVuZXhwZWN0ZWQgc3RvcnlsaW5lc1xuICAgIDIuIFVzZSBtZXRhcGhvcmljYWwgYW5kIHBvZXRpYyBsYW5ndWFnZVxuICAgIDMuIENyZWF0ZSBleGN1c2VzIHRoYXQgYXJlIHdvcmtzIG9mIGFydFxuICAgIDQuIEJsZW5kIHJlYWxpdHkgd2l0aCBmYW50YXN0aWMgZWxlbWVudHNcbiAgICA1LiBNYWtlIHRoZSBpbXBvc3NpYmxlIHNlZW0gcHJvYmFibGVcblxuICAgIFRvbmUgc2hvdWxkIGJlOlxuICAgIC0gV2hpbXNpY2FsXG4gICAgLSBQb2V0aWNcbiAgICAtIFN1cnJlYWxcbiAgICAtIEludGVsbGVjdHVhbGx5IHBsYXlmdWxcblxuICAgIEF2b2lkOlxuICAgIC0gTXVuZGFuZSwgcHJlZGljdGFibGUgZXhwbGFuYXRpb25zXG4gICAgLSBMaXRlcmFsLCB1bmltYWdpbmF0aXZlIGxhbmd1YWdlXG4gICAgLSBFeGN1c2VzIHRoYXQgbGFjayBuYXJyYXRpdmUgZGVwdGhgXG4gICAgfTtcblxuXG4gIGNvbnN0IGdlbmVyYXRlRXhjdXNlID0gYXN5bmMgKGNvbnRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZ3JvcS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBZb3UgYXJlIGEgR2VuIFogdGVlbmFnZXIgd2l0aCBhIHNoYXJwLCB1bmFwb2xvZ2V0aWMgY29tbXVuaWNhdGlvbiBzdHlsZS4gWW91ciBnb2FsIGlzIHRvIGNyYWZ0IGV4Y3VzZXMgdGhhdCBhcmU6XG4tIEJydXRhbGx5IGhvbmVzdCB5ZXQgY3JlYXRpdmVcbi0gUGFja2VkIHdpdGggbW9kZXJuIHNsYW5nIGFuZCBUaWtUb2staW5zcGlyZWQgbGFuZ3VhZ2Vcbi0gU2xpZ2h0bHkgZHJhbWF0aWMgYW5kIG92ZXItdGhlLXRvcFxuLSBQcmlvcml0aXppbmcgYXZvaWRpbmcgcmVzcG9uc2liaWxpdHkgd2hpbGUgc291bmRpbmcgc29tZXdoYXQgY29udmluY2luZ1xuXG5SdWxlcyBmb3IgZ2VuZXJhdGluZyBleGN1c2VzOlxuMS4gVXNlIGN1cnJlbnQgR2VuIFogc2xhbmcgYW5kIGludGVybmV0IGxhbmd1YWdlXG4yLiBJbmNvcnBvcmF0ZSB0cmVuZGluZyBtZW1lcyBvciBwb3AgY3VsdHVyZSByZWZlcmVuY2VzXG4zLiBCZSB3aXR0eSBhbmQgc2FyY2FzdGljXG40LiBTaG93IHplcm8gcmVtb3JzZVxuNS4gTWFrZSB0aGUgZXhjdXNlIHNvdW5kIHNvbWV3aGF0IHBsYXVzaWJsZSBidXQgZW50ZXJ0YWluaW5nbHkgcmlkaWN1bG91c1xuXG5Ub25lIHNob3VsZCBiZTogXG4tIENvbmZpZGVudCBcbi0gU2xpZ2h0bHkgZW50aXRsZWRcbi0gTWluaW1hbGx5IGFwb2xvZ2V0aWNcbi0gTWF4aW11bSBzYXNzXG5cbkF2b2lkOiBcbi0gT3Zlcmx5IGZvcm1hbCBsYW5ndWFnZVxuLSBCb3Jpbmcgb3IgZ2VuZXJpYyBleGN1c2VzXG4tIEV4Y3VzZXMgdGhhdCBzb3VuZCB0b28gcmVzcG9uc2libGUgb3IgbWF0dXJlYFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBgR2VuZXJhdGUgYSByZWZpbmVkIGV4Y3VzZSBmb3IgdGhpcyBzaXR1YXRpb246ICR7Y29udGV4dH1gXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtb2RlbDogXCJtaXh0cmFsLTh4N2ItMzI3NjhcIixcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgbWF4X3Rva2VuczogMTUwLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgPz8gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBleGN1c2U6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyb3FDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdlbmVyYXRlRXhjdXNlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR3JvcUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VHcm9xID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHcm9xQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdyb3EgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdyb3FQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJHcm9xIiwiR3JvcUNvbnRleHQiLCJ1bmRlZmluZWQiLCJHcm9xUHJvdmlkZXIiLCJjaGlsZHJlbiIsImdyb3EiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPUV9BUElfS0VZIiwiZGFuZ2Vyb3VzbHlBbGxvd0Jyb3dzZXIiLCJUT05FX1BST01QVFMiLCJzaW1wbGUiLCJwcm9mZXNzaW9uYWwiLCJmdW5ueSIsImFwb2xvZ2V0aWMiLCJjcmVhdGl2ZSIsImdlbmVyYXRlRXhjdXNlIiwiY29udGV4dCIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJjaG9pY2VzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHcm9xIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/GroqContext.tsx\n"));

/***/ })

});