import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "maurosouza",
      userImg:
        "https://s2.glbimg.com/bidN4ro-uEHAEJABM4Jx2bRO31w=/0x0:600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/s/E/X5IaJTRRS3AcI1TFPYSw/2019-11-06-gettyimages-501312488.jpg",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      caption: "Bela foto",
    },
    {
      id: "2",
      username: "mairasouza",
      userImg:
        "https://image.shutterstock.com/mosaic_250/2780032/1836020740/stock-photo-profile-picture-of-smiling-millennial-asian-girl-isolated-on-grey-wall-background-look-at-camera-1836020740.jpg",
      img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
      caption: "nova foto",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
