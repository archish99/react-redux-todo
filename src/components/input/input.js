import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/listSlice";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addItem({
        id: `${Date.now().toString()}-${Math.random().toString()}`,
        item: inputValue,
      })
    );
    setInputValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{ width: "100%" }}
    >
      <Input
        type="text"
        color="white"
        placeholder="Enter task here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default InputComponent;
