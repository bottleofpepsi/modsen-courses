function ListItem(props) {
    return (
        <a href={props.photo.url}>
            <img src={props.photo.thumbnailUrl} alt={props.photo.title + "color"}/>
            <span>{props.photo.title.toUpperCase()}</span>
        </a>
    )
  }
  
  export default ListItem
  