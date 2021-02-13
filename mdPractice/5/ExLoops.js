function repeatnTimes(input, n) {
  let result = "";
  if (n <= 0) {
    result = "";
  } else {
    for (let i = 0; i < n; i++) {
      result += input;
    }
  }
  return result;
}
let rIn = document.getElementById("rIn");
let nIn = document.getElementById("nIn");
document.getElementById("repeat").onclick = () => {
  let text = rIn.value;
  let n = +nIn.value;
  while (isNaN(n) || n < 0) {
    n = +prompt("bad number: enter again");
  }
  let result = repeatnTimes(text, n);
  document.getElementById("repeatOutput").innerHTML = result;
};

let iTem = document.getElementById("iTem");
document.getElementById("tem").onclick = () => {
  let input = iTem.value;
  let b = "";
  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] == "e") {
      b += repeatnTimes("e", i);
    } else if (input[i] == "E") {
      b += repeatnTimes("E", i);
    } else {
      b += input[i];
    }
  }

  document.getElementById("temOutput").innerHTML = b;
};

// another approah to the above function
(input) => {
  let found = "";
  let b = [];
  for (let i = 0; i <= input.length; i++) {
    b[i] = input[i];
    if (input[i] == "e") {
      b[i] = repeatnTimes("e", i);
    } else if (input[i] == "E") {
      b[i] = repeatnTimes("e", i);
    }
  }
  found = b.join("");
  document.getElementById("temOutput").innerHTML = b;
};
