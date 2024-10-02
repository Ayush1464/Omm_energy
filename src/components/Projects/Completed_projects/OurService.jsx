import React from 'react'
import img from '/assets/og-image.jpg';

const OurService = () => {
    const projects = [
        { title: 'What is Solar Panel?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'How can we put solar panel into the roof?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'Guide to buy a Solar Panel for your house', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'How much price for Solar in USA?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'How Solar Panel will Save our House Electricity', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'Is there any Benefits of Using Solar Panel for our House?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
        { title: 'Is there any Benefits of Using Solar Panel for our House?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 min read' },
    ];

    return (
        <div className="h-[auto] flex items-center justify-center mx-20">
            <div className="py-10">
                <h2 className="text-center text-3xl font-bold mb-40">Our Successive Projects</h2>
                <div className="grid grid-cols-3 gap-6 ">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={project.img} alt={project.title} />
                            <div className="p-4">
                                <div className="text-blue-500 text-sm">{project.time}</div>
                                <h3 className="font-bold text-xl mt-2">{project.title}</h3>
                                <p className="text-gray-500 mt-2">{project.description}</p>
                                <button className="mt-4 text-blue-600 hover:underline">Read more &gt;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurService