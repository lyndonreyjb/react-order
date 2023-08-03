import Card from "../ui/Card";
import FoodItem from "./FoodItem";
const FastFoods = [
  {
    id: "f1",
    name: "Cheeseburger",
    description: "Classic beef patty with melted cheese",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
  },
  {
    id: "f2",
    name: "Chicken Nuggets",
    description: "Crispy breaded chicken bites",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: "f3",
    name: "French Fries",
    description: "Golden and crispy potato fries",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "f4",
    name: "Hot Dog",
    description: "Grilled sausage in a bun with toppings",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1524237629218-0a109277890c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: "f5",
    name: "Strawberry Milkshake",
    description: "Creamy and delicious milkshake",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "f6",
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with pepperoni and cheese",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: "f7",
    name: "Soda",
    description: "Refreshing carbonated beverage",
    price: 1.49,
    image:
      "https://images.unsplash.com/photo-1613510213407-be9c70238a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "f8",
    name: "Onion Rings",
    description: "Crispy deep-fried onion rings",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: "f9",
    name: "Ice Cream Sundae",
    description: "Delightful ice cream topped with chocolate and nuts",
    price: 4.49,
    image:
      "https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: "f10",
    name: "Caesar Salad",
    description: "Fresh salad with romaine lettuce and Caesar dressing",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const AvailFood = () => {
  return (
    <section className="">
      <Card>
        {FastFoods.map((food) => (
          <FoodItem
            id={food.id}
            key={food.id}
            image={food.image}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </Card>
    </section>
  );
};

export default AvailFood;
