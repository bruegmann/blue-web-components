(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),preview=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/@storybook/addon-viewport/dist/esm/preview.js")),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:Object.assign({},preview.a,{tabletLandscape:{name:"Tablet landscape",styles:{width:"1112px",height:"834px"}}})}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/button.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},"./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Button.stories.js":"./stories/Button.stories.js","./Sidebar.stories.js":"./stories/Sidebar.stories.js","./ToDo.stories.js":"./stories/ToDo.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./stories/Button.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var _templateObject,lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),style_map=__webpack_require__("./node_modules/lit-html/directives/style-map.js");__webpack_require__("./stories/button.css");__webpack_exports__.default={title:"Example/Button",argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]}}};var Button_stories_Template=function Template(args){return function Button(_ref){var primary=_ref.primary,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?null:_ref$backgroundColor,size=_ref.size,label=_ref.label,onClick=_ref.onClick,mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(lit_html.b)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n        <button\n            type="button"\n            class=',"\n            style=","\n            @click=","\n        >\n            ","\n        </button>\n    "])),["storybook-button","storybook-button--"+(size||"medium"),mode].join(" "),Object(style_map.a)({backgroundColor:backgroundColor}),onClick,label)}(args)},Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={label:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Small.parameters)},"./stories/Sidebar.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Unstyled",(function(){return Unstyled})),__webpack_require__.d(__webpack_exports__,"Customized",(function(){return Customized}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var _argTypes,_Customized$args,Sidebar=function(_HTMLElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Sidebar,_HTMLElement);var _super=function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}(Sidebar);function Sidebar(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Sidebar),(_this=_super.call(this)).attachShadow({mode:"open"}),_this.shadowRoot.innerHTML='\n            <style>\n                :host {\n                    display: block;\n                    width: var(--blue-sidebar-width, 16.563rem);\n                    background: var(--blue-sidebar-bg, silver);\n                    transition: var(--blue-sidebar-transition);\n                }\n\n                :host([closed]) {\n                    width: var(--blue-sidebar-width-closed, var(--blue-control-size, 3rem));\n                }\n\n                #toggleBtn {\n                    width: var(--blue-control-size, 3rem);\n                    height: var(--blue-control-size, 3rem);\n                    border: none;\n                    border-radius: var(--blue-sidebar-button-border-radius);\n                    background: var(--blue-sidebar-button-bg, darkgray);\n                    color: var(--blue-sidebar-button-color, white);\n                    cursor: pointer;\n                    margin: var(--blue-sidebar-button-margin);\n                    padding: var(--blue-sidebar-button-padding);\n                    transition: var(--blue-sidebar-button-transition);\n                }\n                \n                @media (hover: hover) {\n                    #toggleBtn:hover {\n                        background: var(--blue-sidebar-button-bg-hover, gray);\n                        color: var(--blue-sidebar-button-color-hover, white);\n                    }\n                }\n            </style>\n\n            <slot name="style"></slot>\n\n            <button id="toggleBtn">\n                <slot name="icon">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">\n                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>\n                    </svg>\n                </slot>\n            </button>\n\n            <slot></slot>\n        ',_this.close=_this.close.bind(_assertThisInitialized(_this)),_this.open=_this.open.bind(_assertThisInitialized(_this)),_this.toggle=_this.toggle.bind(_assertThisInitialized(_this)),_this.getDynamicSize=_this.getDynamicSize.bind(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Sidebar,[{key:"close",value:function close(){this.setAttribute("closed","")}},{key:"open",value:function open(){this.removeAttribute("closed")}},{key:"toggle",value:function toggle(){null!==this.getAttribute("closed")?this.open():this.close()}},{key:"getDynamicSize",value:function getDynamicSize(){var attr=this.getAttribute("dynamic-size");return""===attr?992:null===attr?null:parseInt(attr)}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){}},{key:"connectedCallback",value:function connectedCallback(){var toggleBtn=this.shadowRoot.getElementById("toggleBtn");this._onClick=this._onClick.bind(this),toggleBtn.addEventListener("click",this._onClick),this._onResize(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onDocumentMouseDown=this._onDocumentMouseDown.bind(this),document.addEventListener("mousedown",this._onDocumentMouseDown)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.shadowRoot.getElementById("toggleBtn").removeEventListener("click",this._onClick),window.removeEventListener("resize",this._onResize),document.removeEventListener("mousedown",this._onDocumentMouseDown)}},{key:"_onClick",value:function _onClick(){this.toggle()}},{key:"_onResize",value:function _onResize(){var dynamicSize=this.getDynamicSize();null!==dynamicSize&&(window.innerWidth<dynamicSize?this.close():this.open())}},{key:"_onDocumentMouseDown",value:function _onDocumentMouseDown(event){var dynamicSize=this.getDynamicSize();this.contains(event.target)||null===dynamicSize||window.innerWidth<dynamicSize&&this.close()}}],[{key:"observedAttributes",get:function get(){return["closed","dynamic-size"]}}]),Sidebar}(_wrapNativeSuper(HTMLElement));customElements.define("blue-sidebar",Sidebar);__webpack_exports__.default={title:"Sidebar",component:"blue-sidebar",args:{closed:!1},argTypes:(_argTypes={closed:{name:"closed",type:{name:"boolean",required:!1},description:"Set attribute to close the sidebar.",table:{type:{summary:"boolean"},defaultValue:{summary:void 0}},control:{type:"boolean"}}},_argTypes["dynamic-size"]={name:"dynamic-size",type:{name:"number",required:!1},description:"Set attribute to close the sidebar. Set empty to use default value 992. Or set a custom value.",table:{type:{summary:"number"},defaultValue:{summary:void 0}},control:{type:"text"}},_argTypes)};var Sidebar_stories_Template=function Template(args){var el=new Sidebar;for(var a in args)!0===args[a]?el.setAttribute(a,""):!1===args[a]?el.removeAttribute(a):el.setAttribute(a,args[a]),el[a]=args[a];return el},Unstyled=Sidebar_stories_Template.bind({}),Customized=function CustomizedTemplate(args){var wrapper=document.createElement("div");wrapper.setAttribute("id","styled"),wrapper.className="site",wrapper.appendChild(Sidebar_stories_Template(args));var style=document.createElement("style");style.textContent='\n        #styled {\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Roboto,\n                Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n            margin-top: 4rem;\n\n            --blue-sidebar-bg: rgba(38, 31, 49, 0.9);\n            --blue-sidebar-button-bg: transparent;\n            --blue-sidebar-button-bg-hover: rgba(255, 255, 255, 0.7);\n            --blue-sidebar-button-border-radius: 0.5rem;\n            --blue-sidebar-button-margin: 0.25rem;\n            --blue-sidebar-button-transition: background 0.2s;\n            --blue-control-size: calc(3rem - var(--blue-sidebar-button-margin) * 2);\n            --blue-sidebar-width-closed: calc(var(--blue-control-size) + var(--blue-sidebar-button-margin) * 2);\n            --blue-sidebar-transition: width 0.5s ease-in-out;\n        }\n\n        /* Make sidebar overlay over content on smaller screens */\n        @media (max-width: 992px) {\n            #styled blue-sidebar {\n                position: absolute;\n                top: 0;\n                bottom: 0;\n            }\n\n            #styled blue-sidebar:not([closed]) {\n                box-shadow: 1rem 0.5rem 1rem rgba(0, 0, 0, 0.267);\n            }\n\n            #styled blue-sidebar + .content {\n                margin-left: var(--blue-sidebar-width-closed);\n            }\n        }\n\n        #styled blue-sidebar {\n            flex-shrink: 0;\n        }\n\n        #styled blue-sidebar a {\n            text-decoration: none;\n            color: white;\n            display: block;\n            width: 100%;\n        }\n\n        .site {\n            display: flex;\n            height: 400px;\n            border: 2px solid silver;\n            position: relative;\n        }\n\n        .content {\n            padding: 1rem;\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n    ',wrapper.appendChild(style);var content=document.createElement("div");return content.className="content",content.innerHTML='\n        <h4>Here could be app\'s content</h4>\n\n        <a href="https://github.com/bruegmann/blue-web-components" target="_blank">On GitHub</a>\n\n        <p>\n            Attribute <code>dynamic-size</code> for <code>&lt;blue-sidebar&gt;</code> automatically expands\n            or closed sidebar depending on window width. Updates when window resizes. Default breakpoint is\n            992 px but you can also set something else:<br />\n            <code>&lt;blue-sidebar dynamic-size="1200"&gt;&lt;/blue-sidebar&gt;</code>\n        </p>\n        <p></p>\n    ',wrapper.appendChild(content),wrapper}.bind({});Customized.args=((_Customized$args={})["dynamic-size"]="",_Customized$args),Unstyled.parameters=Object.assign({storySource:{source:'(args) => {\r\n    const el = new Sidebar()\r\n\r\n    for (const a in args) {\r\n        if (args[a] === true) {\r\n            el.setAttribute(a, "")\r\n        } else if (args[a] === false) {\r\n            el.removeAttribute(a)\r\n        } else {\r\n            el.setAttribute(a, args[a])\r\n        }\r\n        el[a] = args[a]\r\n    }\r\n\r\n    return el\r\n}'}},Unstyled.parameters),Customized.parameters=Object.assign({storySource:{source:'(args) => {\r\n    const wrapper = document.createElement("div")\r\n    wrapper.setAttribute("id", "styled")\r\n    wrapper.className = "site"\r\n    wrapper.appendChild(Template(args))\r\n\r\n    const style = document.createElement("style")\r\n    style.textContent = /*css*/ `\r\n        #styled {\r\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Roboto,\r\n                Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\r\n            margin-top: 4rem;\r\n\r\n            --blue-sidebar-bg: rgba(38, 31, 49, 0.9);\r\n            --blue-sidebar-button-bg: transparent;\r\n            --blue-sidebar-button-bg-hover: rgba(255, 255, 255, 0.7);\r\n            --blue-sidebar-button-border-radius: 0.5rem;\r\n            --blue-sidebar-button-margin: 0.25rem;\r\n            --blue-sidebar-button-transition: background 0.2s;\r\n            --blue-control-size: calc(3rem - var(--blue-sidebar-button-margin) * 2);\r\n            --blue-sidebar-width-closed: calc(var(--blue-control-size) + var(--blue-sidebar-button-margin) * 2);\r\n            --blue-sidebar-transition: width 0.5s ease-in-out;\r\n        }\r\n\r\n        /* Make sidebar overlay over content on smaller screens */\r\n        @media (max-width: 992px) {\r\n            #styled blue-sidebar {\r\n                position: absolute;\r\n                top: 0;\r\n                bottom: 0;\r\n            }\r\n\r\n            #styled blue-sidebar:not([closed]) {\r\n                box-shadow: 1rem 0.5rem 1rem rgba(0, 0, 0, 0.267);\r\n            }\r\n\r\n            #styled blue-sidebar + .content {\r\n                margin-left: var(--blue-sidebar-width-closed);\r\n            }\r\n        }\r\n\r\n        #styled blue-sidebar {\r\n            flex-shrink: 0;\r\n        }\r\n\r\n        #styled blue-sidebar a {\r\n            text-decoration: none;\r\n            color: white;\r\n            display: block;\r\n            width: 100%;\r\n        }\r\n\r\n        .site {\r\n            display: flex;\r\n            height: 400px;\r\n            border: 2px solid silver;\r\n            position: relative;\r\n        }\r\n\r\n        .content {\r\n            padding: 1rem;\r\n            overflow-y: auto;\r\n            overflow-x: hidden;\r\n        }\r\n    `\r\n    wrapper.appendChild(style)\r\n\r\n    const content = document.createElement("div")\r\n    content.className = "content"\r\n    content.innerHTML = /*html*/ `\r\n        <h4>Here could be app\'s content</h4>\r\n\r\n        <a href="https://github.com/bruegmann/blue-web-components" target="_blank">On GitHub</a>\r\n\r\n        <p>\r\n            Attribute <code>dynamic-size</code> for <code>&lt;blue-sidebar&gt;</code> automatically expands\r\n            or closed sidebar depending on window width. Updates when window resizes. Default breakpoint is\r\n            992 px but you can also set something else:<br />\r\n            <code>&lt;blue-sidebar dynamic-size="1200"&gt;&lt;/blue-sidebar&gt;</code>\r\n        </p>\r\n        <p></p>\r\n    `\r\n    wrapper.appendChild(content)\r\n\r\n    return wrapper\r\n}'}},Customized.parameters)},"./stories/ToDo.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Unstyled",(function(){return Unstyled}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var ToDo=function(_HTMLElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ToDo,_HTMLElement);var _super=function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}(ToDo);function ToDo(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToDo),(_this=_super.call(this)).list=["Baked","Black","Refried"],_this.attachShadow({mode:"open"}),_this.render(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ToDo,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){oldValue!==newValue&&("list"===name&&(this.list=newValue.split(",")),this.render())}},{key:"render",value:function render(){this.shadowRoot.innerHTML="\n            <ul>\n                "+this.list.map((function(i){return"<li>"+i+"</li>"})).join("")+"\n            </ul>\n        "}}],[{key:"observedAttributes",get:function get(){return["list"]}}]),ToDo}(_wrapNativeSuper(HTMLElement));customElements.define("to-do",ToDo);__webpack_exports__.default={title:"ToDo",argTypes:{list:{type:{name:"string",required:!1}}}};var Unstyled=function Template(args){var el=new ToDo;return console.log(el),args.list&&el.setAttribute("list",args.list),el}.bind({});Unstyled.parameters=Object.assign({storySource:{source:'(args) => {\r\n    const el = new ToDo()\r\n\r\n    console.log(el)\r\n\r\n    if (args.list) {\r\n        el.setAttribute("list", args.list)\r\n    }\r\n\r\n    return el\r\n}'}},Unstyled.parameters)},"./stories/button.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/button.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,6,7]]]);