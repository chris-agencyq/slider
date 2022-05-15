type itemProps = {
    caption: string,
    imgUrl: string,
    altText: string 
  }

const SliderItem = (props: itemProps) => {
    const {caption, imgUrl, altText} = props
    return(
        <div className="item">
            <img src={imgUrl} alt={altText} />
        </div>
    )
}

export default SliderItem

