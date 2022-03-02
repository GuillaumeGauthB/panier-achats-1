import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Histoire from './Histoire';

function App() {
  // Etat React pour gerer un panier d'achats
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
  // Remarquez que useState retourne un tableau:
  // Le premier element du tableau represente le contenu de l'etat
  const panier = etatPanier[0];
  // Le deuxieme elelement est une fonction qui sert a reecrire l'etat
  // const setPanier = etatPanier[1];
  // Donc, alternativevment avec destructucturation

  // let compteurClic = 0;
  // const etatCompteur = useState(0);
  const [compteur, setCompteur] = useState(0);
  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour executer ce code de facon controlee
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  return (
    <div className="App">
      <Entete panier={panier} />
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/notre-histoire" element={<Histoire/>}/>
        <Route path="/nos-produits" element={<ListeProduits etatPanier={etatPanier} />}/>
      </Routes>
      
      <div>
        <span>Nombre de clics: <i className='compteur'>{compteur}</i></span>
        <button onClick={() => {setCompteur(compteur + 1); /*compteurClic++;*/ console.log("hippity hoppity you are now my property: ", compteur)}}>CLiquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
