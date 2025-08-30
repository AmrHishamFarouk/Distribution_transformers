import React, { useState } from 'react';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';
import ins2 from '../assets/insulations/ins2.png';
import ins3 from '../assets/insulations/ins3.png';
import ins4 from '../assets/insulations/ins4.png';
import ins5 from '../assets/insulations/ins5.png';
import ins6 from '../assets/insulations/ins6.png';
import { setHV, selectHV } from './../database/hvSlice';

function Hv3() {
    const dispatch = useDispatch();
    const δhv =  useSelector((state) => selectHV(state, 'δhv'));

  const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));


  useEffect(() => {
      let MinLayersPerPacket = 100 / (Math.pow(δlv, 2) * Wirethicknesslv);
      let n = parseInt(MinLayersPerPacket);
      dispatch(setLV({ key: 'MinLayersPerPacketlv', value: n }));
  }, [δlv, Wirethicknesslv]);
        
      const n = useSelector((state) => selectLV(state, 'MinLayersPerPacketlv'));
      const Nph = useSelector((state) => selectLV(state, 'Nph'));

      useEffect(() => {
        let packets = Math.ceil(Nph/n);
        dispatch(setLV({ key: 'Minpacketslv', value: packets }));
    }, [Nph, n]);
          
    const Minpacketslv = useSelector((state) => selectLV(state, 'Minpacketslv'));

        
  const [Nopack, setNopack] = useState(1);
  
  useEffect(() => {
    setNopack(Minpacketslv); // Sync when Minpacketslv updates
  }, [Minpacketslv]);

  let Changepack = (sign) => {
    setNopack(prevNopack => {
      if (sign === '+' && prevNopack < 4) return prevNopack + 1;
      if (sign === '-' && prevNopack > Minpacketslv) return prevNopack - 1;
      return prevNopack; // Keep the same value if conditions are not met
    });
    console.log("Current Nopack:", Nopack);
  };

  return (
    <>
      <div> n= {n.toFixed(2)}</div>
      {Nopack == 2 && <Packets2 />}
      {Nopack == 3 && <Packets3 />}
      {Nopack == 4 && <Packets4 />}
      <div>
        <button onClick={() => Changepack('+')}> increase insulation </button>
        <button onClick={() => Changepack('-')}> decrease insulation </button>
      </div>
    </>
  );
}
export default Hv3;