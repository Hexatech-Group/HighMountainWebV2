let uid = localStorage.getItem("uId")
let role = localStorage.getItem("role")


const SendRegister = async() =>{
    console.log("New user!")
    window.location.href = "./register.html"
}

const SendLogin = async() =>{
    console.log("Login Open")
    window.location.href = "./loginregisto.html"
}

const SendPerfilUser = async() =>{
    console.log("Perfil User")
    window.location.href = "./profileUser.html"
}

const SendSaude = async() =>{
    console.log("Saude")
    window.location.href = "./saudeCliente.html"
}

const SendPercursos = async() =>{
    console.log("Percursos")
    window.location.href = "./percursos.html"
}

const SendCriarPercursos = async() =>{
    console.log("Criar Percursos")
    window.location.href = "./criarPercursos.html"
}

const Participantes = async() =>{
    console.log("Participantes")
    window.location.href = "./Admin/"
}

const verifySession = async() =>{
    if(uid == null){
        console.log("Sem sessão")
        SendLogin()
    }
}




const sendListClientesAdmin = async() =>{
    window.location.href ="./listClientes.html"
}

if(window.location.pathname == "loginregisto.html"){
    document.getElementById("register").addEventListener("click", SendRegister)
}else{
    if(window.location.pathname == "/register.html"){
   
    }else{
        if(window.location.pathname == "/profileUser.html"){

        }else{

            if(window.location.pathname == "/percursos.html"){
                document.getElementById("criarPercurso").addEventListener("click", SendCriarPercursos)
            }   
            else{
                if(window.location.pathname == "/saudeCliente.html"){
                    verifySession()
                    document.getElementById("profilUser").addEventListener("click", SendPerfilUser)
                }
            }
        }
    }
}
