// mockDocument.js

export const getUploadedDocuments = () => {
    // Mock uploaded documents
    return [
      { id: 1, name: 'Document 1.pdf' },
      { id: 2, name: 'Document 2.docx' },
      { id: 3, name: 'Document 3.txt' },
      { id: 4, name: 'Document 4.txt' },
      { id: 5, name: 'Documentadasdasdasdjahksjdhajkd 6.txt' },
      { id: 6, name: 'Document 5.txt' },

    ];
  };
  
  export const uploadDocument = (file) => {
    // Mock document upload
    return { id: Math.random(), name: file.name };
  };
  
  export const deleteDocument = (id) => {
    // Mock document delete (based on ID)
    console.log(`Deleting document with ID: ${id}`);
  };
  
  export const downloadDocument = (id) => {
    // Mock document download
    console.log(`Downloading document with ID: ${id}`);
  };
  