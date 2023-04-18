export default function returnHowManyArguments(...params) {
    let i = 0;
    let param;

    for (param in params){
        i++;
    }
    return i;

}
