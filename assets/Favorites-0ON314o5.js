import{u as n,j as e,c as r,L as l}from"./index-DW4-whdy.js";import{S as d}from"./Section-JivLioie.js";import{b as c,s as g,F as m,P as f,C as h}from"./CardMarkupList-wyrMAlZS.js";const u="/learn-lingo/assets/default-CR71aU9P.jpg",x=n.div`
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
`,j=()=>e.jsx(x,{children:e.jsx("div",{className:"containerImg ",children:e.jsx("img",{className:"defaultImg",src:u,alt:"placeholder"})})});function C(){const a=r(c);console.log("favoritesFiltered: ",a);const s=r(g),t=4,i=o=>e.jsx(h,{dataCard:o});return e.jsx(d,{className:"carsListSection",titleClassName:"titleCatalog",children:s?e.jsx(l,{}):e.jsx(e.Fragment,{children:Array.isArray(a)&&a.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(f,{data:a,itemsPerPage:t,renderCardList:i})]}):e.jsx(j,{})})})}export{C as default};
