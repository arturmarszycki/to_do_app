(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),o=(a(14),a(8)),c=a(1),s=a(2),d=a(4),m=a(3),u=a(5),h=(a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",important:!1,date:a.minDate,valid:!0},a.handleText=function(e){a.setState({text:e.target.value})},a.handleImportant=function(e){a.setState({important:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.important,l=e.date;t.length>2?(a.props.add(t,n,l),a.setState({text:"",important:!1,date:a.minDate,valid:!0})):a.setState({valid:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Number(this.minDate.slice(0,4))+1;return e=String(e+"-12-31"),l.a.createElement("div",{className:"add-task"},l.a.createElement("h3",null,"Dodaj zadanie"),l.a.createElement("div",{className:this.state.valid?"add-part":"add-part validate"},l.a.createElement("input",{type:"text",placeholder:"dodaj zadanie",id:"task",onChange:this.handleText,value:this.state.text}),l.a.createElement("input",{type:"checkbox",id:"important",onChange:this.handleImportant,checked:this.state.important}),l.a.createElement("label",{htmlFor:"important"},"Priorytet"),l.a.createElement("span",{className:"validate_msg"},"minimalna ilo\u015b\u0107 znak\xf3w: 3")),l.a.createElement("div",{className:"add-part"},l.a.createElement("label",{htmlFor:"date"},"Do kiedy zrobi\u0107"),l.a.createElement("input",{type:"date",id:"date",min:this.minDate,max:e,onChange:this.handleDate,value:this.state.date})),l.a.createElement("button",{className:"btn_add_task",onClick:this.handleClick},"Dodaj"),l.a.createElement("hr",null))}}]),t}(l.a.Component)),v=function(e){var t=e.task.id;return l.a.createElement("tr",null,l.a.createElement("td",null,e.task.begin),l.a.createElement("td",{className:e.task.important?"important":""},e.task.name),l.a.createElement("td",null,e.task.deadline),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.done(t)},className:"btn_done"},"Zrobione"),l.a.createElement("button",{onClick:function(){return e.showModal(t)},className:"btn_remove"},"Usu\u0144")))},k=function(e){var t=e.tasks.filter((function(e){return e.active}));t.length>1&&t.sort((function(e,t){return(e=e.name.toLowerCase())<(t=t.name.toLowerCase())?-1:e>t?1:0}));var a=t.map((function(t){return l.a.createElement(v,{key:t.id,task:t,done:e.done,showModal:e.showModal})}));return l.a.createElement("div",{className:"tasks-current"},l.a.createElement("h3",null,"Zadania do zrobienia"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Data dodania"),l.a.createElement("th",null,"Zadanie"),l.a.createElement("th",null,"Deadline"),l.a.createElement("th",null,"Opcje"))),l.a.createElement("tbody",null,a)),l.a.createElement("hr",null))},f=function(e){var t=e.task.id;return l.a.createElement("tr",null,l.a.createElement("td",null,e.task.name),l.a.createElement("td",null,l.a.createElement("i",null,"zako\u0144czone ",e.task.finish.toLocaleString())),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.remove(t)},className:"btn_remove"},"Usu\u0144")))},E=function(e){var t=e.tasks.filter((function(e){return e.finish}));t.length>1&&t.sort((function(e,t){return t.finish-e.finish}));var a=t.map((function(t){return l.a.createElement(f,{key:t.id,task:t,remove:e.remove})}));return l.a.createElement("div",{className:"tasks-done"},l.a.createElement("h3",null,"Zadania wykonane ",l.a.createElement("em",null,"(",t.length,")")),l.a.createElement("table",null,l.a.createElement("tbody",null,a.slice(0,3))))},p=function(){return l.a.createElement("p",{className:"empty-info"},"Aktualnie nie ma \u017cadnych zada\u0144 do zrobienia")},b=function(e){var t=e.modal.number;return l.a.createElement("div",{className:"modal-container",onClick:e.hideModal},l.a.createElement("div",{className:"modal-remove",onClick:function(e){return e.stopPropagation()}},l.a.createElement("p",null,"Czy na pewno usun\u0105\u0107 to zadanie?"),l.a.createElement("button",{className:"btn_cancel",onClick:e.hideModal},"Anuluj"),l.a.createElement("button",{className:"btn_remove",onClick:function(){return e.remove(t)}},"Usu\u0144")))},g=(a(16),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[{id:0,name:"Przyk\u0142adowe zadanie 1",begin:"2019.09.25, 12:20:43",deadline:"2019-12-01",finish:null,important:!1,active:!0},{id:1,name:"Przyk\u0142adowe zadanie 2",begin:"2019.09.20, 15:34:55",deadline:"2020-11-01",finish:null,important:!1,active:!0},{id:2,name:"Przyk\u0142adowe zadanie 3",begin:"2019.09.01, 21:02:22",deadline:"2021-05-01",finish:null,important:!0,active:!0},{id:3,name:"Przyk\u0142adowe zadanie 4",begin:"2019.06.05, 09:20:02",deadline:"2020-03-22",finish:null,important:!0,active:!0}],modal:{active:!1,number:null}},a.idCounter=a.state.tasks.length,a.handleDone=function(e){var t=a.state.tasks.map((function(t){return t.id===e&&(t.finish=new Date,t.active=!1),t}));a.setState({tasks:t})},a.handleRemove=function(e){var t=a.state.tasks.map((function(t){return t.id===e&&(t.active=!1,t.finish=null),t}));a.setState({tasks:t}),a.hideModal()},a.showModal=function(e){a.setState({modal:{active:!0,number:e}})},a.hideModal=function(){a.setState({modal:{active:!1}})},a.addTask=function(e,t,n){var l={id:a.idCounter,name:e,begin:(new Date).toLocaleString(),deadline:n,finish:null,important:t,active:!0};a.idCounter++;var i=[].concat(Object(o.a)(a.state.tasks),[l]);a.setState({tasks:i})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.modal,n=t.filter((function(e){return e.active}));return l.a.createElement(l.a.Fragment,null,a.active?l.a.createElement(b,{hideModal:this.hideModal,remove:this.handleRemove,modal:a}):"",l.a.createElement("div",{className:"container"},l.a.createElement(h,{add:this.addTask}),n.length?l.a.createElement(k,{tasks:t,done:this.handleDone,showModal:this.showModal}):l.a.createElement(p,null),l.a.createElement(E,{tasks:t,remove:this.handleRemove})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1cd2fb7d.chunk.js.map