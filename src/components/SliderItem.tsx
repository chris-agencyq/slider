type itemProps = {
    caption: string | null,
    imgUrl: string | null,
    altText: string | null 
  }

const SliderItem = ({caption, imgUrl, altText}: itemProps) => {
    return(
        <div className="item">
            {imgUrl && <img src={imgUrl} alt={altText?? ""} />}
        </div>
    )
}

export default SliderItem

