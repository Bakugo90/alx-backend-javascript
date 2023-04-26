export default function getStudentsByLocation(studentList, city){
  // checking if student list argument is an array 
  // and if city is a string
  if (Array.isArray(studentList) === true && typeof city === "string"){
    return studentList.filter((elem) => elem.location == city);
  }

}
