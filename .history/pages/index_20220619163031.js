import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client, recommendProfile } from '../api';
import Header from '../components/Header';

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
    <div className=''>
      {
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`} key={index}>
            <a>
              <div>
                {
                  profile.picture ? (
                    <div className='p-5 bg-red-400'>
                      <Image
                        src={profile.picture.original.url}
                        width={200}
                        height={200}
                        alt={profile.name}
                        className='rounded-md'
                      />
                    </div>
                  ) : (
                    <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
                  )
                }
                <h1 className=''>{profile.handle}</h1>
                <p>{profile.bio}</p>
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
