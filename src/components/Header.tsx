import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white font-bold text-xl">
            Л
          </div>
          <span className="ml-2 font-bold text-xl text-primary">ООО "ЛАКС"</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/services" className="font-medium hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            О компании
          </Link>
          <Link to="/contacts" className="font-medium hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Авторизация
          </Button>
          <Button size="sm">
            Регистрация
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white font-bold text-xl">
                Л
              </div>
              <span className="ml-2 font-bold text-xl text-primary">ООО "ЛАКС"</span>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-medium text-xl hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-xl hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Услуги
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-xl hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="font-medium text-xl hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="w-full">
                  Авторизация
                </Button>
                <Button className="w-full">
                  Регистрация
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;