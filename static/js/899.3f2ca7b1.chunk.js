"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{3899:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(9434),s=a(9581),r=function(e){return e.contacts},i=function(e){return e.filter},c=a(4190),l=a(142),o="ContactForm_form__dhl+T",u="ContactForm_submitButton__8wEUJ",d=a(184),m=function(){var e=(0,n.v9)(r).data,t=(0,n.I0)();return(0,d.jsxs)("form",{onSubmit:function(a){a.preventDefault();var n=a.target.elements.name.value,r=a.target.elements.number.value;if(e.some((function(e){return e.name===n})))return alert("".concat(n," is already in contacts")),a.target.elements.name.value="",void(a.target.elements.number.value="");t((0,s.G3)({name:n,number:r})),a.target.elements.name.value="",a.target.elements.number.value=""},className:o,children:[(0,d.jsx)(c.Z,{id:"outlined-basic",variant:"outlined",label:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)(c.Z,{id:"outlined-basic",variant:"outlined",label:" Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)(l.Z,{type:"submit",variant:"outlined",className:u,children:"Add contact"})]})},p=a(3433),h=a(2791),_=a(1523),f={contactListContainer:"ContactList_contactListContainer__Mco5m",contactList:"ContactList_contactList__UFVCg",contact:"ContactList_contact__0STHS",contactItem:"ContactList_contactItem__ppNQ5",deletButton:"ContactList_deletButton__WeU4f"},v=function(){var e=(0,n.v9)(r),t=(0,n.v9)(i),a=(0,n.I0)();(0,h.useEffect)((function(){a((0,s.m$)())}),[a]);return(0,d.jsxs)("div",{className:f.contactListContainer,children:[e.isLoading&&(0,d.jsx)(_.g4,{height:"60",width:"60",radius:"9",color:"#0000ff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),e.error&&(0,d.jsx)("p",{children:"Oops, something wrong"}),e.data&&(0,d.jsx)("ul",{className:f.contactList,children:(0,p.Z)(e.data).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,d.jsxs)("li",{className:f.contact,children:[(0,d.jsxs)("span",{className:f.contactItem,children:[" ",e.name,":"]})," ",(0,d.jsx)("span",{children:e.number}),(0,d.jsx)(l.Z,{className:f.deleteButton,size:"small",onClick:function(t){return a((0,s.ku)(e.id))},children:"Delete"})]},e.id)}))})]})},b=a(6895),x="Filter_label__vEd1E",j="Filter_wrapper__9Ksqy",C=function(){var e=(0,n.v9)(i),t=(0,n.I0)();return(0,d.jsx)("div",{className:j,children:(0,d.jsxs)("label",{className:x,children:["Find contacts by name",(0,d.jsx)(c.Z,{id:"outlined-basic",variant:"outlined",size:"small",type:"text",name:"filter",value:e,onChange:function(e){return t((0,b.M)(e.target.value))}})]})})};function g(){return(0,d.jsxs)("div",{style:{paddingTop:"100px"},className:"container",children:[(0,d.jsx)(m,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(C,{}),(0,d.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=899.3f2ca7b1.chunk.js.map