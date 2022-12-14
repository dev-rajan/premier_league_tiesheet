import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clubList } from "../../Services/Actions/ClubAction";

const Table = () => {
  const clubData = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clubList());
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>Premier League 2020/21</h1>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Clubs</th>
            <th>Round</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {clubData?.ClubData?.map((el, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
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
      </table>
    </div>
  );
};

export default Table;
