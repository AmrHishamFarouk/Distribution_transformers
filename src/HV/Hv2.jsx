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
  const Csahv = useSelector((state) => selectHV(state, 'Csahv'));
  const δhv = useSelector((state) => selectHV(state, 'δhv'));
  const δhvpos7 = useSelector((state) => selectHV(state, 'δhvpos7'));

  useEffect(() => {
  const Ilinehv = Ratedpower / (Math.sqrt(3) * HV);
  const Iphhv = Ilinehv / Math.sqrt(3);
  const Ilinepos7hv = Ratedpower / (Math.sqrt(3) * HV * 0.9);
  const Iphpos7hv = Ilinepos7hv / Math.sqrt(3);

  dispatch(setHV({ key: 'Ilinehv', value: Ilinehv.toFixed(3) }));
  dispatch(setHV({ key: 'Iphhv', value: Iphhv.toFixed(3) }));
  dispatch(setHV({ key: 'Ilinepos7hv', value: Ilinepos7hv.toFixed(3) }));
  dispatch(setHV({ key: 'Iphpos7hv', value: Iphpos7hv.toFixed(3) }));
}, [Ratedpower, HV, dispatch]);

  const [Wire, setWire] = useState(null);

const ChangeWire = (wire) => {
  setWire(wire);
  dispatch(setHV({ key: 'Wiretypehv', value: wire }));
};


   useEffect(() => {
            let δhv =  Iph/Csahv;
            dispatch(setHV({ key: 'δhv', value: δhv.toFixed(3)}));
            let δhvposition7 =  Iphpos7/Csahv;
            dispatch(setHV({ key: 'δhvpos7', value: δhvposition7.toFixed(3)}));
          }, [Csahv, Iph, Iphpos7]); 
  
  return (
    <>
      <p><strong>Ilinehv:</strong> {typeof Iline === 'number' ? Iline : 'N/A'} A</p>
      <p><strong>Iphhv:</strong> {typeof Iph === 'number' ? Iph : 'N/A'} A</p>
      <p><strong>Ilinepos7hv:</strong> {typeof Ilinepos7 === 'number' ? Ilinepos7 : 'N/A'} A</p>
      <p><strong>Iphpos7hv:</strong> {typeof Iphpos7 === 'number' ? Iphpos7 : 'N/A'} A</p>


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

        <div>δ = Iph/c.s.a ={typeof δhv === "number" ? δhv : "N/A"}</div>
        <div>δ-10= Iph-10/c.s.a ={typeof δhvpos7 === "number" ? δhvpos7 : "N/A"}</div>
      </div>
    </>
  );
}
export default Hv2;
