
import React, { useState } from "react";
import { useSelector } from "react-redux";
import './membro-cadastro.css';
import {Link} from "react-router-dom";
import Navbar from "../../componentes/navbar";

import firebase from '../../config/firebase';

function MembroCadastro(){
    const [carregando,setCarregando]=useState();
    const [msgTipo,setMsgTipo]=useState();
    const [titulo,setTitulo]=useState();
    const [tipo,setTipo]=useState();
    const [detalhes,setDetalhes]=useState();
    const [foto,setFoto]=useState();
    const usuarioEmail=useSelector(state => state.usuarioLogado);

    const storage=firebase.storage();
    const db =firebase.firestore();

    function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);

        storage.ref(`imagens/${foto.name}`).put(foto).then(( ) => {
            db.collection('membros').add({
                titulo: titulo,
                detalhes: detalhes,
                usuario: usuarioEmail,
                visualizacoes:0,
                foto: foto.name,
                publico:1,
                criacao: new Date()
            }).then(() =>{
                setMsgTipo('sucesso');
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
        });
    });
    }

    return(
        <>
        <Navbar/>
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Novo Membro</h3>
            </div>

            <form>
                <div className="form-group">
                    <label>Nome:</label>
                    <input onChange={(e) => setTitulo(e.target.value) } type="text" className="form-control"/>
                </div>

                 <div className="form-group">
                    <label>Descrição do Membro:</label>
                    <textarea onChange={(e) => setDetalhes(e.target.value) } className="form-control" rows="3"/>
                </div>

                 <div className="form-group">
                    <label>Upload da foto:</label>
                    <input onChange={(e) => setFoto(e.target.files[0]) } type="file" className="form-control"/>
                </div>
            <div className="row">
                {
                carregando > 0 ?<div class="spinner-border text-secondary mx-auto" role="status"><span class="visually-hidden"></span></div>
                : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar Membro</button>
                }
                </div>
            </form>
             <div className="msg-login  text-center my-2">
            {msgTipo ==='sucesso' && <span><strong>Membro Cadastrado</strong></span>}
            {msgTipo ==='erro' && <span><strong>Algo deu errado!</strong> Não foi posível cadastrar o membro.</span>}
           
        </div>
            
        </div>
        </>
    )
}

export default MembroCadastro;