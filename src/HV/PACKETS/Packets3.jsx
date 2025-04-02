import React from 'react';
import triplepackets from '../../assets/packets/3packets.png'

function Packets3() {
  return (
    <>
      <div>No. of layers in each packet</div>
      <h1>HV</h1>

      <div>
        <div>
          <div>
            <label>1st packet</label>
            <input name="myInput" placeholder="layers" />
          </div>
          <div>
            <label>2nd packet</label>
            <input name="myInput" placeholder="layers" />
          </div>
          <div>
            <label>3rd packet</label>
            <input name="myInput" placeholder="layers" />
          </div>
        </div>
        <div>  <img src={triplepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets3;
