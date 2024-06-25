import "../../App.css"
import ListItem from "../ListItem"
import photos from "../../photos.js"

function List() {
  return (
    <>
      <h1>Список</h1>
      <ul>
        {photos.map(photo => <ListItem key={photo.id} photo={photo} />)}
      </ul>
    </>
  )
}

export default List
