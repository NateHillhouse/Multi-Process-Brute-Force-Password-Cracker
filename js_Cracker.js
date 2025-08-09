

function code(x) { //Function to turn the unicode characters into ascii characters
    function flip(list) //function used to flip the numbers
    {
        for (let i=0; i < list.length; i ++)
            {
                list[i] = (list[i]) -127;
                list[i] = Math.abs(list[i]);
                //console.log(list, list[i], i);
                //return list
            }
    }  
    let list = x;
    //console.log(`List: `,list);  
    flip(list);
    let lst = new Array();
    for (let x=0; x < list.length; x++)
        {
            lst.push(String.fromCharCode(list[x]));
            //console.log(`Lst[${x}]: `,lst[x]);
        }
    result = lst.join(''); 
    flip(list);
    //console.log(`result: `,result);
    //console.log(`list: `,list);
    return(result);
}


function sleep(time) { //For debugging
    return new Promise((resolve) => setTimeout(resolve, time));
  }


 async function check(list)
{
    let recursiveFunction = function (list, x, end) {
    
        //If the function has reached the end of the list, return false
        if (0 > end) return false; 
    
        //Check if the section in the list has reached zero
        else if (list[end] === 0) return true; 
    
        // If element at mid is greater than x,
        // search in the left half of mid
        else if (list[end] > 0)
            return recursiveFunction(list, x, end - 1); //Proceeds to next number in list
    
        //If all numbers have been checked, 
        else return true 
    }
    length = list.length;


    //Throw the stuff in the 'While' function straight into the recursive function; that would cut it out and automatically assign the values as they're found <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    while (recursiveFunction(list, 0, list.length-1))//if a number less than 1 is in list
    {
        for (let i = 0; i <= length; i++){
            //console.log(`I = ${i}, list = ${list[i]}, ${list}`);
            
            if (list[i] === 0){
                //console.log(i);
                list[i] = 94;
                if (typeof(list[i+1]) != "number") list.push(94);
                else try{
                    list[i+1] --;

                //console.log(`Subtracting the next in list (${list})`)
            }
                catch{
                    list.push(94);
                    //console.log('pushing');
                    return;
                }
            }
        }
    }
}


async function main(word, attempts, result)
{
    var attempts = 0;
    var passw = new Array();
    passw.push(94);

    while (result != word)
    {
        console.log(`Attempt #${attempts+1}: ${result}`);
        check(passw);
        passw[0] -- ;      
        attempts ++;
        result = code(passw);
    }
    await sleep(10);
    let end = new Date();
    console.log(end-start);
    console.log("word:", word, "| Result:", word, "Total Attempts:", attempts, "| Elapsed Time:", (end-start)/1000, "Seconds", "| Average Attempts per Second:", (attempts / (end-start)) * 1000)
}



word = '124';

let start = new Date();
main(word, 0, );


// v v v Reversed Function v v v
/*
  {
    function code(x) { //Function to turn the unicode characters into ascii characters
        function flip(list) //function used to flip the numbers
        {
            for (let i=0; i < list.length; i ++)
                {
                    list[i] = (list[i]) -127;
                    list[i] = Math.abs(list[i]);
                    //console.log(list, list[i], i);
                    //return list
                }
        }  
        let list = x;
        //console.log(`List: `,list);  
        flip(list);
        let lst = new Array();
        for (let x=0; x < list.length; x++)
            {
                lst.push(String.fromCharCode(list[x]));
                //console.log(`Lst[${x}]: `,lst[x]);
            }
        result = lst.join(''); 
        flip(list);
        //console.log(`result: `,result);
        //console.log(`list: `,list);
        return(result);
    }
    
    
    function sleep(time) { //For debugging
        return new Promise((resolve) => setTimeout(resolve, time));
      }
    
    
     async function check(list)
    {
        let recursiveFunction = function (list, x, end) {
        
            //If the function has reached the end of the list, return false
            if (0 > end) return false; 
        
            //Check if the section in the list has reached zero
            else if (list[end] === 94) return true; 
        
            // If element at mid is greater than x,
            // search in the left half of mid
            else if (list[end] < 94)
                return recursiveFunction(list, x, end - 1); //Proceeds to next number in list
        
            //If all numbers have been checked, 
            else return true 
        }
        length = list.length;
    
    
        //Throw the stuff in the 'While' function straight into the recursive function; that would cut it out and automatically assign the values as they're found <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
        while (recursiveFunction(list, 94, list.length-1))//if a number less than 1 is in list
        {
            for (let i = 0; i <= length; i++){
                if (list[i] === 94){
                    list[i] = 0;
                    if (typeof(list[i+1]) != "number") list.push(0);
                    else try{
                        list[i+1] ++;
    
                    //console.log(`Subtracting the next in list (${list})`)
                            }
                    catch{
                        list.push(0);
                        //console.log('pushing');
                        return;
                    }
                }
            }
        }
    }
    
    
    async function main(word, attempts, result)
    {
        var attempts = 0;
        var passw = new Array();
        passw.push(0);
    
        while (result != word)
        {
            console.log(`Attempt #${attempts+1}: ${result}`);
            check(passw);
            passw[0] ++; 
            attempts ++;
            result = code(passw);
        }
        await sleep(10);
        let end = new Date();
        console.log(end-start);
        console.log("word:", word, "| Result:", word, "Total Attempts:", attempts, "| Elapsed Time:", (end-start)/1000, "Seconds", "| Average Attempts per Second:", (attempts / (end-start)) * 1000)
    }
    
    
    
    word = '124';
    
    let start = new Date();
    main(word, 0, );
    
    
    }
*/
// ^ ^ ^ Reversed Function ^ ^ ^