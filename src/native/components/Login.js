import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import {
  Container, Content, Form, Text, Button, View,
} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    locale: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    locale: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
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
    console.log("huaaaaaaaa");
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.pop())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const {
      loading,
    } = this.props;

    if (loading) return <Loading />;

    return (
      <Container
        style={{
          backgroundColor: '#707070',
        }}
      >
        <Content>
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
              source={require( '../../images/undraw_Security_on_s9ym.png')}
            />
          </View>
          <View padder>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 35,
                color: '#fff',
                fontWeight: "700",
                alignItems: 'center',
                alignSelf: 'center',
                margin: 20,
              }}
            >
             secured by
             vidauth
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
                    onPress={Actions.signUp}
                  >
                   Sign Up
                  </Text>
              </LinearGradient>
            </View>
            <View padder>
              <Button success block rounded onPress={Actions.signUp}>
                <Text>
                  Login
                </Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
