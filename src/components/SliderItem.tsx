type itemProps = {
    text: string,
    
  }

const SliderItem = (props: itemProps) => {
    const {text} = props
    return(
        <div className="item">{`item ${text}`}</div>
    )
}

export default SliderItem

