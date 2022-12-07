function calAge() {
    let youngBro = + document.getElementById('youngBro').value;
    let oldBro = youngBro + 3;
    let father = oldBro * 6;
    document.getElementById('oldBro').innerHTML = oldBro + ' tuổi';
    document.getElementById('father').innerHTML = father + ' tuổi';
}