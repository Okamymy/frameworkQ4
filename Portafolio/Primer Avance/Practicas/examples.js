// console.log("mensaje: hola mundo")

// let message = "Hello tha world";
// console.log(message)

// var num = 1001
// var flo = 10.01

// console.log(num)
// console.log(flo + num)

// const pi = 3.1415

// console.log(num * pi)

// -- Esto es una separacion --

// var name2 = "Patrick";
// var admin = name2;

// console.log(admin)

// -- Esto es una separacion --

// var array = [1,2,3,4,5,6,7,8,9,11]

//     for (let i of array) 
//     {
//         console.log(i);   
//     }

// -- Esto es una separacion --

// const string = "A la barra";
//     for (ch of string)
//     {
//         console.log(ch)
//     }
// console.log("")

// -- Esto es una separacion --

// const names = ['Zantana', 'Miguel', 'Michol', 'Amaa', 'Frank'];
// const uniNames = new Set(names);
//     for (let name of uniNames)
//     {
//         console.log(names);
//     }

// -- Esto es una separacion --

// const obj = 
// {
//     name: "Zack",
//     age: 27,
//     city: "ENS"
// }

// for (let key of Object.keys(obj))
// {
//     console.log(key + ": " + obj[key])
// }

// console.log("------------------------------");

// for (let key in obj)
// {
//     console.log(key + ": " + obj[key])
// }

// -- Esto es una separacion --

// var i = 0

// while(i<1000)
// {
//     console.log(i);
//     i += 10
// }

// do 
// {
//     console.log(i);
//     i += 15
// } while(i<1500)

// -- Esto es una separacion --

// var animal = "Dragon"

// if (animal === "Dragon")
//     {
//         console.log("Si, es lo que crees")
//     }
// else
//     {
//         console.log("Erraste, fallo de principiante")
//     }

// -- Esto es una separacion --

// var cantina = 1

// switch (cantina) 
// {
//     case 1:
//         console.log("La cerve")
//         break;
    
//     case 2:
//         console.log("El tequilazo")
//         break;

//     default:
//         console.log("Esto no se found ',:v")
//         break;
// }

// -- Esto es una separacion --

// var base = 69
// var altura = 80

// function area(base, altura)
// {
//     return (base * altura)/2
// }
// console.log("El area es de: " + area(base,altura) " m2")

// -- Esto es una separacion --

// var X = 79
// var Y = 45
// var Zz = 80

// function prism(X)
// {
//     return function(Y)
//     {
//         return function(Zz)
//         {
//             return l * w * h;
//         }
//     }
// }

// console.log("Volumen prismatico: " + prism(l)(w)(h))

// -- Esto es una separacion --

// (function()
// {
//     console.log("Hello... Nah, its very obviosly")
// })();


// (function(message)
// {
//     console.log(message);
// }("HELLO, again... Its bored"));


// const f = (function(msg)
//{
//     console.log("Holaa" + " " + msg)
//     return msg
// })("Again...");

// console.log(f)

// var a = function() { return 42 } ();
// console.log(a)

// const fx = function sum(x, y)
// {
//     return x + y
// }

// const fy = function(g, h)
// {
//     return g + h
// }

// console.log("fx: " + fx(70, 214) + " - " + "fy: " + fy(70, 20))


// fck();
// function fck()
// {
//     console.log("fck");
// }


// var say = function (times)
// {
//     if (times > 0)
//     {
//         console.log("hello geys");
//         say(times - 2);
//     }
// }
// var sayHelloTimes = say;
// sayHelloTimes(6);


// function personSomeCosas(person, ...mss)
// {
//     mss.forEach(words => { console.log(person, "plays", words);});
// }

// personSomeCosas("everybody", "vivalavida", "MEATball", "funko", "thing");

//----------------------Ya me dio flojera poner la separaracion

// const logArguments = (...args) => console.log(args)
// const list = [1, 2, 3]

// logArguments("a", "b", "c", ...list)

//-----------------------------------------------

function personDice(perosn, ...mss)
    {
        mss.forEach(arg => { console.log(person + "say: " + arg)})
    }

personDice("Edi", "Meh", "Dah", "Noup", "jejjej", "xd", ":>")
