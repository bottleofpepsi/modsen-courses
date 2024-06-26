import { useState } from "react"
import "../../App.css"

function Counter() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <h1>
        Кнопка была тыкнута {clickCount} {clickCount % 10 >= 2 && clickCount % 10 <= 4 ? "раза" : "раз"}.
      </h1>
      <button 
        className={clickCount > 10 && "red"}
        onClick={() => setClickCount(clickCount + 1)}>
        Тыкать сюда
      </button>
    </>
  )
}

export default Counter
