import React, { useRef, useMemo, useState, useCallback, useEffect } from 'react';
// REMOVE THE MOCK IMPORTS AND USE REAL ONES:
import { setSpec } from './database/specsSlice';
import { useDispatch } from 'react-redux';

// REMOVE ALL MOCK REDUX SETUP:
// const MOCK_DISPATCH = (action) => {
//   console.log('Action Dispatched (MOCK):', action.type, action.payload);
// };
// const MOCK_USE_DISPATCH = () => MOCK_DISPATCH;
// const MOCK_SET_SPEC = (payload) => ({ type: 'specs/setSpec', payload });

// Keep the transformer data lookup (unchanged)
const TRANSFORMER_DATA_LOOKUP = {
  50:    { Po: 168, Pcc: 875, Z: 4.0, Maj: 1 },
  63:    { Po: 224, Pcc: 1260, Z: 4.0, Maj: 1 },
  100:   { Po: 272, Pcc: 1505, Z: 4.0, Maj: 1 },
  160:   { Po: 384, Pcc: 2170, Z: 4.0, Maj: 1 },
  200:   { Po: 456, Pcc: 2520, Z: 4.0, Maj: 2 },
  300:   { Po: 576, Pcc: 3815, Z: 4.0, Maj: 3 },
  400:   { Po: 638, Pcc: 4638, Z: 4.0, Maj: 3 },
  500:   { Po: 700, Pcc: 5460, Z: 4.0, Maj: 4 },
  630:   { Po: 825, Pcc: 6430, Z: 4.0, Maj: 5 },
  800:   { Po: 1015, Pcc: 7700, Z: 5.0, Maj: 5 },
  1000:  { Po: 1222, Pcc: 9450, Z: 5.0, Maj: 5 },
  1250:  { Po: 1500, Pcc: 11700, Z: 5.0, Maj: 5 },
  1500:  { Po: 1785, Pcc: 13860, Z: 6.0, Maj: 6 },
  1600:  { Po: 1950, Pcc: 14900, Z: 6.0, Maj: 6 },
  2000:  { Po: 2736, Pcc: 15750, Z: 6.0, Maj: 7 },
  2500:  { Po: 3400, Pcc: 16300, Z: 6.0, Maj: 8 },
  3000:  { Po: 3950, Pcc: 19750, Z: 7.0, Maj: 8 },
  3500:  { Po: 4075, Pcc: 22850, Z: 7.0, Maj: 9 },
  4000:  { Po: 4200, Pcc: 25950, Z: 7.0, Maj: 10 },
  5000:  { Po: 5000, Pcc: 31500, Z: 7.0, Maj: 10 },
};

const RATED_POWER_OPTIONS = Object.keys(TRANSFORMER_DATA_LOOKUP).map(k => parseInt(k, 10));
const DATALIST_ID = 'rated-power-options';

