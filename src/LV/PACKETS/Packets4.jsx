import React from 'react';
import quadrapackets from '../../assets/packets/4packets.png'

function Packets4() {
  return (
    <>
      <div>No. of layers in each packet</div>

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
          <div>
            <label>4th packet</label>
            <input name="myInput" placeholder="layers" />
          </div>
        </div>
        <div><img src={quadrapackets} alt='four packets'/></div>
      </div>
    </>
  );
}
export default Packets4;
