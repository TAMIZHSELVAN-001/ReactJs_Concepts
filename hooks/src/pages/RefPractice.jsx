import { useEffect, useRef } from "react";

function RefPractic(){
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    function handleClear(){
        inputRef.current.value="";
    }
    return(
        <div>
            <h1>UseRef Practice</h1>
            <input type="text" placeholder="Enter your name" ref={inputRef}/>
            {/* <button onClick={handleFocus}>Focus Input</button> */}
            <button onClick={handleClear}>ClearAll</button>
            <hr />
        </div>
    )
}
export default RefPractic;