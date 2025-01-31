import React,{useState} from 'react'
import Applicants from "./components/Applicants"
import Documents from "./components/Documents"
import FileUpload from "./components/FileUpload"
import Navigation from "./components/Navigation";




const App = () => {
 const [applicants, setApplicants] = useState([['Document_1']]);
 const [currentApplicant, setCurrentApplicant] = useState(0);


 const addApplicant = () => {
  setApplicants((prev) => {
    const newApplicants = [...prev, ["Document_1"]];
    setCurrentApplicant(newApplicants.length - 1);  
    return newApplicants;
  });
  setCurrentDoc(0);
};




  return (
    <div>
      <Applicants
      applicants={applicants}
      currentApplicant={currentApplicant}
      setCurrentApplicant={setCurrentApplicant}
      addApplicant={addApplicant}/>
      <Documents/>
      <FileUpload/>
      <Navigation/>
    </div>
  )
}

export default App
