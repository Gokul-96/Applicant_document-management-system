import React,{useState,useMemo} from 'react'
import Applicants from "./components/Applicants"
import Documents from "./components/Documents"
import FileUpload from "./components/FileUpload"
import Navigation from "./components/Navigation";




const App = () => {
 const [applicants, setApplicants] = useState([['Document_1']]);
 const [currentApplicant, setCurrentApplicant] = useState(0);
 const [currentDoc, setCurrentDoc] = useState(0);

 const addApplicant = () => {
  setApplicants((prev) => {
    const newApplicants = [...prev, ["Document_1"]];
    setCurrentApplicant(newApplicants.length - 1);  
    return newApplicants;
  });
  setCurrentDoc(0);
};

const currentDocuments = useMemo(() => applicants[currentApplicant], [applicants, currentApplicant]);


const addDocument = () => {
  setApplicants((prev) => 
    prev.map((applicant, index) =>
      index === currentApplicant ? [...applicant, `Document_${applicant.length + 1}`] : applicant
    )
  );
};





  return (
    <div>
      <Applicants
      applicants={applicants}
      currentApplicant={currentApplicant}
      setCurrentApplicant={setCurrentApplicant}
      addApplicant={addApplicant}/>

      <Documents
      documents={currentDocuments} 
      currentDoc={currentDoc} 
      setCurrentDoc={setCurrentDoc} 
      addDocument={addDocument}
      />




      <FileUpload/>
      <Navigation/>
    </div>
  )
}

export default App
