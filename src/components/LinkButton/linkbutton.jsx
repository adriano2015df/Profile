import './linkbutton.css'

function LinkButton(props){
    return(
    <a className='linksButtun' 
    href={props.href} 
    target='_blank'>
    {props.children}
    </a>
    )
}

export default LinkButton