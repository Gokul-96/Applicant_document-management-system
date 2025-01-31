import React, { useCallback } from "react";
import { ListGroup, Button } from "react-bootstrap";

const DocumentList = ({ documents, currentDoc, setCurrentDoc, addDocument }) => {
  
  const handleClick = useCallback((index) => setCurrentDoc(index), [setCurrentDoc]);

  return (
    <div className="d-flex flex-column me-3">
      <ListGroup>
        {documents.map((_, index) => (
          <ListGroup.Item 
            key={index} 
            active={index === currentDoc} 
            onClick={() => handleClick(index)}
          >
            Document_{index + 1} 
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="success" className="mt-2" onClick={addDocument}>Add</Button>
    </div>
  );
};

export default DocumentList;
