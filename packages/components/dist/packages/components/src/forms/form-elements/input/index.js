import{__rest as e,__assign as t}from"../../../../../../node_modules/tslib/tslib.es6.js";import{jsxs as o,Fragment as r,jsx as a}from"react/jsx-runtime";import{forwardRef as s}from"react";import l from"clsx";import{StyledInput as n}from"./style.js";import i from"../feedback/index.js";var d=s((function(s,d){var m=s.className,h=s.type,c=s.disabled,y=s.state,u=s.feedbackText,f=s.id,p=s.name,w=s.onChange,b=s.onClick,x=s.onBlur,S=s.value,g=s.readonly,k=s.showState,C=s.showErrorOnly,O=s.width,$=s.height,v=s.customStyle,E=e(s,["className","type","disabled","state","feedbackText","id","name","onChange","onClick","onBlur","value","readonly","showState","showErrorOnly","width","height","customStyle"]);return o(r,{children:[a(n,t({type:h,disabled:c,ref:d,className:l(m,"form-control"),id:f,name:p,onChange:w,onClick:b,onBlur:x,value:S,readOnly:g,$state:y,$showState:k,$showErrorOnly:C,$width:O,$height:$,$customStyle:v},E)),u&&k&&a(i,t({state:y,showState:k,showErrorOnly:C},{children:u}))]})}));d.displayName="Input",d.defaultProps={type:"text",showErrorOnly:!0};export{d as default};