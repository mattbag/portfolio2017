webpackJsonp([0x67ef26645b2a,60335399758886],{274:function(e,t){e.exports={layoutContext:{}}},367:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},o=A(3),r=n(o),a=A(375),E=n(a),u=A(274),l=n(u);t.default=function(e){return r.default.createElement(E.default,i({},e,l.default))},e.exports=t.default},228:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=A(3),E=n(a),u=A(86),l=n(u),f=A(246),I=n(f),c=A(226),s=n(c),p=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=void 0,t=void 0,A=void 0;return this.props.bio&&(e=E.default.createElement("span",null,"Just a cool thing by Matt Bagni",E.default.createElement("a",{href:"https://twitter.com/mattbag00"},"If you fancy Twitter"))),this.props.social&&(t=E.default.createElement(I.default,null),A={textAlign:"center"}),E.default.createElement("div",{className:"bio",style:A},E.default.createElement(l.default,{to:"/",style:{boxShadow:"none",textDecoration:"none",color:"inherit"}},E.default.createElement("img",{src:s.default,alt:"Matt Bagni logo",width:"50px",style:{marginBottom:0}})),e,t)},t}(a.Component);t.default=p,e.exports=t.default},226:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgBAMAAAApXhtbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUxpcf///////////yaL3Vyo5oW+7Dc965AAAAAEdFJOUwBAcBDxgYLIAAAHzUlEQVR42u3dP1IyMRjAYVc5AIyljUfQG1hgS6Wn1MpWCm+AR7CxdOAAIl/3bZzZVRLZPwnPr3IYYYHHmOadzemJRtWprwCIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAqT7rmc9dQ5kr97n/7u9+/3n+9SH5wsge7Vb99QGiIAAERAgAgJEQAQEiIAAERAgAgJEQIAIiIAAUYYgvQ1gZTSuNShIywDWTV/XnzRff3G0IL0NYGU0rmUPsYcICBABASIgQAQEiIAICBABASIgQAQEiIBoJCBns6w6Lx7ka4h5n7gmQ97Bqf9/Weus2pQPIiBABASIgAARECACIiBABASIgAARECACIiBA6q5nJXRVDkhw2595Xn+w4Q2D3soB2a1LyB5iDxEQAQEiIEAEBIiAABEQAQEiIEAEBIiAAFHxIFURY0BWiBXSVcaArBArRECACAgQAREQIAICRECACAgQAREQIAICRKMFOZsV3HmGIBmc/hVZL2eFdfgva11wmxxBBASIgAARECACIiBABASIgAARECACIiBABARIcyWPAU2tECvkzxkDskKsEAEBIiBABERAgAgIEAEBIiBABERAgAgIEI0VpOg7ALV1NWKQ8A5A87inLute+vpr/AwuGvfMSf0xb9/G/C9rfYTZQ+whAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgLkr6VPNwUvUg1xk6WDvPPcV0gwF/V8WT98kTwuFXfN5VPwPTwOMBfWA0j6dNNr/SKrviaqPuprbs1lCQgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQDQdy8MPnhjjwrip0LisYgHoIBrAeG+ei2t7eY/Mz95jX+ky95re5sJZ3/pLLCkmei2pp2+UsVlsrc1kCAkRAgAgIEAEBIiACAkRAgAgIEAEBIiACUjxId+MxP1woed4nvarM2zP94W23jOQso+Z9jmCFdDce873tQeZ90tsZA7KHCIiAABEQIAICRECACAgQXwEQAQEiIEAEBIjyBultDCioKuqaBayQi+az3qyQk5P+xoDCVs1nvXWaMSB7iIAICBABASIgQAQEiIAICBABASIgQAQEiDIHGWIMaIiMAVkhaQ0xBjRExoCsEAERECACAkRAgAgIEAERECACAkRAgAgIEGUOYgzICrFCfsoYkBVihQgIEAERECACAkRAgAgIEAERECACAkRAgCgLkFlz5yV8VWctHy6bFTKvW5QA8nVXf6CbXFbIurlNEf9NWj6cPcQeIiBABERAgAgIEAEBIiBABERAgAgIEAEBogxBWiZlpkV8V7mPAWkEIMaArBArRECACIiAABEQIAICRECACIiAABEQIAICRFmADDEGdB1c6KrLCxkD2q/3+iY9t29WyPeGGAPa9XUQmTEge4iACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACMhxgAwxKFd1NrS234ezQqyQ/TMoZ4VYIQICREAEBIiAABEQIAICREAEBIiAABEQIMoCxBiQFWKF/JQxICvEChEQIAIiIEAEBIiAABEQIAIiIEAEBIiAAFEWILOozqNe+2yWXNxpetdxLz5mkNPHZV3w+CQ42e6u/nkR9eJfd82vchP8Tv3o/D75NL335leZB7/yWX/M58sRg2zXUUVOB62Ti7vOLu7FX+0h9hABASIgAgJEQIAICBABASIgAgJEQIAICBDlDZI8qXM966lgDClyxmha5gqZNE/qvDeP+8zTL9Qy1xOMIX21zBWVtEKSJ3V2657aJL/bTZkrRECACAgQAQEiIEAERECACAgQAQEiIEAERECOE2RWcDmOAYV3Bnr5/dfncWM4wV2HHoI788RdcxI3YxRc8ylDkO264D7sIfYQAREQIAICRECACAgQAQHiKwAiIEAEBIiAAFGRINXB53DGec0jWCHL5hmfPU7iukieDjqCFXL4+/v8fhLX6uDXtELsIQIiIEAEBIiAABEQIAIiIEAEBIiAABEQICoepDr06M1Z1Ilfh3krxoB+KDzD6775DLGFFdLe7uCjN8nndu2MAQkIEAEBIiBABERAgAgIEAEBIiBABERAgAgIEAEBklRVxFl5BYEE965axj1z3jwFt8cpd5PmZ97EXf8z6h5d2YCsijgr77UcEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEB8nt5jf5Miwc5Hf8RdsHoz/KpeJBtXqM/H/YQe4iACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAjPUmQVMrZAQNOfozGpCd0R8rxB4iIEAEBIiAABEQAQEiIEAEBIiAABEQAQGiHECqYzvxa+wg6WeFWSGdNKazwoAICBABASIgQAQEiIAICBABASIgQAQEiIAICJC9MgY0LpDwrLCHLqeDwhO/ggs9XwL51uBnhb0CERAgAgJEQIAICBABERAgAgJEQIAICBABERAgf6isE7/yBwmng55bfn6IevgJyF/alnXilz3EHiIgQAQEiIAICBABASIgQAQEiIAICBABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAAERABASIgQAQEiIAcY/8AjxRMTwmqTNIAAAAASUVORK5CYII="},371:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=A(3),E=n(a),u=A(86),l=(n(u),A(228)),f=n(l),I=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return E.default.createElement("header",{style:{marginBottom:"1rem",marginTop:0,position:"fixed",left:".25rem",top:".5rem",zIndex:1,display:"flex"}},E.default.createElement(f.default,null),E.default.createElement("h1",{style:{color:"#fff",textShadow:"2px 2px #000"}},this.props.text))},t}(a.Component);t.default=I,e.exports=t.default},246:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=A(3),E=n(a);A(275);var u=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=[{name:"github",link:"https://mattbag.github.io/"},{name:"linkedin",link:"https://www.linkedin.com/in/matteobagni88/"},{name:"twitter",link:"https://mobile.twitter.com/mattbag00"},{name:"codepen",link:"https://codepen.io/mattbag/"}],t={fontFamily:"Lobster",color:"#333",textShadow:"1px 1px #fff",padding:".5vmin"};return E.default.createElement("ul",{className:"social",style:{margin:0}},e.map(function(e){return E.default.createElement("li",{key:e.name},E.default.createElement("a",{href:e.link,target:"_blank",style:t},e.name))}))},t}(E.default.Component);t.default=u,e.exports=t.default},275:function(e,t){},375:function(e,t,A){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&(t[A]=e[A]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var E=A(3),u=i(E),l=A(86),f=(i(l),A(11)),I=n(f),c=A(76);A(501);var s=A(228),p=(i(s),A(371)),g=i(p),B={children:I.func.isRequired},C=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.location,t=void 0;return"/"!==e.pathname&&"/portfolio2017"!==e.pathname||(t="I'm Matt, a Progressive Front-end Dev"),u.default.createElement("div",{style:{margin:"0 auto",maxWidth:"90%",paddingLeft:(0,c.rhythm)(.75),paddingRight:(0,c.rhythm)(.75),paddingTop:(0,c.rhythm)(.75)}},u.default.createElement(g.default,{text:t}),this.props.children())},t}(u.default.Component);C.propTypes=B,t.default=C,e.exports=t.default},501:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-ca2a5fb252014282872c.js.map