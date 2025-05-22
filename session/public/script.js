const loginForm = document.getElementById("login");

console.log(loginForm);

loginForm.addEventListener("submit",async (e)=>{
  e.preventDefault();
  const allInputs = e.target.children;
  const email = allInputs[0].value;
  const password = allInputs[1].value;
  login(email,password);
})

const login = async (email,password)=>{
  const res = await axios.post("http://localhost:4000/login",{email,password});
  document.cookie = res.data.token
}