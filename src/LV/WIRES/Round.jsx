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
              <label>D inner</label>
              <input name="myInput" placeholder="internal diameter" />
            </div>
            <div>
              <label>D outer</label>
              <input name="myInput" placeholder="external diameter" />
            </div>
          </div>

          <div> ∆c.s.a = </div>
        </div>

        <img src={roundwire} alt="Round CSA imgage missed" />
      </div>
    </>
  );
}

export default Round;
