import React from 'react'
import { ImageContainer } from './image.styles'
const Image = ({src}) => {
    return (
        <ImageContainer>
            <img src={src} alt=""/>
        </ImageContainer>
    )
}

export default Image;