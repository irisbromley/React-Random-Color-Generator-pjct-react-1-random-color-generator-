import { useState } from 'react';

export const useGenerateRandomColor = () => {
  const [color, setColor] = useState('');
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };
};
export default function App() {
  const { color, generateColor } = useGenerateRandomColor();
  console.log(color);
  return (
    <div>
      <button
        onClick={() => {
          generateColor();
        }}
      >
        Generate
      </button>
      <div
        style={{
          backgroundColor: '#' + color,
          width: 150,
          height: 150,
          margin: 'auto',
        }}
      >
        <p>Generated color: {'#' + color}</p>
      </div>
    </div>
  );
}
