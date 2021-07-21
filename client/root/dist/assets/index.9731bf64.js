var e=Object.defineProperty,t=Object.defineProperties,A=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,A,n)=>A in t?e(t,A,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[A]=n,r=(e,t)=>{for(var A in t||(t={}))a.call(t,A)&&o(e,A,t[A]);if(n)for(var A of n(t))s.call(t,A)&&o(e,A,t[A]);return e};import{o as l,c as i,r as u,w as c,a as p,t as d,b as m,d as h,e as f,f as g,g as y,h as v,i as b,j as Q,k as E,p as x,l as P,m as S,V as T,s as B,n as k,q,u as C,_ as L,C as w,v as D}from"./vendor.1d6c26dd.js";const H={name:"App"};H.render=function(e,t,A,n,a,s){const o=u("router-view");return l(),i(o)};const I={};I.render=function(e,t){const A=u("router-view"),n=u("lo-default");return l(),i(n,null,{default:c((()=>[p(A)])),_:1})};const M={name:"AuthLoginRegisterForm",props:{title:String,res:Object},data:()=>({xdata:{type:"",message:""},prompt:!1}),methods:{submit(e){const t={},A=e.srcElement.getElementsByTagName("input");for(let n=0;n<A.length;n++)if("submit"!=A[n].type){const e=A[n].name,a=A[n].value;t[e]=a}this.prompt=!1,this.$emit("onSubmit",t)},resHandler(e){this.xdata=e,this.prompt=!0,window.scrollTo({top:0,behavior:"smooth"})}},watch:{res:{handler:"resHandler",immediate:!0}}},O={class:"p-auth"},U={key:0,class:"prompts"},j={class:"notes"};M.render=function(e,t,A,n,a,s){return l(),i("div",O,[p("h1",null,d(A.title),1),p("form",{onSubmit:t[2]||(t[2]=f(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[A.res&&A.res.type?(l(),i("div",U,[p("div",{type:A.res.type,class:e.prompt?"":"out"},[p("div",null,d(A.res.message),1),p("i",{class:"fa fa-times-circle",onClick:t[1]||(t[1]=t=>e.prompt=!1),"aria-hidden":"true"})],10,["type"])])):m("",!0),h(e.$slots,"form")],32),p("div",j,[h(e.$slots,"notes")])])};const z={components:{AuthForm:M},data:()=>({loading:!1,serv:{type:"",message:""}}),methods:{onAuthStateChanged(e){e&&this.$router.push("/home")}}},G=p("input",{type:"text",placeholder:"Username",name:"user",autocomplete:"",required:""},null,-1),R=p("input",{type:"password",placeholder:"Password",name:"pass",autocomplete:"",required:""},null,-1),J={type:"submit",value:"Authenticate"},N=v(" By logging in, you agree to our "),W=v("Terms and Agreements"),X=v(" Do not have an account? "),V=v("Register");z.render=function(e,t,A,n,a,s){const o=u("router-link"),r=u("auth-form"),d=g("btnload");return l(),i(r,{title:"Login",onOnSubmit:e.authFormLogin,res:e.serv},{form:c((()=>[G,R,y(p("button",J,null,512),[[d,e.loading]])])),notes:c((()=>[p("p",null,[N,p(o,{to:"/"},{default:c((()=>[W])),_:1})]),p("p",null,[X,p(o,{to:"/register"},{default:c((()=>[V])),_:1})])])),_:1},8,["onOnSubmit","res"])};const F={components:{AuthForm:M},data:()=>({loading:!1,serv:{type:"",message:""}}),methods:{onAuthStateChanged(e){e&&this.$router.push("/home")}}},K=p("input",{type:"text",name:"name",placeholder:"Name",required:""},null,-1),Y=p("input",{type:"text",name:"user",placeholder:"Username",required:""},null,-1),Z=p("input",{type:"email",name:"email",placeholder:"Email",required:""},null,-1),_=p("input",{type:"tel",name:"phone",placeholder:"Phone",required:""},null,-1),$=p("input",{type:"password",name:"pass",placeholder:"Password",autocomplete:"",required:""},null,-1),ee=p("input",{type:"password",name:"cpass",placeholder:"Confirm Password",autocomplete:"",required:""},null,-1),te={type:"submit",value:"Create Account"},Ae=v("By creating an account, you agree to our "),ne=v("Terms and Agreements"),ae=v("Already have an account? "),se=v("Login");F.render=function(e,t,A,n,a,s){const o=u("router-link"),r=u("auth-form"),d=g("btnload");return l(),i(r,{title:"Register",onOnSubmit:e.authFormRegister,res:e.serv},{form:c((()=>[K,Y,Z,_,$,ee,y(p("button",te,null,512),[[d,e.loading]])])),notes:c((()=>[p("p",null,[Ae,p(o,{to:"/"},{default:c((()=>[ne])),_:1})]),p("p",null,[ae,p(o,{to:"/login"},{default:c((()=>[se])),_:1})])])),_:1},8,["onOnSubmit","res"])};const oe={created(){this.resetStore(),this.$router.push("/")}},re=p("h1",null,"Logout",-1);oe.render=function(e,t,A,n,a,s){return l(),i("div",null,[re])};const le={};le.render=function(e,t){const A=u("router-view"),n=u("lo-user");return l(),i(n,null,{default:c((()=>[p(A)])),_:1})};const ie={async created(){const e=await this.$tuos.auth.userMe();console.log(e)}},ue=p("h1",null,"Home sweet home",-1),ce=v("Logout");ie.render=function(e,t,A,n,a,s){const o=u("router-link");return l(),i("div",null,[ue,p(o,{to:"/logout"},{default:c((()=>[ce])),_:1})])};const pe={};pe.render=function(e,t){const A=u("router-view"),n=u("lo-settings");return l(),i(n,null,{default:c((()=>[p(A)])),_:1})};const de={},me={class:"basic-info-container"},he=b('<div class="header">Basic Information</div><form class="forms-container"><div class="dp-form"><img src="data:image/jpeg;base64,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" alt=""><button class="upload">UPLOAD</button></div><div class="info-form"><label for="name">Name</label><input type="text" name="name"><label for="name">Username</label><input type="text" name="user"><label for="name">Email</label><input type="email" name="email"><label for="name">Phone</label><input type="text" name="phone"><label for="pass">New Password</label><input type="password" name="pass" autocomplete><label for="pass">Confirm New Password</label><input type="password" name="cpass" autocomplete><input type="submit" value="SAVE"></div></form>',2);de.render=function(e,t){return l(),i("div",me,[he])};const fe={components:{BasicInfo:de}},ge={class:"p-settings-profile"};fe.render=function(e,t,A,n,a,s){const o=u("basic-info");return l(),i("div",ge,[p(o)])};const ye=Q({history:E(),routes:[{path:"/",component:I,children:[{path:"",component:z},{path:"login",component:z},{path:"register",component:F},{path:"logout",component:oe}]},{path:"/user",component:le,children:[{path:"/home",component:ie},{path:"/settings",component:pe,children:[{path:"",component:fe}]}]}]});const ve={name:"defaultLayout"},be=S("data-v-e2523158");x("data-v-e2523158");const Qe={class:"lo-default"},Ee={class:"main"};P();const xe=be(((e,t,A,n,a,s)=>(l(),i("div",Qe,[p("div",Ee,[h(e.$slots,"default",{},void 0,!0)])]))));ve.render=xe,ve.__scopeId="data-v-e2523158";const Pe={name:"layoutUser",data:()=>({menu:!1})},Se={class:"lo-user"},Te={class:"brand__search"},Be=b('<li class="search"><form action=""><input type="text" placeholder="Search" name="q"><button type="Submit"><i class="fa fa-search"></i></button></form></li>',1),ke={class:"main__navi"},qe=p("i",{class:"fa fa-home"},null,-1),Ce=p("i",{class:"fa fa-cog"},null,-1),Le=p("i",{class:"fa fa-caret-down"},null,-1),we={class:"menu-content"},De={class:"items"},He=p("i",{class:"fa fa-sign-out"},null,-1),Ie=p("span",null,"Logout",-1),Me={class:"main"};Pe.render=function(e,t,A,n,a,s){const o=u("router-link");return l(),i("div",Se,[p("header",null,[p("ul",Te,[p("li",{class:"brand",onClick:t[1]||(t[1]=t=>e.$router.go(0))},"Tuos"),Be]),p("ul",ke,[p("li",null,[p(o,{to:"/home"},{default:c((()=>[qe])),_:1})]),p("li",null,[p(o,{to:"/settings"},{default:c((()=>[Ce])),_:1})]),p("li",null,[p("div",{class:"menu",active:e.menu},[p("a",{href:"#",class:"toggle-menu",onClick:t[2]||(t[2]=t=>e.menu=!e.menu)},[Le]),p("div",we,[p("div",De,[p(o,{to:"/logout",class:"item"},{default:c((()=>[He,Ie])),_:1})])])],8,["active"])])])]),p("div",Me,[h(e.$slots,"default")])])};const Oe={},Ue={class:"lo-settings"},je={class:"left-nav"},ze=v("Edit Profile"),Ge=v("Home"),Re={class:"main"};Oe.render=function(e,t,A,n,a,s){const o=u("router-link");return l(),i("div",Ue,[p("div",je,[p(o,{to:"/settings"},{default:c((()=>[ze])),_:1}),p(o,{to:"/home"},{default:c((()=>[Ge])),_:1})]),p("div",Re,[h(e.$slots,"default")])])};var Je={install:e=>{e.component("lo-default",ve),e.component("lo-user",Pe),e.component("lo-settings",Oe)}},Ne=(e,t)=>{var A;const n=null!=(A=t.value)&&A;e.innerHTML=n?'<i class="fa fa-spinner fa-spin"></i>':e.value,n?e.setAttribute("disabled",!0):e.removeAttribute("disabled")},We={install:(e,t)=>{e.directive("btnload",Ne)}};const Xe=new T({storage:window.localStorage}),Ve=B.get("vuex")||{},Fe={accessToken:"",authenticated:!1};var Ke={store:k({plugins:[q(),Xe.plugin],state:(()=>{const e={};for(let t in Fe)e[t]=Ve[t]||Fe[t];return e})(),mutations:(()=>{const e={};for(let t in Fe)e[t]=(e,A)=>{e[t]=A};return e})()}),state:Fe};var Ye={proto:function(e){const{host:t}=e,A={login:"/api/auth/login",register:"/api/auth/register",userMe:"/api/user"},n=e=>t+A[e];return{login:async(e={})=>{const t={method:"POST",url:n("login"),headers:{"content-type":"application/json"},data:e};return await w.request(t).then((e=>e.data)).catch((()=>({type:"error",message:"Unknown error occur."})))},register:async(e={})=>{const t={method:"POST",url:n("register"),headers:{"content-type":"application/json"},data:e};return await w.request(t).then((e=>e.data)).catch((()=>({type:"error",message:"Unknown error occur."})))},userMe:async()=>{const e=B.get("vuex").accessToken||"",t={method:"GET",url:n("userMe"),headers:{authorization:"Bearer "+e}};return await w.request(t).then((e=>e.data)).catch((e=>({type:"error",message:"Unknown error occur.",e:e})))}}},mixin:{computed:r({},C(["accessToken","authenticated"])),methods:{accessTokenHandler(){},accessTokenValidateChange(e){e&&"string"==typeof e&&e.length>0?this.$store.commit("authenticated",!0):this.$store.commit("authenticated",!1)},onAuthStateChanged(){},resetStore(){B.clearAll();const e=Ke.state;for(let t in e)this.$store.commit(t,e[t])},async authFormLogin(e){this.loading=!0,await this.$tuos.auth.login(e).then((e=>{this.serv=e,this.$store.commit("accessToken",e.token)})).catch((()=>this.serv={type:"error",message:"Unknown error occur."})).finally((()=>{this.loading=!1}))},async authFormRegister(e){Boolean(e.pass)&&Boolean(e.cpass)&&e.pass==e.cpass?(this.loading=!0,await this.$tuos.auth.register(L.omit(e,["cpass"])).then((e=>{this.serv=e,this.$store.commit("accessToken",e.token)})).catch((()=>this.serv={type:"error",message:"Unknown error occur."})).finally((()=>{this.loading=!1}))):this.serv={type:"error",message:"Password doesn't match"}}},watch:{accessToken:{handler:"accessTokenHandler",immediate:!0},accessToken:{handler:"accessTokenValidateChange",immediate:!0},authenticated:{handler:"onAuthStateChanged",immediate:!0}}}},Ze={install:(e,n)=>{const a=n.host||"",s=n.devHost||a,o=a;var l;l=r({},n),n=t(l,A({prodHost:a,devHost:s,host:o})),e.config.globalProperties.$tuos={auth:Ye.proto(n)},e.mixin(Ye.mixin)}};const _e=D(H);_e.use(Ke.store),_e.use(ye),_e.use(Je),_e.use(We),_e.use(Ze,{devHost:"http://localhost:8080"}),_e.mount("#app");
