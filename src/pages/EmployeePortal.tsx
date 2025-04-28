import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Lock, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DocumentTree from "@/components/DocumentTree";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmployeePortal = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // В реальном приложении здесь будет проверка авторизации
  const isAuthenticated = true; // Заглушка для демонстрации

  if (!isAuthenticated) {
    return <div className="container mx-auto p-8 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
        <h1 className="text-2xl font-bold mb-6">Доступ ограничен</h1>
        <p className="mb-6">Эта страница доступна только для сотрудников ООО "ЛАКС"</p>
        <Button onClick={() => navigate("/")} className="w-full">
          Вернуться на главную
        </Button>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      <div className="bg-primary text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/")}
              className="text-white hover:bg-primary-600"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Портал сотрудников ООО "ЛАКС"</h1>
              <p className="text-sm opacity-80">Внутренняя система документооборота</p>
            </div>
          </div>
          
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-100" />
            <Input
              placeholder="Поиск документов..."
              className="pl-9 bg-primary-700 border-primary-600 text-white placeholder:text-primary-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Боковая панель с деревом документов */}
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Документы
            </h2>
            
            <div className="mb-6">
              <Tabs defaultValue="all">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="recent">Недавние</TabsTrigger>
                  <TabsTrigger value="favorite">Избранные</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <Separator className="my-4" />
            
            <DocumentTree />
          </div>
          
          {/* Основная область контента */}
          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-xl font-medium text-gray-700 mb-2">Система документооборота ООО "ЛАКС"</h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                Выберите документ из дерева документооборота слева для просмотра или редактирования.
                Здесь будут отображаться выбранные документы и отчеты.
              </p>
            </div>
            
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePortal;