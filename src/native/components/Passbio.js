import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, List,  ListItem, View, Left, Body
} from 'native-base';
import { LinearGradient } from 'expo';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';

class Passbio extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.login())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;

    return (
      <Container
        style={{
          backgroundColor: '#F6F8FB',
        }}
      >
        <Content>
          <View padder>
            <Text
              style={{
                paddingTop: 50,
                backgroundColor: 'transparent',
                fontSize: 35,
                color: '#707070',
                fontWeight: "700",
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                margin: 20,
              }}
            >
             setup passbio
            </Text>
          </View>

          <View padder>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 18,
                color: '#707070',
                fontWeight: "300",
                margin: 20,
              }}
            >
             Setup PassBio for seamless payment authorization, quick and reliable, every time - all the time
            </Text>
          </View>

          <View padder>
            <List>
              <ListItem onPress={Actions.login}>
                <Left>
                  <Image
                     source={require( '../../images/iconmonstr-fingerprint-1-240.png')}
                     style={{width: 50, height: 50 }}
                   />
                </Left>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 28,
                    color: '#707070',
                    fontWeight: "700",
                  }}
                >
                  fingerprint
                </Text>
              </ListItem>
              <ListItem onPress={Actions.setupFacial}>
                <Left>
                  <Image
                     source={require( '../../images/iconmonstr-smiley-2-240.png')}
                     style={{width: 50, height: 50 }}
                   />
                </Left>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 28,
                    color: '#707070',
                    fontWeight: "700",
                  }}
                >
                  face + voice
                </Text>
              </ListItem>
              <ListItem onPress={Actions.setupPagePicture}>
                <Left>
                  <Image
                     source={require( '../../images/iconmonstr-picture-1-240.png')}
                     style={{width: 50, height: 50 }}
                   />
                </Left>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 28,
                    color: '#707070',
                    fontWeight: "700",
                  }}
                >
                  picture password
                </Text>
              </ListItem>
            </List>
          </View>


          <View padder>
            <LinearGradient
              colors={['#A13BFD', '#33A2F7']}
              style={{
                padding: 15, alignItems: 'center', borderRadius: 40, marginHorizontal: 50,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
                <Text
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#fff',
                  }}
                  onPress={Actions.fingerprintSetup}
                >
                Done, Continue
                </Text>
            </LinearGradient>
          </View >
        </Content>
      </Container>
    );
  }
}

export default Passbio;
