type buttonProps = {
    text: string,

  }

const SliderItem = (props: buttonProps) => {

    const {text} = props
    return(
        <button>{text}</button>
    )
}

export default SliderItem