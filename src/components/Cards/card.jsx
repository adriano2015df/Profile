import { useState } from 'react'
import ProfileSection from '../../ProfileSection/profilesection'
import LinkButton from '../LinkButton/linkbutton'
import Title from '../Title/title'
import './Card.css'

function Cards ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }){
    const [followText, setFollowText] = useState("Seguir")
    
    function handleClick(ev) {
        alert("Seguindo...")
        setFollowText("Seguindo")
    }
    
    return (
    <div className="profile">
        <img className='avatar' src={avatar} alt="imagem de perfil"/>
        
           <Title>
            <span>{name}</span>
            <button 
            onClick={handleClick}
            >
                {followText}
            </button>
           </Title>
            <ProfileSection>{bio}</ProfileSection>
            <ProfileSection>{email}</ProfileSection>
            <ProfileSection>{phone}</ProfileSection>
            <ProfileSection 
            className='links'
            id="links-section"
            data-text="some value"
            aria-label="links de redes sociais"
            >
                <LinkButton href={githubUrl} >GitHub</LinkButton>
                <LinkButton href={linkedinUrl} >Linkedin</LinkButton>
                <LinkButton href={twitterUrl} >Twitter</LinkButton>
            </ProfileSection>   
    </div>
)
}

export default Cards