import React, { useState } from 'react';
import { Hospital, BookingFormData } from './types';
import { hospitals } from './data/hospitals';
import Map from './components/Map';
import BookingForm from './components/BookingForm';
import { AlertTriangle, Bed, Phone, MapPin, Clock, Search, RefreshCw } from 'lucide-react';

function App() {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleHospitalSelect = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data);
    setBookingSuccess(true);
  };

  const handleRefreshBeds = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 animate-pulse" />
              <h1 className="text-2xl font-bold text-gray-900">Emergency Bed Booking</h1>
            </div>
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search hospitals by name or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Available Hospitals
                </h2>
                <button
                  onClick={handleRefreshBeds}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              <Map hospitals={filteredHospitals} onHospitalSelect={handleHospitalSelect} />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bed className="h-5 w-5 text-blue-600" />
                Hospital Information
              </h3>
              {selectedHospital ? (
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">{selectedHospital.name}</h4>
                    <div className="space-y-2 text-blue-800">
                      <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                        <Bed className="h-4 w-4" />
                        <span>Available Beds: </span>
                        <span className="font-semibold bg-blue-200 px-2 py-0.5 rounded-full">
                          {selectedHospital.availableBeds}
                        </span>
                      </p>
                      <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedHospital.address}</span>
                      </p>
                      <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${selectedHospital.contact}`} className="hover:text-blue-600">
                          {selectedHospital.contact}
                        </a>
                      </p>
                      <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-sm">
                          24/7 Emergency Services
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-gray-400 animate-bounce" />
                  <p>Select a hospital from the map to view details</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Emergency Bed Booking Form
            </h2>
            {bookingSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-900 mb-2">Booking Confirmed!</h3>
                <p className="text-green-700">
                  Your emergency bed booking request has been submitted successfully.
                  The hospital will contact you shortly.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Book Another Bed
                </button>
              </div>
            ) : (
              <BookingForm
                selectedHospital={selectedHospital}
                onSubmit={handleBookingSubmit}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;