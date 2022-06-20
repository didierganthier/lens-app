import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client, recommendProfile, getTopPublications } from '../api';
import TwitterFeed from '../components/TwitterFeed';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    fetchProfiles();
    fetchPublications();
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

  async function fetchPublications() {
    try {
      const response = await client.query(getTopPublications).toPromise();
      console.log({ response });
      setPublications(response.data.explorePublications.items);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className='px-[600px] py-20'>
      <TwitterFeed/>
    </div>
  )
}