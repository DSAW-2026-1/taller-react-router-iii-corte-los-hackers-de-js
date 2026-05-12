import {useParams} from "react-router";
import './../App.css'

export default function UserComponent() {
    const { id } = useParams();
    return (
        <>
            <p>Hello, {id}!</p>
        </>
    )
}