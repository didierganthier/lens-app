import Image from 'next/image';
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
    <div className='px-64'>
      {
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`} key={index}>
            <a>
              <div className='p-5 rounded-md shadow-md'>
                {
                  profile.picture  ? (
                    <Image
                      src={profile.picture.original?.url ?? '/black.png'}
                      width={200}
                      height={200}
                      alt={profile.name}
                    />
                  ) : (
                    <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }}/>
                  )
                }
                <p>{profile.picture?.original?.url}</p>
                <h1>{profile.handle}</h1>
                <p>{profile.bio}</p>
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}