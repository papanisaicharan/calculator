import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  // addition few edit conditions for x^y
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' || operation === 'x^y' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  // not editing this functionality - but we can remove this, as we no longer have this functionality
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  if (operation === "x^y") {
    if (two === "0") {
      return "1";
    } else if( two === "1"){
      return one.toString();
    }else {
      // alert("if y is given as float, it will be converted to int!");
      // return one.pow(parseInt(two.toString())).toString()
      // cannot go with above approach as pow parameter is integer
      // performing pow operation
      var res = Math.pow(parseFloat(one.toString()), parseFloat(two.toString()));
      // setting the precision to be in limits (ideally not required and it depends on requirements)
      if(res.toString().length > 10){
        return res.toPrecision(10).toString();
      }
      // converting to string
      return res.toString();
    }
  }

  throw Error(`Unknown operation '${operation}'`);
}
