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

//Pythagorean Function
function pythag() {
    var a, b, c, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    sol = document.getElementById('pythag-sol');
    if(a === '' && b === '' || b === '' && c === '' || a === '' && c === '' || a === '' && b === '' && c === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(a !== '' && b !== '' && c !== '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'All sides are already known';
    } else if(c != '') {
        if(a > c || b > c) {
            sol.style.color = '#ff0000';
            sol.innerHTML = 'Hypotenuse (c) cannot be less than the other sides (a & b)';
        } else {
            sol.style.color = '#000000';
            if(a === '' || a === null) {
                sol.innerHTML = 'Side 1 (a): ' + Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
            } else if(b === '' || b === null) {
                sol.innerHTML = 'Side 2 (b): ' + Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
            }
        }
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = 'Hypotenuse (c): ' + Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    }
}
function resetPythag() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('pythag-sol').innerHTML = '';
}

//Distance Formula Function
function distance() {
    var x1, x2, y1, y2, sol;
    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;
    sol = document.getElementById('distance-sol');
    if(x1 === '' || x2 === '' || y1 === '' || y2 === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing Values';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }
}
function resetDistance() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('distance-sol').innerHTML = '';
}

//Trignometry Functions

//Finding the Side or Angle of a Right Triangle using Trignometric Functions
function sideAngleWithTrigFunc() {
    var a, b, c, A, B, C, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    sol = document.getElementById('sideAngleWithTrigFunc-sol');
    
}

function resetSideAngleWithTrigFunc() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('sideAngleWithTrigFunc-sol').innerHTML = '';
}
//Pre-Calculus Multistep Functions

