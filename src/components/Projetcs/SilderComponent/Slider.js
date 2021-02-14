import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
  border: 3px solid red;
  height: 100vh
 
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const Slide = styled.div`
  border: 3px solid green;
  height: 10px;
  width: 10px;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

const ImageSLider = ( {images =[], ...props}) => {
  console.log("images" , images)
  return (
    <Wrapper {...props}>
      {images.map((image, index) => {
        return (
       <Slide key={index} style={{backgroundImage: `url(${image})`}} >
         <img src={image} style={{backgroundPosition: "cover", backgroundSize: "cover"}} />
       </Slide>

        )

      })}

    </Wrapper>
  )
}

export default ImageSLider; 