// alert('Hello World!');
console.log('Hello World!');

console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;   // 7
console.log(global1); console.log(blockScoped); console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable); console.log(floatingPointNumber); console.log(stringVariable); console.log(booleanVariable);
console.log(isNumber); console.log(isString); console.log(isBoolean);

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1
console.log(true1); console.log(false1); console.log(false2); console.log(true2); console.log(true3);
console.log(true4); console.log(true5); console.log(false3); console.log(sortaTrue); console.log(notTrue);

// ************************************************************ Conditional
console.log('If else');
if(true1) {console.log(true);}
if(!false1) {console.log('!false1');} else {console.log('false1');}

console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// ************************************************************ Function
console.log('Legacy ES5 function')  // ES5: function <functionName> (<parameterList>) { <functionBody> }
function add (a, b) {return a + b;}
const twoPlusFour = add(2, 4);          console.log(twoPlusFour);

console.log('New ES6 functions')
const subtract = (a, b) => {return a - b;}
const threeMinusOne = subtract(3, 1);   console.log(threeMinusOne);

console.log('Implied return')    // (ES6)函数的return可省略
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);   console.log(fourTimesFive);

console.log('Parenthesis and parameters')    // (ES6)单参数可省略括号
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);               console.log(twoSquared);
const threePlusOne = plusOne(3);            console.log(threePlusOne);

// ************************************************************ Array
console.log('Arrays')
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
console.log(numberArray1); console.log(stringArray1); console.log(variableArray1);

console.log('Array index and length')
const length1 = numberArray1.length;    console.log(length1);   // 5
const index1 = numberArray1.indexOf(3); console.log(index1);    // 2

console.log('Add and remove data to arrays')
numberArray1.push(6);           // 从末尾加item -> [1, 2, 3, 4, 5, 6]
stringArray1.push('string3');   // 从末尾加item -> ["string1", "string2", "string3"]
numberArray1.splice(2, 1);  // 从index=2处开始删1 item -> [1, 2, 4, 5, 6]
stringArray1.splice(1, 1);  // 从index=1处开始删1 item -> ["string1", "string3"]
console.log(numberArray1); console.log(stringArray1);

console.log('For loops')
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}
console.log('Map function')
const squares = numberArray1.map(square);       // squares [1, 4, 16, 25, 36] <- numberArray1 [1, 2, 4, 5, 6]
const cubes = numberArray1.map(a => a * a * a); // cubes [1, 8, 64, 125, 216] <- numberArray1 [1, 2, 4, 5, 6]
console.log(squares); console.log(cubes);

console.log('Find function')
const four = numberArray1.find(a => a === 4);   // 4 (or undefined)
const string3 = stringArray1.find(a => a === 'string3');    // string3
console.log(four); console.log(string3);

console.log('Find index')
const fourIndex = numberArray1.findIndex(a => a === 4); // 2
const string3Index = stringArray1.findIndex(a => a === 'string3');  // 1
console.log(fourIndex); console.log(string3Index);

console.log('Filter function')
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);    // [4, 5, 6]
const evenNumbers = numberArray1.filter(a => a % 2 === 0);      // [2, 4, 6]
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);       // [1, 5]
console.log(numbersGreaterThan2); console.log(evenNumbers); console.log(oddNumbers);

// ************************************************************ Template String
console.log('Template strings')
const five = 2 + 3;
const result1 = "2 + 3 = " + five;  console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`; console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;               console.log(greeting1);
loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;  console.log(greeting2)

// ************************************************************ jQuery
const init = () => {
    console.log('Hello world from jQuery');

    console.log('Binding to DOM');
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log(bindById);
    console.log(bindByClass);

    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // ***************************************
    console.log('Get and set attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // Add & remove class ********************
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // Hide & show content *******************
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();

    // Add element to DOM ********************
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // Remove / empty element in DOM *********
    const removeLi =$("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // Change element in DOM *****************
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`<li>Line item A</li><li>Line item B</li><li>Line item C</li>`);

    // Navigate up / down the DOM tree********
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css('background-color', 'red').css('color', 'white');
    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    // Handle click *************************
    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    // Handle event target ******************
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color', 'blue').css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // Hide & show content when click *******
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {hideShowHeader.hide();}
    const showHandler = () => {hideShowHeader.show();}
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}
$(init);





