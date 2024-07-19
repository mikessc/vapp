import { useState } from 'react';
import Image from 'next/image';

interface FileUploadProps {
  title: string;
  cont: string;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ title, cont, accept }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<string | null>(null);

  // Función para manejar la carga de archivos
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result as string);
      };
  
      reader.readAsDataURL(file);
    }
  };

  // Función para simular clic en el input de archivo al hacer clic en el div
  const handleDivClick = () => {
    const fileInput = document.getElementById(`file-upload-${title}`);
    if (fileInput instanceof HTMLInputElement) {
      fileInput.click();
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full mb-4">
      {/* Sección izquierda (Input) */}
      <div className="flex flex-col w-6/12 pl-2">
        <span className="text-sm font-medium" style={{
          color: '#403F3F',
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px'
        }}>
          {title}
        </span>
        <label htmlFor={`file-upload-${title}`} className="flex items-center cursor-pointer border border-gray-300 rounded-md p-2 justify-between">
          <input
            id={`file-upload-${title}`}
            type="file"
            accept={accept}
            onChange={handleFileUpload}
            className="hidden"
          />
          <Image  
            src="/assets/icons/attachment.svg" // Ajusta la ruta según la ubicación real
            alt="Ícono de archivo adjunto"
            width={20}
            height={20}
            style={{ marginLeft: 'auto' }} // Para alinear el ícono a la derecha
          />
        </label>
        <span className="text-sm font-medium" style={{
          color: '#403F3F',
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px'
        }}>
          {cont}
        </span>
        <span className="text-sm text-gray-600 mr-2">
          {uploadedFile ? `Archivo subido: ${uploadedFile.name}` : ''}
        </span>
      </div>

      {/* Sección derecha (Espacio de carga de archivo) */}
      <div className="file-upload-space flex justify-center items-center w-1/2 bg-stone cursor-pointer"
        style={{
          height: '161px',
          border: '1px solid #D4D4D4',
          borderRadius: '8px',
          backgroundColor: 'var(--color-gray-200)',
        }}
        onClick={handleDivClick} // Maneja la carga de archivo al hacer clic en el div
      >
        {imageFile ? (
          <img src={imageFile} alt="Imagen subida" className="max-w-full max-h-full" />
        ) : (
          <label htmlFor={`file-upload-${title}`} className="flex flex-col items-center justify-center">
            <Image
              src="/assets/icons/image-01.svg"
              alt="attachment"
              width={40}
              height={40}
              style={{ fill: '#1B5B8C' }}
            />
            <span className="text-sm font-medium text-gray-600 mt-2">Subir imagen</span>
            <input
              id={`file-upload-${title}`}
              type="file"
              accept={accept}
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
