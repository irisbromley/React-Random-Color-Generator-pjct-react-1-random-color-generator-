import { useState } from 'react';

export const useGenerateRandomColor = () => {
  const [color, setColor] = useState('');
  const generateColor = () => {
    // make a random number and use the last 6 digits
    setColor(Math.random().toString(16).slice(-6));
  };
  return { color, generateColor };
};
export default function App() {
  const { color, generateColor } = useGenerateRandomColor('');
  console.log(color);
  return (
    <div>
      <h1
        style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.5rem' }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          backgroundColor: '#' + color,
          width: 300,
          height: 190,
          margin: 'auto',

          borderRadius: '7px',
          border: '1px solid #00000030',
          textAlign: 'center',
          paddingTop: 110,
        }}
      >
        Generated Color: <br /> {'#' + color}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
        }}
      >
        <button
          style={{
            border: '2px solid #0b1cff',
            borderRadius: '7px',
            textAlign: 'center',
            width: 150,
            height: 30,
            cursor: 'pointer',
            backgroundColor: 'white',
          }}
          onClick={() => {
            generateColor();
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
