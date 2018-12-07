import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import messages from '../native/constants/text.js';
import { signUp } from '../actions/member';

class SetupPicturePass extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    member: PropTypes.shape({}).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  state = {
    errorMessage: null,
  }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;
    return onFormSubmit(data)
      .catch((err) => { this.setState({ errorMessage: err }); throw err; });
  }

  render = () => {
    const {
      member,
      Layout,
      isLoading,
    } = this.props;

    const { errorMessage } = this.state;
    return (
      <Layout
        member={member}
        messages={messages.secure}
        loading={isLoading}
        error={errorMessage}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.status.loading || false,
});

const mapDispatchToProps = {
  onFormSubmit: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupPicturePass);
