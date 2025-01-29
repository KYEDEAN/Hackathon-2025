import React from 'react';

const HackathonPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen text-white">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-4xl font-bold">Hackathon 2025</h1>
        <button className="bg-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-full text-lg transition duration-300">
          Register Now
        </button>
      </header>

      <section className="text-center py-16">
        <h2 className="text-3xl font-extrabold">Unleash Your Creativity!</h2>
        <p className="mt-4 text-lg">Join us for an intense 48-hour coding marathon with amazing prizes.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Event Details</h3>
          <p className="mt-2">When: April 15-17, 2025</p>
          <p className="mt-2">Where: Online & In-Person</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Prizes</h3>
          <p className="mt-2">Grand Prize: $5,000</p>
          <p className="mt-2">Runner-up: $2,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold">Schedule</h3>
          <p className="mt-2">Day 1: Coding begins</p>
          <p className="mt-2">Day 2: Mentorship & Workshops</p>
          <p className="mt-2">Day 3: Presentations & Judging</p>
        </div>
      </section>

   
    </div>
  );
};

export default HackathonPage;
