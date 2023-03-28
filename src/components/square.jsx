
const Square = ({value, handlePlay , undo , highlight}) => {

 const squareHandlePlay = () =>{
    if (!value) {
        handlePlay()
    }
    if (value) {
        undo()
    }
    console.log(highlight);
 }
 let className = "w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white" 
 if (highlight) {
    className += " bg-red-500" 
 } 

    return <button
        onClick={squareHandlePlay} 
        className={className}>
        {value}
    </button>
}

export default Square