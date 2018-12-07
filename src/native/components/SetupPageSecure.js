import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, List, ListItem, View, Body,
} from 'native-base';
import { LinearGradient } from 'expo';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';

class SetupPageSecure extends React.Component {
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
  }

  render() {
    const { loading, error, messages } = this.props;

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
                fontWeight: '700',
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'left',
                margin: 20,
              }}
            >
              {messages.title}
            </Text>
          </View>

          {
            messages.texts.map(message => (
              <View padder>
                <List>
                  <ListItem onPress={Actions.login} key={message.id}>
                    <Body>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#707070',
                          fontWeight: '700',
                          lineHeight: 30,
                        }}
                      >
                        {message.bold}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#707070',
                          fontWeight: '200',
                        }}
                      >
                        {message.body}
                      </Text>
                    </Body>
                  </ListItem>
                </List>
              </View>
            ))
          }

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
                onPress={Actions.setupPageSecure}
              >
                understood
              </Text>
            </LinearGradient>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SetupPageSecure;
