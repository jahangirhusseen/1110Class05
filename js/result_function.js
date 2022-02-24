
let ban= Number(prompt('Enter The Bangla Marks'));
let eng= Number(prompt('Enter The English Marks'));
let math= Number(prompt('Enter The Math Marks'));

function Student (){
/**
 * @param {*} marks 
 * @returns grade
 */

// Grade Calculation function
this.gradeCal = (marks) => {
     this.grade;
if(marks < 0 || marks > 100){
    grade ='Invalid Marks'
}
else if(marks >= 33 && marks <= 39){
    grade = 'D';
}
else if(marks >= 40 && marks <= 49){
    grade = 'C';
}
else if(marks >= 50 && marks <= 59){
    grade = 'B';
}
else if(marks >= 60 && marks <= 69){
    grade = 'A-';
}
else if(marks >= 70 && marks <= 79){
    grade = 'A';
}else if(marks >= 80 && marks <= 100){
    grade = 'A+';
}
else{
     grade = 'F';
}
return grade;
}



// GPA Calculation function
/**
 * @param {*} marks 
 * @returns gpa
 */

this.gpaCal = (marks) => {
     this.gpa;
if(marks < 0 || marks > 100){
    gpa ='Invalid Marks'
}
else if(marks >= 33 && marks <= 39){
    gpa = 1;
}
else if(marks >= 40 && marks <= 49){
    gpa = 2;
}
else if(marks >= 50 && marks <= 59){
    gpa = 3;
}
else if(marks >= 60 && marks <= 69){
    gpa = 3.5;
}
else if(marks >= 70 && marks <= 79){
    gpa = 4;
}else if(marks >= 80 && marks <= 100){
    gpa = 5;
}
else{
    gpa = 0;
}
return gpa;
}



// CGPA function;
/**
 * @param {*} ban,eng,math; 
 * @returns cgpa;
 */ 

this.cgpaCal =(ban,eng,math) => {
    this.cgpa;
    if( ban == 0 || eng == 0 || math == 0){
        cgpa = 'Faild'
    }
    else{
        cgpa = (ban+eng+math) / 3;
    }
    if (cgpa == 'Faild') {
        return 'Faild'
    }
    else{
        // return cgpa;
        // return "CGPA :"+ cgpa;
        // return "CGPA :"+ cgpa.toFixed(1);
        return  (cgpa).toFixed(1);
    }
}

// Final Grade function;
/**
 * @param {*} finalCgpa 
 * @returns finalgrade;
 */ 
this.finalGradeCal = (finalCgpa) => {
    this.finalgrade ;
    if(finalCgpa >= 0 && finalCgpa < 1){ 
        finalgrade = 'F';
        
    }else if( finalCgpa >= 1 && finalCgpa < 2){
        finalgrade = 'D';
    }else if( finalCgpa >= 2 && finalCgpa < 3){
        finalgrade = 'C';
    } else if( finalCgpa >= 3 && finalCgpa < 3.5){
        finalgrade = 'B';
    } else if( finalCgpa >= 3.5 && finalCgpa < 4){
        finalgrade = 'A-';
    } else if( finalCgpa >= 4 && finalCgpa < 5){
        finalgrade = 'A';
    }else if( finalCgpa == 5){
        finalgrade = 'A+';
    }
        return finalgrade;
}





// Total Marks 
this.totalmarks = ban+eng+math;

}



let leterGrade = new Student();
let finalCgpa = leterGrade.cgpaCal(leterGrade.gpaCal(ban),leterGrade.gpaCal(eng),leterGrade.gpaCal(math));
let dd =leterGrade.finalGradeCal(finalCgpa);
console.log(`
Student Name : \t Roll:

Subject\t\t Marks\tGrade\t\tGPA

Bangla\t\t ${ban}\t\t${leterGrade.gradeCal(ban)}   \t\t${leterGrade.gpaCal(ban)}
English\t\t ${eng}\t\t${leterGrade.gradeCal(eng)}   \t\t${leterGrade.gpaCal(eng)}
Math\t\t ${math}\t\t${leterGrade.gradeCal(math)}   \t\t${leterGrade.gpaCal(math)} 
---------------------------------------------
${'Total Marks: ' + leterGrade.totalmarks}\t${'Grade:' + dd}\t${'CGPA:' + finalCgpa}

`);

