function Calc1() {
    let [Temporaryvt, setTemporaryvt] = useState(null);
    let [TemporaryNph, setTemporaryNph] = useState(null);

    let k = 0.486865;
    setTemporaryvt(k * Math.sqrt(Ratedpower));
    let TemporaryNph = ((Lv/Math.sqrt(3))/Temporaryvt);
    let Nph = Math.ceil(TemporaryNph);
    let B = (Lv/Math.sqrt(3))/(4.44*F*Nph*Δironcore*0.000001)
  return (
    <>
    <h1>Calc1</h1>
      {/* <h1>Temporary v/t</h1>

      <h1>Nph</h1>

      <h1>V/t</h1>

      <h1>Flux density</h1> */}

    </>
  );
}
export default Calc1;
