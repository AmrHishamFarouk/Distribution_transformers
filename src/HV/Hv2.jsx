import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useEffect,useState } from 'react';
import { setHV, selectHV } from './../database/hvSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpec} from './../database/specsSlice';

function Hv2() {
  const dispatch = useDispatch();

  const Iph =  useSelector((state) => selectHV(state, 'Iphhv'));
  const Iline =  useSelector((state) => selectHV(state, 'Ilinehv'));
  const Iphpos7 =  useSelector((state) => selectHV(state, 'Iphpos7hv'));
  const Ilinepos7 =  useSelector((state) => selectHV(state, 'Ilinepos7hv'));

  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const HV = useSelector((state) => selectSpec(state, 'HV'));

    let Ilinehv =  Ratedpower/(Math.sqrt(3)*HV);
    dispatch(setHV({ key: 'Ilinehv', value: Ilinehv}));

    let Iphhv = Ilinehv/Math.sqrt(3);
    dispatch(setHV({ key: 'Iphhv', value: Iphhv}));

    let Ilinepos7hv =  Ratedpower/(Math.sqrt(3)*HV*0.9);
    dispatch(setHV({ key: 'Ilinepos7hv', value: Ilinepos7hv}));

    let Iphpos7hv = Ilinepos7hv/Math.sqrt(3);
    dispatch(setHV({ key: 'Iphpos7hv', value: Iphpos7hv}));

    // dispatch(setHV({ key: 'Iphhv', value: Iphhv}));
    // dispatch(setHV({ key: 'Ilinehv', value: Ilinehv}));
    // dispatch(setHV({ key: 'Iphpos7hv', value: Iphpos7hv}));
    // dispatch(setHV({ key: 'Ilinepos7hv', value: Ilinepos7hv}));


  const [Wire, setWire] = useState(null);

  const ChangeWire = (wire) => {
    setWire(wire);
  };

  return (
    <>
      <p><strong>Ilinehv:</strong> {Iline.toFixed(2)} A</p>
      <p><strong>Iphhv:</strong> {Iph.toFixed(2)} A</p>
      <p><strong>Ilinepos7hv:</strong> {Ilinepos7.toFixed(2)} A</p>
      <p><strong>Iphpos7hv:</strong> {Iphpos7.toFixed(2)} A</p>

      <h1>please choose the type of wire</h1>
      <div>
        <button onClick={() => ChangeWire('Foil')}>Foil</button>
        <button onClick={() => ChangeWire('Flat')}>Flat</button>
        <button onClick={() => ChangeWire('Round')}>Round</button>
      </div>
      <div>
        {Wire == 'Foil' && <Foil />}
        {Wire == 'Flat' && <Flat />}
        {Wire == 'Round' && <Round />}

        <div>δ = Iph/c.s.a =</div>
        <div>δ-10= Iph-10/c.s.a =</div>
      </div>
      <button type="submit">next</button>
    </>
  );
}
export default Hv2;
