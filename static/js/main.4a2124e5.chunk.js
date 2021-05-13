(this["webpackJsonpchakra-test"]=this["webpackJsonpchakra-test"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(38),i=n.n(r),s=(n(134),n(135),n(184)),o=n(173),j=Object(o.a)({styles:{global:{body:{backgroundColor:"gray.100",color:"gray.800"}}}}),l=n(115),b=n(8),u=n(5),h=n(186),d=n(176),O=n(177),x=n(178),m=n(179),p=n(185),g=n(110),f=n.n(g),C=n(183),k=function(){var e=Object(b.f)(),t=function(){var e=Object(C.a)();return{showMessage:Object(c.useCallback)((function(t){var n=t.title,c=t.status;e({title:n,status:c,position:"top",duration:2e3,isClosable:!0})}),[])}}().showMessage,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],i=a[1];return{login:Object(c.useCallback)((function(n){i(!0),f.a.get("https://jsonplaceholder.typicode.com/users/".concat(n)).then((function(n){n.data?(t({title:"\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f",status:"success"}),e.push("/home")):t({title:"\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",status:"error"})})).catch((function(){return t({title:"\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u305b\u3093",status:"error"})})).finally((function(){return i(!1)}))}),[e,t]),loading:r}},v=n(118),y=n(3),w=Object(c.memo)((function(e){var t=e.children,n=e.disabled,c=void 0!==n&&n,a=e.loading,r=void 0!==a&&a,i=e.onClick;return Object(y.jsx)(v.a,{bg:"teal.400",color:"white",_hover:{opacity:.8},onClick:i,disabled:c||r,isLoading:r,children:t})})),S=Object(c.memo)((function(){var e=k(),t=e.login,n=e.loading,a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],s=r[1];return Object(y.jsx)(d.a,{align:"center",justify:"center",height:"100vh",children:Object(y.jsxs)(O.a,{bg:"white",w:"sm",p:4,borderRadius:"md",shadow:"md",children:[Object(y.jsx)(x.a,{as:"h1",size:"lg",textAlign:"center",children:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30a2\u30d7\u30ea"}),Object(y.jsx)(m.a,{my:4}),Object(y.jsxs)(p.a,{spacing:8,py:4,px:10,children:[Object(y.jsx)(h.a,{placeholder:"\u30e6\u30fc\u30b6\u30fcID",value:i,onChange:function(e){return s(e.target.value)}}),Object(y.jsx)(w,{disabled:""===i,onClick:function(){return t(i)},loading:n,children:"\u30ed\u30b0\u30a4\u30f3"})]})]})})})),F=Object(c.memo)((function(){return Object(y.jsx)("p",{children:"404\u30da\u30fc\u30b8\u3067\u3059"})})),z=n(189),M=n(181),_=n(180),I=n(190),L=Object(c.memo)((function(e){var t=e.onOpen;return Object(y.jsx)(_.a,{"aria-label":"\u30e1\u30cb\u30e5\u30fc\u30dc\u30bf\u30f3",icon:Object(y.jsx)(I.a,{}),size:"sm",variant:"unstyled",display:{base:"block",md:"none"},onClick:t})})),P=n(188),T=n(35),B=Object(c.memo)((function(e){var t=e.onClose,n=e.isOpen,c=e.onClickHome,a=e.onClickUserManagement,r=e.onClickSetting;return Object(y.jsx)(P.a,{placement:"left",size:"xs",onClose:t,isOpen:n,children:Object(y.jsx)(T.d,{children:Object(y.jsx)(P.b,{children:Object(y.jsxs)(T.b,{p:0,bg:"gray.100",children:[Object(y.jsx)(v.a,{w:"100%",onClick:c,children:"TOP"}),Object(y.jsx)(v.a,{w:"100%",onClick:a,children:"\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7"}),Object(y.jsx)(v.a,{w:"100%",onClick:r,children:"\u8a2d\u5b9a"})]})})})})})),D=Object(c.memo)((function(){var e=Object(z.a)(),t=e.isOpen,n=e.onOpen,a=e.onClose,r=Object(b.f)(),i=Object(c.useCallback)((function(){return r.push("/home")}),[r]),s=Object(c.useCallback)((function(){return r.push("/home/user_management")}),[r]),o=Object(c.useCallback)((function(){return r.push("/home/setting")}),[r]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(d.a,{as:"nav",bg:"teal.500",color:"gray.50",align:"center",justify:"space-between",padding:{base:3,md:5},children:[Object(y.jsx)(d.a,{align:"center",as:"a",mr:8,_hover:{cursor:"pointer"},onClick:i,children:Object(y.jsx)(x.a,{as:"h1",fontSize:{base:"md",md:"lg"},children:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30a2\u30d7\u30ea"})}),Object(y.jsxs)(d.a,{align:"center",fontSize:"sm",flexGrow:2,display:{base:"none",md:"flex"},children:[Object(y.jsx)(O.a,{pr:4,children:Object(y.jsx)(M.a,{onClick:s,children:"\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7"})}),Object(y.jsx)(M.a,{onClick:o,children:"\u8a2d\u5b9a"})]}),Object(y.jsx)(L,{onOpen:n})]}),Object(y.jsx)(B,{onClose:a,isOpen:t,onClickHome:i,onClickUserManagement:s,onClickSetting:o})]})})),H=Object(c.memo)((function(e){var t=e.children;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(D,{}),t]})})),J=Object(c.memo)((function(){return Object(y.jsx)("p",{children:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3067\u3059"})})),U=Object(c.memo)((function(){return Object(y.jsx)("p",{children:"\u30bb\u30c3\u30c6\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u3067\u3059"})})),A=Object(c.memo)((function(){return Object(y.jsx)("p",{children:"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u30da\u30fc\u30b8\u3067\u3059"})})),E=[{path:"/",exact:!0,children:Object(y.jsx)(J,{})},{path:"/user_management",exact:!1,children:Object(y.jsx)(A,{})},{path:"/setting",exact:!1,children:Object(y.jsx)(U,{})},{path:"*",exact:!1,children:Object(y.jsx)(F,{})}],G=Object(c.memo)((function(){return Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{exact:!0,path:"/",children:Object(y.jsx)(S,{})}),Object(y.jsx)(b.a,{path:"/home",render:function(e){var t=e.match.url;return Object(y.jsx)(b.c,{children:E.map((function(e){return Object(y.jsx)(b.a,{exact:e.exact,path:"".concat(t).concat(e.path),children:Object(y.jsx)(H,{children:e.children})},e.path)}))})}}),Object(y.jsx)(b.a,{path:"*",children:Object(y.jsx)(F,{})})]})}));var R=function(){return Object(y.jsx)(s.a,{theme:j,children:Object(y.jsx)(l.a,{children:Object(y.jsx)(G,{})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root")),q()}},[[160,1,2]]]);
//# sourceMappingURL=main.4a2124e5.chunk.js.map