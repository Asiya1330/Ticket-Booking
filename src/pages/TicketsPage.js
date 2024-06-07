import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import TicketCard from "../components/TicketCard";
import Seats from "../components/Seats";

const TicketsPage = () => {
  const [cardList, setCardList] = useState([]);

  const cardOnclick = (seatList) => {
    if (seatList.length > 0) {
      setCardList(seatList);
    }
  };
  return (
    <div>
      <Navbar />
      <HeroSection background="bg-ticket-page h-screen">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-200">
            Select Your Seat For Match
          </h1>
          <div className="flex gap-3 justify-center my-3">
            <TicketCard
              header={"Row 1-10"}
              price={"200"}
              ticketCardOnclick={() =>
                cardOnclick([
                  { seatName: "A1", seatPrice: 500 },
                  { seatName: "A2", seatPrice: 500 },
                  { seatName: "A3", seatPrice: 500 },
                  { seatName: "A4", seatPrice: 500 },
                  { seatName: "A5", seatPrice: 500 },
                  { seatName: "A6", seatPrice: 500 },
                  { seatName: "A7", seatPrice: 500 },
                  { seatName: "A8", seatPrice: 500 },
                  { seatName: "A9", seatPrice: 500 }
                ])
              }
            />
            <TicketCard
              header={"Row 1-10"}
              price={"200"}
              ticketCardOnclick={() =>
                cardOnclick([
                  { seatName: "B1", seatPrice: 300 },
                  { seatName: "B2", seatPrice: 300 },
                  { seatName: "B3", seatPrice: 300 },
                  { seatName: "B4", seatPrice: 300 },
                  { seatName: "B5", seatPrice: 300 },
                  { seatName: "B6", seatPrice: 300 },
                  { seatName: "B7", seatPrice: 300 },
                  { seatName: "B8", seatPrice: 300 },
                  { seatName: "B9", seatPrice: 300 }
                ])
              }
            />
            <TicketCard
              header={"Row 1-10"}
              price={"200"}
              ticketCardOnclick={() =>
                cardOnclick([
                  { seatName: "C1", seatPrice: 150 },
                  { seatName: "C2", seatPrice: 150 },
                  { seatName: "C3", seatPrice: 150 },
                  { seatName: "C4", seatPrice: 150 },
                  { seatName: "C5", seatPrice: 150 },
                  { seatName: "C6", seatPrice: 150 },
                  { seatName: "C7", seatPrice: 150 },
                  { seatName: "C8", seatPrice: 150 },
                  { seatName: "C9", seatPrice: 150 }  
                ])
              }
            />
          </div>
        </div>
        <Seats items={cardList} />
      </HeroSection>
      <Footer />
    </div>
  );
};

export default TicketsPage;
