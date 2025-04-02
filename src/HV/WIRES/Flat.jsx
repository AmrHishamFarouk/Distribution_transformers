import React from 'react';
import flatwire from "../../assets/wires/flat_csa.png"
function Flat() {
  return (
    <>
      <div>
        <h2>Flat</h2>
        <img scr=".assets/Flat.png" />
      </div>

      <div>
        <div>
          <div>
          <div>
              <label>number of wires</label>
              <input name="myInput" placeholder="number" />
            </div>
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
            {/* ∆c.s.a = ({Length} x {Thickness} - {r}^2 x(4-𝜋))*number of wires */}
          </div>
        </div>

        <img src={flatwire} alt="flat CSA imgage missed" />
      </div>
    </>
  );
}

export default Flat;
