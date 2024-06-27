import { useState } from "react"
import "../../App.css"
import TextField from "../TextField"
import Button from "../Button"

function Form() {
  const [text, setText] = useState("");
  
  return (
    <form>
      <fieldset>
        <legend>Пообщаться с консолью</legend>
        <TextField callback={setText}/>
        <Button value={text}/>
      </fieldset>
    </form>
  )
}

export default Form
