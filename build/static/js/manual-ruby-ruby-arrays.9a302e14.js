(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{"./manual/Ruby/Ruby-Arrays.md":function(n,e,a){"use strict";a.r(e),a.d(e,"default",function(){return c});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s={},u="wrapper";function c(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(t.b)(u,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"ruby-arrays"},"Ruby Arrays"),Object(t.b)("h2",{id:"map"},"Map"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),'# map.rb\nclass Map\n    def self.updatesVar(arr)\n        arr.map! {|x| x + "!"}\n        return arr\n    end\n\n    def self.doesNotUpdateVar(arr)\n        b = arr.map {|x| x + "!"}\n        return arr\n    end\n\n    def self.returnsNewArr(arr)\n        b = arr.map {|x| x + "!"}\n        return b\n    end\nend\n\n# map_test.rb\nbegin\n  gem \'minitest\', \'>= 5.0.0\'\n  require \'minitest/autorun\'\n  require_relative \'arrays\'\nrescue Gem::LoadError => e\n  puts "\\nMissing Dependency:\\n#{e.backtrace.first} #{e.message}"\n  puts \'Minitest 5.0 gem must be installed for the Ruby track.\'\nrescue LoadError => e\n  puts "\\nError:\\n#{e.backtrace.first} #{e.message}"\n  puts DATA.read\n  exit 1\nend\n\n# Common test data version: 1.1.0 be3ae66\nclass MapTest < Minitest::Test\n  def test_map_updates_var\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a!","b!","c!","d!"]\n    assert_equal expected, Map.updatesVar(arr)\n  end\n\n  def test_map_does_not_update_var\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a","b","c","d"]\n    assert_equal expected, Map.doesNotUpdateVar(arr)\n  end\n\n  def test_map_returns_new_arr\n    # skip\n    arr = ["a","b","c","d"]\n    expected = ["a!","b!","c!","d!"]\n    assert_equal expected, Map.returnsNewArr(arr)\n  end\nend\n\n__END__\n')),Object(t.b)("h2",{id:"other-important-functions"},"Other important functions"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-ruby"}),'a = ["a","b","c"]\n# => ["a", "b", "c"]\na.map! {|x| x + "!"}\n# => ["a!", "b!", "c!"]\nnum = [1, 2, 3, 4]\nnum.map! &-> (x) { x + 2 } # mapping as lambda\n# => [3, 4, 5, 6]\na = a.join(\', \')\n# => "a!, b!, c!"\na = a.split(\', \')\n# => ["a!", "b!", "c!"]\na = a.reverse()\n# => ["c!", "b!", "a!"]\nb = a.first() # a[0]\n# => ["a!"]\na += b\n# => ["a!", "b!", "c!", "a!"]\nfirst, *rest = a\n# first = ["a!"], rest = ["b!", "c!", "a!"]\na.take(1)\n# => ["a!"]\na.drop(1)\n# => ["b!", "c!", "a!"]\na.select{|x| x != "a!"}\n# => ["b!", "c!"]\na.select{|x| !x.include? "a"}\n# => ["b!", "c!"]\nnum = [1, 2, 3, 4]\nnum.map! &-> (x) { x > 3 }\n# => [4]\nc = num.reduce(0) {|x,y| x + y}\n# => 10\nnum = [4, 3, 2, 1]\nnum.sort!\n# => [1, 2, 3, 4]\nnum.size()\n# => 4\nnum.push(5)\n# => [1, 2, 3, 4, 5]\nnum.pop()\n# => 5\nnum.unshift(5)\n# => [5, 1, 2, 3, 4]\nnum.shift()\n# => 5\nnum.min()\n# => 1\nnum.max()\n# => 4\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-Arrays.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-ruby-ruby-arrays.101a1afd2417ec7a4a77.js.map