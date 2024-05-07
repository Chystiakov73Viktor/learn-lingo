import{u as a,a as b,r as s,j as t,I as j}from"./index-DUiIu4CF.js";import{S as T}from"./Section-D9VnMAMk.js";const N=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;

  .wrapperTextImg {
    display: flex;
    gap: 24px;
    width: calc(100% + 128px);
    margin-left: -64px;
    margin-right: -64px;
  }

  .containerText {
    flex: 1;
    border-radius: 30px;
    background: #f8f8f8;
    padding: 98px 108px 98px 64px;
  }

  .imgWrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 100%;
    height: 530px;
    background: ${({$randomLightColor:e})=>e};
  }

  .img {
    width: 339px;
    height: 339px;
    border-radius: 30px;
    object-fit: cover;
  }

  .containerApple {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 361px;
    height: 160px;
    background: ${({$randomDarkColor:e})=>e};
  }

  .title {
    width: 548px;
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 32px;
  }

  .buttonTitle {
    height: auto;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    line-height: 72%;
    letter-spacing: -0.02em;
    color: #121417;
    font-style: italic;
    border: transparent;
    border-radius: 12px;
    background: ${({$randomLightColor:e})=>e};
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;

    &:focus,
    &:hover {
      background: ${({$randomDarkColor:e})=>e};
      outline: 1px solid #f3f3f3;
    }
  }

  .text {
    width: 471px;
    font-size: 16px;
    line-height: 137%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 64px;
  }

  .buttonStarted {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
    border-radius: 12px;
    padding: 16px 88px;
    border: none;
    background: ${({$randomLightColor:e})=>e};
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;

    &:focus,
    &:hover {
      background: ${({$randomDarkColor:e})=>e};
      outline: 1px solid #f3f3f3;
    }
  }

  .listTutors {
    display: flex;
    align-items: center;
    gap: 100px;
    width: calc(100% + 128px);
    margin-left: -64px;
    margin-right: -64px;
    padding: 40px 123px;
    border: 1.5px dashed ${({randomLightColor:e})=>e};
    border-radius: 30px;
  }

  .itemTutors {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .titleTutors {
    font-weight: 500;
    font-size: 28px;
    line-height: 114%;
    letter-spacing: -0.02em;
    color: #121417;
  }

  .titleTutors::after {
    content: '+';
    margin-left: 5px;
  }

  .textTutors {
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.7);
  }
`;a.button``;const y="/learn-lingo/assets/img-luWhLSRx.svg",C=()=>{const e=b(),[r,n]=s.useState(""),[l,c]=s.useState(""),d=()=>{e("/teachers")},x=["#F4C550","#9FBAAE","#9FB7CE","#E0A39A","#F0AA8D"],p=["#FBE9BA","#CBDED3","#BFD6EA","#F2C0BD","#F4C8BA"];function h(o,g){const i=Math.floor(Math.random()*o.length),u=o[i],f=g[i];return{randomLightColor:u,randomDarkColor:f}}s.useEffect(()=>{m()},[]);const m=()=>{const o=h(p,x);n(o.randomLightColor),c(o.randomDarkColor)};return t.jsx(T,{className:"hero",children:t.jsxs(N,{$randomLightColor:r,$randomDarkColor:l,children:[t.jsxs("div",{className:"wrapperTextImg",children:[t.jsxs("div",{className:"containerText",children:[t.jsxs("h1",{className:"title",children:["Unlock your potential with the best"," ",t.jsx("button",{className:"buttonTitle",type:"button",children:"language"})," ","tutors"]}),t.jsx("p",{className:"text",children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),t.jsx("button",{className:"buttonStarted",type:"button",onClick:d,children:"Get started"})]}),t.jsxs("div",{className:"imgWrapper",children:[t.jsx("img",{className:"img",src:y,alt:"teacher"}),t.jsx("div",{className:"containerApple",children:t.jsx(j,{style:{color:r,width:"47",height:"57"}})})]})]}),t.jsxs("ul",{className:"listTutors",style:{border:`1.5px dashed ${r}`},children:[t.jsxs("li",{className:"itemTutors",children:[t.jsx("h2",{className:"titleTutors",children:"32,000"}),t.jsx("p",{className:"textTutors",children:"Experienced tutors"})]}),t.jsxs("li",{className:"itemTutors",children:[t.jsx("h2",{className:"titleTutors",children:"300,000"}),t.jsx("p",{className:"textTutors",children:"5-star tutor reviews"})]}),t.jsxs("li",{className:"itemTutors",children:[t.jsx("h2",{className:"titleTutors",children:"120"}),t.jsx("p",{className:"textTutors",children:"Subjects taught"})]}),t.jsxs("li",{className:"itemTutors",children:[t.jsx("h2",{className:"titleTutors",children:"200"}),t.jsx("p",{className:"textTutors",children:"Tutor nationalities"})]})]})]})})};function v(){return t.jsx(t.Fragment,{children:t.jsx(C,{})})}export{v as default};
