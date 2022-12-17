import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clubList } from "../../Services/Actions/ClubAction";

import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";
import Modal from "../Modal/Modal";

const Home = () => {
  const clubData = useSelector((state) => state);
  const dispatch = useDispatch();

  const matches = clubData?.ClubData?.matches ?? [];

  let firstTeam = [];
  let secondTeam = [];

  for (let i = 0; i < matches.length; i++) {
    let gameOccurred = typeof matches[i].score == "undefined" ? false : true;
    let score1 = !gameOccurred ? 0 : matches[i].score.ft[0];
    let score2 = !gameOccurred ? 0 : matches[i].score.ft[1];
    if (matches?.length) {
      firstTeam.push({
        name: matches?.[i]?.team1,
        played: gameOccurred ? 1 : 0,
        won: score1 > score2 ? 1 : 0,
        lost: score1 < score2 ? 1 : 0,
        draw: !gameOccurred ? 0 : score1 == score2 ? 1 : 0,
        gf: score1,
        ga: score2,
        gd: score1 - score2,
        points: !gameOccurred
          ? 0
          : score1 > score2
          ? 3
          : score1 == score2
          ? 1
          : 0,
      });
      secondTeam.push({
        played: gameOccurred ? 1 : 0,
        name: matches?.[i]?.team2,
        won: score2 > score1 ? 1 : 0,
        lost: score2 < score1 ? 1 : 0,
        draw: !gameOccurred ? 0 : score1 == score2 ? 1 : 0,
        gf: score2,
        ga: score1,
        gd: score2 - score1,
        points: !gameOccurred
          ? 0
          : score2 > score1
          ? 3
          : score1 == score2
          ? 1
          : 0,
      });
    }
  }

  let combinedTeam = [...firstTeam, ...secondTeam];

  var result = [];

  combinedTeam.reduce(function (res, value) {
    if (!res[value.name]) {
      res[value.name] = {
        name: value.name,
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
      };
      result.push(res[value.name]);
    }

    res[value.name].played += value.played;
    res[value.name].won += value.won;
    res[value.name].lost += value.lost;
    res[value.name].draw += value.draw;
    res[value.name].gf += value.gf;
    res[value.name].ga += value.ga;
    res[value.name].gd += value.gd;
    res[value.name].points += value.points;
    return res;
  }, {});

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
    let mounted = true;
    if (mounted) {
      dispatch(clubList());
    }
    return () => {
      mounted = false;
    };
  }, []);

  const sortedClub = Object.values(result).sort(function (a, b) {
    return b.points - a.points;
  });

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>{clubData?.ClubData?.name}</h1>
        </div>

        <table className="table">
          <TableHead />
          <TableBody
            clubData={sortedClub}
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
