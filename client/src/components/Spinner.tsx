// Lib Imports.
import { ClipLoader } from 'react-spinners';

// This compoent is used throughout the app to show Loading.
export default function Spinner() {
  return (
    <div className="bg-foreground/45 fixed top-0 left-0 z-[100] grid h-[100vh] w-[100vw] place-items-center">
      <ClipLoader color="#fea93a" size={60} />
    </div>
  );
}
