import React from "react";

const TableBody = ({ clubData, handleOpenModal, setModalData }) => {
  const ClubList = () => (
    <tbody>
      {clubData?.map((el, idx) => (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td
          className="teams"
            onClick={() => {
              handleOpenModal(idx);
              setModalData(el);
            }}
          >
            <p>
              {el.team1} {el.score?.ft?.length && `(${el.score?.ft?.[0]})`}
            </p>
            <p>
              {el.team2} {el.score?.ft?.length && `(${el.score?.ft?.[1]})`}
            </p>
          </td>
          <td>{el.round}</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  );

  return <ClubList />;
};

export default TableBody;
