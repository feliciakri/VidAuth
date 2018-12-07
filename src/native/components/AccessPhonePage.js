import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Button, View,
} from 'native-base';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';

class AccessPhonePage extends React.Component {
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
             do you have access to this phone?
            </Text>
          </View>

          <View padder>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 24,
                color: '#707070',
                fontWeight: "300",
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                margin: 20,
              }}
            >
             +62838 ******61
            </Text>
          </View>

          <View padder>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 12,
                color: '#707070',
                fontWeight: "300",
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                margin: 20,
              }}
            >
             This phone number is linked to your account. You will receive an OTP to this number to access your account
            </Text>
          </View>

          <Form>
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
                >
                 Yes
                </Text>
              </LinearGradient>
            </View>
            <View padder>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#FE56B0',
                  alignItems: 'center',
                  alignSelf: 'center',
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                }}
                onPress={Actions.signUp}
              >
                I don't have access to this phone
              </Text>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AccessPhonePage;
