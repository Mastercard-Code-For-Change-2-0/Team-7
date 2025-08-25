import { useState } from 'react';
import { Heart, Shield, Users, ArrowRight, CheckCircle, Menu, X, MapPin, Calendar, User, Package, Filter } from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DonateConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Dashboard
            </a>
            <a href="#requests" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Requests
            </a>
            <a href="#analytics" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Analytics
            </a>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <User className="w-5 h-5" />
              <span className="font-medium">Admin Panel</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#dashboard" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Dashboard
              </a>
              <a href="#requests" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Requests
              </a>
              <a href="#analytics" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Analytics
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Sidebar Component
function Sidebar({ current, onChange }) {
  const items = [
    { key: 'donor', label: 'Donor Requests', icon: <Heart className="w-5 h-5" /> },
    { key: 'receiver', label: 'Receiver Requests', icon: <Users className="w-5 h-5" /> },
    { key: 'approved', label: 'Approved Items', icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-full md:w-80 bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h2>
        <p className="text-gray-600 text-sm mt-1">Manage donations and requests</p>
      </div>
      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
              current === item.key
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'hover:bg-gray-50 text-gray-700 hover:text-indigo-600'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

// Donor Request Card Component
function DonorRequestCard({ item, onClick }) {
  const handleCardClick = () => {
    // Simulate navigation to /productDetail
    console.log('Navigating to /productDetail with item:', item._id);
    // In a real app, you would use React Router: navigate(`/productDetail/${item._id}`)
    onClick(item);
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={item.imgUrl} alt={item.name} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.state === 'approved' 
              ? 'bg-green-100 text-green-700' 
              : item.state === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {item.state}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{item.name}</h3>
          <div className="flex items-center text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg ml-2">
            <Package className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{item.quantity}</span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-2 mb-4 leading-relaxed">{item.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-2" />
            <span>{item.user?.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </div>

        {item.tag && item.tag.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {item.tag.slice(0, 2).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                {tag}
              </span>
            ))}
            {item.tag.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                +{item.tag.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Receiver Request Card Component
function ReceiverRequestCard({ item, onClick }) {
  const handleCardClick = () => {
    console.log('Navigating to /productDetail with item:', item._id);
    onClick(item);
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1 flex-1">{item.name}</h3>
        <div className="flex items-center space-x-3 ml-4">
          <div className="flex items-center text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
            <Package className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{item.quantity}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.state === 'approved' 
              ? 'bg-green-100 text-green-700' 
              : item.state === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {item.state}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 line-clamp-2 mb-4 leading-relaxed">{item.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{item.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <User className="w-4 h-4 mr-2" />
          <span>{item.user?.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(item.date).toLocaleDateString()}</span>
        </div>
      </div>

      {item.urgency && (
        <div className="mt-4">
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
            item.urgency === 'high' 
              ? 'bg-red-100 text-red-700' 
              : item.urgency === 'medium'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-green-100 text-green-700'
          }`}>
            {item.urgency} priority
          </span>
        </div>
      )}
    </div>
  );
}

// Detail Modal Component
function DetailModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Item Details
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {item.imgUrl && (
              <div className="space-y-4">
                <img src={item.imgUrl} alt={item.name} className="w-full h-80 object-cover rounded-2xl" />
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Quantity</div>
                  <div className="text-xl font-bold text-gray-900">{item.quantity}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className={`text-sm font-medium ${
                    item.state === 'approved' ? 'text-green-600' : 
                    item.state === 'pending' ? 'text-yellow-600' : 'text-blue-600'
                  }`}>
                    {item.state}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <span><strong>Location:</strong> {item.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <User className="w-5 h-5 mr-3 text-gray-400" />
                  <span><strong>Contact:</strong> {item.user?.name} ({item.user?.email})</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <span><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</span>
                </div>
                {item.tag && item.tag.length > 0 && (
                  <div className="flex items-start text-gray-700">
                    <Filter className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                    <div>
                      <strong>Tags:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tag.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg">
            Take Action
          </button>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DonateConnect</span>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Bridging hearts through verified giving. Creating meaningful connections between donors and receivers with complete transparency and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Admin Tools</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manage Donations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">User Verification</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reports & Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Platform Settings</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 DonateConnect Admin Panel. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Verified Platform
              </span>
              <span className="text-gray-400 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                Admin Secured
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Admin Dashboard Component
export default function AdminDashboard() {
  const [section, setSection] = useState('donor');
  const [detail, setDetail] = useState(null);
  const [approvedFilter, setApprovedFilter] = useState('all');

  // Enhanced dummy data with quantities
  const donorRequests = [
    {
      _id: 'd1',
      userId: 'u1',
      name: 'Winter Jackets',
      description: 'Set of warm jackets in excellent condition for adults. These jackets are perfect for the upcoming winter season and will help keep people warm during cold nights.',
      imgUrl: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop',
      state: 'requested',
      tag: ['clothes', 'winter', 'adults'],
      location: 'Mumbai, Maharashtra, IN',
      date: new Date('2024-12-15').toISOString(),
      quantity: 10,
      user: { name: 'Aman Gupta', email: 'aman@example.com' }
    },
    {
      _id: 'd2',
      userId: 'u2',
      name: 'School Supplies Bundle',
      description: 'Complete set of notebooks, pens, pencils, erasers, and colorful backpacks for primary school children. All items are new and ready for distribution.',
      imgUrl: 'https://images.unsplash.com/photo-1596495578065-8e9d5e06c5f0?q=80&w=1200&auto=format&fit=crop',
      state: 'requested',
      tag: ['education', 'children', 'stationery'],
      location: 'Pune, Maharashtra, IN',
      date: new Date('2024-12-20').toISOString(),
      quantity: 25,
      user: { name: 'Priya Singh', email: 'priya@example.com' }
    },
    {
      _id: 'd3',
      userId: 'u3',
      name: 'Food Packets',
      description: 'Nutritious meal packets containing rice, dal, vegetables, and snacks. Freshly prepared and packed for immediate distribution.',
      imgUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop',
      state: 'approved',
      tag: ['food', 'meals', 'nutrition'],
      location: 'Delhi, IN',
      date: new Date('2024-12-18').toISOString(),
      quantity: 50,
      user: { name: 'Rajesh Kumar', email: 'rajesh@example.com' }
    }
  ];

  const receiverRequests = [
    {
      _id: 'r1',
      userId: 'ru1',
      name: 'Bed Sheets for Shelter',
      description: 'Requesting clean bed sheets for our homeless shelter. We currently house 20 people and need fresh bedding for better hygiene and comfort.',
      state: 'requested',
      location: 'Delhi, IN',
      date: new Date('2024-12-16').toISOString(),
      quantity: 15,
      urgency: 'high',
      user: { name: 'Shelter Trust', email: 'contact@shelter.org' }
    },
    {
      _id: 'r2',
      userId: 'ru2',
      name: 'Laptops for Digital Training',
      description: 'Looking for used laptops in working condition for our digital literacy program. Will be used to train underprivileged youth in basic computer skills.',
      state: 'requested',
      location: 'Bengaluru, Karnataka, IN',
      date: new Date('2024-12-19').toISOString(),
      quantity: 5,
      urgency: 'medium',
      user: { name: 'Hope NGO', email: 'info@hope.ngo' }
    },
    {
      _id: 'r3',
      userId: 'ru3',
      name: 'Medical Supplies',
      description: 'Urgent need for basic medical supplies including bandages, antiseptic, and first aid kits for our community health center.',
      state: 'approved',
      location: 'Chennai, Tamil Nadu, IN',
      date: new Date('2024-12-17').toISOString(),
      quantity: 20,
      urgency: 'high',
      user: { name: 'Community Health Center', email: 'health@community.org' }
    }
  ];

  const getApprovedItems = () => {
    const approvedDonors = donorRequests.filter(d => d.state === 'approved');
    const approvedReceivers = receiverRequests.filter(r => r.state === 'approved');
    
    if (approvedFilter === 'donor') return approvedDonors;
    if (approvedFilter === 'receiver') return approvedReceivers;
    return [...approvedDonors, ...approvedReceivers];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 flex min-h-screen">
        <Sidebar current={section} onChange={setSection} />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {section === 'donor' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Donor Requests</h2>
                  <p className="text-gray-600">Review and manage donation requests from verified donors</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {donorRequests.filter(item => item.state === 'requested').map((item) => (
                    <DonorRequestCard key={item._id} item={item} onClick={setDetail} />
                  ))}
                </div>
              </div>
            )}

            {section === 'receiver' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Receiver Requests</h2>
                  <p className="text-gray-600">Review and manage help requests from verified receivers</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {receiverRequests.filter(item => item.state === 'requested').map((item) => (
                    <ReceiverRequestCard key={item._id} item={item} onClick={setDetail} />
                  ))}
                </div>
              </div>
            )}

            {section === 'approved' && (
              <div>
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Approved Items</h2>
                      <p className="text-gray-600">All approved donations and requests ready for matching</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="text-sm font-medium text-gray-700">Filter by:</label>
                      <select
                        value={approvedFilter}
                        onChange={(e) => setApprovedFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                      >
                        <option value="all">All Approved</option>
                        <option value="donor">Donor Approved</option>
                        <option value="receiver">Receiver Approved</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {getApprovedItems().map((item) => (
                    item.imgUrl ? (
                      <DonorRequestCard key={item._id} item={item} onClick={setDetail} />
                    ) : (
                      <ReceiverRequestCard key={item._id} item={item} onClick={setDetail} />
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <DetailModal item={detail} onClose={() => setDetail(null)} />
      <Footer />
    </div>
  );
}