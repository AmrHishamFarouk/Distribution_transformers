import { setHV, selectHV } from './../database/hvSlice';
import { setSpec, selectSpec } from './../database/specsSlice';

import { useSelector, useDispatch } from 'react-redux';
import Taps from './Taps/Taps';

function Hv1(){
    const dispatch = useDispatch();

    const Voltages = useSelector((state) => selectHV(state, 'Voltages'));
    const VT = useSelector((state) => selectSpec(state, 'VT'));
    
    function tempturnscalculator(Voltages){
        let tempturns =[];
        for(let i = 0; i<Voltages.length;i++){
            let turns = Voltages[i]/VT;
            tempturns.push(turns);
        }
        return tempturns;
    }
    
    const tempturns = tempturnscalculator(Voltages);
    
    function averagestepcalculator(tempturns){
        let averagestep = 0.0;
        for(let i = 0; i<tempturns.length;i++){
            averagestep = averagestep + tempturns[i];
        }
        averagestep = averagestep/tempturns.length;
        averagestep = Math.round(averagestep);
    
        dispatch(setHV({ key: 'Stephv', value: averagestep}));
        return averagestep;
    }
    
    // const averagestep = averagestepcalculator(voltages);
    
    // const firstturns = tempturns[0].round;
    
    // let turns = [firstturns];
    
    // function newturns(){
    //     for(int i = 1;i < (tempturns.length-1);i++){
    //         turns.append(turns[i-1]+averagestep);
    //     }
    
    //     //dispatch when finished
    //     return;
    // }
    
    
    // actualVT = [];
    
    // function calculateactualVT(){
    //     for(int i = 0;i < (tempturns.length-1);i++){
    //         actualVT.append(voltages[i]/turns[i]);
    //     }
    //     //dispatch when finished
    // }
    
    // Tolerance = [];
    
    // function calculatetolerance(){
    //     for(int i = 0;i < (actualVT.length-1);i++){
    //         Tolerance.append((actualVT[i]/VT[i])-1);
    //     }
    //     //dispatch when finished
    // }



    //assigning arreys
  const array1 = ['A1', 'A2', 'A3'];
  const array2 = ['B1', 'B2', 'B3'];
  const array3 = ['C1', 'C2', 'C3'];
  const array4 = ['D1', 'D2', 'D3'];

  const length = array1.length;


    return(
        <>
            <Taps/>

            <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Array 1</th>
          <th>Array 2</th>
          <th>Array 3</th>
          <th>Array 4</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length }).map((_, i) => (
          <tr key={i}>
            <td>{array1[i]}</td>
            <td>{array2[i]}</td>
            <td>{array3[i]}</td>
            <td>{array4[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
        </>
    )
}
export default Hv1;

