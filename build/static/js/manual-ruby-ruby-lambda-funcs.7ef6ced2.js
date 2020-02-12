(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{"./manual/Ruby/Ruby-Lambda-Funcs.md":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return l});var t=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r={},b="wrapper";function l(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(s.b)(b,Object.assign({},r,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"ruby-lambda-functions"},"Ruby Lambda Functions"),Object(s.b)("p",null,"The basic gist of declaration and usage is to use the ",Object(s.b)("inlineCode",{parentName:"p"},"lambda")," keyword. Note that Lambda functions have subtle differences to Proc functions, although they both derive from the Proc object."),Object(s.b)("p",null,"The Lambda function enforces the number of arguments passed."),Object(s.b)("p",null,"In addition, Lambda and Proc functions treat the ",Object(s.b)("inlineCode",{parentName:"p"},"return")," differently. Lambda will return from the scope of that closure function, whereas Proc will return from the parent scope."),Object(s.b)("h2",{id:"simple-example"},"Simple Example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),'# lambda.rb\nclass Lambda\n    def self.hello\n        helloWorld = lambda { return "Hello, World!" }\n        res = helloWorld.call\n    end\n\n    def self.sum(a, b)\n        sumLambda = lambda {|a,b| a + b }\n        res = sumLambda.call(a, b)\n    end\nend\n')),Object(s.b)("p",null,"Test file"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),"# lambda_test.rb\nbegin\n  gem 'minitest', '>= 5.0.0'\n  require 'minitest/autorun'\n  require_relative 'lambda'\nrescue Gem::LoadError => e\n  puts \"\\nMissing Dependency:\\n#{e.backtrace.first} #{e.message}\"\n  puts 'Minitest 5.0 gem must be installed for the Ruby track.'\nrescue LoadError => e\n  puts \"\\nError:\\n#{e.backtrace.first} #{e.message}\"\n  puts DATA.read\n  exit 1\nend\n\n# Common test data version: 1.1.0 be3ae66\nclass LambdaTest < Minitest::Test\n  def test_hello_world_lambda\n    # skip\n    assert_equal \"Hello, World!\", Lambda.hello\n  end\n\n  def test_sum_lambda\n    # skip\n    assert_equal 3, Lambda.sum(1,2)\n  end\nend\n\n__END__\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Lambda-Funcs.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-ruby-ruby-lambda-funcs.101a1afd2417ec7a4a77.js.map