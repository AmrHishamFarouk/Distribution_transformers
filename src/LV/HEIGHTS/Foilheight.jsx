import React, { useEffect,useState } from 'react';
import { setGeneral, selectGeneral} from './../database/generalSlice';
import HeightFoil from '../../assets/heights/HeightFoil.png'
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Foilheight(){
  const dispatch = useDispatch();
  const Hmechlv = useSelector((state) => selectLV(state, 'Hmechlv'));
  const Heleclv = useSelector((state) => selectLV(state, 'Heleclv'));
  const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
  const Nph = useSelector((state) => selectLV(state, 'Nph'));
  const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
  const Hardboardlv = useSelector((state) => selectLV(state, 'Hardboardlv'));
  const Hcoil =  useSelector((state) => selectGeneral(state, 'Hcoil'));

  const [sliderValue, setSliderValue] = useState(1);

      dispatch(setLV({ key: 'Hmechlv', value: Wirelengthlv})); 
      dispatch(setLV({ key: 'Heleclv', value: Wirelengthlv}));
      dispatch(setLV({ key: 'Layerslv', value: Nph})); 
 
    const handleChange = (event) => {
      const newValue = Number(event.target.value);
      dispatch(setLV({ key: 'Hardboardlv', value: newValue}));
      const Hcoillv =  newValue + Hmechlv;
      dispatch(setGeneral({ key: 'Hcoil', value: Hcoillv }));
    };

    return(
        <>
          <label>Hmech = Helec = {Heleclv}</label>
          <img src={HeightFoil} alt="HeightFoil.png is missing"/>
          <h3>no. of layers:{Layerslv}</h3>
          <label>Extra hard board</label>
          <input type="range" min="1" max="50" value={Hardboardlv} onChange={handleChange} style={{ width: '50%' }}/>
          <h3>Extra hard board above and under: {Hardboardlv}</h3>
          <h3>Hcoil ={Hcoil}</h3>
        </>
  )
}
export default Foilheight;