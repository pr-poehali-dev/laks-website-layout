import ServiceCard, { ServiceProps } from "./ServiceCard";

const Services = () => {
  const services: ServiceProps[] = [
    {
      id: "smd",
      title: "СМД-монтаж печатных плат",
      description: "Профессиональный монтаж SMD-компонентов на печатные платы с использованием современного оборудования и технологий.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "СМД-монтаж печатных плат"
    },
    {
      id: "through-hole",
      title: "Выводной монтаж",
      description: "Качественный монтаж выводных компонентов, отличающийся высокой надежностью и длительным сроком службы.",
      image: "https://images.unsplash.com/photo-1588931294039-2ce11d5267b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Выводной монтаж электронных компонентов"
    },
    {
      id: "tampo",
      title: "Тампопечать на изделиях",
      description: "Нанесение маркировки на изделия способом тампопечати, позволяющее получить четкое и долговечное изображение.",
      image: "https://images.unsplash.com/photo-1563396983725-ba6335e0e75a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Тампопечать на изделиях"
    },
    {
      id: "welding",
      title: "Контактная сварка металла",
      description: "Профессиональная контактная сварка металла толщиной до 1 мм, обеспечивающая высокую прочность соединения.",
      image: "https://images.unsplash.com/photo-1584205034429-a84be127df26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Контактная сварка металла"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр высокотехнологичных услуг в области монтажа и обработки материалов 
            с использованием передового оборудования и опытных специалистов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;