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

/***/ "(app-pages-browser)/./src/components/ChatInterface.tsx":
/*!******************************************!*\
  !*** ./src/components/ChatInterface.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatInterface)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GroqContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/GroqContext */ \"(app-pages-browser)/./src/context/GroqContext.tsx\");\n/* harmony import */ var _MessageBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageBubble */ \"(app-pages-browser)/./src/components/MessageBubble.tsx\");\n/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageUpload */ \"(app-pages-browser)/./src/components/ImageUpload.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Add an array of predefined prompts\nconst PREDEFINED_PROMPTS = [\n    \"I'm late for work\",\n    \"I missed a deadline\",\n    \"I don't want to go to a social event\",\n    \"I need to cancel plans last minute\",\n    \"I want to avoid a family gathering\"\n];\n// Predefined tones\nconst TONE_OPTIONS = [\n    'simple',\n    'professional',\n    'funny',\n    'apologetic',\n    'creative'\n];\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTone, setSelectedTone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('simple');\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { generateExcuse } = (0,_context_GroqContext__WEBPACK_IMPORTED_MODULE_2__.useGroq)();\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ChatInterface.useEffect\": ()=>{\n            scrollToBottom();\n        }\n    }[\"ChatInterface.useEffect\"], [\n        messages\n    ]);\n    const handleSubmit = async (e, promptText)=>{\n        // If it's a form submit, prevent default\n        if ('preventDefault' in e) {\n            e.preventDefault();\n        }\n        // Determine the input text (either from the input field or the prompt)\n        const textToSubmit = promptText || input;\n        if (!textToSubmit.trim()) return;\n        const userMessage = {\n            content: textToSubmit,\n            role: 'user',\n            tone: selectedTone\n        };\n        setMessages((prev)=>[\n                ...prev,\n                userMessage\n            ]);\n        setInput('');\n        setIsLoading(true);\n        try {\n            const excuse = await generateExcuse(textToSubmit, selectedTone);\n            if (excuse) {\n                const aiMessage = {\n                    content: excuse,\n                    role: 'assistant',\n                    tone\n                };\n                setMessages((prev)=>[\n                        ...prev,\n                        aiMessage\n                    ]);\n            }\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleImageProcessed = async (extractedText)=>{\n        const userMessage = {\n            content: \"Uploaded Image Text: \".concat(extractedText),\n            role: 'user'\n        };\n        setMessages((prev)=>[\n                ...prev,\n                userMessage\n            ]);\n        setIsLoading(true);\n        try {\n            const excuse = await generateExcuse(extractedText);\n            if (excuse) {\n                const aiMessage = {\n                    content: excuse,\n                    role: 'assistant'\n                };\n                setMessages((prev)=>[\n                        ...prev,\n                        aiMessage\n                    ]);\n            }\n        } catch (error) {\n            console.error('Error generating excuse:', error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto h-screen flex flex-col px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"py-6 text-center border-b border-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-light text-gray-900\",\n                    children: \"myDawgAteit\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4 flex flex-wrap gap-2 justify-center\",\n                children: PREDEFINED_PROMPTS.map((prompt, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleSubmit(e, prompt),\n                        className: \"px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full  hover:bg-gray-200 transition-colors\",\n                        children: prompt\n                    }, index, false, {\n                        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-y-auto py-4 space-y-6\",\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageBubble__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            message: message\n                        }, index, false, {\n                            fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)),\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"animate-pulse h-2 w-2 bg-gray-400 rounded-full mx-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"animate-pulse h-2 w-2 bg-gray-400 rounded-full mx-1 delay-100\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"animate-pulse h-2 w-2 bg-gray-400 rounded-full mx-1 delay-200\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-t border-gray-100 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageUpload__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onImageProcessed: handleImageProcessed\n                    }, void 0, false, {\n                        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"flex gap-2 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: input,\n                                onChange: (e)=>setInput(e.target.value),\n                                placeholder: \"Type your situation...\",\n                                className: \"flex-1 px-4 py-3 rounded-xl bg-gray-50 text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all\",\n                                disabled: isLoading\n                            }, void 0, false, {\n                                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: isLoading || !input.trim(),\n                                className: \"px-6 py-3 rounded-xl bg-black text-white font-medium  disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaushiknag/Documents/projects/Xscape/src/components/ChatInterface.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"Oc++8VxLziq8Iom0juGrK3Y0iLY=\", false, function() {\n    return [\n        _context_GroqContext__WEBPACK_IMPORTED_MODULE_2__.useGroq\n    ];\n});\n_c = ChatInterface;\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRJbnRlcmZhY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNvRDtBQUNKO0FBQ0o7QUFDSjtBQUd4QyxxQ0FBcUM7QUFDckMsTUFBTU0scUJBQXFCO0lBQ3pCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELG1CQUFtQjtBQUNuQixNQUFNQyxlQUE2QjtJQUFDO0lBQVU7SUFBZ0I7SUFBUztJQUFjO0NBQVc7QUFHakYsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFhO0lBQzdELE1BQU1pQixpQkFBaUJoQiw2Q0FBTUEsQ0FBaUI7SUFDOUMsTUFBTSxFQUFFaUIsY0FBYyxFQUFFLEdBQUdmLDZEQUFPQTtJQUVsQyxNQUFNZ0IsaUJBQWlCO1lBQ3JCRjtTQUFBQSwwQkFBQUEsZUFBZUcsT0FBTyxjQUF0QkgsOENBQUFBLHdCQUF3QkksY0FBYyxDQUFDO1lBQUVDLFVBQVU7UUFBUztJQUM5RDtJQUVBcEIsZ0RBQVNBO21DQUFDO1lBQ1JpQjtRQUNGO2tDQUFHO1FBQUNWO0tBQVM7SUFFYixNQUFNYyxlQUFlLE9BQU9DLEdBQXVDQztRQUNqRSx5Q0FBeUM7UUFDekMsSUFBSSxvQkFBb0JELEdBQUc7WUFDekJBLEVBQUVFLGNBQWM7UUFDbEI7UUFFQSx1RUFBdUU7UUFDdkUsTUFBTUMsZUFBZUYsY0FBY2Q7UUFFbkMsSUFBSSxDQUFDZ0IsYUFBYUMsSUFBSSxJQUFJO1FBRTFCLE1BQU1DLGNBQXVCO1lBQzNCQyxTQUFTSDtZQUNUSSxNQUFNO1lBQ05DLE1BQU1qQjtRQUNSO1FBRUFMLFlBQVksQ0FBQ3VCLE9BQVM7bUJBQUlBO2dCQUFNSjthQUFZO1FBQzVDakIsU0FBUztRQUNURSxhQUFhO1FBRWIsSUFBSTtZQUNGLE1BQU1vQixTQUFTLE1BQU1oQixlQUFlUyxjQUFjWjtZQUNsRCxJQUFJbUIsUUFBUTtnQkFDVixNQUFNQyxZQUFxQjtvQkFDekJMLFNBQVNJO29CQUNUSCxNQUFNO29CQUNOQztnQkFDRjtnQkFDQXRCLFlBQVksQ0FBQ3VCLE9BQVM7MkJBQUlBO3dCQUFNRTtxQkFBVTtZQUM1QztRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxTQUFVO1lBQ1J0QixhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU13Qix1QkFBdUIsT0FBT0M7UUFDbEMsTUFBTVYsY0FBdUI7WUFDM0JDLFNBQVMsd0JBQXNDLE9BQWRTO1lBQ2pDUixNQUFNO1FBQ1I7UUFDQXJCLFlBQVksQ0FBQ3VCLE9BQVM7bUJBQUlBO2dCQUFNSjthQUFZO1FBQzVDZixhQUFhO1FBQ2IsSUFBSTtZQUNGLE1BQU1vQixTQUFTLE1BQU1oQixlQUFlcUI7WUFDcEMsSUFBSUwsUUFBUTtnQkFDVixNQUFNQyxZQUFxQjtvQkFDekJMLFNBQVNJO29CQUNUSCxNQUFNO2dCQUNSO2dCQUNBckIsWUFBWSxDQUFDdUIsT0FBUzsyQkFBSUE7d0JBQU1FO3FCQUFVO1lBQzVDO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDLFNBQVU7WUFDUnRCLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7OzBCQUlwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1puQyxtQkFBbUJzQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQy9CLDhEQUFDQzt3QkFFQ0MsU0FBUyxDQUFDeEIsSUFBTUQsYUFBYUMsR0FBR3FCO3dCQUNoQ0osV0FBVTtrQ0FHVEk7dUJBTElDOzs7Ozs7Ozs7OzBCQVVYLDhEQUFDTjtnQkFBSUMsV0FBVTs7b0JBQ1poQyxTQUFTbUMsR0FBRyxDQUFDLENBQUNLLFNBQVNILHNCQUN0Qiw4REFBQzFDLHNEQUFhQTs0QkFBYTZDLFNBQVNBOzJCQUFoQkg7Ozs7O29CQUVyQmpDLDJCQUNDLDhEQUFDMkI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ0Q7d0JBQUlVLEtBQUtqQzs7Ozs7Ozs7Ozs7OzBCQUVaLDhEQUFDdUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDcEMsb0RBQVdBO3dCQUFDOEMsa0JBQWtCYjs7Ozs7O2tDQUMvQiw4REFBQ2M7d0JBQUtDLFVBQVU5Qjt3QkFBY2tCLFdBQVU7OzBDQUN0Qyw4REFBQzlCO2dDQUNDMkMsTUFBSztnQ0FDTEMsT0FBTzVDO2dDQUNQNkMsVUFBVSxDQUFDaEMsSUFBTVosU0FBU1ksRUFBRWlDLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDeENHLGFBQVk7Z0NBQ1pqQixXQUFVO2dDQUNWa0IsVUFBVTlDOzs7Ozs7MENBRVosOERBQUNrQztnQ0FDQ08sTUFBSztnQ0FDTEssVUFBVTlDLGFBQWEsQ0FBQ0YsTUFBTWlCLElBQUk7Z0NBQ2xDYSxXQUFVOzBDQUdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXRJd0JqQzs7UUFNS0wseURBQU9BOzs7S0FOWksiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXVzaGlrbmFnL0RvY3VtZW50cy9wcm9qZWN0cy9Yc2NhcGUvc3JjL2NvbXBvbmVudHMvQ2hhdEludGVyZmFjZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHcm9xIH0gZnJvbSAnQC9jb250ZXh0L0dyb3FDb250ZXh0JztcbmltcG9ydCBNZXNzYWdlQnViYmxlIGZyb20gJy4vTWVzc2FnZUJ1YmJsZSc7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZCc7XG5pbXBvcnQgeyBNZXNzYWdlLCBFeGN1c2VUb25lIH0gZnJvbSAnQC90eXBlcyc7XG5cbi8vIEFkZCBhbiBhcnJheSBvZiBwcmVkZWZpbmVkIHByb21wdHNcbmNvbnN0IFBSRURFRklORURfUFJPTVBUUyA9IFtcbiAgXCJJJ20gbGF0ZSBmb3Igd29ya1wiLFxuICBcIkkgbWlzc2VkIGEgZGVhZGxpbmVcIixcbiAgXCJJIGRvbid0IHdhbnQgdG8gZ28gdG8gYSBzb2NpYWwgZXZlbnRcIixcbiAgXCJJIG5lZWQgdG8gY2FuY2VsIHBsYW5zIGxhc3QgbWludXRlXCIsXG4gIFwiSSB3YW50IHRvIGF2b2lkIGEgZmFtaWx5IGdhdGhlcmluZ1wiXG5dO1xuXG4vLyBQcmVkZWZpbmVkIHRvbmVzXG5jb25zdCBUT05FX09QVElPTlM6IEV4Y3VzZVRvbmVbXSA9IFsnc2ltcGxlJywgJ3Byb2Zlc3Npb25hbCcsICdmdW5ueScsICdhcG9sb2dldGljJywgJ2NyZWF0aXZlJ107XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEludGVyZmFjZSgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRvbmUsIHNldFNlbGVjdGVkVG9uZV0gPSB1c2VTdGF0ZTxFeGN1c2VUb25lPignc2ltcGxlJyk7XG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgeyBnZW5lcmF0ZUV4Y3VzZSB9ID0gdXNlR3JvcSgpO1xuXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICB9LCBbbWVzc2FnZXNdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50IHwgUmVhY3QuTW91c2VFdmVudCwgcHJvbXB0VGV4dD86IHN0cmluZykgPT4ge1xuICAgIC8vIElmIGl0J3MgYSBmb3JtIHN1Ym1pdCwgcHJldmVudCBkZWZhdWx0XG4gICAgaWYgKCdwcmV2ZW50RGVmYXVsdCcgaW4gZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgaW5wdXQgdGV4dCAoZWl0aGVyIGZyb20gdGhlIGlucHV0IGZpZWxkIG9yIHRoZSBwcm9tcHQpXG4gICAgY29uc3QgdGV4dFRvU3VibWl0ID0gcHJvbXB0VGV4dCB8fCBpbnB1dDtcblxuICAgIGlmICghdGV4dFRvU3VibWl0LnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdXNlck1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICBjb250ZW50OiB0ZXh0VG9TdWJtaXQsXG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICB0b25lOiBzZWxlY3RlZFRvbmVcbiAgICB9O1xuXG4gICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCB1c2VyTWVzc2FnZV0pO1xuICAgIHNldElucHV0KCcnKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhjdXNlID0gYXdhaXQgZ2VuZXJhdGVFeGN1c2UodGV4dFRvU3VibWl0LCBzZWxlY3RlZFRvbmUpO1xuICAgICAgaWYgKGV4Y3VzZSkge1xuICAgICAgICBjb25zdCBhaU1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgICAgY29udGVudDogZXhjdXNlLFxuICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgICAgIHRvbmVcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBhaU1lc3NhZ2VdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBleGN1c2U6JywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZVByb2Nlc3NlZCA9IGFzeW5jIChleHRyYWN0ZWRUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1c2VyTWVzc2FnZTogTWVzc2FnZSA9IHtcbiAgICAgIGNvbnRlbnQ6IGBVcGxvYWRlZCBJbWFnZSBUZXh0OiAke2V4dHJhY3RlZFRleHR9YCxcbiAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICB9O1xuICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgdXNlck1lc3NhZ2VdKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4Y3VzZSA9IGF3YWl0IGdlbmVyYXRlRXhjdXNlKGV4dHJhY3RlZFRleHQpO1xuICAgICAgaWYgKGV4Y3VzZSkge1xuICAgICAgICBjb25zdCBhaU1lc3NhZ2U6IE1lc3NhZ2UgPSB7XG4gICAgICAgICAgY29udGVudDogZXhjdXNlLFxuICAgICAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgICB9O1xuICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIGFpTWVzc2FnZV0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGV4Y3VzZTonLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIHB4LTRcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHktNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTkwMFwiPm15RGF3Z0F0ZWl0PC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgXG4gICAgICB7LyogUHJlZGVmaW5lZCBQcm9tcHRzIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgZmxleCBmbGV4LXdyYXAgZ2FwLTIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge1BSRURFRklORURfUFJPTVBUUy5tYXAoKHByb21wdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlLCBwcm9tcHQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIHRleHQtc20gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgXG4gICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWdyYXktMjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvbXB0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcHktNCBzcGFjZS15LTZcIj5cbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWVzc2FnZUJ1YmJsZSBrZXk9e2luZGV4fSBtZXNzYWdlPXttZXNzYWdlfSAvPlxuICAgICAgICApKX1cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgaC0yIHctMiBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgbXgtMVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIGgtMiB3LTIgYmctZ3JheS00MDAgcm91bmRlZC1mdWxsIG14LTEgZGVsYXktMTAwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgaC0yIHctMiBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgbXgtMSBkZWxheS0yMDBcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ncmF5LTEwMCBweS00XCI+XG4gICAgICAgIDxJbWFnZVVwbG9hZCBvbkltYWdlUHJvY2Vzc2VkPXtoYW5kbGVJbWFnZVByb2Nlc3NlZH0gLz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtdC00XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHNpdHVhdGlvbi4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS0zIHJvdW5kZWQteGwgYmctZ3JheS01MCB0ZXh0LWdyYXktOTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nIHx8ICFpbnB1dC50cmltKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgcm91bmRlZC14bCBiZy1ibGFjayB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIFxuICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWdyYXktODAwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZUdyb3EiLCJNZXNzYWdlQnViYmxlIiwiSW1hZ2VVcGxvYWQiLCJQUkVERUZJTkVEX1BST01QVFMiLCJUT05FX09QVElPTlMiLCJDaGF0SW50ZXJmYWNlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImlucHV0Iiwic2V0SW5wdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWxlY3RlZFRvbmUiLCJzZXRTZWxlY3RlZFRvbmUiLCJtZXNzYWdlc0VuZFJlZiIsImdlbmVyYXRlRXhjdXNlIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcm9tcHRUZXh0IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0VG9TdWJtaXQiLCJ0cmltIiwidXNlck1lc3NhZ2UiLCJjb250ZW50Iiwicm9sZSIsInRvbmUiLCJwcmV2IiwiZXhjdXNlIiwiYWlNZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlSW1hZ2VQcm9jZXNzZWQiLCJleHRyYWN0ZWRUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJtYXAiLCJwcm9tcHQiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtZXNzYWdlIiwicmVmIiwib25JbWFnZVByb2Nlc3NlZCIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatInterface.tsx\n"));

/***/ })

});