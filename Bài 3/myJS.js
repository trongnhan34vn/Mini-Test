function exchangeYear() {
    let year = + document.getElementById('year').value;
    let can = '';
    switch (year % 10) {
        case 0:
            can = 'Canh';
            break;
        case 1:
            can = 'Thân';
            break;
        case 2:
            can = 'Nhâm';
            break;
        case 3:
            can = 'Quý';
            break;
        case 4:
            can = 'Giáp';
            break;
        case 5:
            can = 'Ất';
            break;
        case 6:
            can = 'Bính';
            break;
        case 7:
            can = 'Đinh';
            break;
        case 8:
            can = 'Mậu';
            break;
        case 9:
            can = 'Kỉ';
            break;
    }
    let chi = '';
    switch (year % 12) {
        case 0:
            chi = 'Thân';
            break;
        case 1:
            chi = 'Dậu';
            break;
        case 2:
            chi = 'Tuất';
            break;
        case 3:
            chi = 'Hợi';
            break;
        case 4:
            chi = 'Tí';
            break;
        case 5:
            chi = 'Sửu';
            break;
        case 6:
            chi = 'Dần';
            break;
        case 7:
            chi = 'Mão';
            break;
        case 8:
            chi = 'Thìn';
            break;
        case 9:
            chi = 'Tị';
            break;
        case 10:
            chi = 'Ngọ';
            break;
        case 11:
            chi = 'Mùi';
            break;
    }
    document.getElementById('result').innerHTML = can +' '+ chi;
}