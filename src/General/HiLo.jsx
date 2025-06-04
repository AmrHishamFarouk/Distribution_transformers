import { setHilo, selectHilo } from '../database/hiloSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';

function HiLo(){
    const dispatch = useDispatch();
    const Фexternalradiallv =  useSelector((state) => selectLV(state, 'Фexternalradial'));
    const Фexternalaxiallv =  useSelector((state) => selectLV(state, 'Фexternalaxial'));
    const Thickhilo =  useSelector((state) => selectHilo(state, 'Thickhilo'));
    const Radialexternalhilo =  useSelector((state) => selectHilo(state, 'Radialexternalhilo'));
    const Axialexternalhilo =  useSelector((state) => selectHilo(state, 'Axialexternalhilo'));
    const Dmhilo =  useSelector((state) => selectHilo(state, 'Dmhilo'));


    function Changehilo(sign){
          if (sign === '+' && Thickhilo < 16.5){
            dispatch(setHilo({ key: 'Thickhilo', value: Thickhilo + 2}));
            return ;
          } 
          if (sign === '-' && Thickhilo > 8.5){
            dispatch(setHilo({ key: 'Thickhilo', value: Thickhilo - 2}));
            return ;
          } 
          return Thickhilo;    
      };

      useEffect(() => {
        let Radialexternalhilo = Фexternalradiallv+((2*Thickhilo)+(2*0.35))

        dispatch(setHilo({ key: 'Radialexternalhilo', value: Thickhilo + 2}));
        dispatch(setHilo({ key: 'Axialexternalhilo', value: Thickhilo + 2}));
  

    }, [Thickhilo]);

    return(
        <>
        <h1>Thickness HI-LO : {Thickhilo}</h1>
    
     <div>
         <p>Φ HI-LO = {Фexternalradiallv}/{Фexternalaxiallv} Ξ {Radialexternalhilo} /{Axialexternalhilo}</p>
    </div>
    
     <div>
     <strong>For Ux:</strong>
     <p>Dmtr = {Dmlv}</p>
     </div>
     <button onClick={() => Changehilo('+')}> increase Thickness </button>
     <button onClick={() => Changehilo('-')}> decrease Thickness </button>
        </>
    )
}
export default HiLo;