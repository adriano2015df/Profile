import './Card.css'

function Cards ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }){
 return (

    <div className="profile">
        <img className='avatar' src={avatar} alt="imagem de perfil"/>
        
            <h2>{name}</h2>
            <div>{bio}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div className='links'>
                <a href={githubUrl} target='_blank'>GitHub</a>
                <a href={linkedinUrl} target='_blank'>Linkdin</a>
                <a href={twitterUrl} target='_blank'>Twitter</a>
            </div>   
    </div>
)
}

export default Cards