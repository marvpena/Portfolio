import React, { useState } from 'react';
import '../styles/navbar.scss';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    function DropMenu() {
        return (
            toggle ?
                <div className="drop-menu-wrapper" onClick={() => setToggle(!toggle)}>
                    <motion.div
                        animate={{ x: 100 }} initial={false}
                        transition={{ ease: "easeOut", duration: 2 }}
                    >
                        <div className="drop-menu-container">
                            <div onClick={() => setToggle(!toggle)} style={{ color: '#fff', marginBottom: 30 }}>X</div>
                            <div className='menu-item'>
                                <a href='#'>About</a>
                            </div>
                            <div className='menu-item'>
                                <a href='#'>Contact</a>
                            </div>
                            <div className='menu-item'>
                                <a href='#'>React X Fire</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                :
                null
        )
    }

    return (
        <div>
            <DropMenu />
            <nav>
                <a href='/'>
                   <h3>M</h3>
                </a>
                <div className='links-container'>
                    {/* <a href='#'>Projects</a> */}
                    {/* <a href='#'>Contact</a> */}
                    {/* <a href='#'>About</a> */}
                </div>
                <div >
                    <a href='/react_on_fire'>Free tools</a>
                </div>
            </nav>
            <div className='mobile-menu'>
                <div>M</div>
                <div onClick={() => setToggle(!toggle)}>
                    =
                </div>
            </div>

        </div>
    )
};




export default Navbar;