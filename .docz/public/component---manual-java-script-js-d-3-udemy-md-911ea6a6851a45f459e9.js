(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{"0tMz":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return i})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/JS-D3-Udemy.md"}});var d={_frontmatter:i},s=r.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(s,l({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"reading-the-d3-documentation"},"Reading the D3 Documentation"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"- [Reading the D3 Documentation](#reading-the-d3-documentation)\n- [map() and filter() methods](#map-and-filter-methods)\n- [d3 methods](#d3-methods)\n- [Programmatic SVGs](#programmatic-svgs)\n- [Scaling Data](#scaling-data)\n- [Styling with CSS](#styling-with-css)\n- [Adding Text to the chart](#adding-text-to-the-chart)\n- [Using SVG groups](#using-svg-groups)\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#section-4-making-a-complex-chart"}),"Section 4: Making a Complex Chart"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#working-with-arrays-of-objects"}),"Working with Arrays of Objects")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#creating-an-ordinal-scale"}),"Creating an Ordinal Scale")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#setting-colour-with-colour-scales"}),"Setting colour with colour scales")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#adding-x-and-y-axis"}),"Adding X and Y axis")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#flipping-the-axes"}),"Flipping the axes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#adding-gridlines"}),"Adding Gridlines")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#rotating-the-x-axis-titles"}),"Rotating the X axis titles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#adding-axis-labels"}),"Adding axis labels")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#updating-the-plot-function-with-best-practises"}),"Updating the plot function with best practises")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#secontion-5-making-the-chart-interactive"}),"Secontion 5: Making the Chart Interactive"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Documentation is a great link to bookmark")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"map-and-filter-methods"},"map() and filter() methods"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [123, 52, 46, 30, 4];\n\nconst results = data.filter((entry) => {\n    return entry > 50;\n});\n\nconst mapping = data.map((entry) => {\n    console.log(entry.key);\n    console.log(entry.value);\n});\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"d3-methods"},"d3 methods"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"const example = d3.min(data);\nconsole.log(example);       // values returned\n\nconst dataLoHiValue = d3.extent(data);  // return min/max as array\n\nvar dictMinValue = d3.min(dounts, (d, i) {\n    return d.value;\n});\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"programmatic-svgs"},"Programmatic SVGs"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [132,71,337,93,78,43,20,16,30,8,17,21];\nlet svg = d3.select('body').append('svg')\n                .attr('id', 'chart')\n                .attr('height', 450)\n                .attr('width', 800);\n\n// creating the bars\n// vertical bar graph\nsvg.selectAll('.bar')\n    .data(data)\n    .enter()                // enter phase\n    .append('rect')\n    .attr('class', 'bar')   // for future selections\n    .attr('x', 0)\n    .attr('y', (d i) => {\n        return i * 20;\n    })\n    .attr('width', (d, i) => {\n        return d;\n    })\n    .attr('height', 19);\n")),Object(a.b)("h2",{id:"scaling-data"},"Scaling Data"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Creating scaling functions for both x and y.")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21];\nlet w = 800;\nlet h = 450;\nlet x = d3.scale\n    .linear()\n    .domain([0, d3.max(data)])\n    .range([0, w]);\nlet y = d3.scale\n    .linear()\n    .domain([0, data.length])\n    .range([0, h]);\n\nlet svg = d3\n    .select('body')\n    .append('svg')\n    .attr('id', 'chart')\n    .attr('height', h)\n    .attr('width', w);\n\n// creating the bars\n// vertical bar graph\nsvg\n    .selectAll('.bar')\n    .data(data)\n    .enter() // enter phase\n    .append('rect')\n    .attr('class', 'bar') // for future selections\n    .attr('x', 0)\n    .attr('y', (d, i) => {\n        return y(i);\n    })\n    .attr('width', (d, i) => {\n        return x(d); // x() does the scaling\n    })\n    .attr('height', (d, i) => {\n        return y(1) - 1;\n    });\n")),Object(a.b)("h2",{id:"styling-with-css"},"Styling with CSS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Getting rid of the aliasing")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-css"}),".bar {\n    fill: purple;\n}\n")),Object(a.b)("p",null,"Not that ",Object(a.b)("inlineCode",{parentName:"p"},"attr('class', 'bar')")," will manually reset the class value, so you can also use ",Object(a.b)("inlineCode",{parentName:"p"},".classed('bar', true)")," - true to add the class, false to remove."),Object(a.b)("h2",{id:"adding-text-to-the-chart"},"Adding Text to the chart"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Creating scaling functions for both x and y.")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21];\nlet w = 800;\nlet h = 450;\nlet x = d3.scale\n    .linear()\n    .domain([0, d3.max(data)])\n    .range([0, w]);\nlet y = d3.scale\n    .linear()\n    .domain([0, data.length])\n    .range([0, h]);\n\nlet svg = d3\n    .select('body')\n    .append('svg')\n    .attr('id', 'chart')\n    .attr('height', h)\n    .attr('width', w);\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter() // enter phase\n        .append('rect')\n        .attr('class', 'bar') // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('width', (d, i) => {\n            return x(d); // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y(1) - 1;\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d); // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('dy', (d, i) => {\n            return y(1) / 1.5 + 2;\n        })\n        .text((d, i) => {\n            return d;\n        });\n}\n\n// first arg will be what is referenced by \"this\"\nplot.call(svg, {\n    data: data\n});\n")),Object(a.b)("h2",{id:"using-svg-groups"},"Using SVG groups"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SVG groups are like a div that are a convenience element to allow children to be moved and affected together.")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21];\nlet w = 800;\nlet h = 450;\nlet margin = {\n    top: 20,\n    bottom: 20,\n    left: 20,\n    right: 20\n};\n\nvar width = w - margin.left - margin.right;\nvar height = h - margin.top - margin.bottom;\n\nlet x = d3.scale\n    .linear()\n    .domain([0, d3.max(data)])\n    .range([0, width]);\nlet y = d3.scale\n    .linear()\n    .domain([0, data.length])\n    .range([0, height]);\n\nlet svg = d3\n    .select('body')\n    .append('svg')\n    .attr('id', 'chart')\n    .attr('height', h)\n    .attr('width', w);\n\nlet chart = svg\n    .append('g')\n    .classed('display', true)\n    .attr('transform', 'translate(20, 20)');\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter() // enter phase\n        .append('rect')\n        .attr('class', 'bar') // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('width', (d, i) => {\n            return x(d); // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y(1) - 1;\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d); // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('dy', (d, i) => {\n            return y(1) / 1.5 + 2;\n        })\n        .text((d, i) => {\n            return d;\n        });\n}\n\n// first arg will be what is referenced by \"this\"\nplot.call(chart, {\n    data: data\n});\n")),Object(a.b)("hr",null),Object(a.b)("h1",{id:"section-4-making-a-complex-chart"},"Section 4: Making a Complex Chart"),Object(a.b)("h2",{id:"working-with-arrays-of-objects"},"Working with Arrays of Objects"),Object(a.b)("p",null,"If working with a dict, we need an accessor function!"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"var data = [\n    { key: 'Glazed', value: 132 },\n    { key: 'Jelly', value: 71 },\n    { key: 'Holes', value: 337 },\n    { key: 'Sprinkles', value: 93 },\n    { key: 'Crumb', value: 78 },\n    { key: 'Chocolate', value: 43 },\n    { key: 'Coconut', value: 20 },\n    { key: 'Cream', value: 16 },\n    { key: 'Cruller', value: 30 },\n    { key: 'Éclair', value: 8 },\n    { key: 'Fritter', value: 17 },\n    { key: 'Bearclaw', value: 21 }\n];\n\nlet w = 800;\nlet h = 450;\nlet margin = {\n    top: 20,\n    bottom: 20,\n    left: 20,\n    right: 20\n};\n\nvar width = w - margin.left - margin.right;\nvar height = h - margin.top - margin.bottom;\n\nlet x = d3.scale\n    .linear()\n    .domain([\n        0,\n        d3.max(data, (d) => {\n            return d.value;\n        })\n    ])\n    .range([0, width]);\n\nlet y = d3.scale\n    .linear()\n    .domain([0, data.length])\n    .range([0, height]);\n\nlet svg = d3\n    .select('body')\n    .append('svg')\n    .attr('width', 800)\n    .attr('height', 420)\n    .attr('id', 'chart');\nlet chart = svg\n    .append('g')\n    .classed('display', true)\n    .attr('transform', 'translate(20, 20)');\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter() // enter phase\n        .append('rect')\n        .attr('class', 'bar') // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('width', (d, i) => {\n            return x(d.value); // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y(1) - 1;\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d.value); // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(i);\n        })\n        .attr('dy', (d, i) => {\n            return y(1) / 1.5 + 2;\n        })\n        .text((d, i) => {\n            return d.value;\n        });\n}\n\nplot.call(chart, {\n    data: data\n});\n")),Object(a.b)("h2",{id:"creating-an-ordinal-scale"},"Creating an Ordinal Scale"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"var data = [\n    {key: \"Glazed\",     value: 132},\n    {key: \"Jelly\",      value: 71},\n    {key: \"Holes\",      value: 337},\n    {key: \"Sprinkles\",  value: 93},\n    {key: \"Crumb\",      value: 78},\n    {key: \"Chocolate\",  value: 43},\n    {key: \"Coconut\",    value: 20},\n    {key: \"Cream\",      value: 16},\n    {key: \"Cruller\",    value: 30},\n    {key: \"Éclair\",     value: 8},\n    {key: \"Fritter\",    value: 17},\n    {key: \"Bearclaw\",   value: 21}\n];\n\nlet w = 800;\nlet h = 450;\nlet margin = {\n    top: 20,\n    bottom: 20,\n    left: 20,\n    right: 20\n};\n\nvar width = w - margin.left - margin.right;\nvar height = h - margin.top - margin.bottom;\n\nlet x = d3.scale.linear()\n        .domain([0, d3.max(data, (d) => {\n            return d.value;\n    })])\n        .range([0, width]);\nvar y = d3.scale.ordinal()          // need distinct values eg keys\n        .domain(data.map((entry) => {\n            return entry.key;\n        }))\n        .rangeBands([0, height]);   // used for distinct values\n\nlet svg = d3.select('body').append('svg')\n                        .attr('width', 800)\n            .attr('height', 420)\n            .attr('id', 'chart');\nlet chart = svg.append('g')\n                .classed('display', true)\n        .attr('transform', 'translate(20, 20)');\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter()                // enter phase\n        .append('rect')\n        .attr('class', 'bar')   // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('width', (d, i) => {\n            return x(d.value);      // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y.rangeBand() - 1;\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d.value);          // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('dy', (d, i) => {\n            return y.rangeBand()/1.5+2;\n        })\n        .text((d, i) => {\n            return d.value;\n        });\n}\n\nplot.call(chart, {\n    data: data\n});\n")),Object(a.b)("h2",{id:"setting-colour-with-colour-scales"},"Setting colour with colour scales"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"var data = [\n    {key: \"Glazed\",     value: 132},\n    {key: \"Jelly\",      value: 71},\n    {key: \"Holes\",      value: 337},\n    {key: \"Sprinkles\",  value: 93},\n    {key: \"Crumb\",      value: 78},\n    {key: \"Chocolate\",  value: 43},\n    {key: \"Coconut\",    value: 20},\n    {key: \"Cream\",      value: 16},\n    {key: \"Cruller\",    value: 30},\n    {key: \"Éclair\",     value: 8},\n    {key: \"Fritter\",    value: 17},\n    {key: \"Bearclaw\",   value: 21}\n];\n\nlet w = 800;\nlet h = 450;\nlet margin = {\n    top: 20,\n    bottom: 20,\n    left: 20,\n    right: 20\n};\n\nvar width = w - margin.left - margin.right;\nvar height = h - margin.top - margin.bottom;\n\nlet x = d3.scale.linear()\n        .domain([0, d3.max(data, (d) => {\n            return d.value;\n    })])\n        .range([0, width]);\nvar y = d3.scale.ordinal()          // need distinct values eg keys\n        .domain(data.map((entry) => {\n            return entry.key;\n        }))\n        .rangeBands([0, height]);   // used for distinct values\n\n// alter colours using linear scale\nlet linearColorScale = d3.scale.linear()\n                        .domain([0, data.length])\n                        .range(['#572500', '#F68026']);\n\n// ordinal for distinct colours\nlet ordinalColorScale = d3.scale.category20();\n\nlet svg = d3.select('body').append('svg')\n                        .attr('width', 800)\n            .attr('height', 420)\n            .attr('id', 'chart');\nlet chart = svg.append('g')\n                .classed('display', true)\n        .attr('transform', 'translate(20, 20)');\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter()                // enter phase\n        .append('rect')\n        .attr('class', 'bar')   // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('width', (d, i) => {\n            return x(d.value);      // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y.rangeBand() - 1;\n        })\n        .style('fill', (d, i) => {\n            return linearColorScale(i);\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d.value);          // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('dy', (d, i) => {\n            return y.rangeBand()/1.5+2;\n        })\n        .text((d, i) => {\n            return d.value;\n        });\n}\n\nplot.call(chart, {\n    data: data\n});\n")),Object(a.b)("h2",{id:"adding-x-and-y-axis"},"Adding X and Y axis"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"// after the colour scales\n\nlet xAxis = d3.svg.axis()           // svg portion of the d3 library\n                .scale(x)\n                .orient('bottom');\n\nlet yAxis = d3.svg.axis()\n                .scale(y)\n                .orient('left');\n\n...\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter()                // enter phase\n        .append('rect')\n        .attr('class', 'bar')   // for future selections\n        .attr('x', 0)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('width', (d, i) => {\n            return x(d.value);      // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return y.rangeBand() - 1;\n        })\n        .style('fill', (d, i) => {\n            return linearColorScale(i);\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d.value);          // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('dy', (d, i) => {\n            return y.rangeBand()/1.5+2;\n        })\n        .text((d, i) => {\n            return d.value;\n        });\n    this.append('g')\n            .classed('x axis', true)\n            .attr('transform', 'translate(' + 0  + ', ' + height  + ')')\n            .call(xAxis);\n    this.append('g')\n            .classed('y axis', true)\n            .attr('transform', 'translate(0, 0)')\n            .call(yAxis);\n}\n")),Object(a.b)("h2",{id:"flipping-the-axes"},"Flipping the axes"),Object(a.b)("p",null,"How to create a column chart?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"height needs to take an offset"),Object(a.b)("li",{parentName:"ul"},"other values essentially invert"),Object(a.b)("li",{parentName:"ul"},"text anchor will be ",Object(a.b)("inlineCode",{parentName:"li"},"middle")," in css")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"var data = [\n    {key: \"Glazed\",     value: 132},\n    {key: \"Jelly\",      value: 71},\n    {key: \"Holes\",      value: 337},\n    {key: \"Sprinkles\",  value: 93},\n    {key: \"Crumb\",      value: 78},\n    {key: \"Chocolate\",  value: 43},\n    {key: \"Coconut\",    value: 20},\n    {key: \"Cream\",      value: 16},\n    {key: \"Cruller\",    value: 30},\n    {key: \"Éclair\",     value: 8},\n    {key: \"Fritter\",    value: 17},\n    {key: \"Bearclaw\",   value: 21}\n];\n\nlet w = 800;\nlet h = 450;\nlet margin = {\n    top: 20,\n    bottom: 20,\n    left: 20,\n    right: 20\n};\n\nvar width = w - margin.left - margin.right;\nvar height = h - margin.top - margin.bottom;\n\nlet x = d3.scale.ordinal()          // need distinct values eg keys\n        .domain(data.map((entry) => {\n            return entry.key;\n        }))\n        .rangeBands([0, height]);   // used for distinct values\n\nlet y = d3.scale.linear()\n        .domain([0, d3.max(data, (d) => {\n            return d.value;\n        })])\n        .range([height, 0]);    // IMPORTANT CHANGE FROM [0, width]\n\n// alter colours using linear scale\nlet linearColorScale = d3.scale.linear()\n                        .domain([0, data.length])\n                        .range(['#572500', '#F68026']);\n\n// ordinal for distinct colours\nlet ordinalColorScale = d3.scale.category20();\n\nlet svg = d3.select('body').append('svg')\n                        .attr('width', 800)\n            .attr('height', 420)\n            .attr('id', 'chart');\nlet chart = svg.append('g')\n                .classed('display', true)\n        .attr('transform', 'translate(20, 20)');\n\nfunction plot(params) {\n    // creating the bars\n    // vertical bar graph\n    this.selectAll('.bar')\n        .data(params.data)\n        .enter()                // enter phase\n        .append('rect')\n        .attr('class', 'bar')   // for future selections\n        .attr('x', (d, i) => {\n            return x(d.key);\n        })\n        .attr('y', (d, i) => {\n            return y(d.value);\n        })\n        .attr('width', (d, i) => {\n            return x(d.value);      // x() does the scaling\n        })\n        .attr('height', (d, i) => {\n            return x.rangeBand();\n        })\n        .style('fill', (d, i) => {\n            return linearColorScale(i);\n        });\n\n    this.selectAll('.bar-label')\n        .data(params.data)\n        .enter()\n        .append('text')\n        .classed('bar-label', true)\n        .attr('x', (d, i) => {\n            return x(d.value);          // use css to change the anchor\n        })\n        .attr('dx', -4)\n        .attr('y', (d, i) => {\n            return y(d.key);\n        })\n        .attr('dy', (d, i) => {\n            return y.rangeBand()/1.5+2;\n        })\n        .text((d, i) => {\n            return d.value;\n        });\n\n        this.append('g')\n            .classed('x axis', true)\n            .attr('transform', 'translate(' + 0  + ', ' + height  + ')')\n            .call(xAxis);\n        this.append('g')\n            .classed('y axis', true)\n            .attr('transform', 'translate(0, 0)')\n            .call(yAxis);\n}\n\nplot.call(chart, {\n    data: data\n});\n")),Object(a.b)("h2",{id:"adding-gridlines"},"Adding Gridlines"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"var yGridlines = d3.svg.axis()              // create another \"axis\"\n                    .scale(y)\n                    .tickSize(-width, 0, 0)             // used to adjust the axis\n                    .tickFormat('')\n                    .orient('left');\n\n// add these grid lines with the call function at the start of the plot function\n")),Object(a.b)("p",null,"The grid lines also need to be styled! Hit up the CSS file to do this."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),".gridline path,\n.gridline line {\n    fill: none;\n    color: blue;\n    shape-rendering: crispEdges;\n}\n")),Object(a.b)("h2",{id:"rotating-the-x-axis-titles"},"Rotating the X axis titles"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"...\nthis.append('g')\n            .classed('x axis', true)\n            .attr('transform', 'translate(' + 0  + ', ' + height  + ')')\n            .call(xAxis)\n                .selectAll('text')\n                    .style('text-anchor', 'end')\n                    .attr('dx', -8)\n                    .attr('dy', 8)\n                    .attr('transform', 'translate(0,0), rotate(-45)');\nthis.append('g')\n            .classed('y axis', true)\n            .attr('transform', 'translate(0, 0)')\n            .call(yAxis);\n...\n")),Object(a.b)("h2",{id:"adding-axis-labels"},"Adding axis labels"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"// within the plot function at the bottom\n\nthis.select('.y.axis')\n    .append('text')\n    .attr('x', 0)\n    .attr('y', 0)\n    .style('text-anchor', 'middle')\n    .attr('transform', 'translate(-50, ' + height / 2 + ') rotate(-90)')\n    .text('Units sold');\n\nthis.select('.x.axis')\n    .append('text')\n    .attr('x', 0)\n    .attr('y', 0)\n    .style('text-anchor', 'middle')\n    .attr('transform', 'translate(' + width / 2 + ', 80) rotate(-90)')\n    .text('Donut Type');\n")),Object(a.b)("h2",{id:"updating-the-plot-function-with-best-practises"},"Updating the plot function with best practises"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add new parameter entries.")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"plot.call(chart, {\n    data: data,\n    axis: {\n        x: xAxis,\n        y: yAxis\n    },\n    gridlines: yGridlines\n}\n})\n")),Object(a.b)("hr",null),Object(a.b)("h1",{id:"secontion-5-making-the-chart-interactive"},"Secontion 5: Making the Chart Interactive"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sorting data using things like buttons."),Object(a.b)("li",{parentName:"ul"},'Similary to jquery, with have d3 methods like "on"'),Object(a.b)("li",{parentName:"ul"},"Using the '+' prefix will convert the string to a number"),Object(a.b)("li",{parentName:"ul"},"To show updated ",Object(a.b)("inlineCode",{parentName:"li"},"data")," changes, we need to know about the phases // enter(), update(), exit()"),Object(a.b)("li",{parentName:"ul"},"we ensure this can happen by splitting the selectAll function where the updated phase is in the latter part - then in the exit phase we get rid of any elements that are no longer bound!"),Object(a.b)("li",{parentName:"ul"},"you must update the domains when you update data!")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"// do for all elements we wish to remove\nthis.selectAll('.bar')\n    .data(params.data)\n    .exit()\n    .remove();\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/JS-D3-Udemy.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-js-d-3-udemy-md-911ea6a6851a45f459e9.js.map