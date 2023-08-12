import React from 'react';

export default function Header(props) {
  return (
    <section>
      <div
        className='h-screen bg-cover bg-no-repeat bg-center flex items-center'
        style={{ backgroundImage: `url(${props.urlImg.src})` }}
      >
        <div className="container mx-auto text-center">
          <div className='container'>
            <h1 className="text-white font-bold text-4xl lg:text-6xl mb-4">
              Connectez-vous au monde avec une expérience inoubliable
            </h1>
            <div className="w-full mx-auto mt-14">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full p-2 pl-4 border border-gray-300 rounded-l focus:outline-none focus:ring-2 rounded-md focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  Rechercher
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
