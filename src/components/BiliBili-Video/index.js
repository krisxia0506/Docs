import React from "react";

function BVideo({ aid, bvid, cid }) {
  var v_url = 'https://video-direct-link.vercel.app/bili.mp4?aid={aid}&bvid={bvid}&cid={cid}'.replace('{aid}', aid).replace('{bvid}', bvid).replace('{cid}', cid);
  console.log(v_url);
  return (
    <>
      <video width="100%" height="100%" controls={true}>
        <source src={v_url} type="video/mp4" />
      </video>
    </>
  );
}

export default BVideo;
