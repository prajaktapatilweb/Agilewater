import {createClient} from 'next-sanity';
import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const client = createClient({
  projectId: 'smjl4qzv',
  dataset: 'production',
  //   apiVersion: '2021-10-21',
  useCdn: false,
});
const query = `*[_type == "post"]`;

const Blog = asyncComponent(() => import('../../modules/Blog'));
export default AppPage(({posts}) => <Blog posts={posts} />);

export const getStaticProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: {posts}, // will be passed to the page component as props
  };
};
