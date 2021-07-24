import BakeryDropItem from "./BakeryDropItem";
import articleStyles from "../styles/Article.module.css";

const BakeryDropList = ({ data, cart, cartQty, handleAddToCart }) => {
  var today = new Date();

  const upcomingDrops = data.filter((drop) => new Date(drop.dropDate) > today);

  const nextDropDate = new Date(
    Math.min.apply(
      null,
      upcomingDrops.map((e) => {
        return new Date(e.dropDate);
      })
    )
  );

  const nextDrop = data.filter((e) => {
    const d = new Date(e.dropDate);
    return d.getTime() == nextDropDate.getTime();
  })[0];

  return (
    <div>
      <BakeryDropItem
        nextDrop={nextDrop}
        cart={cart}
        cartQty={cartQty}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default BakeryDropList;
