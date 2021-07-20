import React from "react";

const Home = ({
  concept,
  location,
  subscribe1,
  subscribe2,
  header,
  village,
  forest,
  infrastructure,
  building,
  plans,
  imagesGrid,
  subscribe3,
  maps,
  contact,
}) => {
  return (
    <div className="screen home">
      {header}
      {concept}
      {location}
      {subscribe1}
      {village}
      {forest}
      {plans}
      {subscribe2}
      {infrastructure}
      {imagesGrid}
      {subscribe3}
      {building}
      {maps}
      {contact}
    </div>
  );
};

export default Home;