//Parametrics Function
function parametrics() {
    var x1, y1, t1, x2, y2, t2, sol;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    t1 = document.getElementById('t1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    t2 = document.getElementById('t2').value;
    sol = document.getElementById('parametrics-sol');
    if(x1 === '' || y1 === '' || t1 === '' || x2 === '' || y2 === '' || t2 === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values'
    } else if(t1 != 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'The time at the first point must be 0';
    } else {
        b = (x2-x1)/t2;
        d = (y2-y1)/t2;
        ftb = 't';
        ftd = 't';
        if(x1 === 0) {
            x1 = '';
        }
        if(y1 === 0) {
            y1 = '';
        }
        if(b > 0) {
            b = ' + ' + b;
        } else if(b < 0) {
            b = ' - ' + Math.abs(b);
        } else if(b === 0) {
            b = '';
            ftb = '';
        } else if(b === 1) {
            b = '';
            ftb = ' + t';
        } else if(b === -1) {
            b = '';
            ftb = ' - t';
        }
        if(d > 0) {
            d = ' + ' + d;
        } else if(d < 0) {
            d = ' - ' + Math.abs(d);
        } else if(d === 0) {
            d = '';
            ftd = '';
        } else if(d === 1) {
            d = '';
            ftd = ' + t';
        } else if(d === -1) {
            d = '';
            ftd = ' - t';
        }
        sol.style.color = '#000000';
        sol.innerHTML = '( ' + x1 + b + ftb + ' , ' + y1 + d + ftd + ' )';
    }
}
function resetParametrics() {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('t1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('t2').value = '';
    document.getElementById('parametrics-sol').innerHTML = '';
}

//Quadratic Function
function quadratic() {
    var a, b, c, sol;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    sol = document.getElementById('quadratic-sol');
    if(a === '' || b === '' || c === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values'
    } else {
        sol.style.color = '#000000';
        sol1 = (-1*b + Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);
        sol2 = (-1*b - Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);
        if(isNaN(sol1) && isNaN(sol2)) {
            sol.innerHTML = 'No solution';
        } else {
            sol.innerHTML =  sol1 + ' & ' + sol2;
        }
    }
}
function resetQuadratic() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('quadratic-sol').innerHTML = '';
}

//simple area

//Area of Square
function areaSquare() {
    var s, sol;
    s = document.getElementById('s').value;
    sol = document.getElementById('area-square-sol');
    if(s === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(s === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This square is nonexistent';
    } else if(s < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative'; 
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.pow(s, 2);
    }
}
function resetAreaSquare() {
    document.getElementById('s').value = '';
    document.getElementById('area-square-sol').innerHTML = '';
}

//Area of Rectangle
function areaRect() {
    var l, w, sol;
    l = document.getElementById('l').value;
    w = document.getElementById('w').value;
    sol = document.getElementById('area-rect-sol');
    if(l === '' || w === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(l === 0 || w === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This rectangle is nonexistent';
    } else if(l < 0 || w < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = l*w;
    }
}
function resetAreaRect() {
    document.getElementById('l').value = '';
    document.getElementById('w').value = '';
    document.getElementById('area-rect-sol').innerHTML = '';
}

//Area of Triangle
function areaTriangle() {
    var b, h, sol;
    b = document.getElementById('b').value;
    h = document.getElementById('h').value;
    sol = document.getElementById('area-triangle-sol');
    if(b === 0 || h === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This triangle is nonexistent';
    } else if(b < 0 || h < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = b*h/2;
    }
}
function resetAreaTriangle() {
    document.getElementById('b').value = '';
    document.getElementById('h').value = '';
    document.getElementById('area-triangle-sol').innerHTML = '';
}

//Area of Trapezoid
function areaTrap() {
    var b1, b2, h, sol;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    h = document.getElementById('h').value;
    sol = document.getElementById('area-trap-sol');
    if(b1 === '' || b2 === '' || h === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(b1 === 0 || b2 === 0 || h === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This trapezoid is nonexistent';
    } else if(b1 < 0 || b2 < 0 || h < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = (b1+b2)/2*h;
    }
}
function resetAreaTrap() {
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('h').value = '';
    document.getElementById('area-trap-sol').innerHTML = '';
}

//Area of Circle
function areaCircle() {
    var r, sol;
    r = document.getElementById('r').value;
    sol = document.getElementById('area-circle-sol');
    if(r === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(r === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This circle is nonexistent';
    } else if(r < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'The radius can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.PI*Math.pow(r, 2);
    }
}
function resetAreaCircle() {
    document.getElementById('r').value = '';
    document.getElementById('area-circle-sol').innerHTML = '';
}

//surface area

//Surface Area of Cube
function surfaceCube() {
    var s, sol;
    s = document.getElementById('s').value;
    sol = document.getElementById('surface-cube-sol');
    if(s === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(s === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This cube is nonexistent';
    } else if(s < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.pow(s, 2)*6;
    }
}
function resetSurfaceCube() {
    document.getElementById('s').value = '';
    document.getElementById('surface-cube-sol').innerHTML = '';
}

//Surface Area of Rectangle
function surfaceRectP() {
    var l, w, h, sol;
    l = document.getElementById('l').value;
    w = document.getElementById('w').value;
    h = document.getElementById('h').value;
    sol = document.getElementById('surface-rect-p-sol');
    if(l === '' || w === '' || h === '') {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Missing values';
    } else if(l === 0 || w === 0 || h === 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'This rectangular prism is nonexistent';
    } else if(l < 0 || w < 0 || h < 0) {
        sol.style.color = '#ff0000';
        sol.innerHTML = 'Side lengths can not be negative';
    } else {
        sol.style.color = '#000000';
        sol.innerHTML = Math.pow(s, 2)*6
    }
}
function resetSurfaceRectP() {
    document.getElementById('l').value = '';
    document.getElementById('w').value = '';
    document.getElementById('h').value = '';
    document.getElementById('surface-rect-p-sol').innerHTML = '';
}

//Surface Area of Triangular Prism (INCOMPLETE)
function surfaceTriangularP() {
    var b, h, sol;
    b = document.getElementById('b').value;
    h = document.getElementById('h').value;
    sol = document.getElementById('surface-triangular-p-sol');
}