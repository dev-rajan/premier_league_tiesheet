import React from "react";

const TableBody = ({ clubData, handleOpenModal, setModalData }) => {
  const ClubList = () => (
    <tbody>
      {clubData.map((el, idx) => (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td
            className="teams"
            onClick={() => {
              handleOpenModal(idx);
              setModalData(el);
            }}
          >
            <p>{el.name}</p>
          </td>
          <td>{el.played}</td>
          <td>{el.won}</td>
          <td>{el.draw}</td>
          <td>{el.lost}</td>
          <td>{el.gf}</td>
          <td>{el.ga}</td>
          <td>{el.gd}</td>
          <td>{el.points}</td>
          <td>
            <ul className="game_forms">
              {el.form.map((elm, idx) => {
                if (elm == 3) {
                  return (
                    <li key={idx} className="win">
                      W
                    </li>
                  );
                } else if (elm == 1) {
                  return (
                    <li key={idx} className="draw">
                      D
                    </li>
                  );
                } else {
                  return (
                    <li key={idx} className="lost">
                      L
                    </li>
                  );
                }
              })}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return <ClubList />;
};

export default TableBody;
