
import { useParams, Link } from 'react-router-dom'

export default function WelcomeComponent(){

  const {userName} = useParams();
  console.log(userName)

  return(
    <div className="Welcome">
    WelcomeComponent {userName}
      <div><Link to={"/todos"}>Go TO</Link></div>
  </div>
  )

}
