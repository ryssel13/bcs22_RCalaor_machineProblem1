// ITCS227 Source Code Template for 2T AY 2022-2023
/*
  Program:  Computation of Grades using Function
  Programmer: Ryssel Lou C. Calaor
  Section:  BCS22
  Start Date: April 17, 2023
  End Date:   April 20, 2023
*/

const gradingSystem = {
  A: 90,
  B: 80,
  C: 70,
  D: 60,
  F: 0,
};


const students = [];


for (let i = 0; i < 5; i++) {
  const newStudent = {};


  newStudent.name = prompt(`Enter the name of student ${i + 1}:`);


  const classGrades = [];
  for (let j = 0; j < 5; j++) {
    let grade = null;
    do {
      grade = parseFloat(prompt(`Enter enabling assessment ${j + 1} for ${newStudent.name}:`));
    } while (isNaN(grade));
    classGrades.push(grade);
  }
  newStudent.classParticipationGrade = classGrades.reduce((sum, grade) => sum + grade) / classGrades.length;


  const summativeGrades = [];
  for (let j = 0; j < 3; j++) {
    let grade = null;
    do {
      grade = parseFloat(prompt(`Enter summative assessment grade ${j + 1} for ${newStudent.name}:`));
    } while (isNaN(grade));
    summativeGrades.push(grade);
  }
  newStudent.summativeGrade = summativeGrades.reduce((sum, grade) => sum + grade) / summativeGrades.length;


  let finalExamGrade = null;
  do {
    finalExamGrade = parseFloat(prompt(`Enter major exam grade for ${newStudent.name}:`));
  } while (isNaN(finalExamGrade));
  newStudent.finalExamGrade = finalExamGrade;


  const finalGrade = 0.3 * newStudent.classParticipationGrade + 0.3 * newStudent.summativeGrade + 0.4 * newStudent.finalExamGrade;
  newStudent.finalGrade = finalGrade;


  let letterGrade = '';
  if (finalGrade >= gradingSystem['A']) {
    letterGrade = 'A';
  } else if (finalGrade >= gradingSystem['B']) {
    letterGrade = 'B';
  } else if (finalGrade >= gradingSystem['C']) {
    letterGrade = 'C';
  } else if (finalGrade >= gradingSystem['D']) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  newStudent.letterGrade = letterGrade;


  const studentOutput = {
    'name': newStudent.name,
    'classParticipationGrade': newStudent.classParticipationGrade.toFixed(2),
    'summativeGrade': newStudent.summativeGrade.toFixed(2),
    'finalExamGrade': newStudent.finalExamGrade.toFixed(2),
    'finalGrade': newStudent.finalGrade.toFixed(2),
    'letterGrade': newStudent.letterGrade,
  };


  students.push(studentOutput);
}

  console.table(students, ['name', 'classParticipationGrade', 'summativeGrade', 'finalExamGrade', 'finalGrade', 'letterGrade']);
 
