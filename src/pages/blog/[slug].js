import {useRouter} from 'next/router';
import {createClient} from 'next-sanity';
import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';
import {client} from 'lib/client';

import {apiVersion, dataset, projectId, useCdn} from 'lib/env';

const Blog = asyncComponent(() =>
  import('../../modules/Blog/IndividualBlogPage'),
);
export default AppPage(({post}) => <Blog post={post} />);

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const postID = await createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    // perspective,
  }).fetch(`*[_type == "post"] { slug }`);
  const paths = postID.map((id) => ({
    params: {slug: id.slug.current},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false};
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({params}) => {
  const Cslug = params.slug;
  const post =
    await client.fetch(`*[_type == "post" && slug.current == "${Cslug}"]{
      _id,
      title,
      slug,
      mainImage,
      author->{name},
      body
    }[0]`);
  return {props: {post}};
};
