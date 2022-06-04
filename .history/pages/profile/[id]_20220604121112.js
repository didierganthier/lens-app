import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, getProfiles } from "../../api";

export default function Profile() {
    const [profile, setProfile] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetchProfile();
    }, [id]);

    async function fetchProfile() {
        try {
            const response = await client.query(getProfiles, { id }).toPromise();
            console.log({ response });
            setProfile(response.data.getProfiles.items[0]);
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <div>
            <h1>Profile {id}</h1>
        </div>
    )
}