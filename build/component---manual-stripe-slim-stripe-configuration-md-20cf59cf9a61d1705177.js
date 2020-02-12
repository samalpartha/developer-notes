(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{yDvY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Slim-Stripe-Configuration.md"}});var i={_frontmatter:o},s=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,p({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"configuring-stripe-for-php-and-slim"},"Configuring Stripe for PHP and Slim"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://getcomposer.org/download/"}),"Composer installation")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"http://www.slimframework.com/docs/v4/start/installation.html"}),"Getting started with Slim")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"http://www.slimframework.com/docs/v4/objects/request.html"}),"Request Object - Slim")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://www.php.net/manual/en/language.exceptions.php"}),"PHP Exceptions")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://akrabat.com/receiving-input-into-a-slim-4-application/"}),"Receiving input into a Slim 4 application")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://github.com/vlucas/phpdotenv"}),"PHP Dotenv")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://github.com/stripe/stripe-php"}),"Stripe PHP Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://stripe.com/docs/api"}),"Stripe API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",p({parentName:"li"},{href:"https://hotexamples.com/examples/slim.http/Request/getParsedBody/php-request-getparsedbody-method-examples.html"}),"getParsedBody Slim"))),Object(r.b)("h2",{id:"get-started"},"Get Started"),Object(r.b)("p",null,"Ensure ",Object(r.b)("inlineCode",{parentName:"p"},"composer")," is installed correctly and run the following. Note that you need to ensure that the downloaded ",Object(r.b)("inlineCode",{parentName:"p"},"composer.phar")," file from the installation instructions must be in your ",Object(r.b)("inlineCode",{parentName:"p"},"$PATH")," as ",Object(r.b)("inlineCode",{parentName:"p"},"composer"),"."),Object(r.b)("pre",null,Object(r.b)("code",p({parentName:"pre"},{className:"language-shell"}),'mkdir slim-stripe && cd slim-stripe\ncomposer require slim/slim:"4.*"\n# required to enable App::Run() etc without manual ServerRequest\ncomposer require slim/psr7\n# installing for Stripe\ncomposer require stripe/stripe-php\n# required to read dotenv vars\ncomposer require vlucas/phpdotenv\nmkdir -p src/public\ntouch src/public/index.php\ntouch .env\n')),Object(r.b)("p",null,"To check Slim is up and working, add this to ",Object(r.b)("inlineCode",{parentName:"p"},"src/public/index.php"),":"),Object(r.b)("pre",null,Object(r.b)("code",p({parentName:"pre"},{className:"language-php"}),"<?php\nuse Psr\\Http\\Message\\ResponseInterface as Response;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Slim\\Factory\\AppFactory;\n\nrequire __DIR__ . '/../../vendor/autoload.php';\n\n$app = AppFactory::create();\n\n$app->get('/', function (Request $request, Response $response, $args) {\n    $response->getBody()->write(\"Hello world!\");\n    return $response;\n});\n\n$app->run();\n")),Object(r.b)("p",null,"Once completed, change into ",Object(r.b)("inlineCode",{parentName:"p"},"src/public")," and run ",Object(r.b)("inlineCode",{parentName:"p"},"php -S localhost:8080"),"."),Object(r.b)("p",null,"If we now ping ",Object(r.b)("inlineCode",{parentName:"p"},"curl localhost:8080")," we will see our ",Object(r.b)("inlineCode",{parentName:"p"},"Hello world!")," response."),Object(r.b)("h2",{id:"setting-up-env"},"Setting up .env"),Object(r.b)("p",null,"Our ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file should contain our keys for development. Get these from your Stripe Developer dashboard."),Object(r.b)("p",null,"Add the following to the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file in the root of your project directory:"),Object(r.b)("pre",null,Object(r.b)("code",p({parentName:"pre"},{className:"language-shell"}),"SK_TEST_KEY= sk_test...\nPK_TEST_KEY=pk_test...\n")),Object(r.b)("h2",{id:"making-a-simple-charge-with-stripe-api"},"Making a simple charge with Stripe API"),Object(r.b)("p",null,"Let us update ",Object(r.b)("inlineCode",{parentName:"p"},"src/public/index.php")," to take a simple request to make a charge to our Stripe account."),Object(r.b)("pre",null,Object(r.b)("code",p({parentName:"pre"},{className:"language-php"}),"<?php\nuse Psr\\Http\\Message\\ResponseInterface as Response;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Slim\\Factory\\AppFactory;\n\nrequire __DIR__ . '/../../vendor/autoload.php';\n\n$dotenv = Dotenv\\Dotenv::createImmutable(__DIR__ . '/../..');\n$dotenv->load();\n\n$stripeKey = getenv('SK_TEST_KEY');\n\\Stripe\\Stripe::setApiKey($stripeKey);\n\n$app = AppFactory::create();\n\n// Parse json, form data and xml\n$app->addBodyParsingMiddleware();\n$app->addRoutingMiddleware();\n$app->addErrorMiddleware(true, true, true);\n\n$app->get('/', function (Request $request, Response $response, $args) {\n    $response->getBody()->write(\"Hello world!\");\n    return $response;\n});\n\n$app->post('/api/charge', function (Request $request, Response $response, $args) {\n  try {\n    $data = $request->getParsedBody();\n\n    // parse attributes from JSON\n    $receiptEmail = $data['receiptEmail'];\n    $amount = $data['amount'];\n\n    // create the charge\n    $charge = \\Stripe\\Charge::create([\n      'amount' => $amount,\n      'currency' => 'usd',\n      'source' => 'tok_visa',\n      'receipt_email' => $receiptEmail\n    ]);\n\n    $response->getBody()->write('Successful charge');\n    $response->withStatus(201);\n    return $response;\n  } catch (Exception $e) {\n    $response->getBody()->write('Failed charge');\n    $response->withStatus(500);\n    return $response;\n  }\n});\n\n$app->run();\n")),Object(r.b)("p",null,"Note that in the above example we are loading keys from ",Object(r.b)("inlineCode",{parentName:"p"},".env"),", setting the Stripe API key, then using Slim 4's body parsing middleware to help us with parsing the request body from JSON."),Object(r.b)("p",null,"If we run ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:8080/api/charge amount:=500 receiptEmail=hello@example.com")," (using HTTPie) from the console, we will get our ",Object(r.b)("inlineCode",{parentName:"p"},"Successful charge")," message back."),Object(r.b)("p",null,"We can head to our dashboard on Stripe and head to ",Object(r.b)("inlineCode",{parentName:"p"},"Developers > Events")," to see the log of our successful charge for ",Object(r.b)("inlineCode",{parentName:"p"},"US$5.00"),". Hooray!"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Slim-Stripe-Configuration.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-slim-stripe-configuration-md-20cf59cf9a61d1705177.js.map