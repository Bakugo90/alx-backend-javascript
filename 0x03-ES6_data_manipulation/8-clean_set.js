export default function cleanSet(set, startString) {
  let finalString = ' ';
  // checking if all set element is a string
  for (const i of set) {
    if (typeof i === 'string' && i.startsWith(startString) && startString) {
      finalString += `${i.substring(startString.length)}-`;
    }
  }
  return finalString.slice(0, -1);
}
