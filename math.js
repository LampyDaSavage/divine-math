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

//distance formula
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
function clearDistance() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('distance-solution').innerHTML = '';
}