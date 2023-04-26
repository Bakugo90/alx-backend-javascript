export default function getStudentIdsSum(studentList){

  return studentList.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);

}
