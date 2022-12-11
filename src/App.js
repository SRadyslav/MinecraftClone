import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from "./components/FPV"


function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80,80,20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
      <div className='absolute objectCenter'>+</div>
    </>
  );
}

export default App;
