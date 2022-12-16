import { useState } from "react";


import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";


function Input(props) {
    const [value, setValue] = useState(props.value);
    
    return (props.text) ? (
        <>
        <p>{value}</p>
        <label>{props.text}
            <input onChange={setValue((e) => e.target.value)} value={props.value} type={props.type}/>
        </label>
        </>
    ) : <input onChange={setValue((e) => e.target.value)} type={props.type} />
}




function Form(props) {
    const handleSubmit = (event) => event.preventDefault();
    const [numberText, setText] = useState("");
    const [saveNum, setSaveNum] = useState();

    const handleClick = (e) => setText(numberText + e.target.name);

    const handleClearClick = () => setText(numberText.slice(0, numberText.length - 1));
    const handleFullClearClick = () => {setText(""); setSaveNum();}



    const handleAddClick = (e) => {
        if (!saveNum) {
            let num = Number(numberText);
            setSaveNum(num);
            setText("");
        }
        else {
            setText(Number(numberText) + saveNum);
            setSaveNum();
        }
    }




    const handleMinusClick = (e) => setText("minus");
    const handleMultipliClick = (e) => setText("gange");
    const handleDivisionClick = (e) => setText("dele");






    const nums = [...Array(props.nums).keys()];
    const actions = [
        {action: "-", actionFunc: handleMinusClick},
        {action: "+", actionFunc: handleAddClick},
        {action: "*", actionFunc: handleMultipliClick},
        {action: "/", actionFunc: handleDivisionClick},
        {action: "clear", actionFunc: handleClearClick},
        {action: "Full clear", actionFunc: handleFullClearClick},
    ]

    

    

    

    

    return (
        <>  
            <p>{(saveNum) ? String(saveNum) : ""}</p>
            <p>{numberText}</p>
            <form onSubmit={handleSubmit}>

                {nums.map((num) => <NumberButton key={String(num)} num={num} handleClick={handleClick} />)}
                {actions.map((element) => <ActionButton key={element.action} action={element.action} actionFunc={element.actionFunc} />)}

            </form>
        </>
    );
}


export default Form;