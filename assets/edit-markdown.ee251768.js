import{b as i}from"./bizhi.f021df48.js";import{_ as c,d,r as p,a as m,o as u,c as f,b as y,u as h}from"./index.bc2ac27e.js";const _={class:"edit"},g=d({__name:"edit-markdown",setup(v){console.log(i);const a=p(""),n=[];let r={};r.code=(e,o,t)=>`<my-code-md lang="${o}" code='${e}'></my-code-md>`,r.blockquote=e=>`<my-tips type="primary">${e}</my-tips>`,r.image=(e,o,t)=>`<my-img src="${e}"></my-img>`,r.heading=(e,o)=>{switch(o){case 1:return`<my-h1>${e}</my-h1>
`;case 2:return`<my-h2>${e}</my-h2>
`;case 3:return`<h3>${e}</h3>
`;case 4:return`<h4>${e}</h4>
`;case 5:return`<h5>${e}</h5>
`;case 6:return`<h6>${e}</h6>
`}};const l={containerStyle:{borderRadius:"10px",scrollBarColor:"purple",background:{url:"url(https://fuyouplus.oss-cn-beijing.aliyuncs.com/blog-imgs/14.png)",size:"cover",repeat:"no-repeat",color:""},font:{size:"14px",color:"#fff",weight:"normal",family:"oppo"},border:{width:"2px",style:"solid",color:"#fff"}},placeholderStyle:{size:"16px",color:"#fff",weight:"normal",family:"oppo"},editBoxStyle:{font:{size:"16px",color:"",weight:"normal",family:"oppo"},background:{url:"",size:"cover",repeat:"no-repeat",color:""}},previewBoxStyle:{font:{size:"14px",color:"",weight:"normal",family:"oppo"},background:{url:"",size:"cover",repeat:"no-repeat",color:""}},headerBoxStyle:{background:{url:"",size:"cover",repeat:"no-repeat",color:""}}};return(e,o)=>{const t=m("xy-editor-md");return u(),f("div",_,[y(t,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),utils:n,styles:l,renderer:h(r)},null,8,["modelValue","renderer"])])}}});var x=c(g,[["__scopeId","data-v-9e9ff750"]]);export{x as default};
