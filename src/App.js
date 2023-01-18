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
        style={{ textAlign: 'center', marginTop: '200px', fontSize: '1.5rem' }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          backgroundColor: '#' + color,
          width: 300,
          height: 300,
          margin: 'auto',

          borderRadius: '7px',
          border: '1px solid #00000030',
        }}
      >
        <p style={{ textAlign: 'center', paddingTop: 100 }}>
          Generated color: <br /> {'#' + color}
        </p>
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
            border: '1px solid #00000030',
            borderRadius: '7px',
            textAlign: 'center',
            width: 150,
            height: 30,
            backgroundColor: '##cdb9b914',
            boxShadow: '2px 3px 2px #888888',
            cursor: 'pointer',
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
