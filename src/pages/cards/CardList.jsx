import React from "react";
import Herosection from "../../components/Herosection";
import { cards } from "../../data/DataCards";
import Card from "./Card"; 
import "../../styles/cards.scss";

const herobg = "assets/images/hero-cards.png";

function CardList() {
  return (
    <main className="cards-main-content">
      <Herosection title="Cards" description="Choise ur favorite card to organice info." bg={herobg} />
      <section className="cards-gallery">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </main>
  );
}

export default CardList;
