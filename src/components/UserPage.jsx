import { useParams } from "react-router-dom"

export function UserPage() {
    let { username } = useParams();
    return <h2>User ID: { username } </h2>;
}