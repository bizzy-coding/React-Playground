import { useState } from "react";

export default function TrainerShop() {

  const trainers = [
    {
      id: 1,
      name: "Nike Air Max 90",
      price: 110,
      image: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-max-90-pastel-dq0374-100-lead.jpg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 130,
      image:
        "https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/64944/313433/ADI16727_1000_16__72700.1720780679.jpg",
    },
    {
      id: 3,
      name: "New Balance 574",
      price: 95,
      image: "https://cms-cdn.thesolesupplier.co.uk/2022/03/new-balance-574-pastel-yellow-side-tsw.jpg",
    },
  ];

  const [basket, setBasket] = useState([]);

  return (
    <>
      <h1>Trainer Shop</h1>

      <div className="trainer-list" style={{ display: "flex", gap: "20px" }}>
        {trainers.map((trainer) => (
          <div className="trainer-card">
            <h2 className="trainer-name">{trainer.name}</h2>
            <p>£{trainer.price}</p>
            <img
              src={trainer.image}
              alt="trainer image"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <button className="shop-btn" onClick={() => setBasket([...basket, trainer]) }>Add to basket</button>
          </div>

        ))}
      </div>

      <div className="my-basket">
  <h2>Basket</h2>
{
    basket.length === 0 ? (
        <p>Your basket is empty</p>
    ) : (
        <ul>
            {basket.map((item, index) => (
                <li key={index}>
                {item.name} — £{item.price}
              </li>
            ))}
        </ul>
    )
}
</div>

    </>
  );
}
