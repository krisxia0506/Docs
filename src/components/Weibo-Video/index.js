import React from "react";

function WeiBoV({ uid, cursor, hd}) {
  var v_url = 'https://api.icodeq.com/api/weibo_307_video?uid={uid}&cursor={cursor}&hd={hd}'.replace('{uid}', uid).replace('{cursor}', cursor).replace('{hd}', hd);
  return (
    <>
      <video width="100%" height="100%" controls={true}>
        <source src={v_url} type="video/mp4" />
      </video>
    </>
  );
}

export default WeiBoV;
