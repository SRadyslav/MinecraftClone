import { useEffect, useState } from "react"
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, glassImg, grassImg, logImg, woodImg } from '../images/images'

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    const textures = {
        dirt,
        grass,
        glass,
        wood,
        log
    }

    useEffect(() => {
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture) {
            setTexture(pressedTexture[0])
        }

    }, [dirt, grass, glass, wood, log, setTexture])

    useEffect(() => {
        const visibleTimeout = setTimeout(() => {
            setVisible(false)
        }, 200)
        setVisible(true)

        return () => { clearTimeout(visibleTimeout) }
    }, [activeTexture])

    return visible && (
        <div className="absolute objectCenter textureSelect">
            {Object.entries(images).map(([k, src]) => {
                return (<img key={k} src={src} alt={k} className={`${k === activeTexture ? 'active' : ''}`} />)
            })}
        </div>
    )
}