/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchPostRequest } from '../../actions';
import { PostData } from '../Interface/Interface';
import { PostDisplay } from '../Generics/Generics';
import './index.css';

const Posts = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state: RootStateOrAny) => state.postReducer);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchPostRequest(pageNumber));
  }, [pageNumber]);

  const scrollToEnd = () => {
    setPageNumber(pageNumber + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight) {
      scrollToEnd();
    }
  };

  return (
    <div className="display-post-list">
      { Object.keys(postList.posts).length > 0 ? (
        <div>
          {
            postList.posts.map((post: PostData) => (
              <PostDisplay
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
              />
            ))
          }
        </div>
      ) : postList.loading ? (<div className="loading-section">Loading !!</div>)
        : postList.error.length > 0 ? (<div className="error-section">{postList.error}</div>)
          : null}
    </div>
  );
};

export default Posts;
