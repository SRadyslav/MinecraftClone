import { TextureLoader } from "three";

import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'



const dirtTexture = TextureLoader(dirtImg)
const grassTexture = TextureLoader(grassImg)
const glassTexture = TextureLoader(glassImg)
const woodTexture = TextureLoader(woodImg)
const logTexture = TextureLoader(logImg)

export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture
}