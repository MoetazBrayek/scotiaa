import { useState } from "react";

const useDate = () => {
  const [value, setValue] = useState("");
  const updateInput = (e) => {
    let input = e.target.value;
    if (input.length > 10) return null;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], 31);
    var output = values.map(function (v, i) {
      return v.length === 2 && i < 2 ? v + "/" : v;
    });
    setValue(output.join("").substr(0, 14));
  };
  return [value, updateInput];
};

const checkValue = (str, max) => {
  if (str.charAt(0) !== "0" || str === "00") {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str =
      num > parseInt(max.toString().charAt(0)) && num.toString().length === 1
        ? "0" + num
        : num.toString();
  }
  return str;
};
export default useDate;
