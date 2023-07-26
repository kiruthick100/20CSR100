import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import AddTrain from "../Admin/AddTrain";
import DisplayTrain from "../Client/DisplayTrain";
import DetailView from '../Client/DetailView';
import PasangerDetails from '../Client/PasangerDetails';
import Payment from '../Client/Payment';
const Header=()=>
{
  
  
    return(
        
          
       <Router>
        
      <navbar className="header">
        
          <Link to="/" >Home</Link>
        
       
       
       
       
          </navbar>
         
          <Routes>
          

         
            <Route  exact path="/" element={<DisplayTrain/>}></Route>
            
        <Route  path="/AddTrain" element={<AddTrain/>}></Route>
       <Route path="/DetailView" element={<DetailView/>}></Route>
       <Route path="/PasangerDetails" element={<PasangerDetails/>}></Route>
       <Route path="/Payment" element={<Payment/>}></Route>

         </Routes>
        </Router>
        
        
    )
}
export default Header;