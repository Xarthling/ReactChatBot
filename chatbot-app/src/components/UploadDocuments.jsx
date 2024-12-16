import React, { useState } from 'react';

const UploadDocuments = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Logic to handle file upload goes here
            console.log('File uploaded:', selectedFile.name);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="upload-documents">
            <h2>Upload Documents</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadDocuments;