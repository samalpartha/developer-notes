(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{NBbU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),l=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Twig/Twig-Cheat-Sheet.md"}});var o={_frontmatter:r},s=l.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"twig-cheat-sheet"},"TWIG CHEAT SHEET"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#twig-cheat-sheet"}),"TWIG CHEAT SHEET"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#web-synopsis"}),"Web Synopsis")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#attributes"}),"Attributes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#setting-variables"}),"Setting Variables")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#filters"}),"Filters")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#functions"}),"Functions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#named-arguments"}),"Named Arguments")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#control-flow-structure"}),"Control Flow Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#comments"}),"Comments")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#include"}),"Include")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#extends"}),"Extends")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#template-inheritance"}),"Template Inheritance")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#manual-escaping"}),"Manual Escaping")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#macros-add-in-if-you-think-it-is-relevant"}),"Macros (add in if you think it is relevant)"))))),Object(a.b)("p",null,"// references"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://twig.sensiolabs.org/doc/templates.html"}),"http://twig.sensiolabs.org/doc/templates.html")),Object(a.b)("p",null,"Ensure you have a highlighter tool."),Object(a.b)("h2",{id:"web-synopsis"},"Web Synopsis"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <title>My Webpage</title>\n    </head>\n    <body>\n        <ul id="navigation">\n        {% for item in navigation %}\n            <li><a href="{{ item.href }}">{{ item.caption }}</a></li>\n        {% endfor %}\n        </ul>\n\n        <h1>My Webpage</h1>\n        {{ a_variable }}\n    </body>\n</html>\n')),Object(a.b)("h2",{id:"attributes"},"Attributes"),Object(a.b)("p",null,"The application passes variables to the templates for manipulation in the template. Variables may have attributes or elements you can access, too. The visual representation of a variable depends heavily on the application providing it."),Object(a.b)("p",null,'You can use a dot (.) to access attributes of a variable (methods or properties of a PHP object, or items of a PHP array), or the so-called "subscript" syntax ([]):'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ foo.bar }}\n{{ foo['bar'] }}\n")),Object(a.b)("p",null,"When the attribute contains special characters (like - that would be interpreted as the minus operator), use the attribute function instead to access the variable attribute:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{# equivalent to the non-working foo.data-foo #}\n{{ attribute(foo, 'data-foo') }}\n")),Object(a.b)("h2",{id:"setting-variables"},"Setting Variables"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% set foo = 'foo' %}\n{% set foo = [1, 2] %}\n{% set foo = {'foo': 'bar'} %}\n")),Object(a.b)("h2",{id:"filters"},"Filters"),Object(a.b)("p",null,"Variables can be modified by filters. Filters are separated from the variable by a pipe symbol (|) and may have optional arguments in parentheses. Multiple filters can be chained. The output of one filter is applied to the next."),Object(a.b)("p",null,"The following example removes all HTML tags from the name and title-cases it:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ name|striptags|title }}\n")),Object(a.b)("p",null,"Filters that accept arguments have parentheses around the arguments. This example will join a list by commas:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ list|join(', ') }}\n")),Object(a.b)("p",null,"To apply a filter on a section of code, wrap it in the filter tag:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% filter upper %}\n    This text becomes uppercase\n{% endfilter %}\n")),Object(a.b)("p",null,"Go to the filters page to learn more about built-in filters."),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://twig.sensiolabs.org/doc/filters/index.html"}),"http://twig.sensiolabs.org/doc/filters/index.html")),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("p",null,"Functions can be called to generate content. Functions are called by their name followed by parentheses (()) and may have arguments."),Object(a.b)("p",null,"For instance, the range function returns a list containing an arithmetic progression of integers:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% for i in range(0, 3) %}\n    {{ i }},\n{% endfor %}\n")),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://twig.sensiolabs.org/doc/functions/index.html"}),"http://twig.sensiolabs.org/doc/functions/index.html")),Object(a.b)("h2",{id:"named-arguments"},"Named Arguments"),Object(a.b)("p",null,"New in version 1.12: Support for named arguments was added in Twig 1.12."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% for i in range(low=1, high=10, step=2) %}\n    {{ i }},\n{% endfor %}\n")),Object(a.b)("p",null,"Using named arguments makes your templates more explicit about the meaning of the values you pass as arguments:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ data|convert_encoding('UTF-8', 'iso-2022-jp') }}\n\n{# versus #}\n\n{{ data|convert_encoding(from='iso-2022-jp', to='UTF-8') }}\n")),Object(a.b)("p",null,"Named arguments also allow you to skip some arguments for which you don't want to change the default value:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{# the first argument is the date format, which defaults to the global date format if null is passed #}\n{{ "now"|date(null, "Europe/Paris") }}\n\n{# or skip the format value by using a named argument for the time zone #}\n{{ "now"|date(timezone="Europe/Paris") }}\n')),Object(a.b)("p",null,"You can also use both positional and named arguments in one call, in which case positional arguments must always come before named arguments:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{{ "now"|date(\'d/m/Y H:i\', timezone="Europe/Paris") }}\n')),Object(a.b)("h2",{id:"control-flow-structure"},"Control Flow Structure"),Object(a.b)("p",null,"A control structure refers to all those things that control the flow of a program - conditionals (i.e. if/elseif/else), for-loops, as well as things like blocks. Control structures appear inside {% ... %} blocks."),Object(a.b)("p",null,"For example, to display a list of users provided in a variable called users, use the for tag:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),"<h1>Members</h1>\n<ul>\n    {% for user in users %}\n        <li>{{ user.username|e }}</li>\n    {% endfor %}\n</ul>\n\nThe if tag can be used to test an expression:\n\n{% if users|length > 0 %}\n    <ul>\n        {% for user in users %}\n            <li>{{ user.username|e }}</li>\n        {% endfor %}\n    </ul>\n{% endif %}\n")),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"http://twig.sensiolabs.org/doc/tags/index.html"}),"http://twig.sensiolabs.org/doc/tags/index.html")),Object(a.b)("h2",{id:"comments"},"Comments"),Object(a.b)("p",null,"To comment-out part of a line in a template, use the comment syntax {# ... #}. This is useful for debugging or to add information for other template designers or yourself:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{# note: disabled template because we no longer use this\n    {% for user in users %}\n        ...\n    {% endfor %}\n#}\n")),Object(a.b)("h2",{id:"include"},"Include"),Object(a.b)("p",null,"Includes a partial file"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% include 'partials/head.twig' %}\n\n{% for box in boxes %}\n    {{ include('render_box.html') }}\n{% endfor %}\n")),Object(a.b)("h2",{id:"extends"},"Extends"),Object(a.b)("p",null,"Use extends to include the layout and then use the block headers to import the required content."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% extends \"master.twig\" %}\n\n{% block header %}\n  {% include 'partials/header.twig' with {\n    'title': artist.title\n  } %}\n{% endblock %}\n")),Object(a.b)("h2",{id:"template-inheritance"},"Template Inheritance"),Object(a.b)("p",null,'The most powerful part of Twig is template inheritance. Template inheritance allows you to build a base "skeleton" template that contains all the common elements of your site and defines blocks that child templates can override.'),Object(a.b)("p",null,"Sounds complicated but it is very basic. It's easier to understand it by starting with an example."),Object(a.b)("p",null,"Let's define a base template, base.html, which defines a simple HTML skeleton document that you might use for a simple two-column page:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        {% block head %}\n            <link rel="stylesheet" href="style.css" />\n            <title>{% block title %}{% endblock %} - My Webpage</title>\n        {% endblock %}\n    </head>\n    <body>\n        <div id="content">{% block content %}{% endblock %}</div>\n        <div id="footer">\n            {% block footer %}\n                &copy; Copyright 2011 by <a href="http://domain.invalid/">you</a>.\n            {% endblock %}\n        </div>\n    </body>\n</html>\n')),Object(a.b)("p",null,"In this example, the block tags define four blocks that child templates can fill in. All the block tag does is to tell the template engine that a child template may override those portions of the template."),Object(a.b)("p",null,"A child template might look like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),'{% extends "base.html" %}\n\n{% block title %}Index{% endblock %}\n{% block head %}\n    {{ parent() }}\n    <style type="text/css">\n        .important { color: #336699; }\n    </style>\n{% endblock %}\n{% block content %}\n    <h1>Index</h1>\n    <p class="important">\n        Welcome to my awesome homepage.\n    </p>\n{% endblock %}\n')),Object(a.b)("p",null,'The extends tag is the key here. It tells the template engine that this template "extends" another template. When the template system evaluates this template, first it locates the parent. The extends tag should be the first tag in the template.'),Object(a.b)("p",null,"Note that since the child template doesn't define the footer block, the value from the parent template is used instead."),Object(a.b)("p",null,"It's possible to render the contents of the parent block by using the parent function. This gives back the results of the parent block:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),"{% block sidebar %}\n    <h3>Table Of Contents</h3>\n    ...\n    {{ parent() }}\n{% endblock %}\n")),Object(a.b)("h2",{id:"manual-escaping"},"Manual Escaping"),Object(a.b)("p",null,"Working with Manual Escaping\nIf manual escaping is enabled, it is your responsibility to escape variables if needed. What to escape? Any variable you don't trust."),Object(a.b)("p",null,"Escaping works by piping the variable through the escape or e filter:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ user.username|e }}\n")),Object(a.b)("p",null,"By default, the escape filter uses the html strategy, but depending on the escaping context, you might want to explicitly use any other available strategies:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{{ user.username|e('js') }}\n{{ user.username|e('css') }}\n{{ user.username|e('url') }}\n{{ user.username|e('html_attr') }}\n")),Object(a.b)("p",null,"Working with Automatic Escaping"),Object(a.b)("p",null,"Whether automatic escaping is enabled or not, you can mark a section of a template to be escaped or not by using the autoescape tag:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"{% autoescape %}\n    Everything will be automatically escaped in this block (using the HTML strategy)\n{% endautoescape %}\n\nBy default, auto-escaping uses the html escaping strategy. If you output variables in other contexts, you need to explicitly escape them with the appropriate escaping strategy:\n\n{% autoescape 'js' %}\n    Everything will be automatically escaped in this block (using the JS strategy)\n{% endautoescape %}\n")),Object(a.b)("h2",{id:"macros-add-in-if-you-think-it-is-relevant"},"Macros (add in if you think it is relevant)"))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Twig/Twig-Cheat-Sheet.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-twig-twig-cheat-sheet-md-834d12066d09c7db583f.js.map