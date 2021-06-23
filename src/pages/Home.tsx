import { useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
  const { user, SingInWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await SingInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando perguntas erespostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIcon} alt="logo google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            <span></span>
            <p>ou entre em uma sala</p>
            <span></span>
          </div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
