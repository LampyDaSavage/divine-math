//Multistep Functions
function pythag(a,b,c) {
    if(a === '' || a === null) {
        a = Math.pow(c,2) - Math.pow(b,2);
        return Math.sqrt(a);
    } else if(b === '' || b === null) {
        b = Math.pow(c,2) - Math.pow(a,2);
        return Math.sqrt(b);
    } else {
        c = Math.pow(a,2) + Math.pow(b,2);
        return Math.sqrt(c);
    }
}