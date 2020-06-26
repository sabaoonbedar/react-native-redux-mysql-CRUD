import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {List, ListItem, Left, Right, Icon} from 'native-base';
import {fieldsSetter, Update} from '../Redux/Actions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';



class UpdateScreen extends Component {
  Updator(id, username, password) {
    (id = this.props.Id),
      (username = this.props.username),
      (password = this.props.password),
      this.props.Update(id, username, password);
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
          Update the entries
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
          style={{flex: 0.07, borderWidth: 2, shadowOpacity: 0.1, fontSize: 20}}
          placeholder={this.props.Username}
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
          style={{flex: 0.07, borderWidth: 2, shadowOpacity: 0.1, fonsize: 20}}
          placeholder={this.props.Password}
          secureTextEntry={true}
          onChangeText={value => {
            this.props.fieldsSetter({key: 'password', value});
          }}
          value={this.props.password}
        />

        <TouchableOpacity
          style={{
            flex: 0.07,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            marginTop: 10,
            backgroundColor: 'black',
          }}
          onPress={this.Updator.bind(this)}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
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

export default connect(
  mapStatetoProps,
  {fieldsSetter, Update},
)(UpdateScreen);
