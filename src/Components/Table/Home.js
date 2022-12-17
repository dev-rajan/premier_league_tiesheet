import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clubList } from "../../Services/Actions/ClubAction";

import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";
import Modal from "../Modal/Modal";

const Home = () => {
  const clubData = useSelector((state) => state);
  const dispatch = useDispatch();

  const matches = clubData?.ClubData?.matches;

  let firstTeam = [];
  let secondTeam = [];

  for (let i = 0; i < matches?.length; i++) {
    let gameOccurred = matches?.[i]?.score ? true : false;
    let score1 = gameOccurred && matches?.[i]?.score?.ft?.[0];
    let score2 = gameOccurred && matches?.[i]?.score?.ft?.[1];

    console.log(gameOccurred, "game");

    if (matches?.length) {
      firstTeam.push({
        name: matches?.[i]?.team1,
        won: score1 > score2 ? 1 : 0,
        lost: score1 < score2 ? 1 : 0,
        draw: score1 == score2 ? 1 : 0,
        gf: score1,
        ga: score2,
        gd: Math.abs(score1 - score2),
        points: score1 > score2 ? 3 : score1 == score2 ? 1 : 0,
      });
      secondTeam.push({
        name: matches?.[i]?.team2,
        won: score2 > score1 ? 1 : 0,
        lost: score2 < score1 ? 1 : 0,
        draw: score2 == score1 ? 1 : 0,
        gf: score2,
        ga: score1,
        gd: Math.abs(score1 - score2),
        points: score2 > score1 ? 3 : score1 == score2 ? 1 : 0,
      });
    }
  }

  let combinedTeam = [...firstTeam, ...secondTeam];

  const filteredClub = Object.values(
    combinedTeam.reduce((acc, cur) => {
      let club = `${cur.name}`;
      if (!acc[club])
        acc[club] = {
          ...cur,
          played: 1,
        };
      else {
        acc[club].played += 1;
        acc[club].won += cur.won !== undefined ? cur.won : 0;
        acc[club].lost += cur.lost !== undefined ? cur.lost : 0;
        acc[club].draw += cur.draw !== undefined ? cur.draw : 0;
        acc[club].gf += cur.gf !== undefined ? cur.gf : 0;
        acc[club].ga += cur.ga !== undefined ? cur.ga : 0;
        acc[club].gd += cur.gd !== undefined ? cur.gd : 0;
        acc[club].points += cur.points !== undefined ? cur.points : 0;
      }
      return acc;
    }, {})
  );

  console.log(filteredClub, "res");

  const [isOpen, setIsOpen] = useState({
    show: false,
    id: null,
  });
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (id) => {
    setIsOpen({
      show: true,
      id,
    });
  };

  const handleCloseModal = () => {
    setIsOpen({
      show: false,
      id: null,
    });
  };

  useEffect(() => {
    dispatch(clubList());
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>{clubData?.ClubData?.name}</h1>
        </div>

        <table className="table">
          <TableHead />
          <TableBody
            clubData={filteredClub}
            handleOpenModal={handleOpenModal}
            setModalData={setModalData}
          />
        </table>
      </div>

      {isOpen.show && (
        <Modal handleCloseModal={handleCloseModal} modalData={modalData} />
      )}
    </>
  );
};

export default Home;
