import { setHV, selectHV } from './../database/hvSlice';
import { useSelector, useDispatch } from 'react-redux';

import Taps from './Taps/Taps'
// dispatch(setLV({ key: 'Csalv', value: csa}));

function Hv1(){
    const dispatch = useDispatch();

    const voltagetaps = useSelector((state) => selectHV(state, 'voltagetaps'));

    // function voltagescalculator(){
    //     let newvoltages =[];
        
    //     if(voltagetaps.length == 7){
    //         for(let i=105.0;i>=90.0;i-=2.5){
    //             newvoltages.append(HV*(i/100))
    //         }
    //         return newvoltages;
    //     }
        
    //     else{
    //         for(let i=0;i < voltagetaps.length;i++){
    //             newvoltages.append(HV*(voltagetaps[i]/100));
    //         }
    //         return newvoltages;
    //     }
    //     assign the centertap voltage to redux
    //     set centertapvoltage = ;
        
    // }
    
    // function tempturnscalculator(voltages){
    //     let tempturns =[];
    //     for(int i = 0; i<voltages.length;i++){
    //         let turns = voltages[i]/VT;
    //         tempturns.push(turns);
    //     }
    //     return tempturns;
    // }
    
    // const tempturns = tempturnscalculator(voltages);
    
    // function averagestepcalculator(tempturns){
    //     let averagestep = 0.0;
    //     for(int i = 0; i<tempturns.length;i++){
    //         averagestep = averagestep + tempturns[i];
    //     }
    //     averagestep = averagestep/tempturns.length;
    //     averagestep = math.round(averagestep);
    
    //     //dispatch when finished
    
    //     return averagestep;
    // }
    
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

    return(
        <>
            <Taps/>
        </>
    )
}
export default Hv1;