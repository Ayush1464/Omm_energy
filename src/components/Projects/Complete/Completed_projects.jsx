import React from 'react';
import img from '/assets/complete1.jpeg';
import img1 from '/assets/complete2.jpeg';
import img2 from '/assets/complete3.jpeg';
import img4 from '/assets/complete4.jpeg';
import img3 from '/assets/gallery7.jpeg';
import img5 from '/assets/gallery8.jpeg';

const Completed_projects = () => {
    const projects = [
        { title: 'Solar Irrigation Completed', img: img, description: 'Farmers in deep rural villages use solar pumping system for irrigation which enhances their economic stability, livelihood, and food security in a sustainable manner' },
        { title: 'Solar street light', img: img1, description: 'Installed for lighting of the common areas of block level and panchayat level offices to reduce electricity bill and provide an automated system for smooth operation' },
        { title: 'Solar High Mast Lighting', img: img2, description: 'For public gathering areas with warenty of 2 year to renewable energy'},
        { title: 'Solar Water Heater', img: img4, description: 'It is installed in residential and commercial buildings to provide hot water for dat to day life' },
        { title: 'Ongrid Solar System', img: img3, description: ' Under pm Surya Ghar yojana  solar on-grid solar system installed to achieve our pm objective of ambitious target of 500mw of solar rooftop implementation' },
        { title: 'OnGrid Solar System ', img: img5, description: 'Under pm Surya Ghar yojana  solar on-grid solar system installed to achieve our pm objective of ambitious target of 500mw of solar rooftop implementation'},
    ];

    return (
        <div className="h-auto flex items-center justify-center mx-20">
            <div className="py-10">
                <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
                    <span className="heading-underline" style={{ color: '#007bff' }}>
                        Our Completed Projects
                    </span>
                </h1>
                <div className="grid grid-cols-3 gap-6 mt-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-auto object-contain" src={project.img} alt={project.title} />
                            <div className="p-4">
                                <h3 className="font-bold text-xl mt-2">{project.title}</h3>
                                <p className="text-gray-500 mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Completed_projects;
