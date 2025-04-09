import React, { useState } from 'react';

function Calc1() {
  let [Temporaryvt, setTemporaryvt] = useState(null);
  let [TemporaryNph, setTemporaryNph] = useState(null);
  let [VT, setVT] = useState(null);
  let k = 0.486865;
  setTemporaryvt(k * Math.sqrt(Ratedpower));
  let TemporaryNph = Lv / Math.sqrt(3) / Temporaryvt;
  let Nph = Math.ceil(TemporaryNph);
  setVT(Lv / Math.sqrt(3) / Nph);
  let B = Lv / Math.sqrt(3) / (4.44 * F * Nph * Δironcore * 0.000001);

  return (
    <>
      <div>
        <label>Δironcore</label>
        <input name="myInput" placeholder="mm^2" />
      </div>
      <h1>Temporary v/t</h1>

      <h1>Nph</h1>

      <h1>V/t</h1>

      <h1>Flux density</h1>

      <button type="submit">next</button>
    </>
  );
}
export default Calc1;
