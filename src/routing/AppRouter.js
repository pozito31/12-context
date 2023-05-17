import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className="header">
                 {/* Menu de Navegacion */}
                <nav>
                    <div className="logo">
                        <h2>Aprendiendo React Context</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articulos">Articulos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/acerca-de">Acerca de</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Identificate</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
           
            <section className="content">
                {/* Configurar Rutas */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/acerca-de" element={<Acerca />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="*" element={(
                        <div>
                            <h1>Error esta pagina no existe</h1>
                        </div>
                    )} />
                </Routes>
            </section>
            
        </BrowserRouter>
    );
}
