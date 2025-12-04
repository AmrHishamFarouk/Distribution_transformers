import React, { useRef, useMemo, useState, useCallback, useEffect } from 'react';
// MOCK IMPORTS for standalone running since external files are not available:
// import { setSpec } from './database/specsSlice';
// import { useDispatch } from 'react-redux';

// --- MOCK REDUX SETUP FOR STANDALONE RUNNING ---
// In a real application, you would use the imports above.
const MOCK_DISPATCH = (action) => {
  console.log('Action Dispatched (MOCK):', action.type, action.payload);
  // This mock function simulates updating state, showing what the real Redux action would carry.
};
const MOCK_USE_DISPATCH = () => MOCK_DISPATCH;
const MOCK_SET_SPEC = (payload) => ({ type: 'specs/setSpec', payload });
// -----------------------------------------------

// 1. Transformer Lookup Table (Source: User provided data)
// Po is No load losses (W). Pcc is load losses (W). Z is %Z. Maj is Magnetizing Current (assumed to be % of rated current).
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

// Standardized rated power values in kVA
const RATED_POWER_OPTIONS = Object.keys(TRANSFORMER_DATA_LOOKUP).map(k => parseInt(k, 10));
const DATALIST_ID = 'rated-power-options';

function Specs() {
  const dispatch = MOCK_USE_DISPATCH();

  // State to hold the current values of the fields
  const [currentSpecs, setCurrentSpecs] = useState(() => {
    // Initialize with default values, using the 1000 kVA rating data
    const defaultRating = 1000;
    const defaultData = TRANSFORMER_DATA_LOOKUP[defaultRating];
    
    // Convert W to kW for Po and Pcc
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
      Maj: defaultData.Maj, // Initialize Maj from lookup
    };
  });

  // References for all input fields
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
  
  // Handler for manual input changes on fields like Po, Pcc, Z, Maj, HV, LV, F
  const handleManualInputChange = useCallback((event) => {
    const { id, value } = event.target;
    // Update local state for the 'Current Value' display
    setCurrentSpecs(prev => ({ ...prev, [id]: parseFloat(value) || null }));
    // Note: The actual dispatch to the mock store only happens when 'Commit All Specifications' is pressed.
  }, []);

  // Handler for when the Rated Power input/datalist changes
  const handleRatedPowerChange = useCallback((event) => {
    const newRating = parseFloat(event.target.value);
    
    // 1. Always update the Ratedpower state and dispatch the new value
    setCurrentSpecs(prev => ({ ...prev, Ratedpower: newRating }));
    dispatch(MOCK_SET_SPEC({ key: 'Ratedpower', value: newRating }));
    
    // Check if the entered value is a standard rating (needs to be checked against the object keys)
    const newSpecsData = TRANSFORMER_DATA_LOOKUP[newRating];

    // 2. Only perform automatic updates if the entered value is a standard rating
    if (newSpecsData) {
        // Convert W to kW for display (as inputs use kW unit)
        const newPo_kW = (newSpecsData.Po / 1000).toFixed(3);
        const newPcc_kW = (newSpecsData.Pcc / 1000).toFixed(3);
        
        // Update the references/inputs directly (since they are uncontrolled)
        if (inputRefs.Po.current) inputRefs.Po.current.value = newPo_kW;
        if (inputRefs.Pcc.current) inputRefs.Pcc.current.value = newPcc_kW;
        if (inputRefs.Z.current) inputRefs.Z.current.value = newSpecsData.Z;
        if (inputRefs.Maj.current) inputRefs.Maj.current.value = newSpecsData.Maj;

        // Update the local state for the 'Current' display for automatic fields
        setCurrentSpecs(prev => ({
          ...prev,
          Po: parseFloat(newPo_kW),
          Pcc: parseFloat(newPcc_kW),
          Z: newSpecsData.Z,
          Maj: newSpecsData.Maj,
        }));
        
        // Dispatch the changes for automatic fields to Redux (MOCK)
        dispatch(MOCK_SET_SPEC({ key: 'Po', value: parseFloat(newPo_kW) }));
        dispatch(MOCK_SET_SPEC({ key: 'Pcc', value: parseFloat(newPcc_kW) }));
        dispatch(MOCK_SET_SPEC({ key: 'Z', value: newSpecsData.Z }));
        dispatch(MOCK_SET_SPEC({ key: 'Maj', value: newSpecsData.Maj }));
    } 
    // If it's a custom rating, Po, Pcc, Z, and Maj remain whatever the user last set them to, allowing manual overrides.

  }, [dispatch, inputRefs]);


  // Generic function to handle the final 'Commit Specs' update
  const updateValues = useCallback(() => {
    const updatedValues = {};
    
    // Collect all values from refs and dispatch them
    Object.keys(inputRefs).forEach((key) => {
      const currentRef = inputRefs[key].current;

      if (currentRef) {
        // Use parseFloat to ensure numbers are dispatched, and handle empty strings gracefully
        const value = currentRef.value === '' ? null : parseFloat(currentRef.value);
        updatedValues[key] = value;
        
        // Dispatch the action to Redux (using MOCK_SET_SPEC here)
        dispatch(MOCK_SET_SPEC({ key, value }));
      }
    });

    // Update local state (for mock purposes)
    setCurrentSpecs(prev => ({ ...prev, ...updatedValues }));
    
  }, [dispatch, inputRefs]);

  // Configuration for input fields
  const inputConfig = useMemo(() => [
    // FIX: Added onChange: handleRatedPowerChange
    { key: 'Ratedpower', label: 'Rated Power', type: 'datalist_input', defaultValue: currentSpecs.Ratedpower, options: RATED_POWER_OPTIONS, unit: 'kVA', onChange: handleRatedPowerChange },
    // Added handleManualInputChange to all other fields
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
          /* Basic container for structure and readability */
          .specs-container {
            /* Adjusted for responsiveness */
            width: 95%; /* Takes up most of the available width */
            max-width: 800px; /* Limits size on very large screens */
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }

          /* Header Styling */
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

          /* Two-Column Grid Layout for Inputs */
          .input-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Two equal columns */
            gap: 20px 30px; /* Vertical and horizontal gap */
            margin-bottom: 20px;
          }

          /* Mobile responsiveness: revert to single column on small screens */
          @media (max-width: 600px) {
            .input-grid {
                grid-template-columns: 1fr;
                gap: 0; 
            }
            .field-group {
              margin-bottom: 15px !important; /* Re-apply margin for vertical spacing on mobile */
            }
          }

          /* General Label and Field Layout */
          .field-group {
            margin-bottom: 0; /* Handled by grid gap on larger screens */
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

          /* Input Styling (with borders as requested) */
          .input-wrapper {
            display: flex;
            border: 1px solid #aaa;
            border-radius: 4px;
            overflow: hidden; /* To keep the unit span inside the border */
          }

          .input-wrapper input {
            flex-grow: 1;
            padding: 8px 10px;
            border: none;
            outline: none;
            font-size: 1em;
            width: 100%; /* Ensure input takes full width of its flex container */
          }
          
          .input-wrapper span {
            padding: 8px 10px;
            background-color: #eee;
            color: #555;
            font-size: 0.9em;
            pointer-events: none; /* Make sure the unit text doesn't interfere with the input */
          }

          /* Button Styling */
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

          /* Footer and Helper Text */
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
        
        {/* Helper message for new automatic behavior */}
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
                {/* Display current value for quick feedback */}
                <span className="current-value">
                  {currentSpecs[config.key] !== null ? `${currentSpecs[config.key]} ${config.unit}` : 'N/A'}
                </span>
              </label>
              
              {/* Conditional rendering for Datalist Input vs. standard Input */}
              <div className="input-wrapper">
                <input
                  id={config.key}
                  ref={inputRefs[config.key]}
                  defaultValue={config.defaultValue}
                  onChange={config.key === 'Ratedpower' ? handleRatedPowerChange : handleManualInputChange} // Now correctly using the appropriate handler
                  placeholder={config.placeholder}
                  type="number" 
                  step="any"
                  list={config.type === 'datalist_input' ? DATALIST_ID : undefined}
                />
                
                {/* The Datalist provides the dropdown capability */}
                {config.type === 'datalist_input' && (
                  <datalist id={DATALIST_ID}>
                    {config.options.map(option => (
                      <option key={option} value={option}></option>
                    ))}
                  </datalist>
                )}

                {/* Unit label inside the input for better context */}
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
            Note: This is a mock interface. Actions are logged to the console instead of a database.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Specs;
