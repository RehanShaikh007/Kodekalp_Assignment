
import { Link} from "react-router-dom";


const Header = () => {
  
  return (
    <header className="bg-gradient-to-r from-gray-800 to-purple-700 shadow-md p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap items-center">
            <span><img className="w-[7em] mx-3" src="/logo.webp" alt="logo" /></span>
            <span className="text-blue-500">Kode</span>
            <span className="text-purple-600">Kalp</span>
          </h1>
        </Link>
       
        
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-gray-300 hover:text-white font-medium text-lg">
              Home
            </li>
          </Link>

          <Link to="/about">
          <li className="hidden sm:inline text-gray-300 hover:text-white font-medium text-lg">
              About
            </li>
          </Link>

         
        </ul>
      </div>
    </header>
  );
};

export default Header;
