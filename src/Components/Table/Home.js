import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clubList } from "../../Services/Actions/ClubAction";

import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";
import Modal from "../Modal/Modal";

const Home = () => {
  const clubData = useSelector((state) => state);
  const dispatch = useDispatch();

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
            clubData={clubData?.ClubData?.matches}
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
