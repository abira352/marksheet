function addToTable() {
    var name = document.getElementById('studentName').value;
    var english = parseInt(document.getElementById('english').value);
    var urdu = parseInt(document.getElementById('urdu').value);
    var math = parseInt(document.getElementById('math').value);
    var computer = parseInt(document.getElementById('computer').value);


    var total = 400;
    var obtained = english + urdu + math + computer;
    var per = (obtained / total) * 100;


    function getGrade(percentage) {
        if (percentage >= 90) {
            return "A+";
        } else if (percentage >= 80) {
            return "A";
        } else if (percentage >= 70) {
            return "B";
        } else if (percentage >= 60) {
            return "C";
        } else {
            return "Fail";
        }
    }

    var grade = getGrade(per);


    var table = document.getElementById('data-table');
    var row = table.insertRow();


    var array = [name, total, obtained.toFixed(2), per.toFixed(2) + "%", grade];

    array.forEach(function(value) {
        row.insertCell().innerText = value;
    });

    document.getElementById('studentName').value = '';
    document.getElementById('english').value = '';
    document.getElementById('urdu').value = '';
    document.getElementById('math').value = '';
    document.getElementById('computer').value = '';
}
