//assignment no 12

let names: string[] = ["Noriyah", "Baqir", "Fatima", "Hussain", "Ali"];

for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! how are you today?`);
    
} 

names.forEach(friend => {
    console.log(`Hi, ${friend}! how are you today?`);
    
});