function Specs() {
  // USE REAL REDUX DISPATCH HOOK
  const dispatch = useDispatch();

  // State to hold the current values of the fields (unchanged)
  const [currentSpecs, setCurrentSpecs] = useState(() => {
    const defaultRating = 1000;
    const defaultData = TRANSFORMER_DATA_LOOKUP[defaultRating];
    
    const Po_kW = (defaultData.Po / 1000).toFixed(3); 
    const Pcc_kW = (defaultData.Pcc / 1000).toFixed(3); 

    return {
      Ratedpower: defaultRating,
      HV: 10.5,
      LV: 0.4,
      Po: parseFloat(Po_kW),
      Pcc: parseFloat(Pcc_kW),
      Z: defaultData.Z,
      F: 50,
      Maj: defaultData.Maj,
    };
  });

  // References for all input fields (unchanged)
  const inputRefs = {
    Ratedpower: useRef(null),
    HV: useRef(null),
    LV: useRef(null),
    Po: useRef(null),
    Pcc: useRef(null),
    Z: useRef(null),
    F: useRef(null),
    Maj: useRef(null),
  };
  
  // Handler for manual input changes (MODIFIED: Use real dispatch)
  const handleManualInputChange = useCallback((event) => {
    const { id, value } = event.target;
    const numValue = parseFloat(value) || null;
    
    // Update local state
    setCurrentSpecs(prev => ({ ...prev, [id]: numValue }));
    
    // DISPATCH TO REDUX IMMEDIATELY
    dispatch(setSpec({ key: id, value: numValue }));
  }, [dispatch]);

  // Handler for Rated Power changes (MODIFIED: Use real dispatch)
  const handleRatedPowerChange = useCallback((event) => {
    const newRating = parseFloat(event.target.value);
    
    // 1. Update state and dispatch Ratedpower
    setCurrentSpecs(prev => ({ ...prev, Ratedpower: newRating }));
    dispatch(setSpec({ key: 'Ratedpower', value: newRating }));
    
    // Check if it's a standard rating
    const newSpecsData = TRANSFORMER_DATA_LOOKUP[newRating];

    // 2. Update automatic fields if it's a standard rating
    if (newSpecsData) {
        const newPo_kW = (newSpecsData.Po / 1000).toFixed(3);
        const newPcc_kW = (newSpecsData.Pcc / 1000).toFixed(3);
        
        // Update refs
        if (inputRefs.Po.current) inputRefs.Po.current.value = newPo_kW;
        if (inputRefs.Pcc.current) inputRefs.Pcc.current.value = newPcc_kW;
        if (inputRefs.Z.current) inputRefs.Z.current.value = newSpecsData.Z;
        if (inputRefs.Maj.current) inputRefs.Maj.current.value = newSpecsData.Maj;

        // Update local state
        setCurrentSpecs(prev => ({
          ...prev,
          Po: parseFloat(newPo_kW),
          Pcc: parseFloat(newPcc_kW),
          Z: newSpecsData.Z,
          Maj: newSpecsData.Maj,
        }));
        
        // DISPATCH AUTOMATIC FIELDS TO REDUX
        dispatch(setSpec({ key: 'Po', value: parseFloat(newPo_kW) }));
        dispatch(setSpec({ key: 'Pcc', value: parseFloat(newPcc_kW) }));
        dispatch(setSpec({ key: 'Z', value: newSpecsData.Z }));
        dispatch(setSpec({ key: 'Maj', value: newSpecsData.Maj }));
    }

  }, [dispatch, inputRefs]);

  // Generic function to handle the final 'Commit Specs' update (MODIFIED: Use real dispatch)
  const updateValues = useCallback(() => {
    const updatedValues = {};
    
    // Collect all values from refs and dispatch them
    Object.keys(inputRefs).forEach((key) => {
      const currentRef = inputRefs[key].current;

      if (currentRef) {
        const value = currentRef.value === '' ? null : parseFloat(currentRef.value);
        updatedValues[key] = value;
        
        // DISPATCH TO REDUX USING REAL ACTION
        dispatch(setSpec({ key, value }));
      }
    });

    // Update local state
    setCurrentSpecs(prev => ({ ...prev, ...updatedValues }));
    
  }, [dispatch, inputRefs]);

  // Configuration for input fields (unchanged)
  const inputConfig = useMemo(() => [
    { key: 'Ratedpower', label: 'Rated Power', type: 'datalist_input', defaultValue: currentSpecs.Ratedpower, options: RATED_POWER_OPTIONS, unit: 'kVA', onChange: handleRatedPowerChange },
    { key: 'Po', label: 'Po (No-Load Loss)', placeholder: '1.222', type: 'input', defaultValue: currentSpecs.Po, unit: 'kW', onChange: handleManualInputChange }, 
    { key: 'Pcc', label: 'Pcc (Load Loss)', placeholder: '9.450', type: 'input', defaultValue: currentSpecs.Pcc, unit: 'kW', onChange: handleManualInputChange }, 
    { key: 'Z', label: 'Z% (Impedance)', placeholder: '5', type: 'input', defaultValue: currentSpecs.Z, unit: '%', onChange: handleManualInputChange },
    { key: 'Maj', label: 'Maj (Exciting Current)', placeholder: '5', type: 'input', defaultValue: currentSpecs.Maj, unit: '%', onChange: handleManualInputChange }, 
    { key: 'HV', label: 'H.V.', placeholder: '10.5', type: 'input', defaultValue: currentSpecs.HV, unit: 'kV', onChange: handleManualInputChange },
    { key: 'LV', label: 'L.V.', placeholder: '0.4', type: 'input', defaultValue: currentSpecs.LV, unit: 'kV', onChange: handleManualInputChange },
    { key: 'F', label: 'Frequency', placeholder: '50', type: 'input', defaultValue: currentSpecs.F, unit: 'Hz', onChange: handleManualInputChange },
  ], [currentSpecs, handleRatedPowerChange, handleManualInputChange]);


  return (
    <div>
      <style>
        {`
          /* (CSS unchanged - same as before) */
          .specs-container {
            width: 95%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }

          .specs-container h1 {
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
          .specs-container h2 {
            color: #555;
            font-size: 1.1em;
            margin-bottom: 20px;
          }

          .input-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 30px;
            margin-bottom: 20px;
          }

          @media (max-width: 600px) {
            .input-grid {
                grid-template-columns: 1fr;
                gap: 0; 
            }
            .field-group {
              margin-bottom: 15px !important;
            }
          }

          .field-group {
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
          }
          
          .field-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            margin-bottom: 5px;
          }

          .current-value {
            font-size: 0.85em;
            color: #666;
          }

          .input-wrapper {
            display: flex;
            border: 1px solid #aaa;
            border-radius: 4px;
            overflow: hidden;
          }

          .input-wrapper input {
            flex-grow: 1;
            padding: 8px 10px;
            border: none;
            outline: none;
            font-size: 1em;
            width: 100%;
          }
          
          .input-wrapper span {
            padding: 8px 10px;
            background-color: #eee;
            color: #555;
            font-size: 0.9em;
            pointer-events: none;
          }

          .commit-button {
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background-color: #007bff;
            color: white;
            border: 1px solid #0056b3;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1.1em;
            transition: background-color 0.2s;
          }

          .commit-button:hover {
            background-color: #0056b3;
          }

          .helper-text {
            padding: 10px;
            border: 1px dashed #ccc;
            background-color: #f0f0f0;
            margin-bottom: 20px;
            border-radius: 4px;
            font-size: 0.9em;
          }
          .footer-text {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #eee;
            font-size: 0.8em;
            color: #888;
            text-align: center;
          }
        `}
      </style>

      <div className="specs-container">
        <header>
            <h1>
              Transformer Specs
            </h1>
            <h2>
              Design Input (Dyn11 Vector Group)
            </h2>
        </header>
        
        <p className="helper-text">
          The calculation of this app is not right as this is just a preview
        </p>

        <div className="input-grid">
          {inputConfig.map((config) => (
            <div key={config.key} className="field-group">
              <label htmlFor={config.key} className="field-label">
                <div>
                    <span>{config.label}</span>
                </div>
                <span className="current-value">
                  {currentSpecs[config.key] !== null ? `${currentSpecs[config.key]} ${config.unit}` : 'N/A'}
                </span>
              </label>
              
              <div className="input-wrapper">
                <input
                  id={config.key}
                  ref={inputRefs[config.key]}
                  defaultValue={config.defaultValue}
                  onChange={config.onChange} // Now correctly using the appropriate handler
                  placeholder={config.placeholder}
                  type="number" 
                  step="any"
                  list={config.type === 'datalist_input' ? DATALIST_ID : undefined}
                />
                
                {config.type === 'datalist_input' && (
                  <datalist id={DATALIST_ID}>
                    {config.options.map(option => (
                      <option key={option} value={option}></option>
                    ))}
                  </datalist>
                )}

                <span>
                  {config.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={updateValues}
          className="commit-button"
        >
          Commit All Specifications
        </button>
        
        <footer>
          <p className="footer-text">
            Note: This interface now dispatches to Redux store.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Specs;