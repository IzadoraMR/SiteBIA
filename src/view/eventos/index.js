import React, { useState, useEffect } from "react";
import './eventos.css';
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import {useSelector} from 'react-redux';
import firebase from "../../config/firebase";
import EventoCard from "../../componentes/evento-card";
import MembroCard from "../../componentes/membro-card";

function Eventos(){
  /* Eventos*/
    const[eventos,setEventos]=useState([]);
    const[pesquisa,setPesquisa]=useState('');
    let listaeventos=[];

    useEffect(() =>{
        firebase.firestore().collection('eventos').get().then(async (resultado)=> {
            await resultado.docs.forEach(doc => {
                if(doc.data().titulo.indexOf(pesquisa) >= 0)
                listaeventos.push({
                    id:doc.id,
                    ...doc.data()
                })

            })

            setEventos(listaeventos);
        })

    });

    
    return(
        <>
        <Navbar/>

        <div className="row p-3 ">
            <h2 className="mx-auto p-5">Eventos Publicados</h2>
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
        </div>
        

        <div className="row  p-3">
        {eventos.map(item => <EventoCard key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
        </div>

        </>
    )
}

export default Eventos;