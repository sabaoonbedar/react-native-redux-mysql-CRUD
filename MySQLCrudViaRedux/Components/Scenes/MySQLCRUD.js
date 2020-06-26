import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  Animated,
  Easing,
} from 'react-native';

//to connect redux with this InitialScreen component import connect.
import {connect} from 'react-redux';

//here I have used third party library "native base" you can use any of your choice to design
import {List, ListItem, Left, Right, Icon} from 'native-base';

//now insert the actions you want to implement in this component.
import {fieldsSetter, Insertion, listData, Delete} from '../Redux/Actions';
//third party library for navigation
import {Actions} from 'react-native-router-flux';

class MySQLCRUD extends Component {
  // if you want to return the function as a helper function on the top below class component so you need to work with the onSelect prop.
  //this will render all data when we enter to the screen.
  componentDidMount() {
    this.props.listData();
  }

  componentWillUpdate() {
    this.props.listData();
  }

  Mysql_Insertion(username, password) {
    (username = this.props.username),
      (password = this.props.password),
      this.props.Insertion(username, password);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 20,
          }}>
          Insertion of form data to MySQL
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 20,
            marginTop: 20,
          }}>
          Username
        </Text>

        <TextInput
          style={{
            flex: 0.1,
            borderWidth: 2,
            height: 40,
            shadowOpacity: 0.1,
            fontSize: 20,
          }}
          placeholder="Insert your name"
          onChangeText={value => {
            this.props.fieldsSetter({key: 'username', value});
          }}
          value={this.props.username}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 20,
            marginTop: 20,
            marginTop: 2,
            fonsize: 16,
          }}>
          Password
        </Text>
        <TextInput
          style={{flex: 0.1, borderWidth: 2, shadowOpacity: 0.1, fonsize: 20}}
          placeholder="Insert your name"
          secureTextEntry={true}
          onChangeText={value => {
            this.props.fieldsSetter({key: 'password', value});
          }}
          value={this.props.password}
        />

        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            marginTop: 10,
            backgroundColor: 'black',
          }}
          onPress={this.Mysql_Insertion.bind(this)}
          onPressOut={() => Alert.alert('Data is Inserted')}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Insert
          </Text>
        </TouchableOpacity>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.07,
            backgroundColor: 'green',
            borderRadius: 220,
            width: 270,
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            List of the data from MySQl
          </Text>
        </View>

        <FlatList
          style={{flex: 1, marginTop: 30}}
          data={this.props.data}
          keyExtractor={index => index.id}
          renderItem={({item}) => {
            return (
              <ScrollView>
                <List>
                  <ListItem
                    onPress={
                      () =>
                        Alert.alert(
                          'Choose any of the option',
                          'for' + '\n' + item.username,
                          [
                            {
                              text: 'Update',
                              onPress: () => {
                                Actions.UpdateScreen({
                                  Id: item.id,
                                  Username: item.username,
                                  Password: item.password,
                                });
                              },
                            },
                            {
                              text: 'Delete',
                              onPress: () => {
                                this.props.Delete(item.id);
                              },
                            },

                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                            },
                          ],
                          {cancelable: false},
                        ) //alert is closed here
                    }>
                    <Left>
                      <Text>{item.username}</Text>
                    </Left>
                  </ListItem>
                </List>
              </ScrollView>
            );
          }}
        />

        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            marginTop: 10,
            backgroundColor: 'black',
          }}
        />
      </View>
    );
  }
}
//this function is to bring all the state of the reducer to this component.
const mapStatetoProps = state => {
  const {username, password, Data, select, selected} = state.FormInput;

  return {
    username: username,
    password: password,
    data: Data,
    selected: select,
    SelectedTrue: selected,
  };
};

//here you have to pass two arguments to the connect first one for the reducer and second for the actions.
export default connect(
  mapStatetoProps,
  {fieldsSetter, Insertion, listData, Delete},
)(MySQLCRUD);
