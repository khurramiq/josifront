import { userConstants, snackBarConstants } from "../constants";
import api from "../../utils/api";
import history from "../../utils/history";
const {
  CUErr,
  CUSuc,
  ULErr,
  URErr,
  UProfile,
  UList,
  UListDel,
  UListUpt,
  UData,
} = userConstants;
const { ShowSnack, HideSnack } = snackBarConstants;

export const loginUser = (data) => async (dispatch) => {
  try {
    var res = await api.post("/account/signin", data);
    if (res.data.token && !res.data.error) {
      dispatch({ type: ShowSnack, payload: "Logged in successfully" });
      dispatch(setCurrentUser(res.data.token));
    } else {
      dispatch({ type: ULErr, payload: res.data.error });
    }
  } catch (e) {
    dispatch({ type: ULErr, payload: e.message });
  }
};

export const clearSnack = () => (dispatch) => {
  dispatch({ type: HideSnack });
};

export const registerUser = (data) => async (dispatch) => {
  try {
    var res = await api.post("/account/signup", data);
    if (res.data.token && !res.data.error) {
      dispatch({
        type: ShowSnack,
        payload: "Account registration successfully",
      });
      dispatch(setCurrentUser(res.data.token));
    } else {
      dispatch({ type: URErr, payload: res.data.error });
    }
  } catch (e) {
    dispatch({ type: URErr, payload: e.message });
  }
};

const setCurrentUser = (token) => (dispatch) => {
  localStorage.setItem("token", token);
  dispatch(getCurrentUser());
};

export const getCurrentUser = () => (dispatch) => {
  if (!localStorage.getItem("token")) dispatch({ type: CUErr });
  else dispatch(getProfile());
};

export const getProfile = () => async (dispatch) => {
  try {
    var res = await api.get("/account/profile", {
      headers: { authorization: `${localStorage.getItem("token")}` },
    });
    if (res.data.user && !res.data.error) {
      dispatch({ type: CUSuc });
      dispatch({ type: UProfile, payload: res.data.user });
    } else {
      // localStorage.removeItem("token");
      dispatch(getCurrentUser());
    }
  } catch (e) {
    // localStorage.removeItem("token");
    dispatch(getCurrentUser());
  }
};

export const getDetails = (_id) => async (dispatch) => {
  var res = await api.get(`/account/details/${_id}`, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (res.data.user && !res.data.error) {
    dispatch({ type: UData, payload: res.data.user });
  }
};

export const updateDetails = (data) => async (dispatch) => {
  var res = await api.post(`/account/update/profile`, data, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (!res.data.error)
    dispatch({
      type: ShowSnack,
      payload: "Account details updated successfully",
    });
  history.push("/user/manager");
};

export const getAll = () => async (dispatch) => {
  var res = await api.get("/account/all", {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (res.data.users && !res.data.error) {
    dispatch({ type: CUSuc });
    dispatch({ type: UList, payload: res.data.users });
  }
};

export const deleteUser = (_id) => async (dispatch) => {
  var res = await api.delete(`/account/user/${_id}`, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (res.data.success && !res.data.error) {
    dispatch({ type: ShowSnack, payload: "Account deleted successfully" });
    dispatch({ type: UListDel, payload: _id });
  }
};

export const updateActiveUser = (data) => async (dispatch) => {
  var res = await api.post(`/account/update/active`, data, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (res.data.user && !res.data.error) {
    dispatch({
      type: ShowSnack,
      payload: data.active
        ? "Account activated successfully"
        : "Account deactivated successfully",
    });
    dispatch({ type: UListUpt, payload: res.data.user });
  }
};

export const updateApprovedUser = (data) => async (dispatch) => {
  var res = await api.post(`/account/update/approve`, data, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  if (res.data.user && !res.data.error) {
    dispatch({ type: ShowSnack, payload: "Account approved successfully" });
    dispatch({ type: UListUpt, payload: res.data.user });
  }
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(getCurrentUser());
};
