import { useState, useEffect } from 'react';
import { client, recommendProfile } from '../api';

export default function Home() {

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles (){
    try {
      const response = await client.query(recommendProfile).toPromise();
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div>
      
    </div>
  )
}
