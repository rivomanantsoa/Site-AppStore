// src/UploadApp.tsx
import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './UploadApp.css';

const UploadApp = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleUpload = () => {
    if (!file) {
      alert("Veuillez sélectionner un fichier.");
      return;
    }

    const storageRef = ref(storage, `apps/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log("Valeur du progress:");
    uploadTask.on('state_changed',
      (snapshot) => {
        const total = snapshot.totalBytes;
        if (total === 0) {
          console.warn("Le fichier est vide ou erreur de lecture.");
          return;
        }
        const prog = (snapshot.bytesTransferred / total) * 100;
        
        console.log('Progression : ' + prog + '%');
        setProgress(prog);
        console.log("Valeur du progress:", prog);
      },
      (error) => {
        console.error("Erreur d'upload : ", error);
        alert("Erreur : " + error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadUrl(url);
          alert("Fichier envoyé avec succès !");
        });
      }
    );
  };

  return (
    <div>
      <h2>Uploader une application</h2>
      <input
        type="file"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0] || null;
          setFile(selectedFile);
        }}
      />
      <button onClick={handleUpload}>Uploader</button>

      {progress > 0 && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress.toFixed(0)}%
          </div>
        </div>
      )}

      {downloadUrl && (
        <p>Lien de téléchargement : <a href={downloadUrl} target="_blank" rel="noreferrer">{downloadUrl}</a></p>
      )}
    </div>
  );
};

export default UploadApp;
