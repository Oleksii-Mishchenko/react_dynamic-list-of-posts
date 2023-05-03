(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a.n(n),s=a(6),r=a(2),i=a(3),o=a.n(i),l=a(1),d=(a(18),a(19),a(20),a(4)),j=a.n(d),u=a(0),b=function(e){var t=e.posts,a=e.selectedPost,n=e.selectPost;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:a===e?Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){n(null)},children:"Close"}):Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){n(e)},children:"Open"})})]},e.id)}))})]})]})},m=a(12),h=(a(22),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=a(8),x=a(5),f="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return a&&(n.body=JSON.stringify(a),n.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(f+e,n)})).then((function(e){return e.json()}))}var y=function(e){return v(e)},N=function(e,t){return v(e,"POST",t)},g=function(e){return v(e,"DELETE")},w=function(e){var t=e.handleAddComment,a=e.setHasLoadingError,n=e.postId,c=Object(l.useState)({name:"",email:"",body:""}),i=Object(r.a)(c,2),d=i[0],b=i[1],m=Object(l.useState)({name:!1,email:!1,body:!1}),h=Object(r.a)(m,2),f=h[0],p=h[1],v=Object(l.useState)(!1),y=Object(r.a)(v,2),g=y[0],w=y[1],k=function(e){var t=e.name,a=e.value;if("name"===t||"email"===t||"body"===t){if(!d[t].length&&" "===a)return;f[t]&&p((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},t,!1))})),b((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},t,a))}))}},C=function(){var e=Object(s.a)(o.a.mark((function e(){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),c=Object(x.a)(Object(x.a)({},d),{},{postId:n}),e.next=5,N("/comments",c);case 5:s=e.sent,t(s),b((function(e){return Object(x.a)(Object(x.a)({},e),{},{body:""})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(!0);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var t=function(e){var t={name:!1,email:!1,body:!1};return Object.keys(e).forEach((function(a){"name"!==a&&"email"!==a&&"body"!==a||e[a].length||(t[a]=!0)})),t}(d),a=function(e){return Object.values(e).includes(!0)}(t);a?p(t):C()},children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":f.name}),value:d.name,onChange:function(e){var t=e.target;k(t)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),f.name&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),f.name&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":f.email}),value:d.email,onChange:function(e){var t=e.target;k(t)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),f.email&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),f.email&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":f.body}),value:d.body,onChange:function(e){var t=e.target;k(t)}})}),f.body&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":g}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){b({name:"",email:"",body:""}),p({name:!1,email:!1,body:!1})},children:"Clear"})})]})]})},k=function(e){var t=e.post,a=Object(l.useState)(null),n=Object(r.a)(a,2),c=n[0],i=n[1],d=Object(l.useState)(!1),j=Object(r.a)(d,2),b=j[0],O=j[1],x=Object(l.useState)(!1),f=Object(r.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)(!1),k=Object(r.a)(N,2),C=k[0],S=k[1],E=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(null),O(!0),e.next=5,y("/comments?postId=".concat(t));case 5:a=e.sent,i(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(!0);case 12:return e.prev=12,O(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c&&i(c.filter((function(e){return e.id!==t}))),e.next=4,g("/comments/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn("Comment was not deleted from server");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),T=Object(l.useCallback)((function(e){i((function(t){return t?[].concat(Object(m.a)(t),[e]):[e]}))}),[c]);return Object(l.useEffect)((function(){S(!1),v(!1),E(t.id)}),[t]),Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(u.jsxs)("div",{className:"block",children:[b&&Object(u.jsx)(h,{}),p&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),c&&!b&&!p&&(null!==c&&void 0!==c&&c.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),c.map((function(e){return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){P(e.id)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}):Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})),!p&&(C?Object(u.jsx)(w,{handleAddComment:T,setHasLoadingError:v,postId:t.id}):Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){S(!0)},children:"Write a comment"}))]})]})})},C=function(e){var t=e.users,a=e.selectedUser,n=e.selectUser,c=Object(l.useState)(!1),s=Object(r.a)(c,2),i=s[0],o=s[1];return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:j()("dropdown",{"is-active":i}),onFocus:function(){return o(!0)},onBlur:function(){return o(!1)},onMouseDown:function(){return o(!i)},role:"button",tabIndex:0,children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[Object(u.jsx)("span",{children:a?a.name:"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),onMouseDown:function(t){!function(e,t){e.preventDefault(),n(t),o(!1)}(t,e)},children:e.name},e.id)}))})})]})},S=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(null),i=Object(r.a)(c,2),d=i[0],m=i[1],O=Object(l.useState)(null),x=Object(r.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(null),N=Object(r.a)(v,2),g=N[0],w=N[1],S=Object(l.useState)(!1),E=Object(r.a)(S,2),P=E[0],T=E[1],F=Object(l.useState)(!1),I=Object(r.a)(F,2),B=I[0],D=I[1],L=Object(l.useState)(!1),M=Object(r.a)(L,2),U=M[0],A=M[1],_=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("/users");case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn("Could not load users from server");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),D(!1),A(!1),e.next=6,y("/posts?userId=".concat(t));case 6:a=e.sent,p(a),A(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),D(!0);case 14:return e.prev=14,T(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){_()}),[]),Object(l.useEffect)((function(){d&&J(d.id)}),[d]),Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(C,{users:a,selectedUser:d,selectUser:m})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),P&&Object(u.jsx)(h,{}),B&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),U&&(null!==f&&void 0!==f&&f.length?Object(u.jsx)(b,{posts:f,selectedPost:g,selectPost:w}):Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}))]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":g}),children:Object(u.jsx)("div",{className:"tile is-child box is-success ",children:g&&Object(u.jsx)(k,{post:g})})})]})})})};c.a.render(Object(u.jsx)(S,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c9bca97c.chunk.js.map