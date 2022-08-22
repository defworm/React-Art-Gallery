function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <img style= {{'height': '200px'}} src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;