// const categorySelect = document.getElementById("category");
// const categories = [
//   { id: 1, name: "Technology" },
//   { id: 2, name: "Travel" },
//   { id: 3, name: "Food" },
//   { id: 4, name: "Lifestyle" },
//   { id: 5, name: "Business" },
// ];

// populateCategoryDropdown()

// function populateCategoryDropdown() {
  
//   while (categorySelect.options.length > 1) {
//     categorySelect.remove(1);
//   }

//   categories.forEach((category) => {
//     const option = document.createElement("option");
//     option.value = category.id;
//     option.textContent = category.name;
//     categorySelect.appendChild(option);
//   });
// }


const loginForm = document.getElementById("login-form");
const email = document.getElementById("username");
const password = document.getElementById("password");

loginForm.addEventListener("submit",async (e)=>{
  e.preventDefault();
  const useremail = email.value;
  const userPass = password.value;

  const res = await axios.post("http://localhost:3000/user/login",{
    email:useremail,
    password:userPass
  });
  document.cookie = res.data.token;

  axios.get('/http://localhost:3000/getallblogs`', {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  })
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
  console.log(res.data.token);
})