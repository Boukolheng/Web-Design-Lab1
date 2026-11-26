function voting(votes) {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let vote of votes) {
    if (vote == "A") a++;
    if (vote == "B") b++;
    if (vote == "C") c++;
  }

  if (a > b && a > c) {
    console.log("A is the winner");
  } else if (b > a && b > c) {
    console.log("B is the winner");
  } else if (c > a && c > b) {
    console.log("C is the winner");
  } else {
    console.log("Tie");
  }
}

voting(["A", "B", "A", "C", "A"]);
