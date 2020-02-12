(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"./manual/Data-Structures/Understanding-Sorting-Algorithms.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},l="wrapper";function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"understanding-sorting-algorithms"},"Understanding Sorting Algorithms"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/"}),"Time Complexities of Sorting Algorithms")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/"}),"Big-O For Sorting Algorithms")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"http://sorting.at/"}),"sorting.at")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://visualgo.net/bn/sorting"}),"Visual Go")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/basecs/pivoting-to-understand-quicksort-part-1-75178dfb9313"}),"Pivoting to Quick Sort")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82"}),"Heapify All The Things!"))),Object(r.b)("h2",{id:"big-o-time-complexity-from-algorithms"},"Big-O Time Complexity from Algorithms"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Algorithm"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Best"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Average"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Worst"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Selection Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n^2)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n^2)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n^2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bubble Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n^2)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n^2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Insertion Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n^2)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n^2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Heap Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n log(n))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Quick Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n^2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Merge Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n log(n))"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n log(n))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bucket Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(n+k)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(n+k)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(n^2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Radix Sort"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03a9(nk)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u03b8(nk)"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"O(nk)")))),Object(r.b)("h2",{id:"selection-sort"},"Selection Sort"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"repeat (numOfElements - 1) times\n\n  set the first unsorted element as the minimum\n\n  for each of the unsorted elements\n\n    if element < currentMinimum\n\n      set element as new minimum\n\n  swap minimum with first unsorted position\n")),Object(r.b)("p",null,"The analogy: Imagine a line of people of vary heights. We want to set them from shortest to tallest. We set a marker at the first person. Then from the marker to be the current minimum, and we iterate through the list and compare to the minimum. If the current position is less, we set that position for the current minimum value."),Object(r.b)("p",null,"Once we have our minimum and complete the iteration, we compare the marker and the min marker, and if the min marker is less than the marker we swap places."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set the first unsorted person as the current minimum."),Object(r.b)("li",{parentName:"ol"},"Go up the entire line and set a new marker on the shortest person."),Object(r.b)("li",{parentName:"ol"},"Once you have the marker and have gone through the line, return to the position of the unsorted person. Swap the unsorted person with the marked shortest person for that iteration."),Object(r.b)("li",{parentName:"ol"},"Repeat from the next unsorted person.")),Object(r.b)("h2",{id:"selection-sort-implementation"},"Selection Sort Implementation"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const selectionSort = array => {\n  // 1. Set the marker to be the first unsorted member\n  // 2. Iterate through the list and set the marker to be an number less than the current marker\n  // 3. When list is complete, swap elements\n  // 4. Repeat with next marker\n  for (let i = 0; i < array.length; i++) {\n    let marker = i;\n    for (let j = i + 1; j < array.length; j++) {\n      if (array[j] < array[marker]) {\n        marker = j;\n      }\n    }\n\n    let tempMember = array[i];\n    array[i] = array[marker];\n    array[marker] = tempMember;\n  }\n  return array;\n};\n\nmodule.exports = {\n  selectionSort,\n};\n")),Object(r.b)("h2",{id:"bubble-sort"},"Bubble Sort"),Object(r.b)("h2",{id:"bubble-sort-implementation"},"Bubble Sort Implementation"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'const sort = array => {\n  // 1. do (while swapped)\n  // 2. set swapped to false\n  // 3. set marker to 1\n  // 4. iterate through array comparing "sibling" pairs\n  // 5. if first sibling less than other, swap siblings\n  // 6. set swapped to true\n  let swapped = true;\n  do {\n    swapped = false;\n    for (let i = 1; i < array.length; i++) {\n      if (array[i] < array[i - 1]) {\n        let temp = array[i];\n        array[i] = array[i - 1];\n        array[i - 1] = temp;\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return array;\n};\n\nmodule.exports = {\n  sort,\n};\n')),Object(r.b)("h2",{id:"merge-sort-implementation"},"Merge Sort Implementation"),Object(r.b)("p",null,"The best way to picture merge sort is the think that you need to take a queue of people, split them down the middle and continually break those groups into splits of two under each group has a size of max 1. Once this is achieved, we begin to merge these smaller groups back together, sorting as we go."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const mergeSort = array => {\n  // 1. base case length === 1 return array\n  // 2. set left and right array based on midpoint, recursively call\n  // 3. after recursive calls return, merge together\n  if (array.length < 2) {\n    return array;\n  }\n\n  const midpoint = Math.floor(array.length / 2);\n  const leftArray = array.slice(0, midpoint);\n  const rightArray = array.slice(midpoint);\n\n  mergeSort(leftArray);\n  mergeSort(rightArray);\n\n  return merge(leftArray, rightArray, array);\n};\n\nconst merge = (leftArray, rightArray, array) => {\n  let index = 0;\n\n  while (leftArray.length && rightArray.length) {\n    if (rightArray[0] < leftArray[0]) {\n      array[index++] = rightArray.shift();\n    } else {\n      array[index++] = leftArray.shift();\n    }\n  }\n\n  while (leftArray.length) {\n    array[index++] = leftArray.shift();\n  }\n\n  while (rightArray.length) {\n    array[index++] = rightArray.shift();\n  }\n\n  return array;\n};\n\nmodule.exports = {\n  sort: mergeSort,\n};\n")),Object(r.b)("h2",{id:"quick-sort"},"Quick Sort"),Object(r.b)("p",null,"Quicksort is a divide + conquer algorithm that sorts a collecton by choosing a pivot point, and partitioning the collection around the pivot, so that elements smaller than the pivot are before it, and elements larger are after it."),Object(r.b)("p",null,"It continues to choose a pivot point and break down the collection into single-element lists, before combining them back together to form one sorted list."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Determine the ",Object(r.b)("inlineCode",{parentName:"li"},"pivot"),", which is a somewhat arbitrary element in the collection."),Object(r.b)("li",{parentName:"ol"},"Using that pivot point, partition the larger unsorted colelction into two smaller lists. It uses some smart logic to decide on the partition: it moves all the smaller elements before the pivot element and larger after the pivot element.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Quicksort in action",src:"https://miro.medium.com/max/3008/1*cHKEM0Ni1YaU8WeEgepq3g.jpeg"})),Object(r.b)("p",null,"For this example, we take wisdom from resource ","[5]",":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We\u2019ll choose the last element as the pivot for now. As it turns out, there are many different ways to choose a pivot element, and what you choose does matter \u2014 but more on that in a bit. It\u2019s pretty common to see implementations of quicksort with the last element as the pivot, so that\u2019s what we\u2019ll do here, too.")),Object(r.b)("p",null,"Also from the article:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A quicksort algorithm should always aim to choose the middle-most element as its pivot. Some algorithms will ",Object(r.b)("em",{parentName:"p"},"literally")," select the center-most item as the pivot, while others will select the first or the last element. But when we say \u201cmiddle-most\u201d element, what we mean is an element at the median of the entire unsorted collection. This ends up being super crucial because we want the two partitioned halves \u2014 the elements smaller than the pivot and the elements larger than the pivot \u2014 to be mostly equal. If they\u2019re unequal or lopsided, we can run into some big problems!")),Object(r.b)("h2",{id:"quick-sort-in-action"},"Quick Sort in Action"),Object(r.b)("p",null,"Given the array ",Object(r.b)("inlineCode",{parentName:"p"},"[9, 12, 9, 2, 17, 1, 6]"),":"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Quicksort in action",src:"https://miro.medium.com/max/3392/1*rjpGqzlhNO8SdqgQYAp76w.jpeg"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"Quicksort Recursion",src:"https://miro.medium.com/max/3264/1*md0dT0BAlkRiWlWnbH61GQ.jpeg"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"Quicksort conquering",src:"https://miro.medium.com/max/2944/1*d5Ampu8dRE_N0X3MLcGBOw.jpeg"})),Object(r.b)("p",null,"Quicksort here doesn't create a new array and copies elements in correct order, but that is not exactly the case. Quicksort is preferred because it doesn't take up much space during sorting. It does this by swapping instead."),Object(r.b)("h2",{id:"quick-sort-algorithm"},"Quick Sort Algorithm"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Choose a pivot (normally highest index)"),Object(r.b)("li",{parentName:"ol"},"Choose left reference (lowest index)"),Object(r.b)("li",{parentName:"ol"},"Choose right reference (highest but not pivot)"),Object(r.b)("li",{parentName:"ol"},"While left ref is less than pivot, move pointer up one to the right. While right ref is more than pivot, move pointer one element to the left."),Object(r.b)("li",{parentName:"ol"},"If both left is greater and right is smaller than pivot, swap the two references."),Object(r.b)("li",{parentName:"ol"},"Once the index of the left is greater than (or equal to) the index of the right reference, swap the pivot with the element at the left reference.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Running the steps part 1",src:"https://miro.medium.com/max/3392/1*sxpPWeeEHFmFh9dL3C0J8Q.jpeg"}),"\n",Object(r.b)("img",{alt:"Running the steps part 2",src:"https://miro.medium.com/max/3520/1*4sq6T2DrkV8SZX-c0pheZQ.jpeg"}),"\n",Object(r.b)("img",{alt:"Running the steps part 3",src:"https://miro.medium.com/max/3420/1*RTi3gv4W5L-avsKJ26b0CQ.jpeg"})),Object(r.b)("h2",{id:"quick-sort-implementation"},"Quick Sort Implementation"),Object(r.b)("p",null,"The swap function itself is not very complicated. The important thing to remember is the recursive quicksort function and the partitioning."),Object(r.b)("p",null,"The mental model and analogy most relevant to myself here is the boxing analogy. A boxer with a dominant right and weaker left will want to bring the left up to the pivot and right down to it."),Object(r.b)("p",null,'Consider each partition almost like a sparring session. We set the pivot to be the middle level between the left and right, and then while the left is less than or equal to the right in strength, we iterate through a "training".'),Object(r.b)("p",null,"Each training requires that while the array","[left]"," is less than the pivot, we push up the left value. While the array","[right]"," is more than the pivot value, we pull it down. Imagine pushing the strength of pushing punches on one side and pulling them back on the other."),Object(r.b)("p",null,"Finally, at the end of the that iteration of training, if the left value itself (the index and not the list value) is less than the right, we swap the strength levels (elements) at those places and push the left strength value up again by one and reduce the right by one."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'/**\n * Remember by thinking your dominate right should always be strong (bigger) or equal\n * to your left. Within that condition, your left wants to reach the pivot, the right\n * wants to come down to its level. Once all is said and done, if left is smaller than\n * right, swap the values.\n *\n * @param {*} array\n * @param {*} left\n * @param {*} right\n * @returns\n */\nconst partition = (array, left, right) => {\n  const pivot = array[Math.floor((left + right) / 2)];\n  while (left <= right) {\n    // Continue shifting the left index up until larger than pivot\n    while (array[left] < pivot) {\n      left++;\n    }\n\n    // Continue shifting the right index down until larger than pivot\n    while (array[right] > pivot) {\n      right--;\n    }\n\n    // if left is smaller or equal to right, swap and push left and right indexes down\n    if (left <= right) {\n      const temp = array[left];\n      array[left] = array[right];\n      array[right] = temp;\n\n      left++;\n      right--;\n    }\n  }\n  return left;\n};\n\n/**\n * Remember using "LEFT RIGHT PIVOT, LEFT PIVOT, PIVOT RIGHT" boxing mental model.\n *\n *\n * @param {*} array\n * @param {*} leftIndex\n * @param {*} rightIndex\n * @returns\n */\nconst quickSort = (array, leftIndex, rightIndex) => {\n  // recursion base case\n  if (array.length < 2) {\n    return array;\n  }\n\n  // set pivot through partition\n  let pivotIndex = partition(array, leftIndex, rightIndex);\n\n  // recursively call quick sort if pivot - 1 is still larger than left index\n  if (leftIndex < pivotIndex - 1) {\n    quickSort(array, leftIndex, pivotIndex - 1);\n  }\n\n  // recursively call quick sort if right index is still larger than pivot\n  if (pivotIndex < rightIndex) {\n    quickSort(array, pivotIndex, rightIndex);\n  }\n  return array;\n};\n\nconst sort = array => {\n  console.log(array);\n  quickSort(array, 0, array.length - 1);\n  console.log(array);\n  return array;\n};\n\nmodule.exports = {\n  sort,\n};\n')),Object(r.b)("h2",{id:"quick-sort-shorter-implementation"},"Quick Sort Shorter Implementation"),Object(r.b)("p",null,"This pivot uses the first index of the array and also has a bigger space complexity."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// Create an array to sort\nvar array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];\n\n// Basic implementation (pivot is the first element of the array)\nfunction quicksort(array) {\n  if (array.length == 0) return [];\n\n  var left = [],\n    right = [],\n    pivot = array[0];\n\n  for (var i = 1; i < array.length; i++) {\n    if (array[i] < pivot) left.push(array[i]);\n    else right.push(array[i]);\n  }\n\n  return quicksort(left).concat(pivot, quicksort(right));\n}\n\nconsole.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]\n")),Object(r.b)("h2",{id:"quick-sort-warning"},"Quick Sort Warning"),Object(r.b)("p",null,"Two unequally-sized partitions can be problematic. Why? See the following:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Problematic Quicksort",src:"https://miro.medium.com/max/3392/1*AuOVk7USUwVhrbmejkg5sQ.jpeg"})),Object(r.b)("p",null,"Time complexity of quicksort is dependent upon what we choose to be our partition and how sorted the list already is."),Object(r.b)("p",null,"Average runtime for an unsorted list + partition close to median is O(n log n)."),Object(r.b)("p",null,"Average runtime for a sorted (or near-sorted) list or a partition that is far from the median is O(n^2)."),Object(r.b)("p",null,"Don't use quicksort for nearly sorted lists."),Object(r.b)("h2",{id:"heap-sort"},"Heap Sort"),Object(r.b)("p",null,"However, as similar as they are, heap sort is much better than selection sort in one massive way: its performance! Heap sort is basically a super-improved version of selection sort. Yes, it does find the largest element in an unsorted collection and orders it at the back of the list \u2014 however, it does all of this work so much faster than selection sort would!"),Object(r.b)("p",null,"There are two parts to this:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Build Max Heap - this is done by "Heapify-ing" the array to create a max heap'),Object(r.b)("li",{parentName:"ol"},'Sorting - this is done by slowly swapping and "heapify-ing" the array, then reducing the last index to keep the order while iterating.')),Object(r.b)("p",null,"Things to know about heap sort:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Heap sort transforms the array that pass to it as it sorts; unlike some sorting algorithms, it doesn\u2019t create an entirely separate copy of the input data (it is in-place)."),Object(r.b)("li",{parentName:"ol"},"Heap sort also doesn\u2019t need external memory, and is an internal sorting algorithm."),Object(r.b)("li",{parentName:"ol"},"It runs iteratively (and is thus non-recursive)"),Object(r.b)("li",{parentName:"ol"},"Compares two elements at a time when it swaps and calls the heapify function, making it a comparison sort algorithm.")),Object(r.b)("h2",{id:"heap-sort-implementation"},"Heap Sort Implementation"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const sort = array => {\n  heapSort(array);\n  return array;\n};\n\nfunction heapSort(array) {\n  // Build our max heap.\n  buildMaxHeap(array);\n\n  // Find last element.\n  let lastIndex = array.length - 1;\n  const firstIndex = 0;\n\n  console.log('array post build max heap', array);\n  // Sorting the heap until we have\n  // just one element left in the array.\n  // Each iteration \"removes\" the last index\n  // which will be the sorted value.\n  while (lastIndex > firstIndex) {\n    swap(array, firstIndex, lastIndex);\n    heapify(array, firstIndex, lastIndex);\n    lastIndex -= 1;\n  }\n\n  console.log('array after sorting', array);\n}\n\nfunction buildMaxHeap(array) {\n  let midpoint = Math.floor(array.length / 2 - 1);\n\n  // Build a max heap out of\n  // all array elements passed in.\n  // We are\n  while (midpoint >= 0) {\n    console.log(array);\n    heapify(array, midpoint, array.length);\n    midpoint -= 1;\n  }\n}\n\nfunction heapify(heap, firstIndex, lastIndex) {\n  while (firstIndex < lastIndex) {\n    let currentIndex = firstIndex;\n\n    // Finding the indexes of the children from the array\n    let leftChild = 2 * firstIndex + 1;\n    let rightChild = leftChild + 1;\n\n    // Here we check if one of the two children have a greater value\n    // than the value of the heap at the currentIndex. If yes - swap.\n    if (leftChild < lastIndex && heap[leftChild] > heap[currentIndex]) {\n      currentIndex = leftChild;\n    }\n\n    if (rightChild < lastIndex && heap[rightChild] > heap[currentIndex]) {\n      currentIndex = rightChild;\n    }\n\n    // if the currentIndex hasn't change, return\n    if (currentIndex == firstIndex) {\n      return;\n    }\n\n    // else swap the bigger value for the item at the first index\n    swap(heap, firstIndex, currentIndex);\n    firstIndex = currentIndex;\n  }\n}\n\nconst swap = (heap, firstItemIndex, lastItemIndex) => {\n  const temp = heap[firstItemIndex];\n  heap[firstItemIndex] = heap[lastItemIndex];\n  heap[lastItemIndex] = temp;\n};\n\nmodule.exports = {\n  sort,\n};\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Data-Structures/Understanding-Sorting-Algorithms.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-data-structures-understanding-sorting-algorithms.101a1afd2417ec7a4a77.js.map