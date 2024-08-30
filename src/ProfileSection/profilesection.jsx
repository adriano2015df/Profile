import './profilesection.css'

function ProfileSection(props){
    return(
        <div
        {...props} 
        className='section , links' 
        >
            {props.children}
        </div>
    )
}

export default ProfileSection