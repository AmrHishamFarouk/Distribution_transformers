import onepacket from '../../assets/packets/1packets.jpeg'
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';


function Packets1() {
    const dispatch = useDispatch();
    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));
    const Layershv = useSelector((state) => selectHV(state, 'Layershv'));
    const layout = useSelector((state) => selectHV(state, 'Layouthv'));

    dispatch(setHV({ key: 'Nocollingducthv', value: 0 }));
    dispatch(setHV({ key: 'Firstpackethv', value: Layershv }));
    const Packets = [{ duct1: "no", duct2: "partial", layers: Layershv }]
    dispatch(setHV({ key: 'Layouthv', value: Packets }));

  return (
    <>
      <div>No. of layers</div>
      <h3>{Layershv}</h3>
      <div><img src={onepacket} alt='one packet'/></div>
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </>
  );
}
export default Packets1;