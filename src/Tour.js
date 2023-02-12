import { useState } from "react";

function Tour({ name, info, image, price, children }) {
  const [more, setMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {more ? `${info.substring(0, 200)}...` : info}
          <button className="read-more" onClick={() => setMore(!more)}>
            {more ? "read more" : "show less"}
          </button>
        </p>

        {children}
      </footer>
    </article>
  );
}

export default Tour;
