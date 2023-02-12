import Tour from "./Tour";

function Tours({ tours, remoteTour }) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour}>
            <button className="delete-btn" onClick={() => remoteTour(tour.id)}>
              not interested
            </button>
          </Tour>
        ))}
      </div>
    </section>
  );
}

export default Tours;
