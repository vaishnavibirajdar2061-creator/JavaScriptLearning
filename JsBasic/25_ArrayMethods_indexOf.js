

//indexOf():Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let month=["Jan","Feb","Mar","Apr","May","Jun","Apr","Jul","Aug","sep","Apr"];
//index     0     1      2    3      4    5      6     7    8     9
console.log(month);

//index of first occurrence of April
let index1=month.indexOf('Apr');
console.log("Index of Apr: "+index1);//3

//index of second occurrence of April
let index2=month.indexOf("Apr",4);
console.log("Index of Apr2: "+index2);//6

//index of 3rd April value
let index3=month.indexOf("Apr",7);
console.log("Index of Apr3: "+index3);//10


console.log("-------------");

let fname=['Poonam','Raj','Supriya','Manoj','Dhiraj','Raj','Geeta','Raj'];

//index of Raj
let findex=fname.indexOf('Raj');
console.log("First Position of Raj: "+findex);//1

//index of second Raj
let sindex=fname.indexOf('Raj',findex+1);//starts with 2
console.log("SEcond Position of Raj: "+sindex);//5

//index of third Raj
let tindex=fname.indexOf("Raj",sindex+1);
console.log("Third Position of Raj: "+tindex);//7





