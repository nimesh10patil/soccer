(this.webpackJsonpsoccer=this.webpackJsonpsoccer||[]).push([[0],{65:function(e,a,t){},86:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),l=t(22),i=t.n(l),n=(t(65),t(33),t(66),t(67),t(7)),r=t.n(n),d=(t(86),t(54)),o=t(4),j=t(6),b=t(0);var p=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){return[61,39,78,140,135].forEach((function(e){var a={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v3/leagues",params:{id:e},headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};r.a.request(a).then((function(e){var a={league_id:e.data.response[0].league.id,name:e.data.response[0].league.name,flag:e.data.response[0].country.flag};s((function(e){return[].concat(Object(d.a)(e),[a])}))})).catch((function(e){console.error(e)}))})),function(){}}),[]),Object(b.jsx)(b.Fragment,{children:t?t.map((function(e){return Object(b.jsxs)(j.b,{className:"dropdown-item",to:"/leagues/".concat(e.league_id),children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{className:"flag",src:e.flag,alt:""})}),e.name,Object(b.jsx)("span",{})]},e.league_id)})):""})},h=t(5),m=t(114),x=t(121),u=t(118),O=t(119),f=t(120),v=t(117),g=Object(m.a)({root:{width:"calc(90%)",marginTop:"calc(2%)",justifyContent:"center"},content:{alignContent:"center",alignSelf:"center"},status:{backgroundColor:"#007BFF",width:"calc(60%)",height:"calc(80%)",alignSelf:"center"}});var N=function(e){var a,t,c,s=e.fixture,l=Object(v.a)(),i=g();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x.a,{children:Object(b.jsx)(u.a,{className:i.content,children:Object(b.jsxs)(O.a,{container:!0,direction:"row",justify:"flex-start",style:{marginLeft:2},wrap:!0,spacing:Object(f.a)(l.breakpoints.up("sm"))?2:5,children:[Object(b.jsx)(O.a,{item:!0,xs:2,className:i.status,children:(c=s.fixture.date,"".concat(new Date(c).getHours()%24,":").concat(0==new Date(c).getMinutes()?"00":new Date(c).getMinutes()%60))}),Object(b.jsx)(O.a,{item:!0,xs:10,sm:8,children:Object(b.jsxs)(O.a,{container:!0,direction:Object(f.a)(l.breakpoints.up("sm"))?"row":"column",justify:"center",spacing:2,children:[Object(b.jsx)(O.a,{item:!0,children:Object(b.jsxs)(O.a,{container:!0,spacing:2,justify:"flex-end",direction:Object(f.a)(l.breakpoints.up("sm"))?"row":"row-reverse",children:[Object(b.jsx)(O.a,{item:!0,children:s.teams.home.name}),Object(b.jsx)(O.a,{item:!0,children:"FT"==(null===(a=s.fixture.status)||void 0===a?void 0:a.short)?s.score.fulltime.home:Object(b.jsx)("img",{src:s.teams.home.logo,className:"flag",alt:""})})]})}),Object(f.a)(l.breakpoints.up("sm"))&&Object(b.jsx)(O.a,{item:!0,children:"-"}),Object(b.jsx)(O.a,{item:!0,children:Object(b.jsxs)(O.a,{container:!0,justify:"start",spacing:2,direction:"row",children:[Object(b.jsx)(O.a,{item:!0,children:"FT"==(null===(t=s.fixture.status)||void 0===t?void 0:t.short)?s.score.fulltime.away:Object(b.jsx)("img",{src:s.teams.away.logo,className:"flag",alt:""})}),Object(b.jsx)(O.a,{item:!0,children:s.teams.away.name})]})})]})})]})})})})},y=t(52),w=t.n(y),_=t(53),k=t.n(_);function T(e){console.log();var a=new Date(e),t=""+(a.getMonth()+1),c=""+a.getDate(),s=a.getFullYear();return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[s,t,c].join("-")}var F=Object(m.a)({date:{marginTop:20,backgroundColor:"#007BFF"}});var S=function(e){var a=e.league_Id,t=Object(c.useState)([]),s=Object(o.a)(t,2),l=s[0],i=s[1],n=Object(c.useState)(new Date),d=Object(o.a)(n,2),j=d[0],p=d[1],h=function(e){console.log(j);var a=new Date(j.getTime()+864e5*(e?1:-1));p(a),console.log(a)};Object(c.useEffect)((function(){return function(){var e={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v3/fixtures",params:{date:T(j),league:a,season:"2020"},headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};r.a.request(e).then((function(e){i(e.data.response)})).catch((function(e){console.error(e)}))}(),function(){}}),[a,j]);var m=F();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(O.a,{container:!0,justify:"center",spacing:2,alignItems:"center",children:[Object(b.jsx)(O.a,{item:!0,xs:12,md:10,children:Object(b.jsx)(x.a,{className:m.date,children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)("span",{children:Object(b.jsx)(w.a,{onClick:function(){return h(!1)}})}),Object(b.jsx)("span",{children:j.toString().slice(4,15)}),Object(b.jsx)("span",{children:Object(b.jsx)(k.a,{onClick:function(){return h(!0)}})})]})})}),Object(b.jsx)(O.a,{item:!0,xs:12,md:10,children:0==l.length?"No game scheduled for today : (":l.map((function(e){return Object(b.jsx)(N,{fixture:e},e.fixture.id)}))})]}),Object(b.jsx)("div",{})]})};var E=function(e){var a,t=e.league_Id,s=Object(c.useState)([]),l=Object(o.a)(s,2),i=l[0],n=l[1];return Object(c.useEffect)((function(){var e={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v3/standings",params:{season:"2020",league:t},headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};return r.a.request(e).then((function(e){console.log(e.data.response[0].league.standings[0]),n(e.data.response[0].league.standings[0])})).catch((function(e){console.error(e)})),function(){}}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"row justify-content-center text-primary",children:null===(a=i[0])||void 0===a?void 0:a.group}),Object(b.jsx)("div",{className:"row justify-content-center p-0 m-0",children:Object(b.jsx)("div",{className:"col-12 col-sm-10 p-0 m-0",children:Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table table-sm",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Rank"}),Object(b.jsx)("th",{scope:"col",children:"Team"}),Object(b.jsx)("th",{scope:"col",children:"P"}),Object(b.jsx)("th",{scope:"col",children:"W"}),Object(b.jsx)("th",{scope:"col",children:"L"}),Object(b.jsx)("th",{scope:"col",children:"F"}),Object(b.jsx)("th",{scope:"col",children:"A"}),Object(b.jsx)("th",{scope:"col",children:"GD"}),Object(b.jsx)("th",{scope:"col",children:"PTS"})]})}),Object(b.jsx)("tbody",{children:i?i.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.rank}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{className:"flag",src:e.team.logo,alt:""})}),Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/team/".concat(e.team.id),children:e.team.name})})]})}),Object(b.jsx)("td",{children:e.all.played}),Object(b.jsx)("td",{children:e.all.win}),Object(b.jsx)("td",{children:e.all.lose}),Object(b.jsx)("td",{children:e.all.goals.for}),Object(b.jsx)("td",{children:e.all.goals.against}),Object(b.jsx)("td",{children:e.goalsDiff}),Object(b.jsx)("td",{children:e.points})]},e.rank)})):"Loading ..."})]})})})})]})};var C=function(e){var a=e.league_Id,t=Object(c.useState)([]),s=Object(o.a)(t,2),l=s[0],i=s[1];return Object(c.useEffect)((function(){var e={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v3/players/topscorers",params:{league:a,season:"2020"},headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};return r.a.request(e).then((function(e){console.log(e.data.response),i(e.data.response)})).catch((function(e){console.error(e)})),function(){}}),[a]),Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"row mt-1"}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-lg-8",children:Object(b.jsxs)("table",{className:"table table-sm",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Rank"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Goals"}),Object(b.jsx)("th",{scope:"col",children:"Assists"}),Object(b.jsx)("th",{scope:"col",children:"Played"})]})}),Object(b.jsx)("tbody",{children:l?l.map((function(e,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:a+1}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{className:"flag",src:e.player.photo,alt:""})}),Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/player/".concat(e.player.id),children:e.player.firstname})})]})}),Object(b.jsx)("td",{children:e.statistics[0].goals.total}),Object(b.jsx)("td",{children:e.statistics[0].goals.assists?e.statistics[0].goals.assists:"0"}),Object(b.jsx)("td",{children:e.statistics[0].games.appearences})]},a)})):"Loading ..."})]})})})]})};var D=function(e){var a=Object(c.useState)(),t=Object(o.a)(a,2),s=t[0],l=t[1];return Object(c.useEffect)((function(){return l(e.match.params.league_id),console.log("league details",s),function(){}})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"row justify-content-start",children:Object(b.jsxs)("div",{className:"col-12 justify-content-center",children:[Object(b.jsx)("div",{className:"row justify-content-center m-0",children:Object(b.jsx)("div",{className:"col-12 ",children:Object(b.jsxs)("ul",{className:"nav  nav-pills justify-content-center ",id:"pills-tab",role:"tablist",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active",id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Standings"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Matches"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",href:"#pills-contact",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"Top Players"})})]})})}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[Object(b.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:s?Object(b.jsx)(E,{league_Id:s}):"Loading details"}),Object(b.jsx)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:s?Object(b.jsx)(S,{league_Id:s}):"Loading details"}),Object(b.jsx)("div",{className:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab",children:s?Object(b.jsx)(C,{league_Id:s}):"Loading details"})]})})})]})})})};var G=function(e){var a=e.Features_list;return Object(b.jsx)("div",{className:"container-fluid",children:a?a.map((function(e){return Object(b.jsxs)("div",{className:"d-flex flex-row mt-2",children:[Object(b.jsx)("div",{children:"Match Finished"==e.status?"FT":"".concat(e.event_date.slice(5,7),"/").concat(e.event_date.slice(8,10))}),Object(b.jsxs)("div",{className:"d-flex flex-xs-column ml-3",children:[Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/team/".concat(e.homeTeam.team_id),children:e.homeTeam.team_name})}),Object(b.jsx)("span",{className:"ml-2",children:"Match Finished"==e.status?e.goalsHomeTeam:Object(b.jsx)("img",{src:e.homeTeam.logo,className:"flag",alt:""})}),Object(b.jsx)("span",{className:"ml-2",children:"-"}),Object(b.jsx)("span",{className:"ml-2",children:"Match Finished"==e.status?e.goalsAwayTeam:Object(b.jsx)("img",{src:e.awayTeam.logo,className:"flag",alt:""})}),Object(b.jsx)("span",{className:"ml-2",children:Object(b.jsx)(j.b,{to:"/team/".concat(e.awayTeam.team_id),children:e.awayTeam.team_name})}),Object(b.jsx)("span",{className:"ml-1",children:Object(b.jsx)("img",{src:e.league.logo,className:"flag",alt:""})})]}),Object(b.jsx)("hr",{})]},e.fixture_id)})):""})};var L=function(e){var a=e.team_id,t=Object(c.useState)([]),s=Object(o.a)(t,2),l=s[0],i=s[1],n=Object(c.useState)([]),d=Object(o.a)(n,2),p=d[0],h=d[1],m=Object(c.useState)([]),x=Object(o.a)(m,2),u=x[0],O=x[1],f=Object(c.useState)([]),v=Object(o.a)(f,2),g=v[0],N=v[1],y=Object(c.useState)(),w=Object(o.a)(y,2),_=w[0],k=w[1];return Object(c.useEffect)((function(){var e={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v2/players/squad/".concat(a,"/2020-2021"),headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};r.a.request(e).then((function(e){console.log(e.data.api);var a=[],t=[],c=[],s=[];e.data.api.players.forEach((function(e){switch(e.position){case"Attacker":a.push(e);break;case"Defender":t.push(e);break;case"Midfielder":c.push(e);break;case"Goalkeeper":s.push(e)}})),i(a),O(t),h(c),N(s)})).catch((function(e){console.error(e)}));var t={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v2/coachs/team/".concat(a),headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};return r.a.request(t).then((function(e){k(e.data.api.coachs[0])})).catch((function(e){console.error(e)})),function(){}}),[a]),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)("div",{children:"Attackers"}),Object(b.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:l?l.map((function(e){return Object(b.jsx)("div",{className:"p-2",children:Object(b.jsx)(j.b,{to:"/player/".concat(e.player_id),children:e.player_name})},e.player_id)})):""}),Object(b.jsx)("div",{className:"p-2",children:"Midfielders"}),Object(b.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:p?p.map((function(e){return Object(b.jsx)("div",{className:"p-2",children:Object(b.jsx)(j.b,{to:"/player/".concat(e.player_id),children:e.player_name})},e.player_id)})):""}),Object(b.jsx)("div",{className:"p-2",children:"Defenders"}),Object(b.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:u?u.map((function(e){return Object(b.jsx)("div",{className:"p-2",children:Object(b.jsx)(j.b,{to:"/player/".concat(e.player_id),children:e.player_name})},e.player_id)})):""}),Object(b.jsx)("div",{className:"p-2",children:"Goal Keepers"}),Object(b.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:g?g.map((function(e){return Object(b.jsx)("div",{className:"p-2",children:Object(b.jsx)(j.b,{to:"/player/".concat(e.player_id),children:e.player_name})},e.player_id)})):""}),Object(b.jsxs)("div",{className:"p-2",children:["Manager : ",_?_.name:""]})]})})})};var M=function(e){var a=Object(c.useState)([]),t=Object(o.a)(a,2),s=t[0],l=t[1],i=Object(c.useState)([]),n=Object(o.a)(i,2),d=n[0],j=n[1];return Object(c.useEffect)((function(){var a=function(a){var t={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v2/fixtures/team/".concat(e.match.params.team_id,"/").concat(a,"/5"),headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};r.a.request(t).then((function(e){console.log(e.data.api.fixtures),"next"==a?l(e.data.api.fixtures):j(e.data.api.fixtures)})).catch((function(e){console.error(e)}))};return a("next"),a("last"),function(){}}),[e.match.params.team_id]),Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("ul",{className:"nav nav-pills mb-3 justify-content-center ",id:"pills-tab",role:"tablist",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active",id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Fixtures"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Squad"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",id:"pills-contact-tab","data-toggle":"pill",href:"#pills-contact",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"Top Players"})})]})})}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[Object(b.jsxs)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:[Object(b.jsx)(G,{Features_list:d}),Object(b.jsx)(G,{Features_list:s})]}),Object(b.jsx)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:Object(b.jsx)(L,{team_id:e.match.params.team_id})}),Object(b.jsx)("div",{className:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab",children:"top players"})]})})})]})};var q=function(e){var a=Object(c.useState)(),t=Object(o.a)(a,2),s=t[0],l=t[1];return Object(c.useEffect)((function(){var a={method:"GET",url:"https://api-football-v1.p.rapidapi.com/v3/players",params:{id:e.match.params.player_id,season:"2020"},headers:{"x-rapidapi-key":"43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}};return r.a.request(a).then((function(e){console.log(e.data.response[0]),l(e.data.response[0])})).catch((function(e){console.error(e)})),function(){}}),[]),Object(b.jsx)("div",{children:s?Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12  col-sm-4",children:Object(b.jsxs)("div",{className:"card border-primary profile-card",children:[Object(b.jsx)("div",{className:"profile-div border-primary",children:Object(b.jsx)("img",{className:"card-img-top profile",src:s.player.photo,alt:"Card image cap"})}),Object(b.jsxs)("div",{className:"card-body text-primary",children:[Object(b.jsx)("h5",{className:"card-title",children:s.player.name}),Object(b.jsxs)("p",{className:"card-text",children:["DOB: ",s.player.birth.date," (",s.player.birth.place," / ",s.player.birth.country," )"]}),Object(b.jsxs)("p",{className:"card-text",children:[s.statistics[0].games.position," : ",s.statistics[0].team.name,"/",s.player.nationality]})]})]})}),Object(b.jsx)("div",{className:"col-12 col-sm-8 ",children:Object(b.jsxs)("table",{className:"table table-sm table-primary",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"League"}),Object(b.jsx)("th",{children:"P"}),Object(b.jsx)("th",{children:"G"}),Object(b.jsx)("th",{children:"A"}),Object(b.jsx)("th",{children:"C"}),Object(b.jsx)("th",{children:"Y"}),Object(b.jsx)("th",{children:"R"})]})}),Object(b.jsx)("tbody",{children:s.statistics.map((function(e,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)("img",{src:e.league.flag?e.league.flag:e.league.logo,className:"flag",alt:""})," ",Object(b.jsx)("span",{children:e.league.name})]})}),Object(b.jsx)("td",{children:e.games.appearences?e.games.appearences:"0"}),Object(b.jsx)("td",{children:e.goals.total?e.goals.total:"0"}),Object(b.jsx)("td",{children:e.goals.assists?e.goals.assists:"0"}),Object(b.jsx)("td",{children:e.goals.conceded?e.goals.conceded:"0"}),Object(b.jsx)("td",{children:e.cards.yellow}),Object(b.jsx)("td",{children:e.cards.red})]},a)}))})]})})]}):"Loading . . ."})};var I=function(){return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsx)("div",{className:"col-12 m-0 p-0",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",style:{backgroundColor:"#007BFF"},children:[Object(b.jsx)(j.b,{className:"navbar-brand",to:"/",children:"My Football Arena"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(b.jsxs)("li",{className:"nav-item dropdown",children:[Object(b.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Leagues"}),Object(b.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(b.jsx)(p,{})})]})})})]})}),Object(b.jsxs)("div",{className:"col-12 m-0 p-0",children:[Object(b.jsx)(h.a,{path:"/leagues/:league_id",component:D}),Object(b.jsx)(h.a,{path:"/team/:team_id",component:M}),Object(b.jsx)(h.a,{path:"/player/:player_id",component:q})]})]})})})};var A=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(I,{})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,122)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),l(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),P()}},[[94,1,2]]]);
//# sourceMappingURL=main.9010dff2.chunk.js.map