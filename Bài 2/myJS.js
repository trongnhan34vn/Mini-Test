function checkCondition() {
    let a = + document.getElementById('a').value;
    let b = + document.getElementById('b').value;
    let c = + document.getElementById('c').value;
    let checkTriangle = a + b > c && a + c > b && b + c > a;
    if (checkTriangle) {
        document.getElementById('checkTriangle').innerHTML = 'Thoả mãn điều kiện tam giác'
    }

    let checkRightTriangle = a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == a**2 + b**2;
    if (checkRightTriangle) {
        document.getElementById('checkRightTriangle').innerHTML = 'Thoả mãn điều kiện tam giác vuông'
    }
}