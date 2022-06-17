import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, getProfiles, getPublications } from "../../api";

export default function Profile() {
    const [profile, setProfile] = useState([]);
    const [pubs, setPubs] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetchProfile();
    }, [id]);

    async function fetchProfile() {
        try {
            const response = await client.query(getProfiles, { id }).toPromise();
            console.log('response', response );
            setProfile(response.data.profiles.items[0]);

            const publicationsData = await client.query(getPublications, { id }).toPromise();
            console.log({ publicationsData });
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <div>
            <div>
                {
                  profile.picture ? (
                    <Image
                      src={profile.picture.original.url}
                      width={200}
                      height={200}
                      alt={profile.name}
                    />
                  ) : (
                    <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }}/>
                  )
                }
                <h4>{profile.handle}</h4>
                <p>{profile.bio}</p>
                <p>Followers: {profile.stats?.totalFollowers}</p>
                <p>Following: {profile.stats?.totalFollowing}</p>
              </div>
        </div>
    )
}