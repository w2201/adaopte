import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config({path:'.env.local'});
dotenv.config({path:'.env'});

async function main() {
  console.log("VITE_DB_PASSWORD =", process.env.VITE_DB_PASSWORD); /*pamela test*/
}


const app = express();     
app.use(cors());         
app.use(express.json()); 

const db = await mysql.createConnection({
  port: 3306, // Port MySQL (par défaut : 3306)
  host: 'localhost',
  user: 'adaopte_user',
  password: process.env.VITE_DB_PASSWORD,
  database: 'adaopte'
});

app.post('/sql', async (req, res) => {
  try {
    const [rows] = await db.execute(req.body.query, req.body.params || []);
    
    res.json({ success: true, data: rows });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.get("/api/test", async (req, res) => {                           //creation d'une route de test -pamela-
  try {
    const [rows] = await db.execute("SELECT 'Test API réussie' AS message"); //requete sql de test -pamela-

    res.json({ success: true, data: rows });    //renvoi du resultat de la requete en format json -pamela-

  } catch (error) {
    res.status(500).json( { success: false, error: error.message }); //gestion des erreurs -pamela-
  }
});

app.listen(3001, () => console.log('API: http://localhost:3001'));

main().catch((err => {
console.error("erreur serveur:", err); /*pamela test*/
} ));