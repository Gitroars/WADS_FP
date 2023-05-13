import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/books/fantasy.jpg",
    "/images/books/litrpg.jpg",
    "/images/books/scifi.jpg",
    "/images/books/romance.jpg",
    "/images/books/fantasy.jpg",
    "/images/books/litrpg.jpg",
    "/images/books/scifi.jpg",
    "/images/books/romance.jpg",
  ];
  return (
    <Card>
      <Card.Img crossOrigin='anonymous' variant='top' src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
