var GN1 =[1, 2, 3, 4, 5];    //GN =group number 
var x = GN1.includes(3);
console.log(x);


var GN2 =[1, 1, 2, 1, 1];
console.log(GN2.includes(3));

var GN3 =[5, 5, 5, 6];
console.log(GN3.includes(5));
var GN4 =[];
//jQuery.isEmptyObject( GN4 ); //to chect if the objct is emoty 
function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

// var B = GN4(5);
// Console.log(B);

// for (i = 0 ; i<GN1.length; i++){
//     var x = GN1.includes(3);
//     console.log(x);}


var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [ // object -array -object 
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

console.log(aquarium.capacityInGallons); 
//aquarium.numberOfRocks.push = (2);
aquarium.numberOfRocks= 2; //changing the vaule of the number of rocks
console.log(aquarium.numberOfRocks);
console.log(aquarium.fish[2]);
console.log(aquarium.fish[1].size);
aquarium.fish[0].size= '4 inches'; //when to use '',""?

 var Newobject ={type: 'starfish',
                size: '5 inches',
                color: 'blue'};

aquarium.fish.push(Newobject);
console.log(aquarium.fish);

//console.log(aquarium.fish[0].size= '4 inches');

//aquarium.fish.type= "starfish"; // use push 

//aquarium.fish.push('a', 'ab' ,'abc'); //this only will add one value 
//fish.push.type = 'ab'; 

//console.log(aquarium.fish[3]);
//aquarium.fish[3].type:' starfish',size'5 inches', color'blue';

