/*
1.break
----------------
break we use for switch case and loop
break will take control outside of switch or loop

2.continue
-------------------
continue used to skip certain part of the code and continue 
iteration till the end

3.return
----------
whenever we wanted to return any result/data from function/method
we return keyword

function

*/

for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log('----------');
for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log("-------------");
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log("------------");

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue;//skip and continue with next iteration
    }else{
        console.log(i);
        
    }
}

//if url link doesnt not contain http/https protocol such link no need to test

let i=1;
while(i<=1)
{
    i++;
    //let url="https://www.google.com";
    let url="www.google.com";
    if(!(url.includes("https") || url.includes("http")))
    {
        console.log("Url is invalid no need to test");
        continue;

    }else
        {
        console.log("Valid url: "+url);
        break;
    }
}










