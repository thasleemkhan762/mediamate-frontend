import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostSkeleton = () => {
  return (
    <div className="row">
      <div className="col-sm-12 home-post-div">
        <div className="col-sm-1">
          <div className="home-post-pro-pic">
            <Skeleton circle={true} height={50} width={50} />
          </div>
        </div>
        <div className="col-sm-10">
          <div className="home-post-date">
            <Skeleton width={120} height={20} />
            <Skeleton width={80} height={15} style={{ marginLeft: '10px' }} />
          </div>
          <div className="home-post-description">
            <Skeleton count={2} />
          </div>
          <div className="home-post-media">
            <Skeleton height={330} width={496} />
          </div>
          <div className="home-post-interactions">
            <Skeleton width={40} height={20} />
            <Skeleton width={40} height={20} style={{ marginLeft: '10px' }} />
          </div>
        </div>
        <div className="col-sm-1">
          <Skeleton width={20} height={20} style={{ marginTop: '20px' }} />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
