import React from "react";
import _ from "lodash";
import './navbar.css';
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux';

function Navbar(){
  const dispatch = useDispatch();
    return(
        <nav className="navbar navbar-expand-lg ">
  
    <span className="navbar-brand text-white font-weight-bold" href="#">BIA</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                </button>
         <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/homefire">Home</Link></li> 

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <li className="nav-item"><Link className="nav-link" to="/eventocadastro">Publicar Evento</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/eventos">Eventos</Link></li>  
                        <li className="nav-item"><Link className="nav-link" to="/membrocadastro">Adicionar Membro</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/membros">Membros</Link></li> 
                        <li className="nav-item"><Link className="nav-link" to="/front">Front</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</Link></li> 
                    </>
                    :
                    <>
                     <li className="nav-item"><Link className="nav-link" to="/eventos">Eventos</Link></li> 
                     <li className="nav-item"><Link className="nav-link" to="/membros">Membros</Link></li>
                     <li className="nav-item"><Link className="nav-link" to="/front">Front</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"></Link></li> 
                    </>
                    }
                    
                </ul>
            </div>
</nav>
    )
}

export default Navbar;