"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[931],{431:function(e,r,a){a.d(r,{D:function(){return o}});var n=a(890),s=a(184),o=function(e){var r=e.text;return(0,s.jsx)(n.Z,{align:"center",variant:"h3",component:"h1",gutterBottom:!0,children:r})}},8451:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var n=a(5705),s=a(1614),o=a(3767),i=a(4741),t=a(6151),d=a(1089),l=a(6871),m=a(5048),u=a(2025),c=a(184),h=function(){var e=(0,m.I0)(),r=(0,l.s0)(),a=d.Ry().shape({name:d.Z_().max(30,"The name is too long, please enter another name.").required("Required"),email:d.Z_().email("Incorrect E-Mail Address").required("Required"),password:d.Z_().min(6,"Minimum 6 characters required").required("Required"),confirmPassword:d.Z_().oneOf([d.iH("password")],"Passwords must match").required("Required")});return(0,c.jsx)(s.Z,{maxWidth:"sm",children:(0,c.jsx)(n.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},onSubmit:function(a,n){var s=a.name,o=a.email,i=a.password;n.resetForm(),e(u.r5.register({name:s,email:o,password:i})),r("/login")},validateOnBlur:!0,validationSchema:a,validateOnMount:!0,children:function(e){var r=e.values,a=e.errors,s=e.touched,d=e.handleChange,l=e.handleBlur,m=e.handleSubmit,u=e.isValid;return(0,c.jsx)(n.l0,{onSubmit:m,children:(0,c.jsxs)(o.Z,{spacing:2,children:[(0,c.jsx)(i.Z,{label:"Name",type:"name",name:"name",error:a.name&&s.name,onChange:d,onBlur:l,value:r.name}),a.name&&s.name&&(0,c.jsx)("p",{children:a.name}),(0,c.jsx)(i.Z,{label:"Email",type:"email",name:"email",error:a.email&&s.email,onChange:d,onBlur:l,value:r.email}),a.email&&s.email&&(0,c.jsx)("p",{children:a.email}),(0,c.jsx)(i.Z,{label:"Password",type:"password",name:"password",error:a.password&&s.password,onChange:d,onBlur:l,value:r.password}),a.password&&s.password&&(0,c.jsx)("p",{children:a.password}),(0,c.jsx)(i.Z,{label:"Re-enter password",type:"password",name:"confirmPassword",error:a.confirmPassword&&s.confirmPassword,onChange:d,onBlur:l,value:r.confirmPassword}),a.confirmPassword&&s.confirmPassword&&(0,c.jsx)("p",{children:a.confirmPassword}),(0,c.jsx)(t.Z,{variant:"contained",disabled:!u,type:"submit",children:"Continue"})]})})}})})},p=a(431);function w(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.D,{text:"Create account"}),(0,c.jsx)(h,{})]})}}}]);
//# sourceMappingURL=register-view.d2da8f35.chunk.js.map