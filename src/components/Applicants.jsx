import React, { useCallback} from 'react';
import { Nav, Button } from "react-bootstrap";

const Applicants = ({ applicants, currentApplicant, setCurrentApplicant, addApplicant }) => {
    const handleSelect = useCallback((key) => setCurrentApplicant(Number(key)), [setCurrentApplicant]);

    
  return (
    <div className="d-flex align-items-center">
      <Nav variant="tabs" activeKey={currentApplicant} onSelect={handleSelect}>
        {applicants.map((_, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={index}>Application_{index + 1} </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Button variant="success" className="ms-2" onClick={addApplicant}>Add</Button>
    </div>




        

  )
}

export default Applicants