import { useState } from "react";

function NumberInput() {
    const [value, setValue] = useState();

    return (
        <>

        <input onChange={(e) => setValue(e.target.value)} type="number" />

        </>
    );
}

export default NumberInput;