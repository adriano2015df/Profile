import Cards from "./components/Cards/card"
import avatar from "./assets/img/img1.jpg"

function App() {  
  return (
    < div className="app">
    <Cards avatar={avatar} 
    name="Adriano" 
    bio="aprendendo programação" 
    email="adrinao@jkjk" 
    phone="767865654" 
    githubUrl="https://github.com" 
    linkedinUrl="https://linkedr.com" 
    twitterUrl="https://twitter.com"/>
    </div>
  )
}

export default App
