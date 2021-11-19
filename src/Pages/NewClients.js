import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionNewClients } from '../Redux/actions/actionLogin';

class NewClients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addClient } = this.props;
    addClient(this.state)
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, age, email } = this.state;
    return(
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="name">
          Nome:
          <input id="name" name="name" value={name}  onChange={this.handleChange} />
        </label>
        <label htmlFor="age">
          Idade:
          <input id="age" name="age" value={age}  onChange={this.handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <button type="submit">Salvar Cliente</button>
        <Link to="/clients">Clientes Cadastrados</Link>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (obj) => dispatch(actionNewClients(obj)),
})

export default connect(null, mapDispatchToProps)(NewClients);
