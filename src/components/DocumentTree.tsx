import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

// Типы для структуры документов
type DocumentItem = {
  id: string;
  title: string;
  type: "file" | "folder";
  lastUpdated?: string;
  children?: DocumentItem[];
};

// Структура дерева документов
const documentStructure: DocumentItem[] = [
  {
    id: "doc-orders",
    title: "Документы по заказам",
    type: "folder",
    children: [
      {
        id: "doc-orders-requests",
        title: "Заявки на услуги",
        type: "folder",
        children: [
          { id: "doc-orders-confirmed", title: "Подтвержденные заявки", type: "folder" },
          { id: "doc-orders-pending", title: "Ожидающие подтверждения", type: "folder" },
          { id: "doc-orders-declined", title: "Отказанные заявки", type: "folder" }
        ]
      },
      {
        id: "doc-orders-contracts",
        title: "Договора и контракты",
        type: "folder",
        children: [
          { id: "doc-orders-active", title: "Активные договора", type: "folder" },
          { id: "doc-orders-archive", title: "Архив договоров", type: "folder" }
        ]
      },
      {
        id: "doc-orders-payments",
        title: "Платежи и счета",
        type: "folder",
        children: [
          { id: "doc-payments-unpaid", title: "Неоплаченные счета", type: "folder" },
          { id: "doc-payments-paid", title: "Оплаченные счета", type: "folder" },
          { id: "doc-payments-history", title: "История платежей", type: "folder" }
        ]
      }
    ]
  },
  {
    id: "doc-production",
    title: "Документы по производственным процессам",
    type: "folder",
    children: [
      {
        id: "doc-prod-smd",
        title: "СМД-монтаж печатных плат",
        type: "folder",
        children: [
          { id: "doc-smd-tasks", title: "Технические задания", type: "folder" },
          { id: "doc-smd-reports", title: "Отчеты о выполнении", type: "folder" },
          { id: "doc-smd-risks", title: "Риски и несоответствия", type: "folder" }
        ]
      },
      {
        id: "doc-prod-assembly",
        title: "Выводной монтаж",
        type: "folder",
        children: [
          { id: "doc-assembly-tasks", title: "Технические задания", type: "folder" },
          { id: "doc-assembly-reports", title: "Отчеты о выполнении", type: "folder" },
          { id: "doc-assembly-risks", title: "Риски и несоответствия", type: "folder" }
        ]
      },
      {
        id: "doc-prod-tampo",
        title: "Нанесение информации методом тампопечати",
        type: "folder",
        children: [
          { id: "doc-tampo-tasks", title: "Технические задания", type: "folder" },
          { id: "doc-tampo-reports", title: "Отчеты о выполнении", type: "folder" },
          { id: "doc-tampo-risks", title: "Риски и несоответствия", type: "folder" }
        ]
      },
      {
        id: "doc-prod-welding",
        title: "Контактная сварка металла",
        type: "folder",
        children: [
          { id: "doc-welding-tasks", title: "Технические задания", type: "folder" },
          { id: "doc-welding-reports", title: "Отчеты о выполнении", type: "folder" },
          { id: "doc-welding-risks", title: "Риски и несоответствия", type: "folder" }
        ]
      }
    ]
  },
  {
    id: "doc-admin",
    title: "Административные документы",
    type: "folder",
    children: [
      {
        id: "doc-admin-reports",
        title: "Отчеты о работе компании",
        type: "folder",
        children: [
          { id: "doc-reports-monthly", title: "Ежемесячные отчеты", type: "folder" },
          { id: "doc-reports-yearly", title: "Годовые отчеты", type: "folder" }
        ]
      },
      {
        id: "doc-admin-corporate",
        title: "Корпоративная документация",
        type: "folder",
        children: [
          { id: "doc-corporate-charter", title: "Устав компании", type: "file", lastUpdated: "15.01.2025" },
          { id: "doc-corporate-policies", title: "Политики и регламенты", type: "folder" }
        ]
      }
    ]
  }
];

// Компонент для отображения файла или папки
const DocumentItem = ({ item }: { item: DocumentItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  
  const isFolder = item.type === "folder" && item.children && item.children.length > 0;
  
  return (
    <div className="py-1">
      <div 
        className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
        onClick={() => isFolder ? setIsExpanded(!isExpanded) : null}
      >
        {isFolder ? (
          <button onClick={toggleExpand} className="mr-1 text-gray-500">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        ) : (
          <FileText size={16} className="mr-1 text-gray-500" />
        )}
        
        {isFolder ? (
          <Folder size={16} className="mr-2 text-primary" />
        ) : (
          <FileText size={16} className="mr-2 text-blue-500" />
        )}
        
        <span className="text-sm">{item.title}</span>
        
        {item.lastUpdated && (
          <span className="ml-auto text-xs text-gray-500">{item.lastUpdated}</span>
        )}
      </div>
      
      {isFolder && isExpanded && (
        <div className="pl-6 border-l border-gray-200">
          {item.children?.map((child) => (
            <DocumentItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Компонент для отображения дерева документов с аккордеоном
const DocumentTree = () => {
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
      <Accordion type="single" collapsible className="w-full">
        {documentStructure.map((section) => (
          <AccordionItem key={section.id} value={section.id}>
            <AccordionTrigger className="text-sm py-2">
              <div className="flex items-center">
                <Folder size={16} className="mr-2 text-primary" />
                {section.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-2">
                {section.children?.map((item) => (
                  <DocumentItem key={item.id} item={item} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DocumentTree;