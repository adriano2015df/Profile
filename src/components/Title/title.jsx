import './title.css'

function Title(props){
    return (
        <h2 className='texth2'>
            {props.children}
        </h2>
    )

}

export default Title