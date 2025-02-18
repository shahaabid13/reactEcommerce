import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();

    return (
        <div>
            <section>
                <div className="container mx-auto px-5 py-10 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div 
                            onClick={() => navigate("/premium")}
                            className="cursor-pointer border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-6 py-8 rounded-lg text-center transition-transform duration-300 ease-in-out hover:scale-105"
                            style={{
                                backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                                color: mode === 'dark' ? 'white' : '',
                            }}
                        >
                            <h2>Premium Pashmina Shawls</h2>
                            <p>Our Shawls are 100% made of cotton.</p>
                        </div>

                        {/* Card 2 */}
                        <div 
                            onClick={() => navigate("/premium")}
                            className="cursor-pointer border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-6 py-8 rounded-lg text-center transition-transform duration-300 ease-in-out hover:scale-105"
                            style={{
                                backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                                color: mode === 'dark' ? 'white' : '',
                            }}
                        >
                            <h2>Premium Kani Shawls</h2>
                            <p>Our Shawls are 100% made of cotton.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
