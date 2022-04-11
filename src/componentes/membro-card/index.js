import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';

import './membro-card.css';

function MembroCard({id, img, titulo, detalhes}){

    const[urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);

     return(
        <div className="col-md-3 col-sm-12">
            <img src={urlImagem} className="card-img-top img-cartao" alt="Foto do Membro" />

            <div className="card-body">
                <h5>{titulo}</h5>
                <p className="card-text text-justify">{detalhes}</p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={'/membrodetalhes/' } className="btn btn-sm btn-detalhes">+ detalhes</Link>                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MembroCard;