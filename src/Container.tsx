type Containerprops={
    styles:React.CSSProperties
}

export const Container =(props:Containerprops)=>{
    return (
        <div style={props.styles}>
          Text content here with style props
        </div>
    )
}