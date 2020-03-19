(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{mlAC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Android/Lists-And-Adapters.md"}});var d={_frontmatter:o},s=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lists-and-adapters-in-android"},"Lists and Adapters in Android"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What is an adapter?")),Object(a.b)("p",null,"If we have our data and a list view, we can then use an adapter to adapt data for the view."),Object(a.b)("p",null,"Android provides a number of different adapters."),Object(a.b)("p",null,"Example with the ",Object(a.b)("inlineCode",{parentName:"p"},"ArrayAdapter"),", it is an extension of the ",Object(a.b)("inlineCode",{parentName:"p"},"BaseAdapter"),"."),Object(a.b)("p",null,"Declaring a string adapter would be ",Object(a.b)("inlineCode",{parentName:"p"},"ArrayAdapter<String>")," that can deal with generic types. We specify the type within the angle brackets."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-java"}),'package teamtreehouse.com.stormy.ui;\n\nimport ...\n\nstatic class DailyForecastActivity extends ListActivity {\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_daily_forecast);\n\n        String[] daysOfTheWeek = {\n            "Sunday",\n            "Monday",\n            ...\n        }\n        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,\n            daysOfTheWeek);\n\n        setListAdapter(adapter);\n    }\n}\n')))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Android/Lists-And-Adapters.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-android-lists-and-adapters-md-f308000e39644c2bad6f.js.map