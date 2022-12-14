import { SET_CLUB_LIST } from "../../Constants/Constants";

export const ClubData = (data = [], action) => {
  const actions = action?.clubList?.data;

  switch (action.type) {
    case SET_CLUB_LIST:
      return [...actions.matches];
    default:
      return data;
  }
};
