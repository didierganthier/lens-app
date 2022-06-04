import { useState, useEffect } from 'react';
import { client, recommendProfile } from '../api';

export default function Home() {

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles (){
    const { data } = await client.query({ query: recommendProfile });
    console.log(data);
  }

  return (
    <div>
      
    </div>
  )
}
