import { useState } from "react";

const useSSN = (s = "-") => {
  const [value, setValue] = useState("");
  const updateInput = (e) => {
    let newValue = e.target.value;
    if (
      value.substr(-1) === s &&
      newValue === value.substring(0, value.length - 1)
    ) {
      setValue(value.substring(0, value.length - 2));
      return;
    }
    newValue = newValue.replace(/[^0-9]/g, "");

    if (newValue.length > 2 && newValue.length < 6) {
      newValue = newValue.substring(0, 3) + s + newValue.substring(3);
    } else if (newValue.length >= 6) {
      newValue =
        newValue.substring(0, 3) +
        s +
        newValue.substring(3, 6) +
        s +
        newValue.substring(6, 9);
    }

    setValue(newValue);
  };
  return [value, updateInput];
};

export default useSSN;
