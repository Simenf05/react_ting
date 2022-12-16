import { useState } from "react";


import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";


function Form(props) {
    const handleSubmit = (event) => event.preventDefault();
    const [numberText, setText] = useState("");
    const [saveNum, setSaveNum] = useState();
    const [actionOperator, setOperator] = useState("");

    const handleClick = (e) => setText(numberText + e.target.name);

    const handleClearClick = () => setText(numberText.slice(0, numberText.length - 1));
    const handleFullClearClick = () => {setText(""); setSaveNum(); setOperator("")}

    const handleEquals = () => {
        switch (actionOperator) {
            case "+": setText(Number(saveNum) + Number(numberText)); break;
            case "-": setText(Number(saveNum) - Number(numberText)); break;
            case "*": setText(Number(saveNum) * Number(numberText)); break;
            case "/": setText(Number(saveNum) / Number(numberText)); break;
        }
    }


    const handleAddClick = () => {
        setSaveNum(Number(numberText))
        setOperator("+")
        setText("")
    }
    const handleMinusClick = () => {
        setSaveNum(Number(numberText))
        setOperator("-")
        setText("")
    }
    const handleMultipliClick = () => {
        setSaveNum(Number(numberText))
        setOperator("*")
        setText("")
    }
    const handleDivisionClick = () => {
        setSaveNum(Number(numberText))
        setOperator("/")
        setText("")
    }


    const nums = [...Array(props.nums).keys()];
    const actions = [
        {action: "-", actionFunc: handleMinusClick},
        {action: "+", actionFunc: handleAddClick},
        {action: "*", actionFunc: handleMultipliClick},
        {action: "/", actionFunc: handleDivisionClick},
        {action: "=", actionFunc: handleEquals},
        {action: "Clear", actionFunc: handleClearClick},
        {action: "Full clear", actionFunc: handleFullClearClick},
        
    ] 

    return (
        <>  
            <p>{(saveNum) ? String(saveNum) : ""} {actionOperator}</p>
            <p>{numberText}</p>
            <form onSubmit={handleSubmit}>

                {nums.map((num) => <NumberButton key={String(num)} num={num} handleClick={handleClick} />)}
                {actions.map((element) => <ActionButton key={element.action} action={element.action} actionFunc={element.actionFunc} />)}

            </form>
        </>
    );
}


export default Form;