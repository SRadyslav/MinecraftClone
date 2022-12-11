import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80,80,20]} />
      </Canvas>
    </>
  );
}

export default App;
