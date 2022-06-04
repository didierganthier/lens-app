import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client, recommendProfile } from '../api';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfile).toPromise();
      console.log({ response });
      setProfiles(response.data.recommendedProfiles);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div>
      {
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`} key={index}>
            <a>
              <div>
                <h1>{profile.handle}</h1>
                <img src={profile.coverPicture.original.url} />
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
