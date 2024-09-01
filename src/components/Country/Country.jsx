import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area } = country;

  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
