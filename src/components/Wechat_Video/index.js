import React from "react";

function WechatVideo({ wxv }) {
  var v_url = 'http://api.icodeq.com/api/wechat_video_public?{wxv}'.replace('{wxv}', wxv);
  return (
    <>
      <video width="100%" height="100%" controls="true">
        <source src={v_url} type="video/mp4" />
      </video>
    </>
  );
}

export default WechatVideo;
