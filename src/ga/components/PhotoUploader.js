import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function PhotoUploader({ onUpload }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onUpload(acceptedFiles);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Click to select files</p>
      )}
    </div>
  );
}

export default PhotoUploader;
