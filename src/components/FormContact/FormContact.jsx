import { Formik } from 'formik';
import Notiflix from 'notiflix';
import 'notiflix';

import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  BtnAdd,
  Error,
  FormCont,
} from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from 'redux/operations';

export const notiflix = {
  position: 'center-top',
  messageMaxLength: 180,
  width: '360px',
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Name is required'),
  phone: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('Phone number is required'),
});

export const FormContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { name, phone } = values;
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
        contact.phone === phone
    );
    if (isAlreadyInContacts) {
      Notiflix.Notify.info(`${name} is already in contacts`, notiflix);

      return;
    }
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <FormCont>
            <Label>
              Name
              <Input type="text" name="name" placeholder="Enter name" />
              <Error name="name" component="div" className="error" />
            </Label>
            <Label>
              Phone number
              <Input type="tel" name="phone" placeholder="Enter phone number" />
              <Error name="phone" component="div" className="error" />
            </Label>
            <BtnAdd type="submit" disabled={!isValid || !dirty}>
              Add contact
            </BtnAdd>
          </FormCont>
        )}
      </Formik>
    </Container>
  );
};
