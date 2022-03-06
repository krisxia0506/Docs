import React from "react";

function Mv163({mid}) {
  var m_url = '//music.163.com/outchain/player?type=2&id={mid}&auto=1&height=66'.replace('{mid}', mid);
  return (
    <>
      <iframe
        src={m_url}
        frameborder="no" 
        border="0" 
        marginwidth="0" 
        marginheight="0" 
        width='100%'
        height='100'
      ></iframe>
    </>
  );
}


export default Mv163;
