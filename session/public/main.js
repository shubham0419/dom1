const signupform = document.getElementById("signup");


signupform?.addEventListener("submit",async (e)=>{
  e.preventDefault();
  const allInputs = e.target.children;
  const name = allInputs[0].value;
  const email = allInputs[1].value;
  const password = allInputs[2].value;
  signup(name,email,password);
})

const signup = async (name,email,password)=>{
  const res = await axios.post("http://localhost:4000/signup",{name,email,password});
}

// login

const root = document.getElementById("root");

const createMessage = (user)=>{
  const h2 = document.createElement("h2");
  if(user.role){
    h2.innerText = `welcome User ${user.name}`
  }else{
    h2.innerText = "you are not logged in, log in first"
  }
  root.innerHTML = '';
  root.append(h2);
}

const getUser = async ()=>{
  let token = document.cookie;
  createMessage()
  let res = await axios.get("http://localhost:4000/currentuser",{
    headers:{
      authorization:`Bearer ${token}`
    }
  });

  createMessage(res.data.user)
}

getUser();