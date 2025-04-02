import React from 'react';
import roundwire from "../../assets/wires/round_csa.png"

function Round() {
  return (
    <>
      <div>
        <h2>Round</h2>
        <img scr="./assets/round.png" />
      </div>

      <div>
        <div>
          <div>
            
            <div>
              <label>number of wires</label>
              <input name="myInput" placeholder="number" />
            </div>
            <div>
              <label>D inner</label>
              <input name="myInput" placeholder="internal diameter" />
            </div>
            <div>
              <label>D outer</label>
              <input name="myInput" placeholder="external diameter" />
            </div>
          </div>

          <div> ∆c.s.a = (((22/7)*Math.pow(Dinner, 2))/4)*number of wires </div>
        </div>

        <img src={roundwire} alt="Round CSA imgage missed" />
      </div>
    </>
  );
}

export default Round;
