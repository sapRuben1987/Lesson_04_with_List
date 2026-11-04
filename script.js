console.log("Selbstständige Praxis");

const euro = "€";
const visits = [
  {
    id: 101,
    pet: { name: "Milo", species: "Cat" },
    owner: { name: "Ana", phone: "910111222" },
    fee: 35,
    completed: false
  },
  {
    id: 102,
    pet: { name: "Luna", species: "Dog" },
    owner: { name: "Bruno", phone: "910333444" },
    fee: 50,
    completed: true
  },
  {
    id: 103,
    pet: { name: "Pip", species: "Bird" },
    owner: null,
    fee: 20,
    completed: false
  },
  {
    id: 104,
    pet: { name: "Nala", species: "Cat" },
    owner: { name: "Carla", phone: "910555666" },
    fee: 40,
    completed: false
  }
]

function separatedNumber (visits){
    for(const separed of visits){
        const id = separed.id;
        const petName = separed.pet.name ? separed.pet.name : "Unknown";
        const petSpecies = separed.pet ? separed.pet.species:"Unknown";
        const ownerValue = separed.owner ? separed.owner.name: "Unknown";
        const feeName    = separed.fee ? separed.fee: "Unknown";
        const isCompleted = separed.completed ? "Completed": "Upcoming";
        
        console.log(`${id} | ${petName} | ${petSpecies} | ${ownerValue} | ${euro+feeName} | ${isCompleted}`);
    }
}
console.log("** Das Besuchsregister ausdrucken **")

separatedNumber(visits);

function functionSuch(visits, suchId){
  return visits.find(visit => visit.id === suchId)
}

console.log(`Besuch für ${functionSuch(visits, 102).pet.name}`)

    
        

