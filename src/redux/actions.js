const updateStore =
  (data = []) =>
  (dispatch) => {
    const payload = { data };
    dispatch({
      type: 'GENERIC_UPDATE',
      payload,
    });
  };

export default updateStore;
