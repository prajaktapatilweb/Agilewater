import {createClient} from 'next-sanity';
import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';
import {client} from 'lib/client';


const query = `*[_type == "post"]{_id,title,slug,mainImage,author->{name},"excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."}`;

const Blog = asyncComponent(() => import('../../modules/Blog'));
export default AppPage(({posts}) => <Blog posts={posts} />);

export const getStaticProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: {posts}, // will be passed to the page component as props
  };
};
