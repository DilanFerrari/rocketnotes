import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile"> 
                <img 
                    src="https://github.com/DilanFerrari.png" 
                    alt="Foto do usuário" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Dilan Ferrari</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}