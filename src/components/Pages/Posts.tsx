/* eslint-disable import/extensions */

import React, { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchPostRequest } from '../../actions';
import { PostData } from '../Interface/Interface';
import { PostDisplay } from '../Generics/Generics';
import './index.css';

const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state: RootStateOrAny) => state.postReducer.posts);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, []);

  return (
    <div className="display-post-list">
      {
        postList.map((post: PostData) => (
          <PostDisplay key={post.id} title={post.title} body={post.body} />
        ))
      }
    </div>
  );
};

export default Posts;
