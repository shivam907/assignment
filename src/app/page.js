import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <>
      <Header
        name="New Arrival"
        description="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      <Products />
    </>
  );
}
