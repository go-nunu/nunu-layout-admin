import{_ as k}from"./index-BcFWfTET.js";import{f as S,r as B,ao as C,a9 as T,a5 as F,aa as o,k as a,u as e,a3 as R,n as V,G as m,ad as i,A}from"./vue-DApy1uhY.js";import{a7 as I,a0 as N,V as D,W as G,aC as O,ap as j,av as P,aA as W,b8 as $,v as z,w as E,G as H}from"./antd-B7v2hwFR.js";import"./index-CL6hUm94.js";import"./context-BAOSbWj-.js";const Y=Object.assign({name:"BasicForm"},{__name:"index",setup(J){const c=S();async function g(){var p;try{const r=await((p=c.value)==null?void 0:p.validateFields());console.log("Success:",r)}catch(r){console.log("Failed:",r)}}const s=B({name:null,buildTime:[],goal:"",standard:"",client:"",invites:"",weight:0,target:1}),{t:l}=C();return(p,r)=>{const u=G,t=D,v=O,_=j,w=P,d=$,q=W,f=E,h=z,b=H,y=N,x=I,U=k;return F(),T(U,null,{default:o(()=>[a(x,{"body-style":{padding:"24px 32px"},bordered:!1},{default:o(()=>[a(y,{ref_key:"formRef",ref:c,model:e(s)},{default:o(()=>[a(t,{name:"name",label:e(l)("form.basic-form.title.label"),"label-col":{lg:{span:7},sm:{span:7}},rules:[{required:!0,message:e(l)("form.basic-form.title.required")}],"wrapper-col":{lg:{span:10},sm:{span:17}}},{default:o(()=>[a(u,{value:e(s).name,"onUpdate:value":r[0]||(r[0]=n=>e(s).name=n),placeholder:e(l)("form.basic-form.title.placeholder")},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),a(t,{label:e(l)("form.basic-form.date.label"),"label-col":{lg:{span:7},sm:{span:7}},rules:[{required:!0,message:e(l)("form.basic-form.date.required")}],"wrapper-col":{lg:{span:10},sm:{span:17}},name:"buildTime"},{default:o(()=>[a(v,{value:e(s).buildTime,"onUpdate:value":r[1]||(r[1]=n=>e(s).buildTime=n),style:{width:"100%"}},null,8,["value"])]),_:1},8,["label","rules"]),a(t,{label:e(l)("form.basic-form.goal.label"),"label-col":{lg:{span:7},sm:{span:7}},rules:[{required:!0,message:e(l)("form.basic-form.goal.required")}],"wrapper-col":{lg:{span:10},sm:{span:17}},name:"goal"},{default:o(()=>[a(_,{value:e(s).goal,"onUpdate:value":r[2]||(r[2]=n=>e(s).goal=n),rows:4,placeholder:e(l)("form.basic-form.goal.placeholder")},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),a(t,{label:e(l)("form.basic-form.standard.label"),"label-col":{lg:{span:7},sm:{span:7}},rules:[{required:!0,message:e(l)("form.basic-form.standard.required")}],"wrapper-col":{lg:{span:10},sm:{span:17}},name:"standard"},{default:o(()=>[a(_,{value:e(s).standard,"onUpdate:value":r[3]||(r[3]=n=>e(s).standard=n),rows:4,placeholder:e(l)("form.basic-form.standard.placeholder")},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),a(t,{label:e(l)("form.basic-form.client.label"),"label-col":{lg:{span:7},sm:{span:7}},rules:[{required:!0,message:e(l)("form.basic-form.client.required")}],"wrapper-col":{lg:{span:10},sm:{span:17}},name:"client"},{default:o(()=>[a(u,{value:e(s).client,"onUpdate:value":r[4]||(r[4]=n=>e(s).client=n),name:"client",placeholder:e(l)("form.basic-form.client.placeholder")},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),a(t,{label:e(l)("form.basic-form.invites.label"),"label-col":{lg:{span:7},sm:{span:7}},"wrapper-col":{lg:{span:10},sm:{span:17}},required:!1,name:"invites"},{default:o(()=>[a(u,{value:e(s).invites,"onUpdate:value":r[5]||(r[5]=n=>e(s).invites=n),name:"invites",placeholder:e(l)("form.basic-form.invites.placeholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(t,{label:e(l)("form.basic-form.weight.label"),"label-col":{lg:{span:7},sm:{span:7}},"wrapper-col":{lg:{span:10},sm:{span:17}},required:!1,name:"weight"},{default:o(()=>[a(w,{value:e(s).weight,"onUpdate:value":r[6]||(r[6]=n=>e(s).weight=n),min:0,max:100},null,8,["value"]),r[8]||(r[8]=R("span",null," %",-1))]),_:1},8,["label"]),a(t,{label:e(l)("form.basic-form.public.label"),"label-col":{lg:{span:7},sm:{span:7}},"wrapper-col":{lg:{span:10},sm:{span:17}},required:!1,help:e(l)("form.basic-form.label.help"),name:"target"},{default:o(()=>[a(q,{value:e(s).target,"onUpdate:value":r[7]||(r[7]=n=>e(s).target=n)},{default:o(()=>[a(d,{value:1},{default:o(()=>[m(i(e(l)("form.basic-form.radio.public")),1)]),_:1}),a(d,{value:2},{default:o(()=>[m(i(e(l)("form.basic-form.radio.partially-public")),1)]),_:1}),a(d,{value:3},{default:o(()=>[m(i(e(l)("form.basic-form.radio.private")),1)]),_:1})]),_:1},8,["value"]),V(a(t,null,{default:o(()=>[a(h,{mode:"multiple"},{default:o(()=>[a(f,{value:"4"},{default:o(()=>[m(i(e(l)("form.basic-form.option.A")),1)]),_:1}),a(f,{value:"5"},{default:o(()=>[m(i(e(l)("form.basic-form.option.B")),1)]),_:1}),a(f,{value:"6"},{default:o(()=>[m(i(e(l)("form.basic-form.option.C")),1)]),_:1})]),_:1})]),_:1},512),[[A,e(s).target===2]])]),_:1},8,["label","help"]),a(t,{"wrapper-col":{span:24},style:{"text-align":"center"}},{default:o(()=>[a(b,{type:"primary",onClick:g},{default:o(()=>[m(i(e(l)("form.basic-form.form.submit")),1)]),_:1}),a(b,{style:{"margin-left":"8px"}},{default:o(()=>[m(i(e(l)("form.basic-form.form.save")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})}}});export{Y as default};
