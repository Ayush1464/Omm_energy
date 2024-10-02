import React from 'react';
import './ClientSection.css'; // Create a separate CSS file for styling

const clients = [
    {
        id: 2,
        name: 'Client 2',
        logo: '/assets/client2.jpeg',
        feedback: 'In Anugul district we was searching for a good solar vendor for PM Surya Ghar Yojana , Omm energy Solutions installed our plant. Excellent work done by them.',
      },
  {
    id: 1,
    name: 'Client 1',
    logo: '/assets/client1.jpeg',
    feedback: 'Omm energy Solutions provided us customized best quality ON-GRID Rooftop solar system at Affordable Price to reduce our electricity bill, which is eco friendly and promote clean energy. We are very much satisfied with their speed of project completion and subsidy processing. All the best Omm energy Solutions.',
  },
  
  {
    id: 3,
    name: 'Client 3',
    logo: '/assets/client3.jpeg',
    feedback: 'Omm energy Solutions explained us all about solar. They also processed bank financing for us. Their quality of work is excellent.  Good job OMM ENERGY.',
  },
  // Add more clients as needed
];

const ClientSection = () => {
  return (
    <section className="client-section">
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Clients
  </span>
</h1>

      <div className="client-container">
        {clients.map(client => (
          <div className="client-card" key={client.id}>
            <img src={client.logo} alt={`${client.name} Logo`} />
            <div className="client-feedback">
              <p>{client.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
