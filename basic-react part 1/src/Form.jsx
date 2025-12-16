function handleFormSumbit (event){
    event.preventDefault ();
    console.log("FORM WAS SUMBITED");
}


function Form (){
    return (
        <form>
            <input type="text" placeholder="WRITE HERE" />
            <button onClick ={handleFormSumbit}>sumbit</button>
        </form>
    )
}

export default Form;