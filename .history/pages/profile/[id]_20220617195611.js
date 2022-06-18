import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, getProfiles, getPublications } from "../../api";

const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";

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
      console.log('response', response);
      setProfile(response.data.profiles.items[0]);

      const publicationsData = await client.query(getPublications, { id }).toPromise();
      console.log({ publicationsData });
      setPubs(publicationsData.data.publications.items);
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
            <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
          )
        }
        <h4>{profile.handle}</h4>
        <p>{profile.bio}</p>
        <p>Followers: {profile.stats?.totalFollowers}</p>
        <p>Following: {profile.stats?.totalFollowing}</p>
      </div>
      <div>
        {
          pubs.map((pub, index) => (
            <div key={index} style={{ padding: '20px', borderTop: '1px solid #ededed' }}>
              {pub.metadata.content}
            </div>
          ))
        }
      </div>
    </div>
  )
}