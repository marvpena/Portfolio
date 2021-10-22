import React from 'react';
import { Link } from 'gatsby';
import { CardRectangle, CardSquare } from '../components/cardbox';
import '../styles/layout.scss';
import Footer from '../components/footer';


const Projects = () => {
    return (
        <div>
            <div className='section-projects'>
                <Link to='/' className='cancel-btn'>X</Link>
            </div>
            <div className='section-projects'>
                <div className='content-container'>
                    <h1>Title</h1>
                </div>
                <div className='content-container'>
                    <div>
                        <h4>Heading Message</h4>
                    </div>
                    <div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
            </div>
            <div className='section-projects'>
                <div className='grid-container-projects'>
                    <div>
                        <CardSquare>
                            front
                        </CardSquare>
                    </div>
                    <div>
                        <CardRectangle>
                            back
                        </CardRectangle>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects;