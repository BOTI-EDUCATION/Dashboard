import{_ as z}from"./AppDateTimePicker.07e55e57.js";import{V as m}from"./vue3-apexcharts.common.6086bc96.js";import{bq as v,z as x,A as _,o as d,b as f,q as n,w as o,p as e,m as b,D as c,V as A}from"./index.822dd088.js";import{V as p,a as C,b as w,d as T,c as u}from"./VCard.6b3a5132.js";import{a as h,V as O}from"./VRow.75b352c3.js";import{d as V,V as S}from"./VBtn.e4d3d498.js";import{V as F}from"./VChip.2126f5c4.js";import"./VField.65a84282.js";import"./index.85e01d0e.js";import"./VInput.aaf7c006.js";import"./router.80150312.js";import"./VImg.ee928e60.js";import"./position.b45006bd.js";import"./easing.36b781ab.js";import"./vue.runtime.esm-bundler.2fadf847.js";import"./VAvatar.d8cd070d.js";const g=r=>{const t=`rgba(${v(r.colors["on-surface"])},${r.variables["medium-emphasis-opacity"]})`,s=`rgba(${v(r.colors["on-surface"])},${r.variables["disabled-opacity"]})`,a=`rgba(${v(String(r.variables["border-color"]))},${r.variables["border-opacity"]})`,l=`rgba(${v(r.colors["on-surface"])},${r.variables["high-emphasis-opacity"]})`;return{themeSecondaryTextColor:t,themeDisabledTextColor:s,themeBorderColor:a,themePrimaryTextColor:l}},M=r=>{const t={series1:"#ff9f43",series2:"#7367f0",series3:"#28c76f"},{themeSecondaryTextColor:s,themeBorderColor:a,themeDisabledTextColor:l}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1},zoom:{type:"xy",enabled:!0}},legend:{position:"top",horizontalAlign:"left",markers:{offsetX:-3},labels:{colors:s},itemMargin:{vertical:3,horizontal:10}},colors:[t.series1,t.series2,t.series3],grid:{borderColor:a,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:l}}},xaxis:{tickAmount:10,axisBorder:{show:!1},axisTicks:{color:a},crosshairs:{stroke:{color:a}},labels:{style:{colors:l},formatter:i=>parseFloat(i).toFixed(1)}}}},Y=r=>{const{themeBorderColor:t,themeDisabledTextColor:s}=g(r);return{chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43"],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43"],strokeColors:["#fff"]},grid:{padding:{top:-10},borderColor:t,xaxis:{lines:{show:!0}}},tooltip:{custom(a){return`<div class='bar-chart pa-2'>
          <span>${a.series[a.seriesIndex][a.dataPointIndex]}%</span>
        </div>`}},yaxis:{labels:{style:{colors:s}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:t},crosshairs:{stroke:{color:t}},labels:{style:{colors:s}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]}}},H=r=>{const{themeBorderColor:t,themeDisabledTextColor:s}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:["#00cfe8"],dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:8,barHeight:"30%",horizontal:!0,startingShape:"rounded"}},grid:{borderColor:t,xaxis:{lines:{show:!1}},padding:{top:-10}},yaxis:{labels:{style:{colors:s}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:t},categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"],labels:{style:{colors:s}}}}},R=r=>{const t={series1:"#28c76f",series2:"#ea5455"},{themeBorderColor:s,themeDisabledTextColor:a}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"40%"},candlestick:{colors:{upward:t.series1,downward:t.series2}}},grid:{padding:{top:-10},borderColor:s,xaxis:{lines:{show:!0}}},yaxis:{tooltip:{enabled:!0},crosshairs:{stroke:{color:s}},labels:{style:{colors:a}}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{color:s},crosshairs:{stroke:{color:s}},labels:{style:{colors:a}}}}},N=r=>{const t={series1:"#fdd835",series2:"#32baff",series3:"#00d4bd",series4:"#7367f0",series5:"#FFA1A1"},{themeSecondaryTextColor:s,themePrimaryTextColor:a}=g(r);return{stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"],legend:{show:!0,position:"bottom",labels:{colors:s},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[t.series1,t.series2,t.series4],plotOptions:{radialBar:{hollow:{size:"30%"},track:{margin:15,background:r.colors["grey-100"]},dataLabels:{name:{fontSize:"2rem"},value:{fontSize:"1rem",color:s},total:{show:!0,fontWeight:400,label:"Comments",fontSize:"1.125rem",color:a,formatter(l){const i=l.globals.seriesTotals.reduce((y,k)=>y+k,0)/l.globals.series.length;return i%1===0?`${i}%`:`${i.toFixed(2)}%`}}}}},grid:{padding:{top:-35,bottom:-30}}}},I=r=>{const t={series1:"#fdd835",series2:"#00d4bd",series3:"#826bf8",series4:"#32baff",series5:"#ffa1a1"},{themeSecondaryTextColor:s,themePrimaryTextColor:a}=g(r);return{stroke:{width:0},labels:["Operational","Networking","Hiring","R&D"],colors:[t.series1,t.series5,t.series3,t.series2],dataLabels:{enabled:!0,formatter:l=>`${parseInt(l,10)}%`},legend:{position:"bottom",markers:{offsetX:-3},labels:{colors:s},itemMargin:{vertical:3,horizontal:10}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.5rem"},value:{fontSize:"1.5rem",color:s,formatter:l=>`${parseInt(l,10)}`},total:{show:!0,fontSize:"1.5rem",label:"Operational",formatter:()=>"31%",color:a}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1rem"},value:{fontSize:"1rem"},total:{fontSize:"1rem"}}}}}}}]}},P=r=>{const t={series3:"#e0cffe",series2:"#b992fe",series1:"#ab7efd"},{themeSecondaryTextColor:s,themeBorderColor:a,themeDisabledTextColor:l}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{shared:!1},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{position:"top",horizontalAlign:"left",labels:{colors:s},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[t.series3,t.series2,t.series1],fill:{opacity:1,type:"solid"},grid:{show:!0,borderColor:a,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:l}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:a},crosshairs:{stroke:{color:a}},labels:{style:{colors:l}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"]}}},L=r=>{const t={series1:"#826af9",series2:"#d2b0ff",bg:"#f8d3ff"},{themeSecondaryTextColor:s,themeBorderColor:a,themeDisabledTextColor:l}=g(r);return{chart:{offsetX:-10,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},fill:{opacity:1},dataLabels:{enabled:!1},colors:[t.series1,t.series2],legend:{position:"top",horizontalAlign:"left",labels:{colors:s},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},stroke:{show:!0,colors:["transparent"]},plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarRadius:10,backgroundBarColors:[t.bg,t.bg,t.bg,t.bg,t.bg]}}},grid:{borderColor:a,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:l}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:a},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12"],crosshairs:{stroke:{color:a}},labels:{style:{colors:l}}},responsive:[{breakpoint:600,options:{plotOptions:{bar:{columnWidth:"35%"}}}}]}},X=r=>{const{themeSecondaryTextColor:t,themeDisabledTextColor:s}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{colors:[r.colors.surface]},legend:{position:"bottom",labels:{colors:t},markers:{offsetY:0,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{to:10,from:0,name:"0-10",color:"#b9b3f8"},{to:20,from:11,name:"10-20",color:"#aba4f6"},{to:30,from:21,name:"20-30",color:"#9d95f5"},{to:40,from:31,name:"30-40",color:"#8f85f3"},{to:50,from:41,name:"40-50",color:"#8176f2"},{to:60,from:51,name:"50-60",color:"#7367f0"}]}}},grid:{padding:{top:-20}},yaxis:{labels:{style:{colors:s}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}}}},W=r=>{const t={series1:"#9b88fa",series2:"#ffa1a1"},{themeSecondaryTextColor:s,themeBorderColor:a,themeDisabledTextColor:l}=g(r);return{chart:{parentHeightOffset:0,toolbar:{show:!1},dropShadow:{top:1,blur:8,left:1,opacity:.2,enabled:!1}},markers:{size:0},fill:{opacity:[1,.8]},colors:[t.series1,t.series2],stroke:{width:0,show:!1},legend:{labels:{colors:s},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{radar:{polygons:{strokeColors:a,connectorColors:a}}},grid:{show:!1,padding:{top:-20,bottom:-20}},yaxis:{show:!1},xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"],labels:{style:{colors:[l,l,l,l,l,l,l,l]}}}}},j={__name:"ApexChartAreaChart",setup(r){const t=x(),s=_(()=>P(t.current.value)),a=[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}];return(l,i)=>(d(),f(n(m),{type:"area",height:"400",options:n(s),series:a},null,8,["options"]))}},E={__name:"ApexChartBalance",setup(r){const t=x(),s=_(()=>Y(t.current.value)),a=[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}];return(l,i)=>(d(),f(n(m),{type:"line",height:"400",options:n(s),series:a},null,8,["options"]))}},U={__name:"ApexChartDailySalesStates",setup(r){const t=x(),s=_(()=>X(t.current.value)),a=(i,y)=>{let k=0;const $=[];for(;k<i;){const D=`w${(k+1).toString()}`,B=Math.floor(Math.random()*(y.max-y.min+1))+y.min;$.push({x:D,y:B}),k+=1}return $},l=[{name:"SUN",data:a(24,{min:0,max:60})},{name:"MON",data:a(24,{min:0,max:60})},{name:"TUE",data:a(24,{min:0,max:60})},{name:"WED",data:a(24,{min:0,max:60})},{name:"THU",data:a(24,{min:0,max:60})},{name:"FRI",data:a(24,{min:0,max:60})},{name:"SAT",data:a(24,{min:0,max:60})}];return(i,y)=>(d(),f(n(m),{type:"heatmap",height:"350",options:n(s),series:l},null,8,["options"]))}},q={__name:"ApexChartDataScience",setup(r){const t=x(),s=_(()=>L(t.current.value)),a=[{name:"Apple",data:[90,120,55,100,80,125,175,70,88]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62]}];return(l,i)=>(d(),f(n(m),{type:"bar",height:"400",options:n(s),series:a},null,8,["options"]))}},G={__name:"ApexChartExpenseRatio",setup(r){const t=x(),s=_(()=>I(t.current.value)),a=[85,16,50,50];return(l,i)=>(d(),f(n(m),{type:"donut",height:"410",options:n(s),series:a},null,8,["options"]))}},J={__name:"ApexChartHorizontalBar",setup(r){const t=x(),s=_(()=>H(t.current.value)),a=[{data:[700,350,480,600,210,550,150]}];return(l,i)=>(d(),f(n(m),{type:"bar",height:"400",options:n(s),series:a},null,8,["options"]))}},K={__name:"ApexChartMobileComparison",setup(r){const t=x(),s=[{name:"iPhone 12",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],a=_(()=>W(t.current.value));return(l,i)=>(d(),f(n(m),{type:"radar",height:"400",options:n(a),series:s},null,8,["options"]))}},Q={__name:"ApexChartNewTechnologiesData",setup(r){const t=x(),s=_(()=>M(t.current.value)),a=[{name:"Angular",data:[{x:5.4,y:170},{x:5.4,y:100},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}]},{name:"Vue",data:[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}]},{name:"React",data:[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}]}];return(l,i)=>(d(),f(n(m),{type:"scatter",height:"400",options:n(s),series:a},null,8,["options"]))}},Z={__name:"ApexChartStatistics",setup(r){const t=x(),s=_(()=>N(t.current.value)),a=[80,50,35];return(l,i)=>(d(),f(n(m),{type:"radialBar",height:"400",options:n(s),series:a},null,8,["options"]))}},ee={__name:"ApexChartStocksPrices",setup(r){const t=x(),s=_(()=>R(t.current.value)),a=[{data:[{x:`7/12/${new Date().getFullYear()}`,y:[150,170,50,100]},{x:`8/12/${new Date().getFullYear()}`,y:[200,400,170,330]},{x:`9/12/${new Date().getFullYear()}`,y:[330,340,250,280]},{x:`10/12/${new Date().getFullYear()}`,y:[300,330,200,320]},{x:`11/12/${new Date().getFullYear()}`,y:[320,450,280,350]},{x:`12/12/${new Date().getFullYear()}`,y:[300,350,80,250]},{x:`13/12/${new Date().getFullYear()}`,y:[200,330,170,300]},{x:`14/12/${new Date().getFullYear()}`,y:[200,220,70,130]},{x:`15/12/${new Date().getFullYear()}`,y:[220,270,180,250]},{x:`16/12/${new Date().getFullYear()}`,y:[200,250,80,100]},{x:`17/12/${new Date().getFullYear()}`,y:[150,170,50,120]},{x:`18/12/${new Date().getFullYear()}`,y:[110,450,10,420]},{x:`19/12/${new Date().getFullYear()}`,y:[400,480,300,320]},{x:`20/12/${new Date().getFullYear()}`,y:[380,480,350,450]}]}];return(l,i)=>(d(),f(n(m),{type:"candlestick",height:"385",options:n(s),series:a},null,8,["options"]))}};const te={class:"date-picker-wrapper"},ae={class:"date-picker-wrapper"},oe={class:"d-flex align-center"},se=b("h6",{class:"text-h6 me-3"}," $221,267 ",-1),re=b("span",null,"22%",-1),le={class:"date-picker-wrapper"},ne={class:"date-picker-wrapper"},ve={__name:"apex-chart",setup(r){return(t,s)=>{const a=z;return d(),f(O,{id:"apex-chart-wrapper"},{default:o(()=>[e(h,{cols:"12"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[b("div",te,[e(a,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",density:"compact",config:{position:"auto right"}})])]),default:o(()=>[e(w,null,{default:o(()=>[c("Area Chart")]),_:1}),e(T,null,{default:o(()=>[c("Commercial networks")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(j)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[b("div",ae,[e(a,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",density:"compact",config:{position:"auto right"}})])]),default:o(()=>[e(w,null,{default:o(()=>[c("Data Science")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(q)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[e(V,{density:"compact",color:"primary",variant:"outlined",divided:""},{default:o(()=>[e(S,null,{default:o(()=>[c("Daily")]),_:1}),e(S,null,{default:o(()=>[c("Monthly")]),_:1}),e(S,null,{default:o(()=>[c("Yearly")]),_:1})]),_:1})]),default:o(()=>[e(w,null,{default:o(()=>[c("New Technologies Data")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(Q)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[b("div",oe,[se,e(F,{label:"",color:"success",class:"font-weight-bold"},{default:o(()=>[e(A,{start:"",icon:"tabler-arrow-up",size:"15"}),re]),_:1})])]),default:o(()=>[e(w,null,{default:o(()=>[c("Balance")]),_:1}),e(T,null,{default:o(()=>[c("Commercial networks & enterprises")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(E)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[b("div",le,[e(a,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",density:"compact",config:{position:"auto right"}})])]),default:o(()=>[e(w,null,{default:o(()=>[c("Balance")]),_:1}),e(T,null,{default:o(()=>[c("$74,382.72")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(J)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,null,{default:o(()=>[e(C,{class:"d-flex flex-wrap justify-space-between gap-4"},{append:o(()=>[b("div",ne,[e(a,{"model-value":"2022-06-09","prepend-inner-icon":"tabler-calendar",density:"compact",config:{position:"auto right"}})])]),default:o(()=>[e(w,null,{default:o(()=>[c("Stocks Prices")]),_:1}),e(T,null,{default:o(()=>[c("$50,863.98")]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(ee)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Daily Sales States"},{default:o(()=>[e(u,null,{default:o(()=>[e(U)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Statistics"},{default:o(()=>[e(u,null,{default:o(()=>[e(Z)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Mobile Comparison"},{default:o(()=>[e(u,null,{default:o(()=>[e(K)]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Expense Ratio",subtitle:"Spending on various categories"},{default:o(()=>[e(u,null,{default:o(()=>[e(G)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ve as default};
