import{_ as d,G as f,P as g,D as v,T as L}from"./chunk-5PKFUQBM-244277bb.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const{useParameter:S,addons:x,useEffect:A,useMemo:y}=__STORYBOOK_MODULE_PREVIEW_API__;var O={};d(O,{initializeThemeState:()=>u,pluckThemeFromContext:()=>E,useThemeParameters:()=>T});function E({globals:e}){return e[f]||""}function T(){return S(g,v)}function u(e,t){x.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var M="html",h=e=>e.split(" ").filter(Boolean),P=({themes:e,defaultTheme:t,parentSelector:r=M})=>(u(Object.keys(e),t),(c,_)=>{let{themeOverride:s}=T(),l=E(_);return A(()=>{let i=s||l||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([n])=>n!==i).forEach(([n,p])=>{let o=h(p);o.length>0&&a.classList.remove(...o)});let m=h(e[i]);m.length>0&&a.classList.add(...m)},[s,l,r]),c()});const C={parameters:{viewport:{viewports:{small:{name:"Small",styles:{width:"640px",height:"800px"}},large:{name:"Large",styles:{width:"1024px",height:"1000px"}}}},backgrounds:{values:[{name:"light",value:"#fff"},{name:"dark",value:"#1E293B"}]}},decorators:[P({themes:{light:"light",dark:"dark"},defaultTheme:"light"})]};export{C as default};
//# sourceMappingURL=preview-a368e7e3.js.map