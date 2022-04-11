import React, { useState, useEffect } from "react";
import './home-fire.css';
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import {useSelector} from 'react-redux';
import firebase from "../../config/firebase";
import EventoCard from "../../componentes/evento-card";
import MembroCard from "../../componentes/membro-card";

function HomeFire(){
  /* Eventos*/
    const[eventos,setEventos]=useState([]);
    let listaeventos=[];
    const[membros,setMembros]=useState([]);
    let listamembros=[];

    useEffect(() =>{
        firebase.firestore().collection('eventos').get().then(async (resultado)=> {
            await resultado.docs.forEach(doc => {
                listaeventos.push({
                    id:doc.id,
                    ...doc.data()
                })

            })

            setEventos(listaeventos);
        })

    });

    useEffect(() =>{
        firebase.firestore().collection('membros').get().then(async (resultado)=> {
            await resultado.docs.forEach(doc => {
                listamembros.push({
                    id:doc.id,
                    ...doc.data()
                })

            })

            setMembros(listamembros);
        })

    });

    return(
        <>
        <Navbar/>
        
        <div className="row  p-3">
        {eventos.map(item => <EventoCard key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
        </div>

        <div className="row  p-3">
        {membros.map(item => <MembroCard key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes}  />)}
        </div>

        </>
    )
}

export default HomeFire;