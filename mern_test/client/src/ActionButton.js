

function ActionButton(props) {

    return <button name={props.action} onClick={(e) => props.actionFunc(e)}>{props.action}</button>

}


export default ActionButton;