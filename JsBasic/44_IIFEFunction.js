


//IIFE: Immediate Invoke Function Expression


(function(){
console.log("Hello ALL");

})();

console.log("-----------");

(function(name){
console.log("Hello  "+name);

})("kiran");

console.log("-----------");

((id)=>{
console.log("Id is: "+id);

})(1010);