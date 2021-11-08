(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{Ifnh:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),r=t.n(l),a=t("dEAq"),c=t("H1Ra");t("JjdP");n["default"]=e=>(r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"key-\u6709\u4ec0\u4e48\u4f5c\u7528-\u53ef\u4ee5\u7701\u7565\u5417"},r.a.createElement(a["AnchorLink"],{to:"#key-\u6709\u4ec0\u4e48\u4f5c\u7528-\u53ef\u4ee5\u7701\u7565\u5417","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"key \u6709\u4ec0\u4e48\u4f5c\u7528, \u53ef\u4ee5\u7701\u7565\u5417?"),r.a.createElement("p",null,"\u5728 react \u7ec4\u4ef6\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d, ",r.a.createElement("code",null,"key"),"\u662f\u4e00\u4e2a\u5e38\u7528\u7684\u5c5e\u6027\u503c, \u591a\u7528\u4e8e\u5217\u8868\u5f00\u53d1. \u672c\u6587\u4ece\u6e90\u7801\u7684\u89d2\u5ea6, \u5206\u6790",r.a.createElement("code",null,"key"),"\u5728",r.a.createElement("code",null,"react"),"\u5185\u90e8\u662f\u5982\u4f55\u4f7f\u7528\u7684, ",r.a.createElement("code",null,"key"),"\u662f\u5426\u53ef\u4ee5\u7701\u7565."),r.a.createElement("h2",{id:"reactelement-\u5bf9\u8c61"},r.a.createElement(a["AnchorLink"],{to:"#reactelement-\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ReactElement \u5bf9\u8c61"),r.a.createElement("p",null,"\u6211\u4eec\u5728\u7f16\u7a0b\u65f6\u76f4\u63a5\u4e66\u5199\u7684",r.a.createElement("code",null,"jsx"),"\u4ee3\u7801, \u5b9e\u9645\u4e0a\u662f\u4f1a\u88ab\u7f16\u8bd1\u6210 ReactElement \u5bf9\u8c61, \u6240\u4ee5",r.a.createElement("code",null,"key"),"\u662f",r.a.createElement("code",null,"ReactElement\u5bf9\u8c61"),"\u7684\u4e00\u4e2a\u5c5e\u6027."),r.a.createElement("h3",{id:"\u6784\u9020\u51fd\u6570"},r.a.createElement(a["AnchorLink"],{to:"#\u6784\u9020\u51fd\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6784\u9020\u51fd\u6570"),r.a.createElement("p",null,"\u5728\u628a",r.a.createElement("code",null,"jsx"),"\u8f6c\u6362\u6210",r.a.createElement("code",null,"ReactElement\u5bf9\u8c61"),"\u7684\u8bed\u6cd5\u65f6, \u6709\u4e00\u4e2a\u517c\u5bb9\u95ee\u9898. \u4f1a\u6839\u636e\u7f16\u8bd1\u5668\u7684\u4e0d\u540c\u7b56\u7565, \u7f16\u8bd1\u6210 2 \u79cd\u65b9\u6848."),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("p",null,"\u6700\u65b0\u7684\u8f6c\u8bd1\u7b56\u7565: \u4f1a\u5c06",r.a.createElement("code",null,"jsx"),"\u8bed\u6cd5\u7684\u4ee3\u7801, \u8f6c\u8bd1\u6210",r.a.createElement("code",null,"jsx()"),"\u51fd\u6570\u5305\u88f9"),r.a.createElement("p",null,r.a.createElement("code",null,"jsx"),"\u51fd\u6570: \u53ea\u4fdd\u7559\u4e0e",r.a.createElement("code",null,"key"),"\u76f8\u5173\u7684\u4ee3\u7801(\u5176\u4f59\u6e90\u7801\u672c\u8282\u4e0d\u8ba8\u8bba)"),r.a.createElement(c["a"],{code:'/**\n * https://github.com/reactjs/rfcs/pull/107\n * @param {*} type\n * @param {object} props\n * @param {string} key\n */\nexport function jsx(type, config, maybeKey) {\n  let propName;\n\n  // 1. key\u7684\u9ed8\u8ba4\u503c\u662fnull\n  let key = null;\n\n  // Currently, key can be spread in as a prop. This causes a potential\n  // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />\n  // or <div key="Hi" {...props} /> ). We want to deprecate key spread,\n  // but as an intermediary step, we will use jsxDEV for everything except\n  // <div {...props} key="Hi" />, because we aren\'t currently able to tell if\n  // key is explicitly declared to be undefined or not.\n  if (maybeKey !== undefined) {\n    key = \'\' + maybeKey;\n  }\n\n  if (hasValidKey(config)) {\n    // 2. \u5c06key\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\n    key = \'\' + config.key;\n  }\n  // 3. \u5c06key\u4f20\u5165\u6784\u9020\u51fd\u6570\n  return ReactElement(\n    type,\n    key,\n    ref,\n    undefined,\n    undefined,\n    ReactCurrentOwner.current,\n    props,\n  );\n}',lang:"js"})),r.a.createElement("li",null,r.a.createElement("p",null,"\u4f20\u7edf\u7684\u8f6c\u8bd1\u7b56\u7565: \u4f1a\u5c06",r.a.createElement("code",null,"jsx"),"\u8bed\u6cd5\u7684\u4ee3\u7801, \u8f6c\u8bd1\u6210",r.a.createElement(a["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react/src/ReactElement.js#L126-L146"},"React.createElement()\u51fd\u6570\u5305\u88f9")),r.a.createElement("p",null,r.a.createElement("code",null,"React.createElement()\u51fd\u6570"),": \u53ea\u4fdd\u7559\u4e0e",r.a.createElement("code",null,"key"),"\u76f8\u5173\u7684\u4ee3\u7801(\u5176\u4f59\u6e90\u7801\u672c\u8282\u4e0d\u8ba8\u8bba)"),r.a.createElement(c["a"],{code:"/**\n * Create and return a new ReactElement of the given type.\n * See https://reactjs.org/docs/react-api.html#createelement\n */\nexport function createElement(type, config, children) {\n  let propName;\n\n  // Reserved names are extracted\n  const props = {};\n\n  let key = null;\n  let ref = null;\n  let self = null;\n  let source = null;\n\n  if (config != null) {\n    if (hasValidKey(config)) {\n      key = '' + config.key; // key\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\n    }\n  }\n\n  return ReactElement(\n    type,\n    key,\n    ref,\n    self,\n    source,\n    ReactCurrentOwner.current,\n    props,\n  );\n}",lang:"js"}))),r.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230\u65e0\u8bba\u91c7\u53d6\u54ea\u79cd\u7f16\u8bd1\u65b9\u5f0f, \u6838\u5fc3\u903b\u8f91\u90fd\u662f\u4e00\u81f4\u7684:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("code",null,"key"),"\u7684\u9ed8\u8ba4\u503c\u662f",r.a.createElement("code",null,"null")),r.a.createElement("li",null,"\u5982\u679c\u5916\u754c\u6709\u663e\u793a\u6307\u5b9a\u7684",r.a.createElement("code",null,"key"),", \u5219\u5c06",r.a.createElement("code",null,"key"),"\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u7c7b\u578b."),r.a.createElement("li",null,"\u8c03\u7528",r.a.createElement("code",null,"ReactElement"),"\u8fd9\u4e2a\u6784\u9020\u51fd\u6570, \u5e76\u4e14\u5c06",r.a.createElement("code",null,"key"),"\u4f20\u5165.")),r.a.createElement(c["a"],{code:"// ReactElement\u7684\u6784\u9020\u51fd\u6570: \u672c\u8282\u5c31\u5148\u53ea\u5173\u6ce8\u5176\u4e2d\u7684key\u5c5e\u6027\nconst ReactElement = function(type, key, ref, self, source, owner, props) {\n  const element = {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n    _owner: owner,\n  };\n  return element;\n};",lang:"js"}),r.a.createElement("p",null,"\u6e90\u7801\u770b\u5230\u8fd9\u91cc, \u867d\u7136\u8fd8\u53ea\u662f\u4e2a\u76ae\u6bdb, \u4f46\u662f\u8d77\u7801\u77e5\u9053\u4e86",r.a.createElement("code",null,"key"),"\u7684\u9ed8\u8ba4\u503c\u662f",r.a.createElement("code",null,"null"),". \u6240\u4ee5\u4efb\u4f55\u4e00\u4e2a",r.a.createElement("code",null,"reactElement"),"\u5bf9\u8c61, \u5185\u90e8\u90fd\u662f\u6709",r.a.createElement("code",null,"key"),"\u503c\u7684, \u53ea\u662f\u4e00\u822c\u60c5\u51b5\u4e0b(\u975e list \u7ed3\u6784)\u6ca1\u4eba\u663e\u793a\u53bb\u4f20\u5165\u4e00\u4e2a key."),r.a.createElement("h2",{id:"fiber-\u5bf9\u8c61"},r.a.createElement(a["AnchorLink"],{to:"#fiber-\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Fiber \u5bf9\u8c61"),r.a.createElement("p",null,r.a.createElement("code",null,"react"),"\u7684\u6838\u5fc3\u8fd0\u884c\u903b\u8f91, \u662f\u4e00\u4e2a\u4ece\u8f93\u5165\u5230\u8f93\u51fa\u7684\u8fc7\u7a0b(\u56de\u987e",r.a.createElement(a["Link"],{to:"../main/reconciler-workflow"},"reconciler \u8fd0\u4f5c\u6d41\u7a0b"),"). \u7f16\u7a0b\u76f4\u63a5\u64cd\u4f5c\u7684",r.a.createElement("code",null,"jsx"),"\u662f",r.a.createElement("code",null,"reactElement\u5bf9\u8c61"),",\u6211\u4eec(\u7a0b\u5e8f\u5458)\u7684\u6570\u636e\u6a21\u578b\u662f",r.a.createElement("code",null,"jsx"),", \u800c",r.a.createElement("code",null,"react\u5185\u6838"),"\u7684\u6570\u636e\u6a21\u578b\u662f",r.a.createElement("code",null,"fiber\u6811\u5f62\u7ed3\u6784"),". \u6240\u4ee5\u8981\u6df1\u5165\u8ba4\u8bc6",r.a.createElement("code",null,"key"),"\u8fd8\u9700\u8981\u4ece",r.a.createElement("code",null,"fiber"),"\u7684\u89c6\u89d2\u7ee7\u7eed\u6765\u770b."),r.a.createElement("p",null,r.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u662f\u5728",r.a.createElement("code",null,"fiber\u6811\u6784\u9020\u5faa\u73af"),"\u8fc7\u7a0b\u4e2d\u6784\u9020\u7684, \u5176\u6784\u9020\u51fd\u6570\u5982\u4e0b:"),r.a.createElement(c["a"],{code:"function FiberNode(\n  tag: WorkTag,\n  pendingProps: mixed,\n  key: null | string,\n  mode: TypeOfMode,\n) {\n  this.tag = tag;\n  this.key = key; // \u91cd\u70b9: key\u4e5f\u662f`fiber`\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027\n\n  // ...\n  this.elementType = null;\n  this.type = null;\n  this.stateNode = null;\n  // ... \u7701\u7565\u65e0\u5173\u4ee3\u7801\n}",lang:"js"}),r.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230, ",r.a.createElement("code",null,"key"),"\u4e5f\u662f",r.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027. \u8fd9\u91cc\u548c",r.a.createElement("code",null,"reactElement"),"\u7684\u60c5\u51b5\u6709\u6240\u4e0d\u540c:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("code",null,"reactElement"),"\u4e2d\u7684",r.a.createElement("code",null,"key"),"\u662f\u7531",r.a.createElement("code",null,"jsx"),"\u7f16\u8bd1\u800c\u6765, ",r.a.createElement("code",null,"key"),"\u662f\u7531\u7a0b\u5e8f\u5458\u76f4\u63a5\u63a7\u5236\u7684(\u53ca\u65f6\u662f\u52a8\u6001\u751f\u6210, \u90a3\u4e5f\u662f\u76f4\u63a5\u63a7\u5236)"),r.a.createElement("li",null,r.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u662f\u7531",r.a.createElement("code",null,"react"),"\u5185\u6838\u5728\u8fd0\u884c\u65f6\u521b\u5efa\u7684, \u6240\u4ee5",r.a.createElement("code",null,"fiber.key"),"\u4e5f\u662f",r.a.createElement("code",null,"react"),"\u5185\u6838\u8fdb\u884c\u8bbe\u7f6e\u7684, \u7a0b\u5e8f\u5458\u6ca1\u6709\u76f4\u63a5\u63a7\u5236.")),r.a.createElement("p",null,"\u903b\u8f91\u6765\u5230\u8fd9\u91cc, \u6709 2 \u4e2a\u7591\u95ee:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("code",null,"fiber.key"),"\u662f\u7531",r.a.createElement("code",null,"react"),"\u5185\u6838\u8bbe\u7f6e, \u90a3\u4ed6\u7684\u503c\u662f\u5426\u548c",r.a.createElement("code",null,"reactElement.key"),"\u76f8\u540c?"),r.a.createElement("li",null,"\u5982\u679c",r.a.createElement("code",null,"reactElement.key = null"),", \u90a3\u4e48",r.a.createElement("code",null,"fiber.key"),"\u5c31\u4e00\u5b9a\u662f",r.a.createElement("code",null,"null"),"\u5417?")),r.a.createElement("p",null,"\u8981\u7ee7\u7eed\u8ddf\u8fdb\u8fd9\u4e9b\u95ee\u9898, \u8fd8\u5f97\u4ece",r.a.createElement("code",null,"fiber"),"\u7684\u521b\u5efa\u8bf4\u8d77. \u4e0a\u6587\u63d0\u5230\u4e86, ",r.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u7684\u521b\u5efa\u53d1\u751f\u5728",r.a.createElement("code",null,"fiber\u6811\u6784\u9020\u5faa\u73af"),"\u9636\u6bb5\u4e2d, \u5177\u4f53\u6765\u8bb2, \u662f\u5728",r.a.createElement("code",null,"reconcilerChildren"),"\u8c03\u548c\u51fd\u6570\u4e2d\u8fdb\u884c\u521b\u5efa."),r.a.createElement("h2",{id:"reconcilerchildren-\u8c03\u548c\u51fd\u6570"},r.a.createElement(a["AnchorLink"],{to:"#reconcilerchildren-\u8c03\u548c\u51fd\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"reconcilerChildren \u8c03\u548c\u51fd\u6570"),r.a.createElement("p",null,r.a.createElement("code",null,"reconcilerChildren"),"\u662f",r.a.createElement("code",null,"react"),"\u4e2d\u7684\u4e00\u4e2a",r.a.createElement("code",null,"\u660e\u661f"),"\u51fd\u6570, \u6700\u70ed\u70b9\u7684\u95ee\u9898\u5c31\u662f",r.a.createElement("code",null,"diff\u7b97\u6cd5\u539f\u7406"),", \u4e8b\u5b9e\u4e0a, ",r.a.createElement("code",null,"key"),"\u7684\u4f5c\u7528\u5b8c\u5168\u5c31\u662f\u4e3a\u4e86",r.a.createElement("code",null,"diff\u7b97\u6cd5"),"\u670d\u52a1\u7684."),r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u6ce8\u610f: \u672c\u8282\u53ea\u5206\u6790 key \u76f8\u5173\u7684\u903b\u8f91, \u5bf9\u4e8e\u8c03\u548c\u51fd\u6570\u7684\u7b97\u6cd5\u539f\u7406, \u8bf7\u56de\u987e\u7b97\u6cd5\u7ae0\u8282",r.a.createElement(a["Link"],{to:"../algorithm/diff"},"React \u7b97\u6cd5\u4e4b\u8c03\u548c\u7b97\u6cd5"))),r.a.createElement("p",null,"\u8c03\u548c\u51fd\u6570\u6e90\u7801(\u672c\u8282\u793a\u4f8b, \u53ea\u6458\u53d6\u4e86\u90e8\u5206\u4ee3\u7801):"),r.a.createElement(c["a"],{code:"function ChildReconciler(shouldTrackSideEffects) {\n  function reconcileChildFibers(\n    returnFiber: Fiber,\n    currentFirstChild: Fiber | null,\n    newChild: any,\n    lanes: Lanes,\n  ): Fiber | null {\n    // Handle object types\n    const isObject = typeof newChild === 'object' && newChild !== null;\n\n    if (isObject) {\n      switch (newChild.$$typeof) {\n        case REACT_ELEMENT_TYPE:\n          // newChild\u662f\u5355\u8282\u70b9\n          return placeSingleChild(\n            reconcileSingleElement(\n              returnFiber,\n              currentFirstChild,\n              newChild,\n              lanes,\n            ),\n          );\n      }\n    }\n    //  newChild\u662f\u591a\u8282\u70b9\n    if (isArray(newChild)) {\n      return reconcileChildrenArray(\n        returnFiber,\n        currentFirstChild,\n        newChild,\n        lanes,\n      );\n    }\n    // ...\n  }\n\n  return reconcileChildFibers;\n}",lang:"js"}),r.a.createElement("h3",{id:"\u5355\u8282\u70b9"},r.a.createElement(a["AnchorLink"],{to:"#\u5355\u8282\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5355\u8282\u70b9"),r.a.createElement("p",null,"\u8fd9\u91cc\u5148\u770b\u5355\u8282\u70b9\u7684\u60c5\u51b5",r.a.createElement("code",null,"reconcileSingleElement"),"(\u53ea\u4fdd\u7559\u4e0e",r.a.createElement("code",null,"key"),"\u6709\u5173\u7684\u903b\u8f91):"),r.a.createElement(c["a"],{code:"function reconcileSingleElement(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  element: ReactElement,\n  lanes: Lanes,\n): Fiber {\n  const key = element.key;\n  let child = currentFirstChild;\n  while (child !== null) {\n    //\u91cd\u70b91: key\u662f\u5355\u8282\u70b9\u662f\u5426\u590d\u7528\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6\n    if (child.key === key) {\n      switch (child.tag) {\n        default: {\n          if (child.elementType === element.type) {\n            // \u7b2c\u4e8c\u5224\u65ad\u6761\u4ef6\n            deleteRemainingChildren(returnFiber, child.sibling);\n            // \u8282\u70b9\u590d\u7528: \u8c03\u7528useFiber\n            const existing = useFiber(child, element.props);\n            existing.ref = coerceRef(returnFiber, child, element);\n            existing.return = returnFiber;\n            return existing;\n          }\n          break;\n        }\n      }\n      // Didn't match.\n      deleteRemainingChildren(returnFiber, child);\n      break;\n    }\n    child = child.sibling;\n  }\n  // \u91cd\u70b92: fiber\u8282\u70b9\u521b\u5efa, `key`\u662f\u968f\u7740`element`\u5bf9\u8c61\u88ab\u4f20\u5165`fiber`\u7684\u6784\u9020\u51fd\u6570\n  const created = createFiberFromElement(element, returnFiber.mode, lanes);\n  created.ref = coerceRef(returnFiber, currentFirstChild, element);\n  created.return = returnFiber;\n  return created;\n}",lang:"js"}),r.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230, \u5bf9\u4e8e\u5355\u8282\u70b9\u6765\u8bb2, \u6709 2 \u4e2a\u91cd\u70b9:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("code",null,"key"),"\u662f\u5355\u8282\u70b9\u662f\u5426\u590d\u7528\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6(\u7b2c\u4e8c\u5224\u65ad\u6761\u4ef6\u662f",r.a.createElement("code",null,"type"),"\u662f\u5426\u6539\u53d8).",r.a.createElement("ul",null,r.a.createElement("li",null,"\u5982\u679c",r.a.createElement("code",null,"key"),"\u4e0d\u540c, \u5176\u4ed6\u6761\u4ef6\u662f\u5b8c\u5168\u4e0d\u770b\u7684"))),r.a.createElement("li",null,"\u5728\u65b0\u5efa\u8282\u70b9\u65f6, ",r.a.createElement("code",null,"key"),"\u968f\u7740",r.a.createElement("code",null,"element"),"\u5bf9\u8c61\u88ab\u4f20\u5165",r.a.createElement("code",null,"fiber"),"\u7684\u6784\u9020\u51fd\u6570.")),r.a.createElement("p",null,"\u6240\u4ee5\u5230\u8fd9\u91cc\u624d\u662f",r.a.createElement("code",null,"key"),"\u7684\u6700\u6838\u5fc3\u4f5c\u7528, \u662f\u8c03\u548c\u51fd\u6570\u4e2d, \u9488\u5bf9\u5355\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u590d\u7528\u7684",r.a.createElement("code",null,"\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6"),"."),r.a.createElement("p",null,"\u53e6\u5916\u6211\u4eec\u53ef\u4ee5\u5f97\u5230, ",r.a.createElement("code",null,"fiber.key"),"\u662f",r.a.createElement("code",null,"reactElement.key"),"\u7684\u62f7\u8d1d, \u4ed6\u4eec\u662f\u5b8c\u5168\u76f8\u7b49\u7684(\u5305\u62ec",r.a.createElement("code",null,"null"),"\u9ed8\u8ba4\u503c)."),r.a.createElement("h3",{id:"\u591a\u8282\u70b9"},r.a.createElement(a["AnchorLink"],{to:"#\u591a\u8282\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u591a\u8282\u70b9"),r.a.createElement("p",null,"\u7ee7\u7eed\u67e5\u770b\u591a\u8282\u70b9\u76f8\u5173\u7684\u903b\u8f91:"),r.a.createElement(c["a"],{code:"function reconcileChildrenArray(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  newChildren: Array<*>,\n  lanes: Lanes,\n): Fiber | null {\n  if (__DEV__) {\n    // First, validate keys.\n    let knownKeys = null;\n    for (let i = 0; i < newChildren.length; i++) {\n      const child = newChildren[i];\n      // 1. \u5728dev\u73af\u5883\u4e0b, \u6267\u884cwarnOnInvalidKey.\n      //  - \u5982\u679c\u6ca1\u6709\u8bbe\u7f6ekey, \u4f1a\u8b66\u544a\u63d0\u793a, \u5e0c\u671b\u80fd\u663e\u793a\u8bbe\u7f6ekey\n      //  - \u5982\u679ckey\u91cd\u590d, \u4f1a\u9519\u8bef\u63d0\u793a.\n      knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);\n    }\n  }\n\n  let resultingFirstChild: Fiber | null = null;\n  let previousNewFiber: Fiber | null = null;\n\n  let oldFiber = currentFirstChild;\n  let lastPlacedIndex = 0;\n  let newIdx = 0;\n  let nextOldFiber = null;\n  // \u7b2c\u4e00\u6b21\u5faa\u73af: \u53ea\u4f1a\u5728\u66f4\u65b0\u9636\u6bb5\u53d1\u751f\n  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {\n    if (oldFiber.index > newIdx) {\n      nextOldFiber = oldFiber;\n      oldFiber = null;\n    } else {\n      nextOldFiber = oldFiber.sibling;\n    }\n    // 1. \u8c03\u7528updateSlot, \u5904\u7406\u516c\u5171\u5e8f\u5217\u4e2d\u7684fiber\n    const newFiber = updateSlot(\n      returnFiber,\n      oldFiber,\n      newChildren[newIdx],\n      lanes,\n    );\n  }\n\n  // \u7b2c\u4e8c\u6b21\u5faa\u73af\n  if (oldFiber === null) {\n    for (; newIdx < newChildren.length; newIdx++) {\n      // 2. \u8c03\u7528createChild\u76f4\u63a5\u521b\u5efa\u65b0fiber\n      const newFiber = createChild(returnFiber, newChildren[newIdx], lanes);\n    }\n    return resultingFirstChild;\n  }\n\n  for (; newIdx < newChildren.length; newIdx++) {\n    // 3. \u8c03\u7528updateFromMap\u5904\u7406\u975e\u516c\u5171\u5e8f\u5217\u4e2d\u7684fiber\n    const newFiber = updateFromMap(\n      existingChildren,\n      returnFiber,\n      newIdx,\n      newChildren[newIdx],\n      lanes,\n    );\n  }\n\n  return resultingFirstChild;\n}",lang:"js"}),r.a.createElement("p",null,"\u5728",r.a.createElement("code",null,"reconcileChildrenArray"),"\u4e2d, \u6709 3 \u5904\u8c03\u7528\u4e0e",r.a.createElement("code",null,"fiber"),"\u6709\u5173(\u5f53\u7136\u987a\u4fbf\u5c31\u548c",r.a.createElement("code",null,"key"),"\u6709\u5173\u4e86), \u5b83\u4eec\u5206\u5e03\u662f:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("code",null,"updateSlot")),r.a.createElement(c["a"],{code:"function updateSlot(\n  returnFiber: Fiber,\n  oldFiber: Fiber | null,\n  newChild: any,\n  lanes: Lanes,\n): Fiber | null {\n  const key = oldFiber !== null ? oldFiber.key : null;\n\n  if (typeof newChild === 'object' && newChild !== null) {\n    switch (newChild.$$typeof) {\n      case REACT_ELEMENT_TYPE: {\n        //\u91cd\u70b9: key\u7528\u4e8e\u662f\u5426\u590d\u7528\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6\n        if (newChild.key === key) {\n          return updateElement(returnFiber, oldFiber, newChild, lanes);\n        } else {\n          return null;\n        }\n      }\n    }\n  }\n\n  return null;\n}",lang:"js"})),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("code",null,"createChild")),r.a.createElement(c["a"],{code:"function createChild(\n  returnFiber: Fiber,\n  newChild: any,\n  lanes: Lanes,\n): Fiber | null {\n  if (typeof newChild === 'object' && newChild !== null) {\n    switch (newChild.$$typeof) {\n      case REACT_ELEMENT_TYPE: {\n        // \u91cd\u70b9: \u8c03\u7528\u6784\u9020\u51fd\u6570\u8fdb\u884c\u521b\u5efa\n        const created = createFiberFromElement(\n          newChild,\n          returnFiber.mode,\n          lanes,\n        );\n        return created;\n      }\n    }\n  }\n\n  return null;\n}",lang:"js"})),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("code",null,"updateFromMap")),r.a.createElement(c["a"],{code:"function updateFromMap(\nexistingChildren: Map<string | number, Fiber>,\nreturnFiber: Fiber,\nnewIdx: number,\nnewChild: any,\nlanes: Lanes,\n): Fiber | null {\n\n          if (typeof newChild === 'object' && newChild !== null) {\n            switch (newChild.$$typeof) {\n              case REACT_ELEMENT_TYPE: {\n                //\u91cd\u70b9: key\u7528\u4e8e\u662f\u5426\u590d\u7528\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6\n                const matchedFiber =\n                  existingChildren.get(\n                    newChild.key === null ? newIdx : newChild.key,\n                  ) || null;\n                return updateElement(returnFiber, matchedFiber, newChild, lanes);\n              }\n          }\n          return null;\n        }\n    ```\n\n\u5176\u4e2d, \u4e0e key \u76f8\u5173\u7684\u91cd\u70b9\u90fd\u5728\u6ce8\u91ca\u4e2d\u8bf4\u660e\u4e86, \u9700\u8981\u6ce8\u610f\u7684\u662f`updateFromMap`\u8fd9\u662f\u7b2c\u4e8c\u6b21\u5faa\u73af\u4e2d\u5bf9\u4e8e\u975e\u516c\u5171\u5e8f\u5217\u7684\u89e3\u6790, \u5982\u679c`reactElement`\u6ca1\u6709\u663e\u793a\u8bbe\u7f6e key, \u4e5f\u5c31\u662f\u5176\u4e2d`newChild.key === null`, \u8fd9\u65f6\u5019, \u4f1a\u7528`index`\u8fdb\u884c\u67e5\u627e.",lang:"js"}))),r.a.createElement("p",null,"\u6240\u4ee5\u5728\u591a\u8282\u70b9\u60c5\u51b5\u4e0b, ",r.a.createElement("code",null,"key"),"\u4efb\u7136\u662f\u7528\u4e8e\u662f\u5426\u590d\u7528\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6, \u5982\u679c",r.a.createElement("code",null,"key"),"\u4e0d\u540c\u662f\u80af\u5b9a\u4e0d\u4f1a\u590d\u7528\u7684."),r.a.createElement("h2",{id:"\u603b\u7ed3"},r.a.createElement(a["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),r.a.createElement("p",null,"\u672c\u8282\u4ece\u6e90\u7801\u7684\u89d2\u5ea6, \u5206\u522b\u4ece",r.a.createElement("code",null,"reactElement\u5bf9\u8c61"),"\u548c",r.a.createElement("code",null,"fiber\u5bf9\u8c61"),"2 \u4e2a\u89c6\u89d2\u8fdb\u884c\u5c55\u5f00, \u5206\u6790",r.a.createElement("code",null,"key"),"\u5728 react \u5185\u6838\u4e2d\u7684\u4f7f\u7528\u60c5\u51b5. \u6700\u7ec8\u5728\u8c03\u548c\u51fd\u6570",r.a.createElement("code",null,"reconcilerChildren"),"\u4e2d, ",r.a.createElement("code",null,"key"),"\u5f97\u5230\u4e86\u6700\u7ec8\u7684\u5e94\u7528, \u4f5c\u4e3a",r.a.createElement("code",null,"\u8282\u70b9\u590d\u7528"),"\u7684\u7b2c\u4e00\u5224\u65ad\u6761\u4ef6."))))},JjdP:function(e,n,t){"use strict";t.r(n);var l=t("HaE+"),r=t("o0o1"),a=t.n(r),c=t("LtsZ");n["default"]={"dfs-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(l["a"])(a.a.mark((function e(){var n,l,r,c,o,u,i,d,s;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l=t("TqRt"),e.t0=l,e.next=4,t.e(5).then(t.bind(null,"1OyB"));case 4:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=l,e.next=9,t.e(6).then(t.bind(null,"vuIU"));case 9:return e.t3=e.sent,c=(0,e.t2)(e.t3),e.t4=l,e.next=14,t.e(7).then(t.bind(null,"Ji7U"));case 14:return e.t5=e.sent,o=(0,e.t4)(e.t5),e.t6=l,e.next=19,t.e(4).then(t.bind(null,"LK+K"));case 19:return e.t7=e.sent,u=(0,e.t6)(e.t7),i=function(e){(0,o["default"])(l,e);var t=(0,u["default"])(l);function l(){return(0,r["default"])(this,l),t.apply(this,arguments)}return(0,c["default"])(l,[{key:"render",value:function(){return n.createElement("div",{className:"app"},n.createElement("header",null,"header"),n.createElement(d,null),n.createElement("footer",null,"footer"))}}]),l}(n.Component),d=function(e){(0,o["default"])(l,e);var t=(0,u["default"])(l);function l(){return(0,r["default"])(this,l),t.apply(this,arguments)}return(0,c["default"])(l,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("p",null,"1"),n.createElement("p",null,"2"),n.createElement("p",null,"3"))}}]),l}(n.Component),s=i,e.abrupt("return",s);case 25:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:'class App extends React.Component {\n  render() {\n    return (\n      <div className="app">\n        <header>header</header>\n        <Content />\n        <footer>footer</footer>\n      </div>\n    );\n  }\n}\n\nclass Content extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default App;'}},dependencies:{},identifier:"dfs-demo"}},"01-setstate-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(l["a"])(a.a.mark((function e(){var n,l,r,c,o,u,i;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("TqRt"),e.t0=n,e.next=4,t.e(5).then(t.bind(null,"1OyB"));case 4:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=n,e.next=9,t.e(6).then(t.bind(null,"vuIU"));case 9:return e.t3=e.sent,r=(0,e.t2)(e.t3),e.t4=n,e.next=14,t.e(7).then(t.bind(null,"Ji7U"));case 14:return e.t5=e.sent,c=(0,e.t4)(e.t5),e.t6=n,e.next=19,t.e(4).then(t.bind(null,"LK+K"));case 19:return e.t7=e.sent,o=(0,e.t6)(e.t7),e.t8=n,e.next=24,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 24:return e.t9=e.sent,u=(0,e.t8)(e.t9),i=function(e){(0,c["default"])(t,e);var n=(0,o["default"])(t);function t(){var e;(0,l["default"])(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=n.call.apply(n,[this].concat(a)),e.state={count:0},e.changeState=function(){var n=e.state.count+1;e.setState({count:e.state.count+1}),n===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")},e.changeState2=function(){var n=e.state.count+1;Promise.resolve().then((function(){e.setState({count:e.state.count+1}),n===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")}))},e}return(0,r["default"])(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5f53\u524dcount=",this.state.count),u["default"].createElement("button",{onClick:this.changeState},"\u5f02\u6b65+1"),u["default"].createElement("button",{onClick:this.changeState2},"\u540c\u6b65+1"))}}]),t}(u["default"].Component),e.abrupt("return",i);case 28:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default class App extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  changeState = () => {\n    const newCount = this.state.count + 1;\n    this.setState({\n      count: this.state.count + 1,\n    });\n    if (newCount === this.state.count) {\n      console.log('\u540c\u6b65\u6267\u884crender');\n    } else {\n      console.log('\u5f02\u6b65\u6267\u884crender');\n    }\n  };\n\n  changeState2 = () => {\n    const newCount = this.state.count + 1;\n    Promise.resolve().then(() => {\n      this.setState({\n        count: this.state.count + 1,\n      });\n      if (newCount === this.state.count) {\n        console.log('\u540c\u6b65\u6267\u884crender');\n      } else {\n        console.log('\u5f02\u6b65\u6267\u884crender');\n      }\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\u5f53\u524dcount={this.state.count}</p>\n        <button onClick={this.changeState}>\u5f02\u6b65+1</button>\n        <button onClick={this.changeState2}>\u540c\u6b65+1</button>\n      </div>\n    );\n  }\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"01-setstate-demo"}},"hook-state-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(l["a"])(a.a.mark((function e(){var n,l,r,c,o,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,r.useState)(0),n=(0,l["default"])(e,2),t=n[0],a=n[1];return r["default"].createElement("button",{onClick:function(){a(1),a(3),a(2)}},t)},o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l["default"]=e,t&&t.set(e,l),l},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,r=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState } from 'react';\nexport default function App() {\n  const [count, dispatch] = useState(0);\n  return (\n    <button\n      onClick={() => {\n        dispatch(1);\n        dispatch(3);\n        dispatch(2);\n      }}\n    >\n      {count}\n    </button>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-state-demo"}},"hook-summary-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(l["a"])(a.a.mark((function e(){var n,l,r,c,o,u;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,r.useState)(1),n=(0,l["default"])(e,2),t=n[0],a=n[1];(0,r.useEffect)((function(){console.log("effect 1 created")}));var c=(0,r.useState)(2),o=(0,l["default"])(c,1),u=o[0];return(0,r.useEffect)((function(){console.log("effect 2 created")})),r["default"].createElement(r["default"].Fragment,null,r["default"].createElement("button",{onClick:function(){return a(t+1)}},t),r["default"].createElement("button",null,u))},o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l["default"]=e,t&&t.set(e,l),l},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,r=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-summary-demo"}},"hook-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(l["a"])(a.a.mark((function e(){var n,l,r,c,o,u,i;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){Promise.resolve().then((function(){console.log("\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c")}));var e=(0,r.useState)(0),n=(0,l["default"])(e,2),t=n[0],a=n[1];return(0,r.useEffect)((function(){return console.log("\u7b2c1\u4e2aeffect.create dps: []"),function(){console.log("\u7b2c1\u4e2aeffect.destory")}}),[]),(0,r.useEffect)((function(){return console.log("effect.create dps: [count]",t),function(){console.log("\u7b2c2\u4e2aeffect.destory dps: [count]",t)}}),[t]),r["default"].createElement(r["default"].Fragment,null,r["default"].createElement("p",null,"You clicked ",t," times"),r["default"].createElement("button",{onClick:function(){return a(t+1)}},"Click me"))},o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l["default"]=e,t&&t.set(e,l),l},c=function(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)},n=t("TqRt"),e.t0=n,e.next=7,t.e(3).then(t.bind(null,"ODXe"));case 7:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,r=(0,e.t2)(e.t3),i=u,e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  Promise.resolve().then(() => {\n    console.log(\n      '\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c',\n    );\n  });\n  // \u7b2c1\u4e2ahook(useState)\n  const [count, setCount] = useState(0);\n  // \u7b2c2\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('\u7b2c1\u4e2aeffect.create dps: []');\n    return () => {\n      console.log('\u7b2c1\u4e2aeffect.destory');\n    };\n  }, []);\n  // \u7b2c3\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('effect.create dps: [count]', count);\n    return () => {\n      console.log('\u7b2c2\u4e2aeffect.destory dps: [count]', count);\n    };\n  }, [count]);\n  return (\n    <>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n}\nexport default Example;"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo"}}}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);