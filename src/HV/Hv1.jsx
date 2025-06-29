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


    let tempturns;
    let averagestep ;
    let turns;
    useEffect(() => {
      tempturns = tempturnscalculator(Voltages);
      averagestep = averagestepcalculator(tempturns);
    }, [Voltages]);

    useEffect(() => {
      
    }, [tempturns]);

    useEffect(() => {
      turns = newturns();
    }, [averagestep]);
      
    useEffect(() => {
      calculatetolerance();
    }, [turns]);
      

    //turns but decimal
    function tempturnscalculator(Voltages){
        let tempturns =[];
        for(let i = 0; i<Voltages.length;i++){
            let turns = Voltages[i]/VT;
            tempturns.push(turns);
        }
          console.log('temp turns:', tempturns);

        
        return tempturns;
    }
    
    
    
    function averagestepcalculator(tempturns){
      averagestep = 0.0;
        for(let i = 0; i<tempturns.length -1;i++){
          console.log('tempturns:', tempturns);

            averagestep = averagestep +(tempturns[i]-tempturns[i+1]) ;
console.log('averagestep:', averagestep);

        }
        averagestep = averagestep/(tempturns.length-1);
        averagestep = Math.round(averagestep);
        dispatch(setHV({ key: 'Stephv', value: averagestep}));
        console.log('averagestep:', averagestep);

        return averagestep;
    }
    
    
    


    function newturns(){
        const firstturns = Math.round(tempturns[0]);
        console.log("averagestep",averagestep);
        let turns = [firstturns];
        for (let i = 1; i < tempturns.length; i++) {
          turns.push(turns[i - 1] - averagestep);
        }
        dispatch(setHV({ key: 'Turnshv', value: turns}));
        console.log(' turns:', turns);

        return turns;
    }
    
    
    function calculateactualVT(){
        let actualVT = [];
        for(let i = 0;i < tempturns.length;i++){
            actualVT.push(Voltages[i]/Turnshv[i]);
        }
        dispatch(setHV({ key: 'actualVT', value: actualVT}));
        console.log(' actualVT:', actualVT);
        return actualVT;
    }
    
    
    function calculatetolerance(){
        let Tolerance = [];
        for(let i = 0;i < actualVT.length;i++){
          let result = (parseFloat(actualVT[i])/parseFloat(VT));
          Tolerance.push(parseFloat(((result * 100) - 100).toFixed(4)));
        }
        dispatch(setHV({ key: 'Tolerance', value: Tolerance}));
        return Tolerance;
    }


  let array1 ;
  let array2 ;
  let array3 ;
  let array4 ;
  let length ;

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

