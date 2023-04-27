import React from "react";
import Menu from '../Menu';
import '../Nav.css';




const Inscripation = () => {
    return (
        <div className='GA'>
            <Menu />
            <div className="FormInscrir">
                <div className="IN_76">
                    <h1> </h1>
                    <div className="container">

                        <form action="" method="post">

                            <div>

                                <label htmlFor=""> </label>

                                <input type="text" className="form-control" placeholder="Nom" />
                            </div>
                            <div>
                                <label htmlFor=""> </label>
                                <input type="tel" className="form-control" placeholder="tel" />
                            </div>

                            <div>
                                <label htmlFor=""> </label>
                                <input type="text" className="form-control" placeholder="User" />
                            </div>
                            <div>
                                <label htmlFor=""> </label>
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                        </form>

                        <div className="inscrir-098">
                            <button className="kan-PO"> S'inscrire</button>
                        </div>

                    </div>
                </div>
            </div> </div>
    );
};
export default Inscripation;