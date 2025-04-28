import { CheckCircle, Clock, Award, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Высокое качество",
      description: "Все работы выполняются на современном оборудовании с соблюдением технических стандартов"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Точность выполнения",
      description: "Гарантируем точность и надежность всех технологических процессов"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Опытная команда",
      description: "Наши специалисты имеют многолетний опыт работы в области высокотехнологичных производств"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Доступность услуг",
      description: "Предлагаем конкурентоспособные цены и гибкие условия сотрудничества"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;