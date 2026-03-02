import { Link} from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Bienvenido a mi portfolio</h1>
      <p>Soy desarrollador web fullStack</p>

      <Link to="/projects" ></Link>
      <Link to="/resume" ></Link>
    </div>
  )
}


export default Home