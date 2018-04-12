var book = require("../lib/grade");
var gradeBook = book.gradeBook;

exports["setUp"] = function(callback){
    gradeBook.reset();
    callback();
};

exports["Can add new grades"] = function(test){
    gradeBook.addGrade(90);
    var count = gradeBook.getCountOfGrades();
    test.equal(count,1);
    test.done();
};

exports["Can average grades"] = function(test){
    gradeBook.addGrade(100);
    gradeBook.addGrade(50);
    var average = gradeBook.getAverage();
    test.equal(average, 75);
    test.done();
};

exports["Can compute letter grade of A"] = function(test){
    gradeBook.addGrade(100);
    gradeBook.addGrade(90);
    var result = gradeBook.getLetterGrade();
    test.equal(result, 'A');
    test.done();
};

exports["Can compute letter grade of B"] = function(test){
    gradeBook.addGrade(80);
    gradeBook.addGrade(80);
    var result = gradeBook.getLetterGrade();
    test.equal(result, 'B');
    test.done();
};

exports["Can compute letter grade of C"] = function(test){
    gradeBook.addGrade(79.9);
    var result = gradeBook.getLetterGrade();
    test.equal(result, 'C');
    test.done();
};

exports["Can compute letter grade of D"] = function(test){
    gradeBook.addGrade(40);
    gradeBook.addGrade(80);
    var result = gradeBook.getLetterGrade();
    test.equal(result, 'D');
    test.done();
};

exports["Can compute letter grade of F"] = function(test){
    gradeBook.addGrade(100);
    gradeBook.addGrade(0);
    var result = gradeBook.getLetterGrade();
    test.equal(result, 'F');
    test.done();
};