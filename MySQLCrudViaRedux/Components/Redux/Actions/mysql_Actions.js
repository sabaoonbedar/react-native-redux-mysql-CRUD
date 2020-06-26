//In this file there will be all actions of mysql remember this file must be exported from the index.js file of the Actions folder.

//this action is for the insertion into the MYSQL_Database. *************************
export const Insertion = (Username, Password) => {
  return dispatch => {
    fetch(
      'http://192.168.0.51/MySQLCrudViaRedux/Components/MysqlDatabase/Mysql_Insertion.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: Username,
          password: Password,
        }),
      },
    )
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'Insertion',
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: 'error',
          payload: error,
        });
      });
  };
};
//************************************************************************************

//this is for taking list of data.
export const listData = () => {
  return dispatch => {
    fetch('http://192.168.0.51/MySQLCrudViaRedux/Components/MysqlDatabase/Listing.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())

      .then(response => {
        dispatch({
          type: 'getData',
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: 'getData',
          payload: error,
        });
      });
  };
};
//************************************************************************************

//for deleting the selected id.

export const Delete = id => {
  return dispatch => {
    fetch(
      'http://192.168.0.51/MySQLCrudViaRedux/Components/MysqlDatabase/DeleteRecord.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Delete',
          payload: responseJson,
        });
      })
      .catch(error => {
        dispatch({
          type: 'Delete',
          payload: error,
        });
      });
  };
};
//***********************************************************************************

//this action is for the updation of the data

export const Update = (id, username, password) => {
  return dispatch => {
    fetch(
      'http://192.168.0.51/MySQLCrudViaRedux/Components/MysqlDatabase/UpdateAPI.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          username: username,
          password: password,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Update',
          payload: responseJson,
        });
      })
      .catch(error => {
        dispatch({
          type: 'Update',
          payload: error,
        });
      });
  };
};
//***********************************************************************************
