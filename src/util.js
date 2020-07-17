export default function circleName(name) {
    let firstLetter=name[0];
    let indexOfLastLetter=name.indexOf(" ");
    let lastLetter = name[indexOfLastLetter+1];
    
    return firstLetter + lastLetter;
  }