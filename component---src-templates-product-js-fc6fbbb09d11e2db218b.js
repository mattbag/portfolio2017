webpackJsonp([0x7d2399b50310],{256:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=n(1),i=l(c),f=n(26),d=l(f),p=n(6),s=r(p),m=n(40),y=l(m),h=(n(28),{data:s.object.isRequired}),E=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.contentfulProduct,t=e.productName.productName,n=e.productDescription,r=e.price,l=e.image,a=e.brand,o=e.categories;return i.default.createElement("div",null,i.default.createElement("div",{style:{display:"flex",alignItems:"center"}},i.default.createElement(y.default,{resolutions:l[0].resolutions}),i.default.createElement("h4",null,t)),i.default.createElement("h1",null,t),i.default.createElement("h4",null,"Made by ",a.companyName.companyName),i.default.createElement("div",null,i.default.createElement("span",null,"Price: $",r),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.childMarkdownRemark.html}}),i.default.createElement("div",null,i.default.createElement("span",null,"See other: "),i.default.createElement("ul",null,o.map(function(e,t){return i.default.createElement("li",{key:t},i.default.createElement(d.default,{key:t,to:"/categories/"+e.id},e.title.title))})))))},t}(i.default.Component);E.propTypes=h,t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-product-js-fc6fbbb09d11e2db218b.js.map