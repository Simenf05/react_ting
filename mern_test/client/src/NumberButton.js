

function NumberButton(props) {


    return <button name={props.num} onClick={(e) => props.handleClick(e)}>{props.num}</button>


}

export default NumberButton;