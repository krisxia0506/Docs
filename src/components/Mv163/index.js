import React from "react";

function Mv163({ vid }) {
  var v_url = 'https://163.icodeq.com/?vid={vid}'.replace('{vid}', vid);
  return (
    <>
      <video width="100%" height="100%" controls="true">
        <source src={v_url} type="video/mp4" />
      </video>
    </>
  );
}

export default Mv163;
