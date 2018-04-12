var gradeBook = {
    _grades : [],              //by convention _x represents private variable
    
    addGrade : function (newGrade) {
        this._grades.push(newGrade);
    },
    
    getCountOfGrades : function(){
        return this._grades.length;
    },

    getAverage : function(){
        var totalGrade = 0;
        var average = 0;
        for(var grade of this._grades){
            totalGrade += grade;
        }
        average = totalGrade/this._grades.length;
        return average;
    },

    getLetterGrade : function(){
        var average = this.getAverage();
        var result;
        if(average >= 90){
            result = 'A';
        }
        else if(average >= 80 && average < 90){
            result = 'B';
        }
        else if(average >= 70 && average < 80){
            result = 'C';
        }
        else if(average >= 60 && average < 70){
            result = 'D';
        }
        else{
            result = 'F';
        }
        return result;
    },

    reset : function(){
        this._grades = [];
    }
}

exports.gradeBook = gradeBook;