// Some phone usage rate may be described as follows:

//     first minute of a call costs min1 cents,
//     each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//     each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
    let mins = 0;
    let rate = min1;
    
    while (s > 0) {
        mins += 1;
        
        if (mins === 2) {
            rate = min2_10;
        }
        else if (mins > 10) {
            rate = min11;
        }
        
        s -= rate;
        
        if (s < 0) {
            mins -= 1;
        }
    }
    
    return mins;
}
