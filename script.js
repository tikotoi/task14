// N1

// let numbers= [20,22,45,75,54,2,4,800];

// numbers.push('javascript','python');
// numbers.unshift('html','css');
// console.log(numbers.length);
// numbers.shift();
// numbers.pop();
// console.log(numbers);

// N2

// let fruit = ['orange','banana','pear']

// console.log(fruit.length);
// fruit.push('apple','Pineapple');
// let newfruit=fruit
// console.log(newfruit);
// newfruit.unshift('watermelon');
// console.log(newfruit);
// console.log(newfruit.length);
// newfruit.splice(2,0,'mango');
// console.log(newfruit);
// newfruit.shift()
// newfruit.pop()
// console.log(newfruit);
// console.log(newfruit.length);

// N3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newarray=array.map(i=> i/3);
// console.log(newarray);

// N4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let arraynew =array.filter(x=> typeof x === 'number');
// console.log(arraynew);

// N5
// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newlanguage =languages.filter(x=>  x.length>3);
// console.log(newlanguage);

// N6

// let array= ['academy ', 'of ', 'digital ', 'industries'].reduce((x,y)=>x.concat(y),'')
// console.log(array);

// N7
// let item = [12, 'google', 32, null, 'yahoo', 25];

// let newitem =item.map(x=> {
//     if (typeof x === 'number') {
//         console.log(x*x);
//     }
//     else if (typeof x ==='string') {
//     console.log(x.toUpperCase ());
//     }
//     else {console.log(x);}
// })

// let es6item=item.map (x=> typeof x ==='number' ? x*x: typeof x ==='string' ? x.toLocaleUpperCase(): x);
// console.log(es6item);


// N8

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newwords = words.filter(i=> i.includes('m') || i.includes('M'))
// console.log(newwords);


