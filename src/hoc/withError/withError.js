import React, {Component} from 'react';

import Aux from '../ReactAux';
import Modal from "../../components/UI/Modal/Modal";

const  withError = (WrappedComponent, axios) => {
  return class extends Component  {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterseptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterseptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterseptor);
      axios.interceptors.request.eject(this.resInterseptor);
    }

    errorConfirmed = () => {
      this.setState({error: null})
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} hide={this.errorConfirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </Aux>
      );
    }
  }
};

export default withError;