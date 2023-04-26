export default function updateStudentGradeByCity(studentList, city, newGrades){
  return studentList
    .filter((elem) => elem.location === city)
    .map((student) => {
      const grades = newGrades.filter((elem) => elem.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
