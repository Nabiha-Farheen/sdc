
let score = 0;

function check(answer) {
    if (answer === "HTML") score++;
    show();
}

const check2 = (answer) => {
    if (answer === "let") score++;
    show();
};

function show() {
    document.getElementById("result").innerHTML =
        "Score: " + score + " / 2";
}
