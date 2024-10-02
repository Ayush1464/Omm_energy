import React from 'react'

const Completed = () => {
  return (
    <div className="h-[900px] flex items-center justify-center">

    <div className="bg-blue-50  flex justify-between items-center p-9 mx-20 ">
        <div className="w-1/2">
            <h2 className="text-3xl font-bold">Commercial Solar Solutions</h2>
            <p className="mt-2 text-gray-600">Lower your business costs and make a sustainable impact</p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded">Contact Us</button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-1/2">
            {[
                { title: 'Reduce your electricity bills', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.', icon: '🔋' },
                { title: 'Cleaner future for next generations', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.', icon: '🌍' },
                { title: 'Reduce your carbon footprints', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.', icon: '♻️' },
                { title: 'Enjoy your Solar Panels in your Roofs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.', icon: '🏠' },
            ].map((item, index) => (
                <div key={index} className="bg-white shadow p-4 rounded-lg">
                    <div className="text-blue-600 text-3xl">{item.icon}</div>
                    <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                    <p className="text-gray-500 mt-1">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default Completed