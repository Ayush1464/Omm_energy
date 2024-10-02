import React from 'react';
import img from '/assets/og-image.jpg';

const Contacct = () => {
    return (
        <div className="h-[900px] flex items-center justify-center mx-20">
            {/* <div className="flex justify-center items-center h-screen bg-gray-100"> */}
            <div className="bg-white shadow-lg rounded-lg flex w-2/3 max-w-4xl h-[500px]">

                <div className="w-1/2 bg-gray-50 p-10 flex items-center justify-center" style={{ backgroundImage: `url(${img})` }}>
                    {/* <div className="text-center">
                        <div className="space-y-4">
                            <img
                                src={img}
                                alt="Desk Setup"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div> */}
                </div>

                {/* Right Section: Form */}
                <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Straight from our desk, to your Inbox.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Subscribe to our newsletter
                    </p>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Contacct;
