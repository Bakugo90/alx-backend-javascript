export default function getListStudentIds(studentList){
  // checking if the argument is an array
  if (Array.isArray(studentList) != true){
    return [];
  }
  // iterate each and return id for each item
  return getListStudentIds.map((elem) => elem.id);

}
