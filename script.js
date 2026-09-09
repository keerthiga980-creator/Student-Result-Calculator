function calculateResult() {

    let name = document.getElementById("studentName").value;
    let registerNo = document.getElementById("registerNo").value;

    let tamil = Number(document.getElementById("tamil").value);
    let english = Number(document.getElementById("english").value);
    let python = Number(document.getElementById("python").value);
    let maths = Number(document.getElementById("maths").value);
    let computer = Number(document.getElementById("computer").value);

    if (
        name === "" ||
        registerNo === "" ||
        tamil === 0 ||
        english === 0 ||
        python === 0 ||
        maths === 0 ||
        computer === 0
    ) {
        alert("Please enter all details and marks");
        return;
    }

    let total = tamil + english + python + maths + computer;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result;

    if (
        tamil >= 35 &&
        english >= 35 &&
        python >= 35 &&
        maths >= 35 &&
        computer >= 35
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML = `
        <h3>Student Result</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Register No:</b> ${registerNo}</p>
        <p><b>Total:</b> ${total} / 500</p>
        <p><b>Average:</b> ${average.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <p><b>Result:</b> ${result}</p>
    `;
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("registerNo").value = "";

    document.getElementById("tamil").value = "";
    document.getElementById("english").value = "";
    document.getElementById("python").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("computer").value = "";

    document.getElementById("result").innerHTML = "";
}