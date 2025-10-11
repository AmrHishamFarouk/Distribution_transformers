import Foilheight from './HEIGHTS/Foilheight';
import Flatheight from './HEIGHTS/Flatheight';
import Roundheight from './HEIGHTS/Roundheight';
import { useSelector} from 'react-redux';
import { selectLV } from './../database/lvSlice';

function Heightlv() {
  const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));

  return (
    <>
      {Wiretypelv == 'Flat' && <Flatheight/>}
      {Wiretypelv == 'Round' && <Roundheight/>}
      {Wiretypelv == 'Foil' && <Foilheight/>}
    </>
  );
}
export default Heightlv;
