import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, getProfiles, getPublications } from "../../api";
import ABI from "../../abi.json";
import { ethers } from "ethers";

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

  async function connect() {
    const accounts = await window.ethereum.request({ 
      method: "eth_requestAccounts" 
    });
    console.log({ accounts });
  }

  async function followUser () {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(address, ABI, signer);

    try {
      const tx = await contract.follow(
        [id], [0x0]
      );
      await tx.wait();
      console.log("followed user successfully", tx.hash);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div>
      <div>
        <button onClick={connect}>Connect</button>
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