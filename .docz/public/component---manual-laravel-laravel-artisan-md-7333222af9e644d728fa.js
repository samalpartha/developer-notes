(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{LCC3:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return b}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Laravel/Laravel-Artisan.md"}});var o={_frontmatter:i},c=r.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,l({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"laravel-and-artisan"},"Laravel and Artisan"),Object(a.b)("p",null,"Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. "),Object(a.b)("h2",{id:"basics"},"Basics"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Commands"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"php artisan list")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"List commands")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"php aristan help migrate")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Example that every command has it's own help command")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"php artisan tinker")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"All Laravel applications include Tinker, a REPL powered by the PsySH package.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"php artisan make:command SendEmails")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Create custom command SendEmails")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Adding custom args")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user?}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Optional custom args")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user=foo}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Default custom args")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user} {--queue=}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Adding custom options")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"`email:send {user} {--Q"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"queue}`")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user*}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Input arrays")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email:send {user : The ID of the user}")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Input descriptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Laravel REPL")),Object(a.b)("p",null,"All Laravel applications include Tinker, a REPL powered by the PsySH package. Tinker allows you to interact with your entire Laravel application on the command line, including the Eloquent ORM, jobs, events, and more. To enter the Tinker environment, run the tinker Artisan command ",Object(a.b)("inlineCode",{parentName:"p"},"php artisan tinker"),"."),Object(a.b)("h2",{id:"custom-commands"},"Custom Commands"),Object(a.b)("p",null,"You can build your own custom commands which are typically stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"app/Console/Commands")," directory."),Object(a.b)("p",null,"Feel free to change storage as long as it can be accessed by ",Object(a.b)("inlineCode",{parentName:"p"},"Composer"),"."),Object(a.b)("p",null,"Once you have created a command for the CLI, you will need to register it before you can use it on the CLI."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Command Structure")),Object(a.b)("p",null,"Example commands ",Object(a.b)("inlineCode",{parentName:"p"},"SendEmails"),". Note that we are able to inject any dependencies we need into the command's constructor. The Laravel service container will automatically inject all dependencies type-hinted in the constructor."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\User;\nuse App\\DripEmailer;\nuse Illuminate\\Console\\Command;\n\nclass SendEmails extends Command\n{\n    /**\n     * The name and signature of the console command.\n     *\n     * @var string\n     */\n    protected $signature = 'email:send {user}';\n\n    /**\n     * The console command description.\n     *\n     * @var string\n     */\n    protected $description = 'Send drip e-mails to a user';\n\n    /**\n     * The drip e-mail service.\n     *\n     * @var DripEmailer\n     */\n    protected $drip;\n\n    /**\n     * Create a new command instance.\n     *\n     * @param  DripEmailer  $drip\n     * @return void\n     */\n    public function __construct(DripEmailer $drip)\n    {\n        parent::__construct();\n\n        $this->drip = $drip;\n    }\n\n    /**\n     * Execute the console command.\n     *\n     * @return mixed\n     */\n    public function handle()\n    {\n        $this->drip->send(User::find($this->argument('user')));\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Closure Commands")),Object(a.b)("p",null,"This is an alternative to declaring a class for a console command. This is similar to the same way that route Closures are an alternative to controllers."),Object(a.b)("p",null,"Within the commands method of your app/Console/Kernel.php file, Laravel loads the routes/console.php file."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"/**\n * Register the Closure based commands for the application.\n *\n * @return void\n */\nprotected function commands()\n{\n    require base_path('routes/console.php');\n}\n")),Object(a.b)("p",null,"Even though this file does not define HTTP routes, it defines console based entry points (routes) into your application. Within this file, you may define all of your Closure based routes using the  Artisan::command method. The command method accepts two arguments: the command signature and a Closure which receives the commands arguments and options."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"Artisan::command('build {project}', function ($project) {\n    $this->info(\"Building {$project}!\");\n});\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Laravel/Laravel-Artisan.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-laravel-laravel-artisan-md-7333222af9e644d728fa.js.map