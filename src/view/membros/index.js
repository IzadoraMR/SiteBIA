import React, { useState, useEffect } from "react";
import './membros.css';
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import {useSelector} from 'react-redux';
import firebase from "../../config/firebase";
import MembroCard from "../../componentes/membro-card";

function Membros(){

    const[membros,setMembros]=useState([]);
    const[pesquisa,setPesquisa]=useState('');
    let listamembros=[];


    useEffect(() =>{
        firebase.firestore().collection('membros').get().then(async (resultado)=> {
            await resultado.docs.forEach(doc => {
                 if(doc.data().titulo.indexOf(pesquisa) >= 0)
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
        
         <div className="row p-3 ">
            <h2 className="mx-auto p-5">Membros</h2>
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
        </div>

        <div className="row  p-3">
        {membros.map(item => <MembroCard key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes}  />)}
        </div>

        </>
    )
}

export default Membros;