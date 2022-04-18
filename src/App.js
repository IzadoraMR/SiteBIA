import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* Páginas*/
import Login from './view/login/';
import HomeFire from './view/home-fire';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha/';
import EventoCadastro from './view/evento-cadastro';
import MembroCadastro from './view/membro-cadastro';
import Membros from './view/membros';
import MembroDetalhes from './view/membro-detalhes'
import Front from './view/front'
    


function App() {
    return ( 
        <Provider store={store}>
            <Router>
                <Route exact path='/homefire' component={HomeFire} />
                <Route  exact path='/login' component={Login}/>
                <Route  exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha}/>
                <Route  exact path='/eventocadastro' component={EventoCadastro}/>
                <Route  exact path='/membrocadastro' component={MembroCadastro}/>
                <Route  exact path='/membros' component={Membros}/>
                <Route  exact path='/membrodetalhes' component={MembroDetalhes}/>
                <Route  exact path='/front' component={Front}/>
            </Router>
        </Provider>
    );
}

export default App;
