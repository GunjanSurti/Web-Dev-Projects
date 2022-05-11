    var x = [];
    var n = prompt("Enter no.");
        
    var a = 0;
    var b = 1;
        // x is array
        // y is for loop to work
        // n is no. of fibonacci sequence
        

function fibonacciGenerator(){
    
    for ( var y = 1 ; y <= n ; y++ ) {

        if (y == 1){
            x.push(a);
                    
        }

        else if (y == 2){
            x.push(b);
        }

        while(y <= n && y > 2){
            var c = a + b;
            x.push(c);
            a = b ;
            b = c ;    
            y++;
        }
        // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144      for n = 13
                
             
    }
    console.log(x);       
}

fibonacciGenerator();
