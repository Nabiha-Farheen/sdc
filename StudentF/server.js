
const http = require("http");
const fs = require("fs");
const qs = require("querystring");

http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end(fs.readFileSync("index.html"));
    } else {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            let data = qs.parse(body);

            res.end(
                "<h2>Feedback Submitted!</h2>" +
                "Name: " + data.name +
                "<br>Feedback: " + data.feedback
            );
        });
    }
}).listen(3000, () => console.log("Server running!"));