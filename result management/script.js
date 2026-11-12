
document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("s1").value);
    let m2 = Number(document.getElementById("s2").value);
    let m3 = Number(document.getElementById("s3").value);
    let m4 = Number(document.getElementById("s4").value);
    let m5 = Number(document.getElementById("s5").value);

    let marks = [m1, m2, m3, m4, m5];
    // Validate marks
    for (let mark of marks) {
        if (mark < 0 || mark > 100) {
            alert("Marks must be between 0 and 100");
            return;
        }
    }

    // Calculate total
    let total = m1 + m2 + m3 + m4 + m5;

    // Calculate average
    let average = total / 5;

    // Calculate grade
    let grade;

    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 80) {
        grade = "B";
    }
    else if (average >= 70) {
        grade = "C";
    }
    else if (average >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "<h2>Student Result</h2>" +
        "<br>Name: " + name + 
        "<br>Total Marks: " + total +
        "<br>Average: " + average.toFixed(2)  +
        "<br>Grade: " + grade;

});
