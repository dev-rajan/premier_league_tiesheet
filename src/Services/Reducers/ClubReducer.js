import { SET_CLUB_LIST } from "../../Constants/Constants";

export const ClubData = (data = [], action) => {
  switch (action.type) {
    case SET_CLUB_LIST:
      return [...action.data];
    default:
      return data;
  }
};
