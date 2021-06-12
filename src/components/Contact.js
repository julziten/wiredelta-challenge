import React from 'react';
import { Image } from 'antd';
import contact from '../assets/contact.jpg';

import { TwitterOutlined,FacebookOutlined,InstagramOutlined, LinkedinOutlined, GithubOutlined  } from '@ant-design/icons';

export const Contact = React.forwardRef( ( props, ref ) => {
    return (
        <div className="contact__container" ref={ref}>

            <h1>Let’s Start a Conversation</h1>
            <h2>Feel free to get in touch with us if you have a questions regarding the application</h2>


            <div className="contact__info">
                <Image
                    width={200}
                    src={contact}
                />
                <div className="contact__details">
                    <p>
                        I'm Julz, your contact person inside Breath Your Soul. If you have any questions, please feel free to drop me a line. If you don't get an answer immediately, I might just be taking some time for myself or helping in the community. I'll get back to you as soon as I can. That's a promise!
                    </p>

                    <div className="contact__social">

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterOutlined className="contact__icon pointer"/>
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined className="contact__icon pointer"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined className="contact__icon pointer"/>
                        </a>

                        <a href="https://linkedin.com/in/rochajulianacarolina" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined className="contact__icon pointer"/>
                        </a>

                        <a href="https://github.com/julziten" target="_blank" rel="noopener noreferrer">
                            <GithubOutlined className="contact__icon pointer"/>
                        </a>

                    </div>


                </div>
            </div>
        </div>
    )
}
)
