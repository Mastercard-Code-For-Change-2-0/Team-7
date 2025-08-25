import React from 'react'

const Already_added = () => {
   const list = [
    { name: "Alice", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Bob", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Charlie", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Diana", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Eve", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
    { name: "Frank", to: "Donated to", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VxDe4wzr6eLzRrpRXsqUl1pgSst3Q1XytA&s" },
  ];
  return (
    <div>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        'bg-white/95 backdrop-blur-lg shadow-sm bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                {/* /* /*<Heart className="w-6 h-6 text-white" />*/  }
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DonateConnect
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="./components/LoginForm">
                Add Product
              </a>
              {/* <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                About
              </a> */}
            </div>
            </div>
            </div>
            </nav>
      <div className="d-flex align-items-center justify-content-center my-4">
   <div className="me-3 mt-20" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
    <h2 className="text-center mt-20 mb-0">Already Donated</h2>
   <div className="ms-3 mt-20" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
 </div>
      <section className="p-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {list.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card bg-purple-500 text-center h-100">
                <img 
                  src={member.img} 
                  className="card-img-top mx-auto mt-3 rounded-circle" 
                  alt={member.name} 
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.to}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div>
        <div className="d-flex align-items-center justify-content-center my-4">
   <div className="me-3" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
    <h2 className="text-center mb-0">Pending Requests</h2>
   <div className="ms-3" style={{ width: "50px", height: "2px", backgroundColor: "#000" }}></div>
 </div>
        <div>
      <section className="p-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {list.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 card text-center h-100">
                <img 
                  src={member.img} 
                  className="card-img-top mx-auto mt-3 w-full" 
                  alt={member.name} 
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body ">
                  <h5 className="card-title">{member.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>

    </div>
  )
}

export default Already_added