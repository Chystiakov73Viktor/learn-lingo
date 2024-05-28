import{u as n,j as e,c as r,L as d}from"./index-Dccm8c-u.js";import{S as l}from"./Section-DC6zktLI.js";import{b as c,s as g,F as m,P as h,C as u}from"./CardMarkupList-CCKX6Dqa.js";const x="/learn-lingo/assets/default-CR71aU9P.jpg",f=n.div`
  .containerImg {
    width: 100%;
    height: 700px;
    overflow: hidden;
  }

  .defaultImg {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: #f3f3f2,
      linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 0%,
        rgba(18, 20, 23, 0.5) 100%
      );
    object-fit: cover;
  }
`,j=()=>e.jsx(f,{children:e.jsx("div",{className:"containerImg ",children:e.jsx("img",{className:"defaultImg",src:x,alt:"placeholder"})})});function C(){const a=r(c),s=r(g),t=4,i=o=>e.jsx(u,{dataCard:o});return e.jsx(l,{className:"carsListSection",titleClassName:"titleCatalog",children:s?e.jsx(d,{}):e.jsx(e.Fragment,{children:Array.isArray(a)&&a.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(h,{data:a,itemsPerPage:t,renderCardList:i})]}):e.jsx(j,{})})})}export{C as default};
