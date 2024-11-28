import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MeetingCalender from './components/MeetingCalender/MeetingCalender';
import MeetingForm from './components/MeetingCalender/MeetingForm';
import MeetingList from './components/MeetingCalender/MeetingList';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Footer />
      <MeetingCalender/>
      <MeetingForm/>
      <MeetingList/>
    </>
  );
}

export default App;