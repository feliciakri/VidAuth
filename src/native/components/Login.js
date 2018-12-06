import React from 'react';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, View,
} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import { translate } from '../../i18n';
import Header from './Header';
import Spacer from './Spacer';

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
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.pop())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const {
      loading,
      error,
      success,
      locale,
    } = this.props;
    const { email } = this.state;

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
              source={{ uri: 'https://drive.google.com/open?id=1u0fkYjroFZyR8vJOHSDD8fiyO-k6qb51' }}
              style={{
                height: 100,
                width: 100,
                flex: 1,
              }}
            />
          </View>
          <View padder>
            <Header
              title="Secured By VidAuth"
              style={{
                color: '#ffffff',
                textAlign: 'center',
              }}
            />
          </View>

          <Form>
            <View padder>
              <Button success block rounded onPress={this.handleSubmit}>
                <Text>Sign Up</Text>
              </Button>
            </View>
            <View padder>
              <Button success block rounded onPress={this.handleSubmit}>
                <Text>
                  {translate('Login', locale)}
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
