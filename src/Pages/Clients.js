import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {},
      clients: [],
    }
  }

  componentDidMount() {
    const { store } = this.props;
    const { login, clients } = store;
    this.setState({
      login,
      clients,
    })
  }

  canRender = () => {
    const { login } = this.state;
    return login.email === undefined; 
  }

  render() {
    const { clients } = this.state;
    return(
      <div>
      { this.canRender() ? <span>Você não fez login!!</span>
       : (
         clients.length === 0 ? (
         <div>
          <span>Você não adicionou nenhum cliente ainda!</span>
          <Link to="/newclient">
            <button>Adicionar Clientes</button>
          </Link>
         </div>
         ) : (
            <div>
            <h1>Clientes</h1>
            {clients.map((client) => (
                <div class="clients-card">
                  <h2>{client.name}</h2>
                  <p>{`Idade: ${client.age}`}</p>
                  <p>{`Email: ${client.email}`}</p>
                </div>
            ))}
            <Link to="/newclient">
            <button>Adicionar Mais Clientes</button>
            </Link>
            </div>
         )
       )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state.clientsReducer,
})

export default connect(mapStateToProps)(Clients);
