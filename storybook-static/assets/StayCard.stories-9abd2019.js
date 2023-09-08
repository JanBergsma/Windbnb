import{d as v,o as i,e as d,f as s,g as c,j as p,t as a,p as w,k as S}from"./vue.esm-bundler-85151291.js";const l={mobile:{viewport:"small"},desktop:{viewport:"large"},dark:{backgrounds:"dark",theme:"dark"},light:{backgrounds:"light",theme:"light"},"dark desktop":{backgrounds:"dark",theme:"dark",viewport:"large"},"light desktop":{backgrounds:"light",theme:"light",viewport:"large"},"dark mobile":{backgrounds:"dark",theme:"dark",viewport:"small"},"light mobile":{backgrounds:"light",theme:"light",viewport:"small"}},H=e=>(w("data-v-8515a0e8"),e=e(),S(),e),x=["src","alt"],C={class:"stay-info"},E={key:0,class:"superhost"},O={class:"type"},B={key:0},F={class:"rating"},N=H(()=>s("span",{class:"material-icons"},"star",-1)),_=v({__name:"StayCard",props:{stay:{}},setup(e){return(t,n)=>(i(),d("figure",null,[s("img",{src:t.stay.photo,alt:t.stay.title},null,8,x),s("figcaption",null,[s("div",C,[t.stay.superHost?(i(),d("div",E,"SUPER HOST")):c("",!0),s("div",O,[p(a(t.stay.type)+". ",1),t.stay.beds?(i(),d("span",B,a(t.stay.beds)+" "+a(t.stay.beds===1?"bed":"beds"),1)):c("",!0)]),s("div",F,[N,p(a(t.stay.rating),1)])]),s("h3",null,a(t.stay.title),1)])]))}});const T=(e,t)=>{const n=e.__vccOpts||e;for(const[f,k]of t)n[f]=k;return n},j=T(_,[["__scopeId","data-v-8515a0e8"]]);_.__docgenInfo={exportName:"default",displayName:"StayCard",description:"",tags:{},props:[{name:"stay",required:!0,type:{name:"Stay"}}],sourceFiles:["/home/jan/Documents/web_dev/VeuJs/Windbnb/src/components/StayCard.vue"]};const q={title:"StayCard",component:j,tags:["autodocs"],argTypes:{},args:{},parameters:{chromatic:{modes:{"light mobile":l["light mobile"],"light desktop":l["dark desktop"]}}}},o={args:{stay:{city:"Turku",country:"Finland",superHost:!1,title:"Turku Nordic Home near city center",rating:4.24,maxGuests:5,type:"Entire apartment",beds:3,photo:"https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"}}},r={args:{stay:{city:"Oulu",country:"Finland",superHost:!0,title:"Cozy woodhouse flat with wooden sauna",rating:4.38,maxGuests:4,type:"Entire house",beds:null,photo:"https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"}}};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    stay: {
      city: 'Turku',
      country: 'Finland',
      superHost: false,
      title: 'Turku Nordic Home near city center',
      rating: 4.24,
      maxGuests: 5,
      type: 'Entire apartment',
      beds: 3,
      photo: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80'
    }
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,g,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    stay: {
      city: 'Oulu',
      country: 'Finland',
      superHost: true,
      title: 'Cozy woodhouse flat with wooden sauna',
      rating: 4.38,
      maxGuests: 4,
      type: 'Entire house',
      beds: null,
      photo: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80'
    }
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const I=["Default","SuperHost"];export{o as Default,r as SuperHost,I as __namedExportsOrder,q as default};
//# sourceMappingURL=StayCard.stories-9abd2019.js.map
