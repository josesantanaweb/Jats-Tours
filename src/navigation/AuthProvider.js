import React, {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Alert from '../components/Alert';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const closeModal = () => {
    setErrorEmail(false);
    setErrorPassword(false);
  };

  if (errorEmail) {
    return (
      <Alert
        closeModal={closeModal}
        isModalVisible
        message="El correo ingresado no esta registrado"
      />
    );
  }

  if (errorPassword) {
    return (
      <Alert
        closeModal={closeModal}
        isModalVisible
        message="La contraseña es incorrecta"
      />
    );
  }
  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        setUser,
        login: async (email, password) => {
          setLoading(true);
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log('Login Success');
              })
              .catch(error => {
                setLoading(false);
                console.log(error);
                switch (error.code) {
                  case 'auth/wrong-password':
                    setLoading(false);
                    setErrorPassword(true);
                    break;
                  case 'auth/user-not-found':
                    setLoading(false);
                    setErrorEmail(true);
                    break;
                }
              });
          } catch (e) {
            // console.log(e);
          }
          setLoading(false);
        },
        register: async (name, phone, email, password) => {
          setLoading(true);
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    name: name,
                    phone: phone,
                    email: email,
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
                setLoading(false);
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
