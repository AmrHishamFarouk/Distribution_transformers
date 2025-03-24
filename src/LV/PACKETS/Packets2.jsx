import React from 'react';
import doublepackets from '../../assets/packets/2packets.png'
function Packets2() {
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
        </div>
        <div><img src={doublepackets} alt='two packets'/></div>
      </div>
    </>
  );
}
export default Packets2;
