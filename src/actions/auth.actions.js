import {authConstants} from './constants';
import axios from '../helpers';

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
      dispatch({
        type :authConstants.LOGIN_REQUEST
      })

    const res = await axios.post(`/login`, user)
    .then((res) =>{
      const {token, user} = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });

    })
    .catch((err) => {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: err.response.data,
        }
      });
    });
    /*if (res.status === 200) {
      const {token, user} = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else if (res.status !== 200) {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }*/
  };
};
