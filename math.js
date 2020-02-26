//Algebra Multistep Functions
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
//Pre-Calculus Multistep Functions
function parametric(x1,y1,x2,y2,t) {
    b = (x2-x1)/t;
    d = (y2-y1)/t;
    ftb = 't';
    ftd = 't';
    if(x1 === 0) {
        x1 = '';
    }
    if(y1 === 0) {
        y1 = '';
    }
    if(b>0) {
        b = '+' + b;
    } else if(b === 0) {
        b = '';
        ftb = '';
    } else if(b === 1) {
        b = '';
        ftb = '+t';
    } else if(b === -1) {
        b = '';
        ftb = '-t';
    }
    if(d>0) {
        d = '+' + d;
    } else if(d === 0) {
        d = '';
        ftd = '';
    } else if(d === 1) {
        d = '';
        ftd = '+t';
    } else if(d === -1) {
        d = '';
        ftd = '-t';
    }
    return '(' + x1 + b + ftb + ', ' + y1 + d + ftd + ')';
}
//distance formula
function distance() {
    var x1, x2, y1, y2;
    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;
    document.getElementById('distance-solution').innerHTML = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    if(x1 === '' || x2 === '' || y1 === '' || y2 === '') {
        document.getElementById('distance-solution').style.color = '#ff0000';
        document.getElementById('distance-solution').innerHTML = 'Missing Values';
    } else {
        document.getElementById('distance-solution').style.color = '#000000';
        document.getElementById('distance-solution').innerHTML = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }
}
function clearDistance() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('distance-solution').innerHTML = '';
    document.getElementById('distance-solution').innerHTML = '';
}