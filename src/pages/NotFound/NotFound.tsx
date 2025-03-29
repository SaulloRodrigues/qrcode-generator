import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';
import { ReactSVG } from 'react-svg';
import IllustrationNotFound from '@/assets/illustration_notfound_404.svg'
const NotFound: React.FC = () => {
    return (
        <section className="not__found">
            <h1 className='not__found--title'>404</h1>
            <h2 className='not__found--subtitle'>Opss! A página não foi encontrada.</h2>
            <ReactSVG src={IllustrationNotFound} className='dwdw' beforeInjection={(svg) => { svg.classList.add("not__found--illustration") }}>
            </ReactSVG>
            <div className='not__found__btns'>
                <Link to="/" className='not__found__link'>Home</Link>
                <Link to="/about" className='not__found__link'>About</Link>
            </div>
        </section>
    );
};

export default NotFound;