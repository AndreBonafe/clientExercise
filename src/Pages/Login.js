import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogin } from '../Redux/actions/actionLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  } 

  render() {
    const { login } = this.props;
    return(
      <div>
        <label htmlFor="email">
          Email:
          <input id="email" name="email" onChange={this.handleChange} />
        </label>
        <label htmlFor="password">
          Senha
          <input id="password" name="password" onChange={this.handleChange} type="password"/>
        </label>
        <Link to="/clients">
          <button onClick={ () => login(this.state)}>
            Login
          </button>
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (obj) => dispatch(actionLogin(obj)),
})

export default connect(null, mapDispatchToProps)(Login)
