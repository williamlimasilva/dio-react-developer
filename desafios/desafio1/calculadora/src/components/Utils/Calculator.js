import React, { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Display = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #222;
  color: #fff;
  text-align: right;
  padding: 1rem;
  font-size: 3rem;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 1.5em;
  border: none;
  border-radius: 5px;
  background: #f0f0f0;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  ${(props) => props.span && `grid-column: span ${props.span};`}
`;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue("0.");
      setWaitingForOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = calculate[operator](currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = {
    "/": (prevValue, nextValue) => prevValue / nextValue,
    "*": (prevValue, nextValue) => prevValue * nextValue,
    "+": (prevValue, nextValue) => prevValue + nextValue,
    "-": (prevValue, nextValue) => prevValue - nextValue,
    "%": (prevValue, nextValue) => (prevValue * nextValue) / 100,
    "=": (prevValue, nextValue) => nextValue,
  };

  return (
    <CalculatorContainer>
      <Display>{displayValue}</Display>
      <ButtonGrid>
        <Button onClick={() => inputDigit(7)}>7</Button>
        <Button onClick={() => inputDigit(8)}>8</Button>
        <Button onClick={() => inputDigit(9)}>9</Button>
        <Button onClick={clearDisplay}>C</Button>

        <Button onClick={() => inputDigit(4)}>4</Button>
        <Button onClick={() => inputDigit(5)}>5</Button>
        <Button onClick={() => inputDigit(6)}>6</Button>
        <Button onClick={() => performOperation("/")}>/</Button>
        <Button onClick={() => inputDigit(1)}>1</Button>
        <Button onClick={() => inputDigit(2)}>2</Button>
        <Button onClick={() => inputDigit(3)}>3</Button>
        <Button onClick={() => performOperation("*")}>*</Button>
        <Button onClick={() => inputDigit(0)} span={2}>
          0
        </Button>
        <Button onClick={inputDot}>.</Button>
        <Button onClick={() => performOperation("-")}>-</Button>
        <Button onClick={() => performOperation("=")} span={2}>
          =
        </Button>
        <Button onClick={() => performOperation("%")}>%</Button>
        <Button onClick={() => performOperation("+")}>+</Button>
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default Calculator;
