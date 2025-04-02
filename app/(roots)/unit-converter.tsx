import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity, View ,Text} from "react-native"


import React, { useState } from 'react';

type UnitSystem = 'metric' | 'imperial';

interface Measurement {
  value: number;
  metricUnit: string;
  imperialUnit: string;
  convertToMetric: (imperial: number) => number;
  convertToImperial: (metric: number) => number;
}

const UnitConverter: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');
  const [values, setValues] = useState({
    length: 0,
    weight: 0,
    temperature: 0,
    volume: 0
  });

  const measurements: Record<string, Measurement> = {
    length: {
      value: values.length,
      metricUnit: 'cm',
      imperialUnit: 'inches',
      convertToMetric: (inches) => inches * 2.54,
      convertToImperial: (cm) => cm / 2.54
    },
    weight: {
      value: values.weight,
      metricUnit: 'kg',
      imperialUnit: 'lbs',
      convertToMetric: (lbs) => lbs * 0.453592,
      convertToImperial: (kg) => kg * 2.20462
    }
    
  };

  const handleSystemChange = (newSystem: UnitSystem) => {
    if (newSystem !== unitSystem) {
      const newValues = { ...values };
      
      for (const key of Object.keys(values) as Array<keyof typeof values>) {
        if (newSystem === 'metric') {
          newValues[key] = measurements[key].convertToMetric(values[key]);
        } else {
          newValues[key] = measurements[key].convertToImperial(values[key]);
        }
      }
      
      setValues(newValues);
      setUnitSystem(newSystem);
    }
  };

  const handleValueChange = (
    type: keyof typeof values,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(event.target.value) || 0;
    setValues({ ...values, [type]: newValue });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Unit Converter</h1>
      
      <div className="mb-4">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${unitSystem === 'metric' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleSystemChange('metric')}
          >
            Metric
          </button>
          <button
            className={`px-4 py-2 rounded ${unitSystem === 'imperial' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleSystemChange('imperial')}
          >
            Imperial
          </button>
        </div>
      </div>

      {Object.entries(measurements).map(([key, measurement]) => (
        <div key={key} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1)} ({unitSystem === 'metric' ? measurement.metricUnit : measurement.imperialUnit})
          </label>
          <input
            type="number"
            value={values[key as keyof typeof values]}
            onChange={(e) => handleValueChange(key as keyof typeof values, e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </div>
  );
};

export default UnitConverter;