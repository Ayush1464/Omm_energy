import React from 'react'
import img from '/assets/og-image.jpg';

const Ongoing = () => {
    const projects = [
        { title: 'What is Solar Panel?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { title: 'How can we put solar panel into the roof?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { title: 'Guide to buy a Solar Panel for your house', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { title: 'How much price for Solar in USA?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { title: 'How Solar Panel will Save our House Electricity', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { title: 'Is there any Benefits of Using Solar Panel for our House?', img: img, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ];

    return (
        <div className="h-[auto] flex items-center justify-center mx-20">
            <div className="py-10">
            <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Ongoing Projects
  </span>
</h1>
                <div className="grid grid-cols-3 gap-6 mt-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-cover" src={project.img} alt={project.title} />
                            <div className="p-4">
                               
                                <h3 className="font-bold text-xl mt-2">{project.title}</h3>
                                <p className="text-gray-500 mt-2">{project.description}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ongoing