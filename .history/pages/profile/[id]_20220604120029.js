import { useRouter } from "next/router"

export default  function Profile() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Profile {id}</h1>
        </div>
    )
}