"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{11752:function(e,t,n){/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var r,o,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=/["'&<>]/,p=function(e){var t,n=""+e,r=i.exec(n);if(!r)return n;var o="",a=0,p=0;for(a=r.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}p!==a&&(o+=n.substring(p,a)),p=a+1,o+=t}return p!==a?o+n.substring(p,a):o},l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var d=u(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"});c(d),d.BLOCKS;var h=u(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"});c(h),h.INLINES;var s=u(function(e,t){var n,r;Object.defineProperty(t,"__esModule",{value:!0}),(r=n||(n={})).BOLD="bold",r.ITALIC="italic",r.UNDERLINE="underline",r.CODE="code",r.SUPERSCRIPT="superscript",r.SUBSCRIPT="subscript",t.default=n});c(s);var E=u(function(e,t){var n,r=l&&l.__spreadArray||function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=o(s);t.TOP_LEVEL_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,d.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[d.BLOCKS.TABLE,d.BLOCKS.TABLE_ROW,d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[d.BLOCKS.HR,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[d.BLOCKS.OL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.UL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[d.BLOCKS.QUOTE]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE]=[d.BLOCKS.TABLE_ROW],n[d.BLOCKS.TABLE_ROW]=[d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],n[d.BLOCKS.TABLE_CELL]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE_HEADER_CELL]=[d.BLOCKS.PARAGRAPH],n),t.HEADINGS=[d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([d.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[d.BLOCKS.DOCUMENT,d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.LIST_ITEM,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,h.INLINES.HYPERLINK,h.INLINES.ENTRY_HYPERLINK,h.INLINES.ASSET_HYPERLINK,h.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[a.default.BOLD,a.default.CODE,a.default.ITALIC,a.default.UNDERLINE]});c(E),E.V1_MARKS,E.V1_NODE_TYPES,E.TEXT_CONTAINERS,E.HEADINGS,E.CONTAINERS,E.VOID_BLOCKS,E.TABLE_BLOCKS,E.LIST_ITEM_BLOCKS,E.TOP_LEVEL_BLOCKS;var f=u(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(f);var L=u(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(L);var m=u(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:d.BLOCKS.DOCUMENT,data:{},content:[{nodeType:d.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n});c(m);var O=u(function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(h.INLINES,e.nodeType)},t.isBlock=function(e){return n(d.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}});c(O),O.isText,O.isBlock,O.isInline;var _=u(function(e,t){var n=l&&l.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=l&&l.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},i=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return d.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return h.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(s).default}}),o(E,t),o(f,t),o(L,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(m).default}});var p=a(O);t.helpers=p});c(_);var S=_.helpers;_.EMPTY_DOCUMENT;var g=_.MARKS,y=_.INLINES,T=_.BLOCKS,G=((r={})[T.PARAGRAPH]=function(e,t){return"<p>".concat(t(e.content),"</p>")},r[T.HEADING_1]=function(e,t){return"<h1>".concat(t(e.content),"</h1>")},r[T.HEADING_2]=function(e,t){return"<h2>".concat(t(e.content),"</h2>")},r[T.HEADING_3]=function(e,t){return"<h3>".concat(t(e.content),"</h3>")},r[T.HEADING_4]=function(e,t){return"<h4>".concat(t(e.content),"</h4>")},r[T.HEADING_5]=function(e,t){return"<h5>".concat(t(e.content),"</h5>")},r[T.HEADING_6]=function(e,t){return"<h6>".concat(t(e.content),"</h6>")},r[T.EMBEDDED_ENTRY]=function(e,t){return"<div>".concat(t(e.content),"</div>")},r[T.UL_LIST]=function(e,t){return"<ul>".concat(t(e.content),"</ul>")},r[T.OL_LIST]=function(e,t){return"<ol>".concat(t(e.content),"</ol>")},r[T.LIST_ITEM]=function(e,t){return"<li>".concat(t(e.content),"</li>")},r[T.QUOTE]=function(e,t){return"<blockquote>".concat(t(e.content),"</blockquote>")},r[T.HR]=function(){return"<hr/>"},r[T.TABLE]=function(e,t){return"<table>".concat(t(e.content),"</table>")},r[T.TABLE_ROW]=function(e,t){return"<tr>".concat(t(e.content),"</tr>")},r[T.TABLE_HEADER_CELL]=function(e,t){return"<th>".concat(t(e.content),"</th>")},r[T.TABLE_CELL]=function(e,t){return"<td>".concat(t(e.content),"</td>")},r[y.ASSET_HYPERLINK]=function(e){return B(y.ASSET_HYPERLINK,e)},r[y.ENTRY_HYPERLINK]=function(e){return B(y.ENTRY_HYPERLINK,e)},r[y.EMBEDDED_ENTRY]=function(e){return B(y.EMBEDDED_ENTRY,e)},r[y.HYPERLINK]=function(e,t){var n="string"==typeof e.data.uri?e.data.uri:"";return"<a href=".concat('"'.concat(n.replace(/"/g,"&quot;"),'"'),">").concat(t(e.content),"</a>")},r),I=((o={})[g.BOLD]=function(e){return"<b>".concat(e,"</b>")},o[g.ITALIC]=function(e){return"<i>".concat(e,"</i>")},o[g.UNDERLINE]=function(e){return"<u>".concat(e,"</u>")},o[g.CODE]=function(e){return"<code>".concat(e,"</code>")},o[g.SUPERSCRIPT]=function(e){return"<sup>".concat(e,"</sup>")},o[g.SUBSCRIPT]=function(e){return"<sub>".concat(e,"</sub>")},o),B=function(e,t){return"<span>type: ".concat(p(e)," id: ").concat(p(t.data.target.sys.id),"</span>")};t.S=function(e,t){return(void 0===t&&(t={}),e&&e.content)?function e(t,n){var r=n.renderNode,o=n.renderMark;return t.map(function(t){return function(t,n){var r=n.renderNode,o=n.renderMark;if(S.isText(t)){var a=p(t.value);return t.marks.length>0?t.marks.reduce(function(e,t){return o[t.type]?o[t.type](e):e},a):a}return t.nodeType&&r[t.nodeType]?r[t.nodeType](t,function(t){return e(t,{renderMark:o,renderNode:r})}):""}(t,{renderNode:r,renderMark:o})}).join("")}(e.content,{renderNode:a(a({},G),t.renderNode),renderMark:a(a({},I),t.renderMark)}):""}},55351:function(e,t,n){n.d(t,{PB:function(){return E}});var r=n(2784),o=n(97729),a=n.n(o);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var l=["keyOverride"],c=["crossOrigin"],u={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,n){void 0===t&&(t=[]);var o=void 0===n?{}:n,a=o.defaultWidth,i=o.defaultHeight;return t.reduce(function(t,n,o){return t.push(r.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:n.url})),n.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.width.toString()})):a&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:a.toString()})),n.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(r.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t},[])},h=function(e){var t,n,o,a,h,s=[];e.titleTemplate&&(u.templateTitle=e.titleTemplate);var E="";e.title?(E=e.title,u.templateTitle&&(E=u.templateTitle.replace(/%s/g,function(){return E}))):e.defaultTitle&&(E=e.defaultTitle),E&&s.push(r.createElement("title",{key:"title"},E));var f=void 0===e.noindex?u.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,L=void 0===e.nofollow?u.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,m=e.norobots||u.norobots,O="";if(e.robotsProps){var _=e.robotsProps,S=_.nosnippet,g=_.maxSnippet,y=_.maxImagePreview,T=_.maxVideoPreview,G=_.noarchive,I=_.noimageindex,B=_.notranslate,A=_.unavailableAfter;O=(S?",nosnippet":"")+(g?",max-snippet:"+g:"")+(y?",max-image-preview:"+y:"")+(G?",noarchive":"")+(A?",unavailable_after:"+A:"")+(I?",noimageindex":"")+(T?",max-video-preview:"+T:"")+(B?",notranslate":"")}if(e.norobots&&(u.norobots=!0),f||L?(e.dangerouslySetAllPagesToNoIndex&&(u.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(u.nofollow=!0),s.push(r.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(L?"nofollow":"follow")+O}))):(!m||O)&&s.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+O})),e.description&&s.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&s.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&s.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){s.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&s.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&s.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&s.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&s.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||E)&&s.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(a=e.openGraph)?void 0:a.title)||E})),(null!=(n=e.openGraph)&&n.description||e.description)&&s.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(h=e.openGraph)?void 0:h.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&s.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();s.push(r.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&s.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&s.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&s.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&s.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){s.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&s.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&s.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&s.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&s.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&s.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){s.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&s.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===v||"video.episode"===v||"video.tv_show"===v||"video.other"===v)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&s.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&s.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&s.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&s.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){s.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&s.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(u.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(u.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&s.push.apply(s,d("image",e.openGraph.images,{defaultWidth:u.defaultOpenGraphImageWidth,defaultHeight:u.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(u.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(u.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&s.push.apply(s,d("video",e.openGraph.videos,{defaultWidth:u.defaultOpenGraphVideoWidth,defaultHeight:u.defaultOpenGraphVideoHeight})),e.openGraph.audio&&s.push.apply(s,d("audio",e.openGraph.audio)),e.openGraph.locale&&s.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&s.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&s.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,n,o=e.keyOverride,a=p(e,l);s.push(r.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=o?o:a.name)?n:a.property)?t:a.httpEquiv)},a)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t,n=e.crossOrigin,o=p(e,c);s.push(r.createElement("link",i({key:"link"+(null!=(t=o.keyOverride)?t:o.href)+o.rel},o,{crossOrigin:"anonymous"===n||"use-credentials"===n||""===n?n:void 0})))}),s},s=function(e){return r.createElement(a(),null,h(e))},E=function(e){var t=e.title,n=e.themeColor,o=e.noindex,a=e.nofollow,i=e.robotsProps,p=e.description,l=e.canonical,c=e.openGraph,u=e.facebook,d=e.twitter,h=e.additionalMetaTags,E=e.titleTemplate,f=e.defaultTitle,L=e.mobileAlternate,m=e.languageAlternates,O=e.additionalLinkTags;return r.createElement(r.Fragment,null,r.createElement(s,{title:t,themeColor:n,noindex:o,nofollow:a,robotsProps:i,description:p,canonical:l,facebook:u,openGraph:c,additionalMetaTags:h,twitter:d,titleTemplate:E,defaultTitle:f,mobileAlternate:L,languageAlternates:m,additionalLinkTags:O}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")}}]);