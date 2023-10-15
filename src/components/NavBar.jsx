function NavBar({ pokemonIndex, setpokemonIndex, pokemonList }) {

  function handleClick(photo) {
    if (pokemonList[photo].name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setpokemonIndex(photo);
  }


  return (
    <div>
      {pokemonList.map((pokename, photo) => (
        <button
          onClick={() => handleClick(photo)}
          key={pokename.name}

        >
          {pokename.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;

