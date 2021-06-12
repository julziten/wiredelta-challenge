import React from 'react';
import { Input } from 'antd';

export const Footer = () => {
    return (
        <footer className="footer__content">

            <div className="footer__left">

                <ul className="footer__main">
                    <li>
                        <a href="http://breatheyoursoul.com/press"> Press </a>
                    </li>
                    <li>
                        <a href="http://breatheyoursoul.com/contact"> Contact </a>
                    </li>
                    <li>
                        <a href="http://breatheyoursoul.com/follow"> Follow Us </a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <li>
                        <a href="http://facebook.com"> Facebook </a>
                    </li>
                    <li>
                        <a href="http://linkedin.com"> Linkedin </a>
                    </li>
                    <li>
                        <a href="http://instagram.com/"> Instagram </a>
                    </li>
                    <li>
                        <a href="http://twitter.com/"> Twitter </a>
                    </li>
                </ul>

            </div>
            

            <div className="footer__newsletter">
                <h2>Newsletter</h2>
                <h4>Sign up to our newsletter and stay up to date</h4>
                <Input placeholder="Enter your E-mail" size="large" />
            </div>

        </footer>
    )
}
