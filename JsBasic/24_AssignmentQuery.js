//Prime : number which is divisible by 1 and itself


let num=10;
let status=false;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
       status=true;
       break;
    }
    
}


if(status===false)
{
    console.log(num+" is Prime number");
    
}else{
        console.log(num+" is not Prime number");

}
