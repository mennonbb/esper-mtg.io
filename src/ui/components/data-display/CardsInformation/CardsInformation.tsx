import React from "react";
import {
  CardsContainer,
  CardsName,
  CardsDescription,
  CardsCost,
  CardsImage,
  CardsType,
} from "./CardsInformation.style";

interface CardsInformationProps {
  image: string;
  name: string;
  cost: number;
  cardType: string;
  cardSubtype: string;
  description: string;
  colors: string;
}

const CardsInformation: React.FC<CardsInformationProps> = ({
  image,
  name,
  cost,
  cardType,
  description,
  cardSubtype,
  colors,
}) => {
  return (
    <CardsContainer>
      <CardsImage src={image} />
      <CardsName>{name}</CardsName>
      <CardsCost> {cost} </CardsCost>
      <CardsType>
        {cardType}, {cardSubtype}
      </CardsType>
      <CardsDescription> {description} </CardsDescription>
    </CardsContainer>
  );
};

export default CardsInformation;
