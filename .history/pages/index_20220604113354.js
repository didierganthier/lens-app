import { useState, useEffect } from 'react';
import { client, recommendProfile } from '../api';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles (){
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
          <div key={index}>
            <h1>{profile.name}</h1>
            <img src={profile.picture.original.url} />
          </div>
        ))
      }
    </div>
  )
}
