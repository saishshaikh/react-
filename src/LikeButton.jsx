import { useState } from "react"

function LikeButton() {

  let [islike, setisLike] = useState(false)
  let [clicks ,setclicks] = useState(0);

  let toggleLike = () => {
    setisLike(!islike)   
     setclicks(clicks+1)
  };
  let likeStyle = { color : "red"}

  return (
    <div>
        <p> clicks={clicks}</p>
      <p onClick={toggleLike}>
        {islike 
            ?<i className="fa-solid fa-heart"style= {likeStyle}></i>:
             <i className="fa-regular fa-heart"></i>
        }
      </p>
    </div>
  )
}

export default LikeButton
