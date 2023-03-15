//find the last element of the following arrays.
//arr1[3,7,34,90,12]
//arr2[true"green","where"12,56]

let arr1=[3,7,34,90,12];
let lastElement = arr1[arr1.length-1];
console.log(lastElement);


let arr2=[true,"green","where",12,56];
let lastElemen = arr2[arr1.length-1];
console.log(lastElemen);


//write a js program that will join the following arrays element into string
//myPets=["Cow","Bird","Snake","Dog"];

let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//write a Js script to sort the following arrays items
//var arr3=[-5,9,5,3,2,-3,6,8,4,1];

var arry3=[-5,9,5,3,2,-3,6,8,4,1];
var sortedArray = arry3.sort();
//write a program to remove duplicates from the following array.
//console the array without duplicates,and console another array that only contains the duplicates
// var arr=["apple","mango","apple","orange","mango","mango"]

var arr=["apple","mango","apple",
          "orange","mango","mango"];
function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item)=== index);
}
function findDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item)=== index);
}   
console.log(removeDuplicates(arr));
console.log(findDuplicates(arr));

//write a js script to search for the following word in an array
//"way"
//if the word is present ,console its else console"the search word was not found"
let arr5=["the","way","x",4];
if(arr5.find="way"){
    console.log("way")
}else{
    console.log("the search element does not exist")
}

//write a js script to sort the following string
//let word= "sevink"

let word="sevink"
String.sort();
console.log("After sorting")



