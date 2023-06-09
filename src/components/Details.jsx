import Cards from './Cards.jsx'
import projectList from './data.jsx'
import {  useParams } from 'react-router-dom';
import { Framer } from './Framer.jsx'
export default function Details(){
    const params = useParams()
    const id = params.id

    return(
        <>
        <Framer active={true}>
            <Cards key={id} details={projectList[id]}/>
        </Framer>
        </>
    )
}