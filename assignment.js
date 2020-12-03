// 2. Create a function called calcCircumfrence:
//     i)Pass the radius to the function.
//     ii)Calculate the circumference based on the radius, and output "The circumference is NN"

function calcCircumference(radius){
    let circumference = 2 * 3.1415 * radius;
    return circumference;
}

const output = calcCircumference(15);
console.log("The circumference is " + output);

// 3.  Following is an Array of my favorite places and some two favorite place and remove 
// Kathmandu from the list and also print the array with its length.
// ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]

let my_favorite_places = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

my_favorite_places.push('Dharan','Ilam');

my_favorite_places.splice(3,1);

console.log(my_favorite_places);
console.log("Length of array: " + my_favorite_places.length);
