// Lib Imports.
import { Toaster } from 'react-hot-toast';

// Defining RHT styles for Manga Trench.
export function Toast() {
  return (
    <Toaster
      toastOptions={{
        loading: {
          iconTheme: {
            primary: '#fea93a',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#e7000b',
            secondary: '#fff',
          },
        },
        success: {
          iconTheme: {
            primary: '#fea93a',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}
