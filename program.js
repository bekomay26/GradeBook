var book = require("./lib/grade").gradeBook;

var express = require("express");
var app = express();

app.get("/", function(req, res){        //requuest and response 
    res.send("Hello World!");
});

app.get("/grades", function(req, res){        //requuest and response 
    var grades = req.query.grades.split(",");
    for(var grade of grades){
        book.addGrade(parseInt(grade));
    }
    var average = book.getAverage();
    var result = book.getLetterGrade();
    res.send("Your average is " + average + " grade " + result);
});

app.listen(3000); // keeps on listening for web traffic on port 3000
console.log("Server ready...");