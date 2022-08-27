import React from "react";
import Container from "./styles";

interface IItemNavBarrops {
  status: "Active" | "Disabled" | "Normal";
  text: string;
  element: React.ReactNode;
}

const ItemNavBar: React.FC<IItemNavBarrops> = ({ status, text, element }) => (
  <Container status={status}>
    <div>{element}</div>
    <p>{text}</p>
  </Container>
);

export default ItemNavBar;
