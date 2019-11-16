json = (require('./data'));  //to add the object to the main 
// console.log(json); // this one to show you that the jsone is not like object format 
parsedData = JSON.parse(json); // This is your object  //to convert from json to object to make the js understand 
// console.log(json[0]);
console.log(parsedData);
console.log(parsedData.people[0]);

let logData = function() {

    console.log(parsedData.people[0]);

}
Data.logData();

let logNames = function() { 
    console.log(parsedData.people["name"]);
};

Data.logNames();

let logNameEyes = function() {
    console.log(parsedData.people["eye_color"]);
};
Data.logNameEyes();

let logByMass = function() {
    if (parsedData.people["mass"] < 75) {
        console.log(parsedData.people["mass"]);
      }
};



// json.parse(data)

// let logData = function() {
// $(data.people).action(),
// }

//var userdata = JSON.parse(data);	
// var user1_name = data.people[0];	
// console.log (user1_name)
// document.getElementById

//$(data.people).action()

// alert(data.people); // this is if you want to call json object 
// alert(data.people[0].name); //this is for calling nasted object json 


