var count = 0;

function cc(card) {
  var answer="";
  var dat;
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      //answer+=count+" Bet";
      break;
    case 7:
    case 8:
    case 9:
      //count++;
      //answer+=count+" Hold";
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      //answer+=count+ " Hold";
      break;
    default:
      answer+="Change Me";
  }
  dat=count;
  if (dat <=0){
    return answer+=dat + " Hold";
  }
  else{
  return answer+=dat+" Bet";}
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
