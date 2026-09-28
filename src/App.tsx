import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorPage } from './pages/DoctorPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { ConditionsPage } from './pages/ConditionsPage';
import { PatientJourneyPage } from './pages/PatientJourneyPage';
import { PatientStoriesPage } from './pages/PatientStoriesPage';
import { ClinicPage } from './pages/ClinicPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#102A43] selection:bg-amber-400 selection:text-white font-sans flex flex-col">
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
              path="/treatments"
              element={<TreatmentsPage onBookClick={handleOpenAppointment} />}
            />
            <Route
              path="/conditions"
              element={<ConditionsPage onBookClick={handleOpenAppointment} />}
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
