/*Give it some time, the computer needs to think about everything that it's processing.
It has a lot of baggage with it. I can get up to 50 which still takes a while to load for the exponents.
My computer crashes when I try to reach 60 for the exponent. println("Carry on my wayward son.");
*/
for(var i = 2; i < 50; i++){
    var mersenne = 2**i-1;
    if (Isprime(mersenne) == true){
        println(mersenne);
    }
}

function Isprime(num){
    for(var i = 3; i < num / 2; i=i+2){
        if(num % i == 0){
                return false;
            }
        }
    return true;
