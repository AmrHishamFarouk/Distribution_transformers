import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useEffect } from 'react';
import './../CSS/LV/Lv1.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectSpec} from './../database/specsSlice';
import { setLV, selectLV } from './../database/lvSlice';

function Lv1() {
  const dispatch = useDispatch();
  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));
  const Iphlv = useSelector((state) => selectLV(state, 'Iphlv'));
  const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
  const δlv = useSelector((state) => selectLV(state, 'δlv'));

  let Iph = (Ratedpower)/((Math.sqrt(3))*LV);
  dispatch(setLV({ key: 'Iphlv', value: Iph.toFixed(3)}));

  const ChangeWire = (wire) => {
    dispatch(setLV({ key: 'Wiretypelv', value: wire})); 
  };

  useEffect(() => {
    let δlv =  Iphlv/Csalv;
    dispatch(setLV({ key: 'δlv', value: δlv.toFixed(3)}));
  }, [Csalv, Iphlv]); 

  return (
  <div className="parent">
    <div className="div1">L.V. winding</div>
    <div className="div2">Iline = Iph = {Iphlv}</div>
    <div className="div3">Please choose the type of wire</div>
    <div className="div4">
      <button onClick={() => ChangeWire('Foil')}>Foil</button>
      <button onClick={() => ChangeWire('Flat')}>Flat</button>
      {/* <button onClick={() => ChangeWire('Round')}>Round</button> */}
    </div>

    <div className="div5">
      {Wiretypelv === 'Foil' && <Foil />}
      {Wiretypelv === 'Flat' && <Flat />}
      {Wiretypelv === 'Round' && <Round />}
      <div>δ = {δlv}</div>
    </div>

  </div>
 
  );
}
export default Lv1;
