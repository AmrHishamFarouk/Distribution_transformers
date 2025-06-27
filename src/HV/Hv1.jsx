import React, { useEffect } from 'react';

import { setHV, selectHV } from './../database/hvSlice';
import { setSpec, selectSpec } from './../database/specsSlice';

import { useSelector, useDispatch } from 'react-redux';
import Taps from './Taps/Taps';

function Hv1(){
    const dispatch = useDispatch();

    const Voltages = useSelector((state) => selectHV(state, 'Voltages'));
    const VT = useSelector((state) => selectSpec(state, 'VT'));
    const Turnshv = useSelector((state) => selectHV(state, 'Turnshv'));
    const actualVT = useSelector((state) => selectHV(state, 'actualVT'));
    const Tolerance = useSelector((state) => selectHV(state, 'Tolerance'));

    useEffect(() => {
  console.log('Voltages redux:', Voltages);
  console.log('VT redux:', VT);
  console.log('Turnshv redux:', Turnshv);
  console.log('actualVT redux:', actualVT);
  console.log('Tolerance redux:', Tolerance);
}, [Voltages, VT, Turnshv, actualVT, Tolerance]);

    //turns but decimal
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
        for(let i = 0; i<tempturns.length -1;i++){
            averagestep = averagestep +(tempturns[i]-tempturns[i+1]) ;
        }
        averagestep = averagestep/(tempturns.length-1);
        averagestep = Math.round(averagestep);
        dispatch(setHV({ key: 'Stephv', value: averagestep}));
        return averagestep;
    }
    
    const averagestep = averagestepcalculator(tempturns);
    

    function newturns(){
        const firstturns = Math.round(tempturns[0]);
        let turns = [firstturns];
        for(let i = 1;i <tempturns.length;i++){
            turns.push(turns[i-1]-averagestep);
        }
        dispatch(setHV({ key: 'Turnshv', value: turns}));
        return;
    }
    
    
    function calculateactualVT(){
        let actualVT = [];
        for(let i = 0;i < tempturns.length;i++){
            actualVT.push(Voltages[i]/Turnshv[i]);
        }
        dispatch(setHV({ key: 'actualVT', value: actualVT}));

    }
    
    
    function calculatetolerance(){
        let Tolerance = [];
        for(let i = 0;i < actualVT.length;i++){
          let result = (actualVT[i].toFixed(3)/VT.toFixed(3));
          console.log(result);
          console.log((result*100)-100);

            Tolerance.push((result.toFixed(3)-1)*100);
        }
        dispatch(setHV({ key: 'Tolerance', value: Tolerance}));

    }

      useEffect(() => {
        newturns()
        calculateactualVT()
        calculatetolerance()
        array1 = Voltages;
        array2 = Turnshv;
        array3 = actualVT;
        array4 = Tolerance;
        length = array1.length;

    }, [Voltages]); 

    //assigning arreys
  let array1 ;
  let array2 ;
  let array3 ;
  let array4 ;
  let length ;


    return(
        <>
          <Taps/>
          <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Voltages</th>
              <th>Turns</th>
              <th>v/t</th>
              <th>Tolerance</th>
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

