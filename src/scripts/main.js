// C is for Cookie
//Upon running the app, the browser initialized an infinite loop,
//so there is an issue with the loop causing this.
// I removed y from the code because it wasn't necessary, causing the loop to be infinite
//I changed the for statements to account for cookies[0] and used x in the comparison in order for the loop to stop

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];
// let y = 1;

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x];
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

