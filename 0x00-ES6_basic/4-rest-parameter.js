export default function returnHowManyArguments(...params) {
  let i = 0;
  let param; //eslint-disable-line no-unused-vars

  for (param in params){
    i++;
  }
  return i;

}
