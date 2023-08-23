import React, {useState} from 'react';
import {createClient} from 'next-sanity';
import {PortableText} from '@portabletext/react';

const client = createClient({
  projectId: 'z7qyrqr6',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

export default function blog() {
  const [first, setfirst] = useState();
  console.log('sdsd');
  async function test() {
    const post = await client.fetch(`*[_type == "post"]`);
    console.log('sdsd2', post);
    // setfirst(post)
  }
  test();
  // console.log("ddsdv", post[0].mainImage);
  return (
    <div>
      {/* <PortableText value={first[0]?.body} /> */}
      sdfs
    </div>
  );
}
