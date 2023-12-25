import React from "react";
import { LoginForm } from "../components/LoginForm";
import "../assets/auth.css"

export function LoginPage(){
    return(<>
        <header><h1>Digite suas credenciais:</h1></header>

        <main>
            <LoginForm/>
            <nav>
                <a href="/">Voltar</a>
            </nav>
        </main>    
        </>
    )
}