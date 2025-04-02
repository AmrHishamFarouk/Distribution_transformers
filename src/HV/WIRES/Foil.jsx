import React from 'react';
import foilwire from "../../assets/wires/foil_csa.png"

function Foil() {
  return (
    <>
      <div>
        <h2>Foil</h2>
        <img scr=".assets/Foil.png" />
      </div>

      <div>
        <div>
          <div>
            <div>
              <label>Length</label>
              <input name="myInput" placeholder="Length" />
            </div>
            <div>
              <label>Thickness</label>
              <input name="myInput" placeholder="Thickness" />
            </div>
            <div>
              <label>r</label>
              <input name="myInput" placeholder="r" />
            </div>
          </div>

          <div>
          </div>
        </div>

        <img src={foilwire} alt="foil CSA imgage missed" />
      </div>
    </>
  );
}

export default Foil;
