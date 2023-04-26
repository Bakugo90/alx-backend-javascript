export default function createInt8TypedArray(length, position, value){
  // chack for a valide position
  if (position <= length){
    throw new Error('Position outside range');
  }
  // create a new array buffer
  const buffer = new ArrayBuffer(length);
  //create a view
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
