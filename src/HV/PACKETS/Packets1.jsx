import doublepackets from '../../assets/packets/1packets.jpeg'

import { useDispatch } from 'react-redux';
import { setHV } from './../../database/hvSlice';



function Packets1() {
    const dispatch = useDispatch();
    dispatch(setHV({ key: 'Nocollingducthv', value: 0 }));
    
    function updatefirstpacket(value){
        dispatch(setHV({ key: 'Firstpackethv', value: value }));
    }

  return (
    <>
      <div>No. of layers</div>

      <div>
        <div>
          <div>
            <label>1st packet</label>
            <input name="myInput" placeholder="layers" onChange={(e) => updatefirstpacket(parseFloat(e.target.value))}/>
          </div>
        </div>
        <div><img src={doublepackets} alt='one packet'/></div>
      </div>
    </>
  );
}
export default Packets1;
