function scuberGreetingForFeet(distanceCovered){
  if (distanceCovered <= 400) {
    return "This one is on me!";
  } else if (distanceCovered < 2000) {
    return "That will be twenty bucks."
  } else if ((distanceCovered > 2000) && (distanceCovered <= 2500)) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(destination){
  return destination === "NYC"? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}