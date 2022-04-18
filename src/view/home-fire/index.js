import React, { useState } from "react";
import './home-fire.css';
import { Link} from "react-router-dom";
import firebase from '../../config/firebase';
import { useSelector} from 'react-redux';
import Navbar from "../../componentes/navbar";
import Dna from "../../img/dna.png";
import Image1 from "../../img/1.jpg";
import Image2 from "../../img/2.jpg";
import Image3 from "../../img/3.jpg";
import Image4 from "../../img/4.jpg";


function HomeFire(){
    return (
        <>
        <Navbar/> 
            
				<div className="container content">
					<div className="imagemdna-container">
	
					</div>
					<div className="row mxw justify-content-center">
						<h3>Who We Are</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<button type="button" className="btn btn-dark">
							LinkedIn
						</button>
					</div>
				</div>

                	<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>News</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 1</h2>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 2</h2>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 3</h2>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 4</h2>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 5</h2>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-auto">
							<div className="card cardWork">
								<div className="card-body bodyBrand">
									<a href="#">
										<h2>Noticia 6</h2>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Ferramentas</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="card-deck text-center">
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">...</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">...</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">...</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Publicações</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="card-deck text-center">
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">...</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">...</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Publicações</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="container-fluid content">
					<div className="row mxw justify-content-center">
						<h3>Membros do BIA</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco.
						</p>
					</div>
					<div className="row row-cols-1 row-cols-md-4 text-center">
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="Image1"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Joana <br />
										<span>Pesquisador</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="2.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										izaodra <br />
										<span>Pesquisador</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="3.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Danilo <br />
										<span>Pesquisador</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="4.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Bananinha <br />
										<span>banana</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Send Us A Message</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</div>
					<form>
						<div className="form-row nameMessage justify-content-center">
							<div className="form-group col-md-4">
								<input
									type="text"
									className="form-control"
									placeholder="Your Name"
								/>
							</div>
							<div className="form-group col-md-4">
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="form-row textMessage justify-content-center">
							<div className="form-group col-md-8">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Message"
								/>
							</div>
						</div>
						<div className="form-row justify-content-center">
							<button type="submit" className="btn btn-light">
								Send
							</button>
						</div>
					</form>
					<div className="row iconFooter justify-content-center">
						<ul>
							<a href="#" className="fab fa-facebook" />
							<a href="#" className="fab fa-instagram" />
							<a href="#" className="fab fa-linkedin" />
						</ul>
					</div>
				</div>
        </>

    )
}

export default HomeFire;