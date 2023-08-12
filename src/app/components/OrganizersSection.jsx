

const OrganizersSection = () => {
    return (
      <div className="bg-gray-100 mt-5 p-10">
        <div className="text-3xl font-semibold m-3 text-center">Vous êtes entre de bonnes mains</div>
        <div className="text-gray-600 text-xl m-3 text-center">Plus de 50 000 organisateurs d'événements ont choisi BjEventMarket</div>
        <div
          className=" max-w-3xl h-32 mt-0 mx-auto bg-transparent bg-center bg-contain bg-no-repeat bg-scroll box-border"
          style={{
            backgroundImage: 'url("https://www.universe.com/multiverse/assets/images/templates/index/logos/logos-d4e15f4af0e48a0babd45eab6a100f9d.svg")',
            backgroundSize: '100% 100%',
          }}
        >
            {/* <div className={localstyle.bgorganizerslogo}></div> */}
        </div>
      </div>
    );
  };
  
  export default OrganizersSection;
  