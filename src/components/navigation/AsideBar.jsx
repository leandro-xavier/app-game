import React from 'react';
import { Button } from 'react-bootstrap';
import './aside.css'
import { VscPerson } from "react-icons/vsc";
import {FaFlagCheckered,FaComments,FaCogs, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const AsideBar = () => {
  return (
    <div className='proside'>
        <div className='header-aside'>
            <h2 className='h2'>Bienvenido</h2>
        </div>
        <div className='content-aside'>
            <div className='item-one'>
                <VscPerson style={{width:'50px', height:'50px'}}/>
                <p className='p'>Perfil</p>
            </div>
            <div className='item-one'>
                <FaFlagCheckered style={{width:'50px', height:'50px'}}/>
                <p className='p'>Torneos</p>
            </div>
            <div className='item-one'>
                <FaComments style={{width:'50px', height:'50px'}}/>
                <p className='p'>Mensajes</p>
            </div>
            <div className='item-one'>
                <FaCogs style={{width:'50px', height:'50px'}}/>
                <p className='p'>Configuracion</p>
            </div>

            <div className='item-two'>
               <h5 className='h5'>redes sociales</h5>
                <FaFacebookSquare style={{width:'20px', height:'20px' , margin:'20px'}}/>
                <FaInstagram style={{width:'20px', height:'20px', margin:'20px'}}/>
                <FaLinkedin style={{width:'20px', height:'20px', margin:'20px'}}/>
            </div>
        </div>
    </div>
  )
}

export default AsideBar

