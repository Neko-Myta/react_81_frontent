
import { AnimalCardWrapper, Title , Text, Image } from "./styles";

import type { AnimalCardProps } from "./types";



function AnimalCard({ name, species, img }: AnimalCardProps) { 

  return (
    <AnimalCardWrapper>
      <Image src={img} alt={`${name} the ${species}`} />
      <Title>{name}</Title>
      <Text>{species}</Text>
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
