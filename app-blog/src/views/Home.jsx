import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {

    const [visitantes, setVisitantes] = useState(1);

    console.log(visitantes);

    const dataBlog = {
        title: "Blog Aprende React como un NInja",
        body: "Lorem ipsum dolor sit amet.",
        imagen: "https://aprendizdeveloper.com/wp-content/uploads/2024/03/Logo-de-react-930x620.png"
    }


    const clickBtnVisitantes = () => {

        setVisitantes( visitantes + 1 );

    }


    

  return (
    <>
      <Header />

      <Main props={dataBlog} props2={"Algun dato para compartor"} />

      <div>

            <button className="btn btn-primary" onClick={clickBtnVisitantes} >
                Generar visitas
            </button>

            <h3>
               Total Visitantes:  {visitantes}
            </h3>

      </div>

      <Footer />
    </>
  );
};

export default Home;