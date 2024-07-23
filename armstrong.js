//ARMSTRONG
function Armstrong(number) {
    const digits = Array.from(String(number), Number);
    const order = digits.length;
 
    
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);
 
    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log(
            number + " is not an Armstrong Number");
    }
}
 

Armstrong(153);
Armstrong(654);