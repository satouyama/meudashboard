(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{2108:function(t,i,o){"use strict";o.r(i);var e=o(54),l=o(55),a=o(57),n=o(56),d=o(58),h=o(66),s=o(0),w=o.n(s),g=o(908),c=o(2087),m=o(2095),u=o(68),p=o(70),r=o(67),f=o(1509),y=o.n(f),D=function(t){function i(t){var o;return Object(e.a)(this,i),(o=Object(a.a)(this,Object(n.a)(i).call(this,t))).toggle=o.toggle.bind(Object(h.a)(Object(h.a)(o))),o.state={showModal:!1},o}return Object(d.a)(i,t),Object(l.a)(i,[{key:"toggle",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"render",value:function(){return w.a.createElement(s.Fragment,null,w.a.createElement(g.a,{color:"primary",onClick:this.toggle},this.props.modal.type),w.a.createElement(y.a,{visible:this.state.showModal,closemodal:this.toggle,type:this.props.modal.type},w.a.createElement("h3",{className:"bg-primary text-white"},"".concat(this.props.modal.title," ").concat(this.props.modal.type)),w.a.createElement("div",{className:"contents"},w.a.createElement("p",null,this.props.modal.text),w.a.createElement("ul",null,w.a.createElement("li",null,w.a.createElement("strong",null,"Read:")," modal windows will probably tell you something important so don't forget to read what they say."),w.a.createElement("li",null,w.a.createElement("strong",null,"Look:")," a modal window enjoys a certain kind of attention; just look at it and appreciate its presence."),w.a.createElement("li",null,w.a.createElement("strong",null,"Close:")," click on the button below to close the modal.")))))}}]),i}(s.Component),M=function(t){function i(){var t,o;Object(e.a)(this,i);for(var l=arguments.length,d=new Array(l),h=0;h<l;h++)d[h]=arguments[h];return(o=Object(a.a)(this,(t=Object(n.a)(i)).call.apply(t,[this].concat(d)))).state={modal:[{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"pulse"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rubberBand"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"shake"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"swing"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"tada"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"wobble"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"jello"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounceIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounceInDown"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounceInLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounceInRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounceInUp"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"pulse"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"fadeIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"fadeInDown"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"fadeInLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"fadeInRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"fadeInUp"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"flip"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"flipInX"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"flipInY"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"lightSpeedIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rotateIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rotateInDownLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rotateInDownRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rotateInUpLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rotateInUpRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"slideInUp"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"slideInDown"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"slideInLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"slideInRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"zoomIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"zoomInDown"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"zoomInLeft"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"zoomInRight"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"zoomInUp"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"hinge"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"jackInTheBox"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"rollIn"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"bounce"},{title:"Modal Dialog",text:"This is a modal window. You can do the following things with it:",type:"flash"}]},o}return Object(d.a)(i,t),Object(l.a)(i,[{key:"render",value:function(){return w.a.createElement(c.a,null,w.a.createElement(m.a,{sm:"12"},w.a.createElement(u.a,null,w.a.createElement(p.a,null,w.a.createElement("h5",null,"Animeted Model")),w.a.createElement(r.a,null,w.a.createElement("div",{className:"main clearfix"},w.a.createElement("div",{className:"column"},this.state.modal.map(function(t,i){return w.a.createElement(D,{key:i,modal:t})})))))))}}]),i}(s.Component);i.default=M}}]);
//# sourceMappingURL=138.46d38ec2.chunk.js.map