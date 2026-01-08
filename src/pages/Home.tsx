import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section style={{ marginBottom: "3rem" }}>
            <h1>🐾🐾Bienvenue sur Adaopte🐾🐾</h1>
            <p>Donnons-leur autant qu'ils nous apportent.
                Chaque jour, des milliers d'animaux attendent une famille aimante.
            </p>
        </section>

            <section style={{ 
                marginTop:"3rem", 
                padding: "2rem", 
                backgroundColor: "#fffaf7", 
                borderRadius: "8px", 
                textAlign: "center" 
                }}
                >
                <h2>Nos animaux à adopter</h2>
                {/* ici viendra la liste des animaux */}
                <p>Découvrez les animaux disponibles pour l'adoption.</p>

        <div style={{ display: "flex", gap: "1rem",marginTop: "1rem"}}>
            <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px"}}>
                🐶 Chien
            </div>
            <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", }}>
                🐱 Chat
            </div>
        </div>            
        </section>

            {/* Processus d'adoption */}
            <section>
                <h2>Comme ça marche</h2>
                    <ol>
                        <li>Trouvez votre compagnon</li>
                        <li>Remplissez une demande d'adoption</li>
                        <li>Rencontrez l'animal</li>
                        <li>Bienvenue à la maison</li>
                    </ol>
                    </section>

                    {/*Call To Action*/}
                    <section>
                        <h2>Prêt(e) à chancher une vie ?</h2>
                        <p>Adopter, c'est donner une seconde chance à un animal en détresse.</p>
                        <p>Contactez-nous pour commencer votre aventure d'adoption.</p>
                        <Link to="/jadopte">
                        <button
                        style={{
                            padding: "0.75rem 1.5rem",
                            backgroundColor: "#333",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => 
                            (e.currentTarget.style.backgroundColor = "#555")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#333")
                    }
                     >  
                            Adopter un animal
                            </button>
                        </Link>

                    </section>

              
            
        </main>
    );
}