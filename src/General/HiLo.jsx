import { setHilo, selectHilo } from '../database/hiloSlice';
import { useSelector, useDispatch } from 'react-redux';

function HiLo(){
    const dispatch = useDispatch();

    const Thickhilo =  useSelector((state) => selectHilo(state, 'Thickhilo'));
    dispatch(setHilo({ key: 'Фinternalradial', value: Фinternalradial}));
    // Canallvhilo: 0.0,
    // Psphilo: 0.0,
    // Canalhvhilo: 0.0,
    // Thickhilo: 0.0,
    // Radialexternalhilo: 0.0,
    // Axialexternalhilo: 0.4,
    // Dmeanhilo: 0.0,
    // Dmhilo: 0.0,

    return(
        <>
        <h1>Thickness HI-LO : {Thickhilo}</h1>

    
     <div>
         <p>Φ HI-LO = {Фinternalradial}/{Фinternalaxial} Ξ {Фexternalradial} /{Фexternalaxial}</p>
    </div>
    
     <div>
     <strong>For Ux:</strong>
     <p>Dmtr = {Dmlv}</p>
     </div>
        </>
    )
}
export default HiLo;