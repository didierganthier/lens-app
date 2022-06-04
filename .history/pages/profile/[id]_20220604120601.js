import { useRouter } from "next/router"
import { client, getProfiles } from "../../api";

export default  function Profile() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Profile {id}</h1>
        </div>
    )
}