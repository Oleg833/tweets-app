(self.webpackChunktweets_app=self.webpackChunktweets_app||[]).push([[22],{22:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(439),r=n(791),s=n(7),c=n.n(s),o="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",l="ContactForm_btn__wll+u",m=n(434),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},d=function(e){return e.contacts.items},f=function(e){return e.filter.filter},h=function(e){return e.contacts.isLoading},_=function(e){return e.contacts.error},b=n(97),v=n(184),x=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],s=t[1],c=(0,r.useState)(""),f=(0,a.Z)(c,2),h=f[0],_=f[1],x=(0,m.I0)(),y=(0,m.v9)(d),C=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?s(a):"number"===n&&_(a)},j=function(){s(""),_("")};return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:p(),name:n,number:h};y.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()||e.number===t.number}))?alert("".concat(n," is already in contacts")):x((0,b.uK)(t)),j()},className:o,children:[(0,v.jsxs)("label",{className:i,htmlFor:"",children:["Name",(0,v.jsx)("input",{className:u,type:"text",name:"name",value:n,onChange:C,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{className:i,htmlFor:"",children:["Number",(0,v.jsx)("input",{className:u,type:"tel",name:"number",value:h,onChange:C,placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})};x.prototypes={name:c().string.isRequired,number:c().number.isRequired,onSubmit:c().func.isRequired};var y=x,C="ContactList_contactList__UFVCg",j="ContactList_item__EZYHO",N="ContactList_value__cwfRG",g="ContactList_btn__6Piat",w=function(){var e=(0,m.I0)(),t=(0,m.v9)(f),n=(0,m.v9)(d).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,v.jsx)("ul",{className:C,children:n.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,v.jsxs)("li",{className:j,children:[(0,v.jsxs)("p",{className:N,children:[a,": ",r]}),(0,v.jsx)("button",{type:"button",onClick:function(){return e((0,b.GK)(n))},className:g,children:"Delete"})]},n)}))})},F="Filter_label__vEd1E",T="Filter_input__N7T3z",L=n(895),S=function(){var e=(0,m.I0)(),t=(0,m.v9)(f);return(0,v.jsxs)("label",{className:F,children:["Find Contact By Name",(0,v.jsx)("input",{className:T,type:"text",name:t,value:t,onChange:function(t){e((0,L.Tv)(t.target.value))},placeholder:"Find contacts by name"})]})},k="App_section__jwu5t",A="App_title__YS7Xx",O=n(642),P=function(){var e=(0,m.I0)(),t=(0,m.v9)(h),n=(0,m.v9)(_);return(0,r.useEffect)((function(){e((0,b.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Tweets Card"}),(0,v.jsxs)("section",{className:k,children:[t&&!n&&(0,v.jsx)(O.a,{}),(0,v.jsx)("h1",{className:A,children:"Phonebook"}),(0,v.jsx)(y,{}),(0,v.jsx)("h2",{className:A,children:"Contacts"}),(0,v.jsx)(S,{}),(0,v.jsx)(w,{})]})]})}},888:function(e,t,n){"use strict";var a=n(47);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,c){if(c!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=22.87ffeff8.chunk.js.map