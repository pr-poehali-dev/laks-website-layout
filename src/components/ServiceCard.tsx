import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceCard = ({ id, title, description, image, imageAlt }: ServiceProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 flex justify-between">
        <Link to={`/services/${id}`}>
          <Button variant="outline">Подробнее</Button>
        </Link>
        <Link to={`/order?service=${id}`}>
          <Button>Заказать</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;