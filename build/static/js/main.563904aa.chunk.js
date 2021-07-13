(this.webpackJsonprmdb=this.webpackJsonprmdb||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,u,d,p,b,m,h=t(0),f=t.n(h),j=t(15),l=t.n(j),x=t.p+"static/media/react-movie-logo.42955eb6.svg",v=t.p+"static/media/tmdb_logo.f15b6632.svg",g=t(2),O=t(3),w=O.b.div(a||(a=Object(g.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),y=O.b.div(r||(r=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),k=O.b.img(c||(c=Object(g.a)(["\n  width: 200px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]))),_=O.b.img(i||(i=Object(g.a)(["\n  width: 100px;\n\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]))),S=t(1),z=function(){return Object(S.jsx)(w,{children:Object(S.jsxs)(y,{children:[Object(S.jsx)(k,{src:x,alt:"rmdb-logo"}),Object(S.jsx)(_,{src:v,alt:"tmdb-logo"})]})})},M=t(5),B=t(4),G=t.n(B),T=t(6),q="https://api.themoviedb.org/3/",I="e0f69077241b26f629b61677c053d281",J="".concat(q,"search/movie?api_key=").concat(I,"&language=en-US&query="),N="".concat(q,"movie/popular?api_key=").concat(I,"&language=en-US"),W="".concat(q,"authentication/token/new?api_key=").concat(I),A="".concat(q,"authentication/token/validate_with_login?api_key=").concat(I),C="".concat(q,"authentication/session/new?api_key=").concat(I),E="http://image.tmdb.org/t/p/",H={method:"POST",headers:{"Content-Type":"application/json"}},P={fetchMovies:function(){var n=Object(T.a)(G.a.mark((function n(e,t){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e?"".concat(J).concat(e,"&page=").concat(t):"".concat(N,"&page=").concat(t),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(T.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(q,"movie/").concat(e,"?api_key=").concat(I),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(T.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(q,"movie/").concat(e,"/credits?api_key=").concat(I),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(T.a)(G.a.mark((function n(){var e;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(W);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(T.a)(G.a.mark((function n(e,t,a){var r,c;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t,password:a,request_token:e},n.next=3,fetch(A,Object(M.a)(Object(M.a)({},H),{},{body:JSON.stringify(r)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(C,Object(M.a)(Object(M.a)({},H),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(T.a)(G.a.mark((function n(e,t,a){var r,c;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(q,"movie/").concat(t,"/rating?api_key=").concat(I,"&session_id=").concat(e),n.next=3,fetch(r,Object(M.a)(Object(M.a)({},H),{},{body:JSON.stringify({value:a})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},U=O.b.div(o||(o=Object(g.a)(["\n    background: linear-gradient(\n        to bottom, rgba(0,0,0,0)\n        41%, rgba(0,0,0,0.65)\n        100%\n    ),\n    url(","), var(--darkGrey);\n    background-size: 100% cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n        }to{\n            opacity:1;\n        }\n    }\n"])),(function(n){return n.image})),F=O.b.div(s||(s=Object(g.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),R=O.b.div(u||(u=Object(g.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1{\n        font-size: var(--fontSuperBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        max-width:100%;\n    }\n"]))),D=function(n){var e=n.image,t=n.title,a=n.text;return Object(S.jsx)(U,{image:e,children:Object(S.jsx)(F,{children:Object(S.jsxs)(R,{children:[Object(S.jsx)("h1",{children:t}),Object(S.jsx)("p",{children:a})]})})})},K=O.b.div(d||(d=Object(g.a)(["\n    max-width:var(--maxwidth);\n    margin: 0 auto;\n    padding: 0 20px;\n\n    h1{\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig);\n        }\n    }    \n"]))),L=O.b.div(p||(p=Object(g.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));\n    grid-gap: 2rem;\n"]))),Q=function(n){var e=n.header,t=n.children;return Object(S.jsxs)(K,{children:[Object(S.jsx)("h1",{children:e}),Object(S.jsx)(L,{children:t})]})},V=O.b.img(b||(b=Object(g.a)(["\n    width: 100%;\n    max-width: 720px;\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n    animation: animateThumb: 0.5s;\n\n    :hover{\n        opacity:0.8;\n    }\n    @keyframes animateThumb {\n        from{\n            opacity:0;\n        }to{\n            opacity:1;\n        }\n    }\n"]))),X=function(n){var e=n.image;n.movieId,n.clickable;return Object(S.jsx)("div",{children:Object(S.jsx)(V,{src:e,alt:"Movie Thumb"})})},Y=t(10),Z=t(11),$={page:0,results:[],total_pages:0,total_results:0},nn=t.p+"static/media/no_image.22d2aa4d.jpg",en=function(){var n=function(){var n=Object(h.useState)($),e=Object(Z.a)(n,2),t=e[0],a=e[1],r=Object(h.useState)(!1),c=Object(Z.a)(r,2),i=c[0],o=c[1],s=Object(h.useState)(!1),u=Object(Z.a)(s,2),d=u[0],p=u[1],b=function(){var n=Object(T.a)(G.a.mark((function n(e){var t,r,c=arguments;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"",n.prev=1,p(!1),o(!0),n.next=6,P.fetchMovies(t,e);case 6:r=n.sent,a((function(n){return Object(M.a)(Object(M.a)({},r),{},{results:e>1?[].concat(Object(Y.a)(n.results),Object(Y.a)(r.results)):Object(Y.a)(r.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),p(!0);case 13:o(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(h.useEffect)((function(){b(1)}),[]),{state:t,loading:i,error:d}}(),e=n.state;n.loading,n.error;return console.log(e),Object(S.jsxs)(S.Fragment,{children:[e.results[0]?Object(S.jsx)(D,{image:"".concat(E).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(S.jsx)(Q,{header:"Popular Movies",children:e.results.map((function(n){return Object(S.jsx)(X,{clickable:!0,image:n.poster_path?E+"w780"+n.poster_path:nn,movieId:n.id},n.id)}))})]})},tn=Object(O.a)(m||(m=Object(g.a)(["\n  :root {\n    --maxWidth: 1280px;\n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535;\n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    \n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"])));var an=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(z,{}),Object(S.jsx)(en,{}),Object(S.jsx)(tn,{})]})};l.a.render(Object(S.jsx)(f.a.StrictMode,{children:Object(S.jsx)(an,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.563904aa.chunk.js.map