const Homepage = () => {
  return (
    <section className="pt-24 md:pt-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-24">
          <div className="mx-4 rounded-full bg-gray-200 h-1 w-1"></div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 pb-24 lg:pb-52">
            <div className="max-w-md lg:max-w-none mx-auto">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl mb-20">
                Qual pokemon você escolheria?
              </h1>
              <div className="flex flex-wrap -mx-4 mb-16">
                <h4 className="text-xl sm:text-2xl mb-6">
                  Você pode saber o tipo de Pokémon, seus pontos fortes, fracos
                  e habilidades.
                </h4>
              </div>
              <a
                className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-[rgb(108,223,185)]  text-white rounded "
                href="/Main"
              >
                Veja os Pokemons
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-end">
            <img
              className="block max-w-sm xl:max-w-lg mx-auto lg:mr-0"
              src="./logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
