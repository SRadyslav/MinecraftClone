import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [
        {
            key: nanoid(),
            position: [1, 0.5, 2],
            texture: 'dirt'
        },
        {
            key: nanoid(),
            position: [2, 0.5, 2],
            texture: 'log'
        },
    ],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev,
                {
                    key: nanoid(),
                    position: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: () => { },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))