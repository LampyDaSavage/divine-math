//decimal formating
function roundDecimal0(x) {
    x = Math.round(x);
}
function roundDecimal1(x) {
    x = Math.round(x*10)/10;
}
function roundDecimal2(x) {
    x = Math.round(x*100)/100;
}
function roundDecimal3(x) {
    x = Math.round(x*1000)/1000;
}
function roundDecimal4(x) {
    x = Math.round(x*10000)/10000;
}

//Algebra Multistep Functions
function pythag() {
    var a, b, c;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    if(a === '' && b === '' || b === '' && c === '' || a === '' && c === '' || a === '' && b === '' && c === '') {
        document.getElementById('pythag-solution').style.color = '#ff0000';
        document.getElementById('pythag-solution').innerHTML = 'Not enough information';
    } else if(a !== '' && b !== '' && c !== '') {
        document.getElementById('pythag-solution').style.color = '#ff0000';
        document.getElementById('pythag-solution').innerHTML = 'All sides are already known';
    } else if(c !== '' && (a > c || b > c)) {
        document.getElementById('pythag-solution').style.color = '#ff0000';
        document.getElementById('pythag-solution').innerHTML = 'Hypotenuse (c) cannot be less than the other sides (a & b)';
    } else {
            document.getElementById('pythag-solution').style.color = '#000000';
        if(a === '' || a === null) {
            document.getElementById('pythag-solution').innerHTML = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
        } else if(b === '' || b === null) {
            document.getElementById('pythag-solution').innerHTML = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
        } else {
            document.getElementById('pythag-solution').innerHTML = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        }
    }
}
function resetPythag() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('pythag-solution').innerHTML = '';
}

function distance() {
    var x1, x2, y1, y2;
    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;
    if(x1 === '' || x2 === '' || y1 === '' || y2 === '') {
        document.getElementById('distance-solution').style.color = '#ff0000';
        document.getElementById('distance-solution').innerHTML = 'Missing Values';
    } else {
        document.getElementById('distance-solution').style.color = '#000000';
        document.getElementById('distance-solution').innerHTML = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }
}
function resetDistance() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('distance-solution').innerHTML = '';
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
