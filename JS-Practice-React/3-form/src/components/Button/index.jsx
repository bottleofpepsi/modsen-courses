import "../../App.css"

function Button(props) {
  return (
    <button type="button" onClick={() => console.log(props.value)}>
      Отправить
    </button>
  )
}

export default Button
