import{G as v}from"./index-C-JhWVfG.js";import{H as T,S as w,ab as B,av as z}from"./antd-vtmm7CAy.js";import{f as i,n as D,a2 as r,a3 as m,k as t,aa as a,m as S,u as d,G as u,F as $,aj as F,a9 as G,ad as H,H as N}from"./vue-Dl1fzmsf.js";const V={class:"loading-wrapper"},j=["loading-full"],A={__name:"loading",setup(E){const p=i(!1),c=i(!1),s=i(1e3),k=i(["pulse","rect","plane","cube","preloader","chase","dot"]);function g(o){c.value=o===2,p.value=!0,setTimeout(()=>{p.value=!1},2e3)}function y(o){const{open:e,close:n}=v({spin:o});e(),setTimeout(()=>{n()},2e3)}function b(){const{open:o,close:e}=v({minTime:s.value});o(),e()}return(o,e)=>{const n=T,f=w,_=B,C=z,x=D("loading");return r(),m("div",V,[t(_,{title:"指令方式加载loading",hoverable:!0,bordered:!1},{default:a(()=>[S((r(),m("div",{class:"relative w-full h-[150px]","loading-text":"自定义指令loading","loading-spin":"pulse","loading-full":d(c)},[t(f,{size:15},{default:a(()=>[t(n,{type:"primary",onClick:e[0]||(e[0]=l=>g(1))},{default:a(()=>e[3]||(e[3]=[u(" v-loading指令全屏 ")])),_:1}),t(n,{type:"primary",onClick:e[1]||(e[1]=l=>g(2))},{default:a(()=>e[4]||(e[4]=[u(" v-loading指令非全屏 ")])),_:1})]),_:1})],8,j)),[[x,d(p)]])]),_:1}),t(_,{title:"hook加载loading",hoverable:"",bordered:!1,style:{"margin-top":"15px"}},{default:a(()=>[t(f,{size:15},{default:a(()=>[(r(!0),m($,null,F(d(k),(l,L)=>(r(),G(n,{key:l,type:"primary",onClick:R=>y(l)},{default:a(()=>[u(" loading"+H(L+1),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),t(_,{title:"hooloading最小时长",hoverable:"",bordered:!1},{default:a(()=>[t(f,{size:15},{default:a(()=>[t(C,{value:d(s),"onUpdate:value":e[2]||(e[2]=l=>N(s)?s.value=l:null)},null,8,["value"]),t(n,{type:"primary",onClick:b},{default:a(()=>e[5]||(e[5]=[u(" 点击触发loading ")])),_:1})]),_:1})]),_:1})])}}};export{A as default};
