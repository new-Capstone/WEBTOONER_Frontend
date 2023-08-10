import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function PhotoUploader({ onUpload }) {
  const [hasUploaded, setHasUploaded] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      onUpload(acceptedFiles);
      setHasUploaded(true);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {!hasUploaded && <p>Click to select files</p>}
      {isDragActive && <p>Drop the files here ...</p>}
    </div>
  );
}

export default PhotoUploader;


