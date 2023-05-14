import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin='anonymous'
          className='d-block w-100'
          style={{ height: "350px", objectFit: "cover" }}
          src='/images/carousel/carousel-1.j
          
          pg'
          alt='First slide'
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>Rogue Empress: A Space Opera Adventure</h3>
          </LinkContainer>

          <p>
            Join Kira in a space opera adventure to overthrow a corrupt empress.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: "350px", objectFit: "cover" }}
          src='/images/carousel/carousel-2.png'
          alt='Second slide'
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>The Spellbound Odyssey</h3>
          </LinkContainer>
          <p>
            Follow Alice on a journey of magic and danger in a historical
            fantasy world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: "350px", objectFit: "cover" }}
          src='/images/carousel/carousel-3.png'
          alt='Third slide'
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to='/product-details'>
            <h3>The Last Survivor: A Post-Apocalyptic Thriller</h3>
          </LinkContainer>
          <p>
            Survive in a post-apocalyptic world with Maya as she searches for
            other survivors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
