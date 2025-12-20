function printHeloo(){
    console.log("hellow!!")
}

function  Button() {
    return(
        <div>
            <button onClick={printHeloo}>CLICK ME!</button>
        </div>
    )

}

export default Button;