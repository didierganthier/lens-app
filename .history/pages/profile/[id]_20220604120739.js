import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, getProfiles } from "../../api";

export default  function Profile() {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetchProfile();
    }, [id]);

    return (
        <div>
            <h1>Profile {id}</h1>
        </div>
    )
}