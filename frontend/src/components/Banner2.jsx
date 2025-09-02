import React from 'react';
import { Link } from 'react-router-dom';
import Bannerimg from '../asset/Images/trends.jpg';

const Banner2 = () => {
    return (
        <div className="w-full px-10 py-16 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 px-4 py-10 rounded-l-xl text-left">
                    <h1 className="text-[30px] font-medium text-black-600">
                        Track the Latest Job Market Trends
                    </h1>
                    <p className="text-[15px] mt-3">
                        Understand industry demand, explore emerging fields, and make smarter career moves with real-time trend analysis.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/JobTrends"
                            className="bg-gray-600 hover:bg-gray-700 text-white text-[20px] px-4 py-3 rounded-xl inline-block"
                        >
                            Get Job Trends
                        </Link>
                    </div>
                </div>
                <div className="flex-1 w-[700px] rounded-r-xl">
                    <div className="w-full text-center">
                        <img
                            src={Bannerimg}
                            alt="Salary Prediction"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;