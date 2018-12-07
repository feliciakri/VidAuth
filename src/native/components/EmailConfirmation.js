import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Button, View,
} from 'native-base';
import { LinearGradient } from 'expo';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';

class OTPConfirmation extends React.Component {
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
          <View
            padder
            style={{
              flex:1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <Text style={{
              width: '50%',
              marginTop: 10,
              padding: 5,
              textAlign: 'left',
            }}>
              upin@ipin@co.id
            </Text>
            <Text style={{
              width: '50%',
              textAlign: 'right',
              marginTop: 10,
              padding: 5,
              color: '#FE56B0',
              textDecorationLine: 'underline',
            }}>
              Not You?
            </Text>
          </View>
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
             one more step
            </Text>
          </View>

          <View padder>
            <Image
              style={{
                marginTop:10,
                width: 250,
                height: 250,
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
               }}
              source={require( '../../images/undraw_mail_2_tqip.png')}
            />
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
             Click the authorization link we sent to upin@ipin.co.id
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
             Your email may take a few moments to arrive. Check spam folder if you don't receive it. Please waite 28 seconds before trying to resend
            </Text>
          </View>

          <Form>
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
                  onPress={Actions.signUp}
                >
                 Set Up Biometric Password
                </Text>
            </LinearGradient>
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
                I need help
              </Text>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default OTPConfirmation;
