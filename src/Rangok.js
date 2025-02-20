import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Rangok = () => {
    const [adatok, setAdatok] = useState([]);

    const letoltes = async () => {
        let x = await fetch("http://localhost:3000/Rangok");
        let y = await x.json();
        setAdatok(y);
    };

    useEffect(() => {
        letoltes();
    }, []);

    const rangModositas = async (email, ujRang) => {
        await fetch(`http://localhost:3000/Rangok/${email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rang_ertek: ujRang })
        });
        letoltes(); // Frissítjük az adatokat a változás után
    };

    return (
        <div>
            <Navbar />
            <div style={styles.content}>
                <h1>Rangok</h1>
                <p>Felhasználók:</p>
            </div>
            {
                adatok.map((item, key) => (
                    <div key={key} style={styles.Userrang}>
                        <p>{item.felh_email}</p>
                        <p>{item.rang_ertek}</p>
                        <button onClick={() => rangModositas(item.felh_email, prompt("Új rang:"))}>Módosítás</button>
                    </div>
                ))
            }
        </div>
    );
};

const styles = {
    content: {
      padding: '20px',
      textAlign: 'center',
    },
    Userrang: {
        textAlign: 'center',
        border: '5px solid black',
        margin: '5px',
        padding: '5px',
        marginLeft: window.innerWidth < 768 ? "2%" : "40%", // Mobilon kisebb margin
        marginRight: window.innerWidth < 768 ? "2%" : "40%",
    },
};


export default Rangok;
