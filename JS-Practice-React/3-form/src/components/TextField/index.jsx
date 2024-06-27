import "../../App.css"

function TextField(props) {
  return (
    <textarea required onChange={(e) => props.callback(e.target.value)}></textarea>
  )
}

export default TextField
