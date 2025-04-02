import React, { useState } from 'react';
import HeightWire from '../assets/heights/HeightWire.png'
import HeightFoil from '../assets/heights/HeightFoil.png'

function Heightlv() {
  turnsperlaayer = parseInt(heleclv / hwirelv) 
  numoflayers = turnsperlaayer/Nph
  // Wiretype is flat or round or foil
  let [Wiretype, setWiretype] = useState('foil');
  return (
    <>
      {Wiretype == 'flat' && (
        <>
          <div>
            <div>
              <label>Hmech</label>
              <input name="myInput" placeholder="mm" />
            </div>
            <div>
              <label>Helec</label>
              <input name="myInput" placeholder="mm" />
            </div>
          </div>
          <img
            src={HeightWire}
            alt="HeightWire.png is missing"
          />
          <h3>no. of layers:</h3>
        </>
      )}
      {Wiretype == 'round' && (
        <>
          <div>
            <div>
              <label>Hmech</label>
              <input name="myInput" placeholder="mm" />
            </div>
            <div>
              <label>Helec</label>
              <input name="myInput" placeholder="mm" />
            </div>
          </div>
          <img
            src={HeightWire}
            alt="HeightWire.png is missing"
          />
          <h3>no. of layers:</h3>

        </>
      )}
      {Wiretype == 'foil' && (
        <>
          <label>Hmech = Helec</label>
          <img
            src={HeightFoil}
            alt="HeightFoil.png is missing"
          />
          <h3>no. of layers:</h3>
        </>
      )}
      {}
    </>
  );
}
export default Heightlv;
