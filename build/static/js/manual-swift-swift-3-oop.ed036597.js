(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{"./manual/Swift/Swift-3-OOP.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s={},l="wrapper";function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(l,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"swift-3-oop"},"Swift 3 OOP"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"structs"},"Structs"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"let coordinate1: (x: Int, y: Int) = (1,0) //tuple\ncoordinate1.x\n\n// structs are the blueprints\nstruct Point {\n  let x: Int\n  let y: Int\n}\n\n// when defining structs, define the params\nlet p1 = Point(x: 1, y: 0)\np1\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"instances-of-objects"},"Instances of Objects"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'// when defining structs, define the params\nlet p1 = Point(x: 1, y: 0)\np1\np1.x\np1.y\n\nstruct User {\n  let username: String\n  let password: String\n}\n\nlet Login = User(username: "example@mail.com", password: "123pass")\nLogin.username\nLogin.password\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Declaring empty arrays that infer a type ",Object(a.b)("inlineCode",{parentName:"li"},"var results: [Point] = []")),Object(a.b)("li",{parentName:"ul"},"Declaring it the preferred way ",Object(a.b)("inlineCode",{parentName:"li"},"var results = [Point]()"))),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'struct PointTwo {\n  let x: Int\n  let y: Int\n\n  // three slashes helps with definitions\n\n  /// Returns the surrounding points in range of\n  /// the current one\n  func points(inRange range: Int = 1) -> [PointTwo] {\n    var results = [PointTwo]()\n\n    let lowerBoundOfXRange = x - range\n    let upperBoundOfXRange = x + range\n\n    let lowerBoundOfYRange = y - range\n    let upperBoundOfYRange = y + range\n\n    for xCoordinate in lowerBoundOfXRange...upperBoundOfXRange {\n      for yCoordinate in lowerBoundOfYRange...upperBoundOfYRange {\n        let coordinatePoint = PointTwo(x: xCoordinate, y: yCoordinate)\n        results.append(coordinatePoint)\n      }\n    }\n\n    return results\n  }\n}\n\nlet p2 = PointTwo(x: 1, y: 0)\np2.x\np2.y\n\nlet rangeReturn = p2.points(inRange: 3)\nrangeReturn[0].x\nrangeReturn[3].y\n\nstruct Person {\n    let firstName: String\n    let lastName: String\n\n    func fullName() -> String {\n      return firstName + " " + lastName\n    }\n}\n\nlet aPerson = Person(firstName: "Billy", lastName: "Bob")\nlet myFullName = aPerson.fullName()\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"initialisers-and-self"},"Initialisers and Self"),Object(a.b)("p",null,"Self is generally only used in Swift in the init method or when differentiating"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'struct Point {\n  let x: Int\n  let y: Int\n\n  init(x: Int, y: Int) {\n    self.x = x;\n    self.y = x;\n  }\n}\n\nstruct RGBColor {\n  let red: Double\n  let green: Double\n  let blue: Double\n  let alpha: Double\n\n  let description: String\n\n  // Add your code below\n  init(red: Double, green: Double, blue: Double, alpha: Double) {\n    self.red = red\n    self.green = green\n    self.blue = blue\n    self.alpha = alpha\n\n    self.description = "red: \\(self.red), green: \\(self.green), blue: \\(self.blue), alpha: \\(self.alpha)"\n  }\n}\n\nlet test = RGBColor(red: 16.0, green: 5.0, blue: 4.3, alpha: 3.0)\ntest.description\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"class"},"Class"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'class Enemy {\n  var life: Int = 2\n  let position: Point\n\n  init(x: Int, y: Int) {\n    self.position = Point(x: x, y: y)\n  }\n\n  func decreaseLife(by factor: Int) {\n    life -= factor\n  }\n\n}\n\nstruct Location {\n  let latitude: Double\n  let longitude: Double\n}\n\nclass Business {\n  var name: String\n  var location: Location\n\n  init(name: String, location: Location) {\n    self.name = name\n    self.location = location\n  }\n}\n\nlet someBusiness = Business(name: "Quiry", location: Location(latitude: 341, longitude: 82))\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"inheritance"},"Inheritance"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"class SuperEnemy: Enemy {\n  let isSuper: Bool = true\n\n  override init(x: Int, y: Int) {\n    super.init(x: x, y: y)\n    self.life = 50\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"class Vehicle {\n  var numberOfDoors: Int\n  var numberOfWheels: Int\n\n  init(withDoors doors: Int, andWheels wheels: Int) {\n      self.numberOfDoors = doors\n      self.numberOfWheels = wheels\n  }\n}\n\nclass Car: Vehicle {\n  var numberOfSeats: Int = 4\n\n  override init(withDoors doors: Int, andWheels wheels: Int) {\n    super.init(withDoors: doors, andWheels: wheels)\n  }\n\n}\n\nlet someCar = Car(withDoors: 4, andWheels: 4)\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'class Person {\n  let firstName: String\n  let lastName: String\n\n  init(firstName: String, lastName: String) {\n    self.firstName = firstName\n    self.lastName = lastName\n  }\n\n  func fullName() -> String {\n    return "\\(firstName) \\(lastName)"\n  }\n}\n\n// Enter your code below\nclass Doctor: Person {\n\n  override init(firstName: String, lastName: String) {\n    super.init(firstName: firstName, lastName: lastName)\n  }\n\n  override func fullName() -> String {\n    return "Dr. \\(lastName)"\n  }\n}\n\nlet someDoctor = Doctor(firstName: "Sam", lastName: "Smith")\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"structs-vs-classes"},"Structs vs Classes"),Object(a.b)("p",null,"Distinct line in the sand."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'import UIKit\n\nvar str = "Hello, playground"\n\n\nstruct User {\n  var fullName: String\n  var email: String\n  var age: Int\n}\n\nvar someUser = User(fullName: "Denis O\'Keeffe", email: "test@test", age: 24)\nvar anotherUser = someUser\n\nsomeUser.email = "newemail@email"\n\n// remains as test@test\nanotherUser.email\n\nclass Person {\n  var fullName: String\n  var email: String\n  var age: Int\n\n  init(name: String, email: String, age: Int) {\n    self.fullName = name\n    self.email = email\n    self.age = age\n  }\n}\n\nvar somePerson = Person(name: "Tim Cook", email: "tc@apple.com", age: 54)\n\nvar anotherPerson = somePerson\n\nsomePerson.email = "newemail@email"\n\n// newemail@email -> points to the same reference\nanotherPerson.email\n')),Object(a.b)("h2",{id:"value-type-vs-reference-type"},"Value type vs Reference type"),Object(a.b)("p",null,"Values are copied across, references are not. All ",Object(a.b)("inlineCode",{parentName:"p"},"structs")," are value types."))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Swift/Swift-3-OOP.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-swift-swift-3-oop.101a1afd2417ec7a4a77.js.map