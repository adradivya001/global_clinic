import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorPage } from './pages/DoctorPage';
import { ServicesPage } from './pages/ServicesPage';
import { PatientJourneyPage } from './pages/PatientJourneyPage';
import { PatientStoriesPage } from './pages/PatientStoriesPage';
import { ClinicPage } from './pages/ClinicPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

import { TreatmentDetailPageWrapper } from './pages/TreatmentDetailPageWrapper';
import { ServiceDetailPageWrapper } from './pages/ServiceDetailPageWrapper';
import { ConditionDetailPageWrapper } from './pages/ConditionDetailPageWrapper';

import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFFDF8] text-[#24190F] selection:bg-[#B87908] selection:text-white font-sans flex flex-col pb-16 md:pb-0">
        {/* Persistent Global Navbar */}
        <Navbar onBookClick={handleOpenAppointment} />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/about"
              element={<AboutPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/doctor"
              element={<DoctorPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/treatments"
              element={<ServicesPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/conditions"
              element={<ServicesPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/services/:id"
              element={<ServiceDetailPageWrapper onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/conditions/:id"
              element={<ServiceDetailPageWrapper onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/services/:serviceId/:conditionId"
              element={<ConditionDetailPageWrapper onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/conditions/:serviceId/:conditionId"
              element={<ConditionDetailPageWrapper onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/patient-journey"
              element={<PatientJourneyPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/patient-stories"
              element={<PatientStoriesPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/clinic"
              element={<ClinicPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/blog"
              element={<BlogPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onBookClick={handleOpenAppointment} />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onBookClick={handleOpenAppointment} />}
            />
          </Routes>
        </div>

        {/* Persistent Global Footer */}
        <Footer />

        {/* Mobile Sticky Quick-Action Bar */}
        <MobileBottomBar onBookClick={handleOpenAppointment} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal
          isOpen={isAppointmentOpen}
          onClose={handleCloseAppointment}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
