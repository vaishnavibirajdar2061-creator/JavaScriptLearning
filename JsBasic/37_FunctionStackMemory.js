
/*
For Js function , functions will created inside heap area
and executed functions from execution stack
*/



function development()
{
console.log("delevlopment() is calling....");
testing();
}

function testing()
{
    console.log("testing() is calling......");
    development();
    
}


development();
testing();

/*
output
node:internal/console/constructor:295
        if (isStackOverflowError(e))
            ^

RangeError: Maximum call stack size exceeded
*/