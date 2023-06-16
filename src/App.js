import './App.css';
import{Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Services from './components/Services';
import About from './components/About';
import DentalCare from './components/DentalCare';
import DentalImplants from './components/DentalImplants';
import MetalBraces from './components/MetalBraces';
import TeethWhitening from './components/TeethWhitening';
import ToothExtraction from './components/ToothExtraction';
import Doctors from './components/Doctors';
import DentalCrown from './components/DentalCrown';
import Footer from './components/Footer';
import BookAppointment from './components/BookAppointment';
import DoctorDetails from './components/DoctorDetails';

function App() {


  const data = [
    {
      title: "doctor1",
      description: "This is the first doctor"
    },
    {
      title: "doctor2",
      description: "This is the second doctor"
    },
    {
      title: "doctor3",
      description: "This is the third doctor"
    },
    {
      title: "doctor3",
      description: "This is the fourth doctor"
    },

  ]


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}>
            <Route path='services/dentalcare' element={<DentalCare />}></Route>
            <Route path='services/dentalimplants' element={<DentalImplants />}></Route>
            <Route path='services/metalbraces' element={<MetalBraces />}></Route>
            <Route path='services/teethwhitening' element={<TeethWhitening />}></Route>
            <Route path='services/toothextraction' element={<ToothExtraction />}></Route>
            <Route path='services/dentalcrown' element={<DentalCrown />}></Route>
        </Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route   path='/doctors' element={<Doctors />}>
        </Route>
        <Route  path='/doctors/:userId' element={<DoctorDetails />}></Route>

        <Route path='services/appointmentbooking' element={<BookAppointment />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
