export interface Hospital {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  availableBeds: number;
  address: string;
  contact: string;
}

export interface BookingFormData {
  patientName: string;
  age: number;
  gender: string;
  contact: string;
  emergency: string;
  selectedHospital: string;
}