import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import eicon from '../../public/Sign-Up-PNG.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Signin(props) {
  const validationSchema = Yup.object().shape({
    nom: Yup.string().required('Champ requis'),
    prenom: Yup.string().required('Champ requis'),
    email: Yup.string().email('Adresse e-mail invalide').required('Champ requis'),
    motdepasse: Yup.string().required('Champ requis'),
    confirmmdp: Yup.string().oneOf([Yup.ref('motdepasse'), null], 'Les mots de passe doivent correspondre'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    if (valid(values)) {
      try {
        // Effectuer la requête POST avec fetch
        const response = await fetch('http://localhost:8000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        // Analyser la réponse JSON
        const data = await response.json();
        console.log('Réponse du serveur : ', data);

        // Indiquer à Formik que la soumission est terminée
        setSubmitting(false);
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données : ', error);
        setSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-custom-gray bg-opacity-100 w-full h-screen" style={{ backgroundImage: `url(${props.urlImg.src})`}}>
      <Formik
        initialValues={{
          nom: '',
          prenom: '',
          email: '',
          motdepasse: '',
          confirmmdp: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            action="/api/form"
            className="flex max-w-md bg-white mt-5 flex-col gap-4 border-solid bg-custom-white rounded-md p-5 translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2"
          >
            <div className="inline-block flex-row">
              <Image
                src={eicon}
                alt="Event icon"
                className="w-1/2 center h-10 m-auto mb-5"
              />
              <h2>
                Vous disposez déjà d'un compte ?{' '}
                <Link className="text-blue-600" href="/login">
                  Se connecter
                </Link>{' '}
              </h2>
            </div>

            <div className="max-w-md flex-row">
              <div className="max-w-md gap-5 flex-row">
                <div className="mb-2 block">
                  <Label htmlFor="prenom" value="Prénom" />
                </div>
                <Field
                  as={TextInput}
                  addon="@"
                  id="prenom"
                  placeholder="Votre prénom"
                  required
                  name="prenom"
                />
                <ErrorMessage name="prenom" component="div" className=" text-xs text-center m-2  text-red-700" />
              </div>
              <div className="max-w-md gap-5 flex-row">
                <div className="mb-2 block">
                  <Label htmlFor="nom" value="Nom" />
                </div>
                <Field
                  as={TextInput}
                  addon="@"
                  id="nom"
                  placeholder="Votre Nom"
                  required
                  name="nom"
                />
                <ErrorMessage name="nom" component="div" className=" text-xs text-center m-2  text-red-700" />
              </div>
            </div>

            <div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Adresse e-mail" />
                </div>
                <Field
                  as={TextInput}
                  icon={HiMail}
                  id="email"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email" component="div" className=" text-xs text-center m-2  text-red-700" />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="motdepasse" value="Votre mot de passe " />
              </div>
              <Field
                as={TextInput}
                id="motdepasse"
                required
                shadow
                type="password"
                name="motdepasse"
              />
              <ErrorMessage name="motdepasse" component="div" className=" text-xs text-center m-2  text-red-700" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmmdp" value="Confirmer votre mot de passe" />
              </div>
              <Field
                as={TextInput}
                id="confirmmdp"
                required
                shadow
                type="password"
                name="confirmmdp"
              />
              <ErrorMessage name="confirmmdp" component="div" className=" text-xs text-center m-2  text-red-700" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label className="flex" htmlFor="agree">
                <p className="mr-2">J'accepte les</p>
                <Link className="text-cyan-600 hover:underline dark:text-cyan-500" href="/forms">
                  <p>termes et conditions d'utilisation</p>
                </Link>
              </Label>
            </div>
            <Button type="submit" className="text-white bg-black hover:text-black hover:bg-white" disabled={isSubmitting}>
              {isSubmitting ? 'En cours...' : 'Enregistrer un nouveau compte'}
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
