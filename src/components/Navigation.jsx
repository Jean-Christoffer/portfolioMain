import { Link } from "react-router-dom"
export default function Navigation(){
    return(
        <>
        <header>
            <nav>
                <ul>
                    
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'projects'}>Projects</Link></li>
                    <li><Link to={'contact'}>Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
        </>
    )
}