(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[10],{336:function(e,t,a){"use strict";var o=a(0),r=Object(o.createContext)({});t.a=r},343:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var o=a(68),r=a(90);function i(e){return Object(o.a)("MuiDialog",e)}var n=Object(r.a)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);t.a=n},417:function(e,t,a){"use strict";var o=a(5),r=a(4),i=a(1),n=a(0),c=(a(11),a(7)),l=a(89),s=a(255),d=a(9),p=a(323),u=a(305),b=a(26),j=a(327),f=a(12),v=a(8),O=a(343),m=a(336),x=a(325),h=a(2),g=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=Object(v.a)(x.a,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),w=Object(v.a)(p.a,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),y=Object(v.a)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var a=e.ownerState;return[t.container,t["scroll".concat(Object(d.a)(a.scroll))]]}})((function(e){var t=e.ownerState;return Object(i.a)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=Object(v.a)(j.a,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var a=e.ownerState;return[t.paper,t["scrollPaper".concat(Object(d.a)(a.scroll))],t["paperWidth".concat(Object(d.a)(String(a.maxWidth)))],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&Object(o.a)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(O.a.paperScrollBody),Object(o.a)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==a.maxWidth&&Object(o.a)({maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(O.a.paperScrollBody),Object(o.a)({},t.breakpoints.down(t.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&Object(o.a)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(O.a.paperScrollBody),{margin:0,maxWidth:"100%"}))})),k={enter:b.b.enteringScreen,exit:b.b.leavingScreen},W=n.forwardRef((function(e,t){var a=Object(f.a)({props:e,name:"MuiDialog"}),o=a["aria-describedby"],p=a["aria-labelledby"],b=a.BackdropComponent,v=a.BackdropProps,x=a.children,W=a.className,C=a.disableEscapeKeyDown,M=void 0!==C&&C,R=a.fullScreen,N=void 0!==R&&R,P=a.fullWidth,T=void 0!==P&&P,B=a.maxWidth,A=void 0===B?"sm":B,E=a.onBackdropClick,F=a.onClose,I=a.open,K=a.PaperComponent,Y=void 0===K?j.a:K,L=a.PaperProps,X=void 0===L?{}:L,z=a.scroll,H=void 0===z?"paper":z,J=a.TransitionComponent,q=void 0===J?u.a:J,G=a.transitionDuration,Q=void 0===G?k:G,U=a.TransitionProps,V=Object(r.a)(a,g),Z=Object(i.a)({},a,{disableEscapeKeyDown:M,fullScreen:N,fullWidth:T,maxWidth:A,scroll:H}),$=function(e){var t=e.classes,a=e.scroll,o=e.maxWidth,r=e.fullWidth,i=e.fullScreen,n={root:["root"],container:["container","scroll".concat(Object(d.a)(a))],paper:["paper","paperScroll".concat(Object(d.a)(a)),"paperWidth".concat(Object(d.a)(String(o))),r&&"paperFullWidth",i&&"paperFullScreen"]};return Object(l.a)(n,O.b,t)}(Z),_=n.useRef(),ee=Object(s.a)(p),te=n.useMemo((function(){return{titleId:ee}}),[ee]);return Object(h.jsx)(w,Object(i.a)({className:Object(c.a)($.root,W),BackdropProps:Object(i.a)({transitionDuration:Q,as:b},v),closeAfterTransition:!0,BackdropComponent:S,disableEscapeKeyDown:M,onClose:F,open:I,ref:t,onClick:function(e){_.current&&(_.current=null,E&&E(e),F&&F(e,"backdropClick"))},ownerState:Z},V,{children:Object(h.jsx)(q,Object(i.a)({appear:!0,in:I,timeout:Q,role:"presentation"},U,{children:Object(h.jsx)(y,{className:Object(c.a)($.container),onMouseDown:function(e){_.current=e.target===e.currentTarget},ownerState:Z,children:Object(h.jsx)(D,Object(i.a)({as:Y,elevation:24,role:"dialog","aria-describedby":o,"aria-labelledby":ee},X,{className:Object(c.a)($.paper,X.className),ownerState:Z,children:Object(h.jsx)(m.a.Provider,{value:te,children:x})}))})}))}))}));t.a=W},418:function(e,t,a){"use strict";var o=a(1),r=a(4),i=a(0),n=(a(11),a(7)),c=a(89),l=a(91),s=a(8),d=a(12),p=a(68),u=a(90);function b(e){return Object(p.a)("MuiDialogTitle",e)}Object(u.a)("MuiDialogTitle",["root"]);var j=a(336),f=a(2),v=["className","id"],O=Object(s.a)(l.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogTitle"}),l=a.className,s=a.id,p=Object(r.a)(a,v),u=a,m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(u),x=i.useContext(j.a).titleId,h=void 0===x?s:x;return Object(f.jsx)(O,Object(o.a)({component:"h2",className:Object(n.a)(m.root,l),ownerState:u,ref:t,variant:"h6",id:h},p))}));t.a=m},419:function(e,t,a){"use strict";var o=a(4),r=a(1),i=a(0),n=(a(11),a(7)),c=a(89),l=a(8),s=a(12),d=a(68),p=a(90);function u(e){return Object(d.a)("MuiDialogContent",e)}Object(p.a)("MuiDialogContent",["root","dividers"]);var b=a(2),j=["className","dividers"],f=Object(l.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dividers&&t.dividers]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{".MuiDialogTitle-root + &":{paddingTop:0}})})),v=i.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogContent"}),i=a.className,l=a.dividers,d=void 0!==l&&l,p=Object(o.a)(a,j),v=Object(r.a)({},a,{dividers:d}),O=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(c.a)(a,u,t)}(v);return Object(b.jsx)(f,Object(r.a)({className:Object(n.a)(O.root,i),ownerState:v,ref:t},p))}));t.a=v},463:function(e,t,a){"use strict";var o=a(4),r=a(1),i=a(0),n=(a(11),a(7)),c=a(89),l=a(8),s=a(12),d=a(68),p=a(90);function u(e){return Object(d.a)("MuiDialogActions",e)}Object(p.a)("MuiDialogActions",["root","spacing"]);var b=a(2),j=["className","disableSpacing"],f=Object(l.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=i.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogActions"}),i=a.className,l=a.disableSpacing,d=void 0!==l&&l,p=Object(o.a)(a,j),v=Object(r.a)({},a,{disableSpacing:d}),O=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(a,u,t)}(v);return Object(b.jsx)(f,Object(r.a)({className:Object(n.a)(O.root,i),ownerState:v,ref:t},p))}));t.a=v},474:function(e,t,a){"use strict";var o=a(4),r=a(1),i=a(0),n=(a(11),a(89)),c=a(8),l=a(12),s=a(91),d=a(68),p=a(90);function u(e){return Object(d.a)("MuiDialogContentText",e)}Object(p.a)("MuiDialogContentText",["root"]);var b=a(2),j=["children"],f=Object(c.a)(s.a,{shouldForwardProp:function(e){return Object(c.b)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),v=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogContentText"}),i=Object(o.a)(a,j),c=function(e){var t=e.classes,a=Object(n.a)({root:["root"]},u,t);return Object(r.a)({},t,a)}(i);return Object(b.jsx)(f,Object(r.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:i},a,{classes:c}))}));t.a=v},814:function(e,t,a){"use strict";a.r(t);var o=a(15),r=a(3),i=a(0),n=a(38),c=a(417),l=a(418),s=a(419),d=a(316),p=a(474),u=a(463),b=a(330),j=a(50),f=a(30),v=a(250),O=a(116),m=a(260),x=a(328),h=a(122),g=a.n(h),S=a(2),w={setErrorSnackMessage:f.e},y=Object(n.b)(null,w);t.default=Object(m.a)((function(e){return Object(v.a)(Object(r.a)({},O.h))}))(y((function(e){var t=e.classes,a=e.closeDeleteModalAndRefresh,r=e.deleteOpen,n=e.selectedPolicy,f=e.setErrorSnackMessage,v=Object(i.useState)(!1),O=Object(o.a)(v,2),m=O[0],h=O[1];return Object(S.jsxs)(c.a,{classes:t,className:t.root,open:r,onClose:function(){a(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(S.jsxs)(l.a,{id:"alert-dialog-title",className:t.title,children:[Object(S.jsx)("div",{className:t.titleText,children:"Delete Policy"}),Object(S.jsx)("div",{className:t.closeContainer,children:Object(S.jsx)(x.a,{"aria-label":"close",className:t.closeButton,onClick:function(){a(!1)},disableRipple:!0,size:"small",children:Object(S.jsx)(g.a,{})})})]}),Object(S.jsxs)(s.a,{children:[m&&Object(S.jsx)(d.a,{}),Object(S.jsxs)(p.a,{id:"alert-dialog-description",children:["Are you sure you want to delete policy ",Object(S.jsx)("br",{}),Object(S.jsx)("b",{children:n}),"?"]})]}),Object(S.jsxs)(u.a,{children:[Object(S.jsx)(b.a,{variant:"outlined",onClick:function(){a(!1)},color:"primary",disabled:m,children:"Cancel"}),Object(S.jsx)(b.a,{variant:"outlined",onClick:function(){m||(h(!0),j.a.invoke("DELETE","/api/v1/policy?name=".concat(n)).then((function(e){h(!1),a(!0)})).catch((function(e){h(!1),f(e)})))},color:"secondary",autoFocus:!0,children:"Delete"})]})]})})))}}]);
//# sourceMappingURL=10.07fb2067.chunk.js.map