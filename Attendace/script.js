
function show() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let status = document.getElementById("status").value;

    document.getElementById("result").innerHTML =
        "Employee: " + name +
        "<br>ID: " + id +
        "<br>Attendance: " + status;
}
