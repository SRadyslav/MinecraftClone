import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useStore } from '../hooks/useStore'
import { useState } from 'react'


export const Cube = ({ position, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const [addCube, removeCube] = useStore(state => [state.addCube, state.removeCube])

    const activeTexture = textures[texture + "Texture"]

    return (
        <mesh
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
            ref={ref} onClick={e => {
                e.stopPropagation()
                const { x, y, z } = ref.current.position
                const clickedFace = Math.floor(e.faceIndex / 2)
                // face of the cube has actually two triangular shapes that covers the face. So it's not the full square it't two triangulars that together cover the square face so instead of 6 faces it has 12 faces so we fixed it
                if (e.altKey) {
                    removeCube(x, y, z)
                    return
                }
                else if (clickedFace === 0) {
                    addCube(x + 1, y, z)
                    return
                }
                else if (clickedFace === 1) {
                    addCube(x - 1, y, z)
                    return
                }
                else if (clickedFace === 2) {
                    addCube(x, y + 1, z)
                    return
                }
                else if (clickedFace === 3) {
                    addCube(x, y - 1, z)
                    return
                }
                else if (clickedFace === 4) {
                    addCube(x, y, z + 1)
                    return
                }
                else if (clickedFace === 5) {
                    addCube(x, y, z - 1)
                    return
                }
            }} >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial
                color={isHovered ? "grey" : "white"}
                map={activeTexture} attach="material"
                transparent={true}
                opacity={texture === 'glass' ? 0.6 : 1}
            />
        </mesh>
    )
}