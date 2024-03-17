
interface Props {
    src: string
}

function Image(props: Props){
    return <img className="md:m-8 md:rounded-2xl overflow-hidden" src={props.src} alt="main" />
}

export default Image