
export type itemProps = {
    caption: string | null,
    imgUrl: string | null,
    altText: string | null,
    numberOfSlides: number
    settings: {
        aspectRatio: number,
        gutter: number
    } 
  }


const SliderItem = ({imgUrl, altText, settings, numberOfSlides}: itemProps) => {

const {aspectRatio, gutter} = settings

    const styles = () => {
        return {
        width: `${100/numberOfSlides - gutter}%`, 
        paddingBottom: `${aspectRatio/numberOfSlides * 100 - gutter}%`
        }
    }

    return(
        <div style={styles()} className="item">
            {imgUrl && <img src={imgUrl} alt={altText?? ""} />}
        </div>
    )
}

export default SliderItem

