const CHECK_STATUS = 'status/UNDER_ CONSTRUCTION';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';

    default:
      return state;
  }
};

export default categoryReducer;
