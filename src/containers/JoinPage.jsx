import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { Formik } from 'formik';
import { string, number, object } from 'yup';

import TitlePage from '../components/TitlePage';
import TitleForm from '../components/TitleForm';
import BodyLayout from '../components/BodyLayout';
import FormContainer from '../components/FormContainer';
import Container from '../components/Container';
import FormField from '../components/FormField';
import Textarea from '../components/Textarea';
import FormRow from '../components/FormRow';
import Button from '../components/Button';
import SelectField from '../components/SelectField';

const ASTRONAUT_SCHEMA = object()
.shape({
  lastName: string().required('Le nom de famille est requis.'),
  firstName: string().required('Le prénom est requis.'),
  userName: string().required('Le pseudo est requis.'),
  age: number().required('Veuillez spécifier votre âge.'),
  planet: number().required('Une planète est requise.'),
  description: string(),
});

const PLANETS = [
  {
    id: 1,
    name: 'Raccoon of Asgard',
  },
  {
    id: 2,
    name: 'Duck Invaders',
  },
  {
    id: 3,
    name: 'Schizo Cats',
  },
  {
    id: 4,
    name: 'Donuts Factory',
  }, 
];

const JoinPage = () => (
  <BodyLayout>
    <TitlePage uppercase>Joindre le système planétaire d'Eleven labs</TitlePage>
    <Formik
      validationSchema={ASTRONAUT_SCHEMA}
      initialValues={{ lastName: '', firstName: '', userName: '', age: '', description: '', planet: 1 }}
      onSubmit={(astronaut) => { console.log(astronaut) }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <FormContainer>
          <Container>
            <FaEnvelopeOpenText size="2em" />
            <TitleForm>Veuillez remplir le formulaire d'adhésion avant de décoller !</TitleForm>
            <FormRow>
              <SelectField
                label="Sélectionnez une planète"
                onChange={handleChange}
                name="planet"
                values={PLANETS}
                error={touched.planet && errors.planet}
              />
            </FormRow>
            <FormRow>
              <FormField
                label="Nom"
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Votre nom"
                value={values.lastName}
                error={touched.lastName && errors.lastName}
              />
              <FormField
                label="Prénom"
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Votre prénom"
                value={values.firstName}
                error={touched.firstName && errors.firstName}
              />
            </FormRow>
            <FormRow>
              <FormField
                label="Pseudo"
                onChange={handleChange}
                name="userName"
                type="text"
                placeholder="Votre pseudo"
                value={values.userName}
                error={touched.userName && errors.userName}
              />
              <FormField
                label="Âge"
                onChange={handleChange}
                name="age"
                type="number"
                placeholder="Votre age"
                value={values.age}
                error={touched.age && errors.age}
              />
            </FormRow>
            <FormRow>
              <Textarea
                onChange={handleChange}
                name="description"
                placeholder="Pourquoi rejoindre cette planète? (facultatif)"
                rows="4"
                value={values.description}
              />
            </FormRow>
            <FormRow>
              <Button padded onClick={handleSubmit}>Adhérer</Button>
            </FormRow>
          </Container>
        </FormContainer>
      )}
    </Formik>
  </BodyLayout>
);

export default JoinPage;
