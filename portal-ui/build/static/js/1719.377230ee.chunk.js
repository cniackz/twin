"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1719],{66964:function(e,n,t){var a=t(18489),o=t(50390),i=t(12066),s=t(25594),l=t(36554),r=t(94187),c=t(95467),d=t(86509),u=t(62449),m=t(4285),p=t(72462),h=t(97538),v=t(44977),f=t(62559),x=(0,u.Z)((function(e){return(0,d.Z)((0,a.Z)({},p.gM))}));function Z(e){var n=x();return(0,f.jsx)(i.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,a.Z)((0,a.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,x=e.autoComplete,j=void 0===x?"off":x,b=e.disabled,g=void 0!==b&&b,C=e.multiline,y=void 0!==C&&C,N=e.tooltip,P=void 0===N?"":N,k=e.index,I=void 0===k?0:k,T=e.error,L=void 0===T?"":T,E=e.required,S=void 0!==E&&E,w=e.placeholder,F=void 0===w?"":w,B=e.min,M=e.max,A=e.overlayId,K=e.overlayIcon,R=void 0===K?null:K,D=e.overlayObject,O=void 0===D?null:D,W=e.extraInputProps,z=void 0===W?{}:W,G=e.overlayAction,H=e.noLabelMinWidth,Y=void 0!==H&&H,$=e.pattern,_=void 0===$?"":$,q=e.autoFocus,Q=void 0!==q&&q,U=e.classes,V=e.className,X=void 0===V?"":V,J=e.onKeyPress,ee=(0,a.Z)({"data-index":I},z);return"number"===p&&B&&(ee.min=B),"number"===p&&M&&(ee.max=M),""!==_&&(ee.pattern=_),(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(s.ZP,{container:!0,className:(0,v.Z)(""!==X?X:"",""!==L?U.errorInField:U.inputBoxContainer),children:[""!==n&&(0,f.jsxs)(l.Z,{htmlFor:d,className:Y?U.noMinWidthLabel:U.inputLabel,children:[(0,f.jsxs)("span",{children:[n,S?"*":""]}),""!==P&&(0,f.jsx)("div",{className:U.tooltipContainer,children:(0,f.jsx)(r.Z,{title:P,placement:"top-start",children:(0,f.jsx)("div",{className:U.tooltip,children:(0,f.jsx)(h.Z,{})})})})]}),(0,f.jsxs)("div",{className:U.textBoxContainer,children:[(0,f.jsx)(Z,{id:d,name:u,fullWidth:!0,value:i,autoFocus:Q,disabled:g,onChange:t,type:p,multiline:y,autoComplete:j,inputProps:ee,error:""!==L,helperText:L,placeholder:F,className:U.inputRebase,onKeyPress:J}),R&&(0,f.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,f.jsx)(c.Z,{onClick:G?function(){G()}:function(){return null},id:A,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:R})}),O&&(0,f.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==n?"withLabel":""),children:O})]})]})})}))},21639:function(e,n,t){var a=t(23430),o=t(50390),i=t(30324);n.Z=function(e,n){var t=(0,o.useState)(!1),s=(0,a.Z)(t,2),l=s[0],r=s[1];return[l,function(t,a,o){r(!0),i.Z.invoke(t,a,o).then((function(n){r(!1),e(n)})).catch((function(e){r(!1),n(e)}))}]}},60656:function(e,n,t){var a=t(18489),o=t(50390),i=t(84402),s=t(78426),l=t(93085),r=t(7887),c=t(66946),d=t(14476),u=t(95467),m=t(21278),p=t(86509),h=t(4285),v=t(72462),f=t(62559);n.Z=(0,h.Z)((function(e){return(0,p.Z)((0,a.Z)({},v.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,p=e.onClose,h=e.onCancel,v=e.onConfirm,x=e.classes,Z=void 0===x?{}:x,j=e.title,b=void 0===j?"":j,g=e.isLoading,C=e.confirmationContent,y=e.cancelText,N=void 0===y?"Cancel":y,P=e.confirmText,k=void 0===P?"Confirm":P,I=e.confirmButtonProps,T=void 0===I?{}:I,L=e.cancelButtonProps,E=void 0===L?{}:L,S=e.titleIcon,w=void 0===S?null:S;return(0,f.jsxs)(i.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&p()},className:Z.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,f.jsxs)(s.Z,{className:Z.title,children:[(0,f.jsxs)("div",{className:Z.titleText,children:[w," ",b]}),(0,f.jsx)("div",{className:Z.closeContainer,children:(0,f.jsx)(u.Z,{"aria-label":"close",className:Z.closeButton,onClick:p,disableRipple:!0,size:"small",children:(0,f.jsx)(m.Z,{})})})]}),(0,f.jsx)(l.Z,{className:Z.content,children:C}),(0,f.jsxs)(r.Z,{className:Z.actions,children:[(0,f.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:Z.cancelButton,onClick:h||p,disabled:g,type:"button"},E),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:N})),(0,f.jsx)(d.Z,(0,a.Z)((0,a.Z)({className:Z.confirmButton,type:"button",onClick:v,loading:g,disabled:g,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,f.jsx)(o.Fragment,{}),autoFocus:!0,id:"confirm-ok"},T),{},{children:k}))]})]})}))},51719:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(23430),o=t(18489),i=t(50390),s=t(34424),l=t(86509),r=t(4285),c=t(72462),d=t(28948),u=t(44149),m=t(30324),p=t(8174),h=t(23473),v=t(66964),f=t(25594),x=t(21639),Z=t(60656),j=t(86362),b=t(62559),g=(0,s.$j)(null,{setErrorSnackMessage:u.Ih})((function(e){var n=e.deleteOpen,t=e.selectedPod,o=e.closeDeleteModalAndRefresh,s=e.setErrorSnackMessage,l=(0,i.useState)(""),r=(0,a.Z)(l,2),c=r[0],d=r[1],u=(0,x.Z)((function(){return o(!0)}),(function(e){return s(e)})),m=(0,a.Z)(u,2),p=m[0],g=m[1];return(0,b.jsx)(Z.Z,{title:"Delete Pod",confirmText:"Delete",isOpen:n,titleIcon:(0,b.jsx)(j.Nv,{}),isLoading:p,onConfirm:function(){c===t.name?g("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pods/").concat(t.name)):s({errorMessage:"Tenant name is incorrect",detailedError:""})},onClose:function(){return o(!1)},confirmButtonProps:{disabled:c!==t.name||p},confirmationContent:(0,b.jsxs)(h.Z,{children:["To continue please type ",(0,b.jsx)("b",{children:t.name})," in the box.",(0,b.jsx)(f.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{id:"retype-pod",name:"retype-pod",onChange:function(e){d(e.target.value)},label:"",value:c})})]})})})),C=t(12066),y=t(65771),N=t(13336),P=(0,s.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant}}),{setErrorSnackMessage:u.Ih}),k=(0,r.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},c.oZ),c.VX),(0,c.Bz)(e.spacing(4))))}))(P((function(e){var n=e.classes,t=e.match,o=e.history,s=e.loadingTenant,l=(0,i.useState)([]),r=(0,a.Z)(l,2),c=r[0],h=r[1],v=(0,i.useState)(!0),x=(0,a.Z)(v,2),Z=x[0],j=x[1],P=(0,i.useState)(!1),k=(0,a.Z)(P,2),I=k[0],T=k[1],L=(0,i.useState)(null),E=(0,a.Z)(L,2),S=E[0],w=E[1],F=(0,i.useState)(""),B=(0,a.Z)(F,2),M=B[0],A=B[1],K=t.params.tenantName,R=t.params.tenantNamespace,D=c.filter((function(e){return e.name.toLowerCase().includes(M.toLowerCase())})),O=[{type:"view",onClick:function(e){o.push("/namespaces/".concat(R,"/tenants/").concat(K,"/pods/").concat(e.name))}},{type:"delete",onClick:function(e){e.tenant=K,e.namespace=R,w(e),T(!0)}}];return(0,i.useEffect)((function(){s&&j(!0)}),[s]),(0,i.useEffect)((function(){Z&&m.Z.invoke("GET","/api/v1/namespaces/".concat(R,"/tenants/").concat(K,"/pods")).then((function(e){for(var n=0;n<e.length;n++){var t=Date.now()/1e3|0;e[n].time=(0,d.v1)((t-parseInt(e[n].timeCreated)).toString())}h(e),j(!1)})).catch((function(e){(0,u.Ih)({errorMessage:"Error loading pods",detailedError:e.detailedError})}))}),[Z,K,R]),(0,b.jsxs)(i.Fragment,{children:[I&&(0,b.jsx)(g,{deleteOpen:I,selectedPod:S,closeDeleteModalAndRefresh:function(e){T(!1),j(!0)}}),(0,b.jsx)("h1",{className:n.sectionTitle,children:"Pods"}),(0,b.jsx)(f.ZP,{item:!0,xs:12,className:n.actionsTray,children:(0,b.jsx)(C.Z,{placeholder:"Search Pods",className:n.searchField,id:"search-resource",label:"",InputProps:{disableUnderline:!0,startAdornment:(0,b.jsx)(y.Z,{position:"start",children:(0,b.jsx)(N.Z,{})})},onChange:function(e){A(e.target.value)},variant:"standard"})}),(0,b.jsx)(f.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,b.jsx)(p.Z,{columns:[{label:"Name",elementKey:"name",width:200},{label:"Status",elementKey:"status"},{label:"Age",elementKey:"time"},{label:"Pod IP",elementKey:"podIP"},{label:"Restarts",elementKey:"restarts",renderFunction:function(e){return null!==e?e:0}},{label:"Node",elementKey:"node"}],isLoading:Z,records:D,itemActions:O,entityName:"Pods",idField:"name"})})]})})))}}]);
//# sourceMappingURL=1719.377230ee.chunk.js.map