import { Hospital } from '../types';

export const hospitals: Hospital[] = [
  // Delhi-NCR Region
  {
    id: 1,
    name: "AIIMS Delhi",
    latitude: 28.5672,
    longitude: 77.2100,
    availableBeds: 15,
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
    contact: "+91-11-26588500"
  },
  {
    id: 2,
    name: "Fortis Memorial Gurgaon",
    latitude: 28.4397,
    longitude: 77.0267,
    availableBeds: 8,
    address: "Sector 44, Gurugram, Haryana",
    contact: "+91-124-4921021"
  },
  {
    id: 3,
    name: "Max Super Speciality Saket",
    latitude: 28.5280,
    longitude: 77.2147,
    availableBeds: 12,
    address: "Press Enclave Road, Saket, New Delhi",
    contact: "+91-11-26515050"
  },

  // Mumbai, Maharashtra
  {
    id: 4,
    name: "Lilavati Hospital Mumbai",
    latitude: 19.0509,
    longitude: 72.8286,
    availableBeds: 20,
    address: "Bandra West, Mumbai",
    contact: "+91-22-26568000"
  },
  {
    id: 5,
    name: "Kokilaben Hospital",
    latitude: 19.1307,
    longitude: 72.8253,
    availableBeds: 18,
    address: "Four Bungalows, Andheri West, Mumbai",
    contact: "+91-22-42699999"
  },

  // Bangalore, Karnataka
  {
    id: 6,
    name: "Manipal Hospital Old Airport Road",
    latitude: 12.9583,
    longitude: 77.6408,
    availableBeds: 25,
    address: "Old Airport Road, Bangalore",
    contact: "+91-80-25024444"
  },
  {
    id: 7,
    name: "Narayana Health City",
    latitude: 12.8446,
    longitude: 77.6810,
    availableBeds: 30,
    address: "Bommasandra, Bangalore",
    contact: "+91-80-27835000"
  },

  // Chennai, Tamil Nadu
  {
    id: 8,
    name: "Apollo Hospitals Greams Road",
    latitude: 13.0524,
    longitude: 80.2508,
    availableBeds: 22,
    address: "Greams Road, Chennai",
    contact: "+91-44-28290200"
  },
  {
    id: 9,
    name: "Global Hospitals Chennai",
    latitude: 13.0068,
    longitude: 80.2532,
    availableBeds: 16,
    address: "Perumbakkam, Chennai",
    contact: "+91-44-43458888"
  },

  // Kolkata, West Bengal
  {
    id: 10,
    name: "AMRI Hospitals Dhakuria",
    latitude: 22.5145,
    longitude: 88.3655,
    availableBeds: 14,
    address: "Dhakuria, Kolkata",
    contact: "+91-33-66286628"
  },
  {
    id: 11,
    name: "Fortis Hospital Anandapur",
    latitude: 22.5139,
    longitude: 88.3958,
    availableBeds: 19,
    address: "Anandapur, Kolkata",
    contact: "+91-33-66284444"
  },

  // Hyderabad, Telangana
  {
    id: 12,
    name: "Care Hospitals Banjara Hills",
    latitude: 17.4126,
    longitude: 78.4476,
    availableBeds: 24,
    address: "Road No. 1, Banjara Hills, Hyderabad",
    contact: "+91-40-30418888"
  },
  {
    id: 13,
    name: "Yashoda Hospitals Secunderabad",
    latitude: 17.4400,
    longitude: 78.4983,
    availableBeds: 21,
    address: "Alexander Road, Secunderabad",
    contact: "+91-40-27713333"
  },

  // Ahmedabad, Gujarat
  {
    id: 14,
    name: "Sterling Hospital",
    latitude: 23.0225,
    longitude: 72.5714,
    availableBeds: 17,
    address: "Gurukul Road, Ahmedabad",
    contact: "+91-79-40011111"
  },
  {
    id: 15,
    name: "Apollo Hospitals Ahmedabad",
    latitude: 23.0302,
    longitude: 72.5551,
    availableBeds: 23,
    address: "Bhat, Gandhinagar, Ahmedabad",
    contact: "+91-79-66701800"
  },

  // Pune, Maharashtra
  {
    id: 16,
    name: "Ruby Hall Clinic",
    latitude: 18.5304,
    longitude: 73.8773,
    availableBeds: 26,
    address: "Sassoon Road, Pune",
    contact: "+91-20-66456789"
  },
  {
    id: 17,
    name: "Jehangir Hospital",
    latitude: 18.5236,
    longitude: 73.8478,
    availableBeds: 15,
    address: "Sassoon Road, Pune",
    contact: "+91-20-66819999"
  },

  // Lucknow, Uttar Pradesh
  {
    id: 18,
    name: "Medanta Hospital Lucknow",
    latitude: 26.8467,
    longitude: 80.9462,
    availableBeds: 28,
    address: "Sector A, Lucknow",
    contact: "+91-522-4505050"
  },
  {
    id: 19,
    name: "SGPGI Lucknow",
    latitude: 26.7435,
    longitude: 80.9389,
    availableBeds: 32,
    address: "Raebareli Road, Lucknow",
    contact: "+91-522-2494000"
  },

  // Chandigarh
  {
    id: 20,
    name: "PGI Chandigarh",
    latitude: 30.7649,
    longitude: 76.7750,
    availableBeds: 35,
    address: "Sector 12, Chandigarh",
    contact: "+91-172-2747585"
  },
  {
    id: 21,
    name: "Fortis Hospital Mohali",
    latitude: 30.7283,
    longitude: 76.7671,
    availableBeds: 18,
    address: "Phase 8, Mohali",
    contact: "+91-172-5096001"
  },

  // Jaipur, Rajasthan
  {
    id: 22,
    name: "Fortis Escorts Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
    availableBeds: 16,
    address: "Malviya Nagar, Jaipur",
    contact: "+91-141-4547000"
  },
  {
    id: 23,
    name: "Narayana Multispeciality Hospital",
    latitude: 26.8505,
    longitude: 75.8033,
    availableBeds: 24,
    address: "Gopalpura Bypass, Jaipur",
    contact: "+91-141-4133333"
  },

  // Bhubaneswar, Odisha
  {
    id: 24,
    name: "AIIMS Bhubaneswar",
    latitude: 20.2961,
    longitude: 85.8245,
    availableBeds: 27,
    address: "Sijua, Bhubaneswar",
    contact: "+91-674-2476789"
  },
  {
    id: 25,
    name: "Apollo Hospitals Bhubaneswar",
    latitude: 20.3167,
    longitude: 85.8195,
    availableBeds: 20,
    address: "Sainik School Road, Bhubaneswar",
    contact: "+91-674-6661016"
  },

  // Guwahati, Assam
  {
    id: 26,
    name: "GNRC Hospitals",
    latitude: 26.1445,
    longitude: 91.7362,
    availableBeds: 22,
    address: "Dispur, Guwahati",
    contact: "+91-361-2461473"
  },
  {
    id: 27,
    name: "Apollo Hospitals Guwahati",
    latitude: 26.1158,
    longitude: 91.7086,
    availableBeds: 19,
    address: "Guwahati-Shillong Road",
    contact: "+91-361-2347000"
  },

  // Indore, Madhya Pradesh
  {
    id: 28,
    name: "Bombay Hospital Indore",
    latitude: 22.7196,
    longitude: 75.8577,
    availableBeds: 23,
    address: "Ring Road, Indore",
    contact: "+91-731-2558866"
  },
  {
    id: 29,
    name: "Medanta Hospital Indore",
    latitude: 22.7533,
    longitude: 75.8937,
    availableBeds: 25,
    address: "Vijay Nagar, Indore",
    contact: "+91-731-4747000"
  },

  // Kochi, Kerala
  {
    id: 30,
    name: "Amrita Institute of Medical Sciences",
    latitude: 10.0297,
    longitude: 76.2789,
    availableBeds: 31,
    address: "Ponekkara, Kochi",
    contact: "+91-484-2851234"
  }
];