// code your solution here
function superbowlWin (record){
    for (let elem in record){
  if (record[elem].result === "W"){
      return (record[elem].year)
  }
    }
}

record.find(superbowlWin);
