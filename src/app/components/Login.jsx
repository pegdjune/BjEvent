'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail }  from 'react-icons/hi';
import  Link  from 'next/link';
import  Image from 'next/image'
import  { useState } from 'react'
import  eicon  from '../../public/Sign-Up-PNG.png'


export default function Login(props) {


  const [formData, setFormData] = useState({
    email: '',
    motdepasse: '',
  });

  // Fonctions pour valider les champs

// validnom récupère le champ input correspondant

const validmail = (champ) =>
{

    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.com$/;
    if(!regex.test(champ.value))
    {
    champ.helperText ="";
    return false;
    }
    else
    {
    champs.helperText ="Email non valide";
    return true;
}

}

const valid = (e) =>
    {
            var o = validmail(e.target.email);
            console.log("validation appelée");
            if(o) return true;
            else  return false ;
            
            
    }
  // Fin de la vaidation des champs

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle the submit event on form submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    if ( valid(event))
    {
     try {
      // Convertir les données du formulaire en format JSON
      const jsonData = JSON.stringify(formData);

      // Effectuer la requête POST avec fetch

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      // Analyser la réponse JSON
     
     const data = await response.json();
     console.log('Réponse du serveur : ', data);
    } 
    catch (error) 
    {
      console.error('Erreur lors de l\'envoi des données : ', error);
    }
  }

  }


  // Composant retourné

  return (
  <section 
      className="bg-custom-gray bg-opacity-100 w-full h-screen"
      style={{ backgroundImage: `url(${props.urlImg.src})`}}
  
  >
  <form action="/api/form" onSubmit={handleSubmit} className="flex max-w-md  bg-white flex-col gap-4 border-solid bg-custom-white rounded-md p-5 translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2">
    <div className='inline-block flex-row'>
      <h1 className='w-1/2 text-center font-bold h-10 m-auto mb-2'>LOGIN </h1>
      <h2 className='text-center'> Vous n'avez pas de compte ?<Link className='text-blue-600' href="/register"> S'inscrire </Link> </h2>

    </div>     
      <div>
      <div className="max-w-md m-2">
        <div className="mb-2 block">
            <Label
            htmlFor="email"
            value="Adresse e-mail"
            />
        </div>
        <TextInput
            
            icon={HiMail}
            id="email"
            placeholder="name@flowbite.com"
            required
            type="email"
            value={formData.email}
          onChange={handleChange}
          name="email"
          />
        </div>
      </div>
      <div className="max-w-md m-2" >
        <div className="mb-2 block">
          <Label
            htmlFor="motdepasse"
            value="Votre mot de passe "
          />
        </div>
        <TextInput
          id="motdepasse"
          required
          shadow
          type="password"
          value={formData.motdepasse}
          onChange={handleChange}
          name="motdepasse"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label
          className="flex"
          htmlFor="agree"
        >
          <p className='mr-2'>
            J' accepte les 
          </p>
          <Link
            className="text-cyan-600 hover:underline dark:text-cyan-500"
            href="/forms"
          >
            <p>
                  termes et conditions d'utilisation
            </p>
          </Link>
        </Label>
      </div>
      <Button type="submit" className="text-white bg-black text-center hover:bg-gray-50 hover:text-black">
          Se connecter
      </Button>
    </form>
  </section>
  )
}


