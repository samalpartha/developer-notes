(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{"./manual/Stripe/Flask-Stripe-Configuration.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},s="wrapper";function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"python-flask-stripe-configuration"},"Python Flask Stripe Configuration"),Object(r.b)("p",null,"A quick look at setting up the Stripe Python API with a Flask server."),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://stripe.com/docs/api?lang=python"}),"Stripe API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://docs.dennisokeeffe.com/manual-flask-hello-world"}),"Flask Hello World Docs")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/stripe/stripe-python"}),"Stripe Python Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.w3schools.com/python/python_try_except.asp"}),"Python Try/Except")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://stackoverflow.com/questions/45412228/flask-sending-data-and-status-code-through-a-response-object/45412576"}),"Status codes in Flask")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://techtutorialsx.com/2017/01/07/flask-parsing-json-data/"}),"Parsing JSON data w/ Flask")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/theskumar/python-dotenv"}),"Python Dotenv Github"))),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"mkdir python-flask-stripe && cd python-flask-stripe\n# pip or pip3 depending on env\npip3 install Flask\npip3 install stripe\npip3 install -U python-dotenv\ntouch .env server.py\n")),Object(r.b)("h2",{id:"setting-up-env"},"Setting up .env"),Object(r.b)("p",null,"Fetch your keys from Stripe and replace the following in the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"SK_TEST_KEY=sk... # replace sk...\n")),Object(r.b)("h2",{id:"writing-serverpy"},"Writing server.py"),Object(r.b)("p",null,"Set up the file to look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),'from flask import Flask\nfrom flask import request\nfrom dotenv import load_dotenv\nimport stripe\nimport os\n\n# Load local .env file and assign key\nload_dotenv()\nstripe.api_key = os.environ.get("SK_TEST_KEY")\n\napp = Flask(__name__)\n\n@app.route("/api/charge", methods = [\'POST\'])\ndef charge():\n    try:\n        content = request.get_json()\n        # Print what JSON comes in for the sake of checking\n        print(content)\n\n        resp = stripe.Charge.create(\n            amount=content[\'amount\'],\n            currency="usd",\n            source="tok_visa",\n            receipt_email=content[\'receiptEmail\'],\n        )\n        print("Success: %r" % (resp))\n        return "Successfully charged", 201\n    except Exception as e:\n        print(e)\n        return "Charge failed", 500\n\nif __name__ == "__main__":\n    app.run()\n')),Object(r.b)("p",null,"The above:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Fetches and sets OS env from .env file."),Object(r.b)("li",{parentName:"ol"},"Sets the Stripe API key."),Object(r.b)("li",{parentName:"ol"},"Sets a route ",Object(r.b)("inlineCode",{parentName:"li"},"/api/charge")," that only takes the ",Object(r.b)("inlineCode",{parentName:"li"},"POST")," method and creates a charge based on the amount we pass.")),Object(r.b)("h2",{id:"running-the-server"},"Running the server"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"python3 server.py")," will start the server on port 5000."),Object(r.b)("p",null,"Running ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:5000/api/charge amount:=600 receiptEmail=hello_flask@example.com")," (using HTTPie) will come back with success. Check your Stripe dashboard and you will see a charge made for US\\$6.00! Hooray!"))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Flask-Stripe-Configuration.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-stripe-flask-stripe-configuration.101a1afd2417ec7a4a77.js.map