function calc1() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("result").value = n1 + n2;
}
function calc2() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("result").value = n1 - n2;
}
function calc3() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("result").value = n1 * n2;
}
function calc4() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("result").value = n1 / n2;
}
