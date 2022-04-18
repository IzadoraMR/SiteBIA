import React, { useState } from "react";
import './membro-detalhes.css';
import { Link} from "react-router-dom";
import firebase from '../../config/firebase';
import { useSelector} from 'react-redux';
import Navbar from "../../componentes/navbar";


function membroDetalhes(){
    return (
        <>
        <Navbar/> 
        <div className="container col-md-3 col-sm-12">
            <div className="row">
                <img src="https://via.placeholder.com/150" className="img-membro" alt="Membro"/>
            </div>

        </div>

        </>

    )
}

export default membroDetalhes;