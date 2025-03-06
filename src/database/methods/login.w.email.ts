import {ErrorObject} from "../../types/error";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginWithEmailAndPasswordResponse {
  status: number;
  message: string;
  token: string;
};

interface LoginWithEmailAndPasswordError {
  status: number;
  message: string;
};

type TypeLoginWithEmailAndPassword = Promise<LoginWithEmailAndPasswordResponse | LoginWithEmailAndPasswordError>;

const LoginWithEmailAndPassword = async (email: string, password: string):TypeLoginWithEmailAndPassword  => new Promise(async (resolve, reject) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const idToken = await userCredential.user.getIdToken();
    resolve({
      status: 200,
      message: "User logged in successfully",
      token: idToken,
    });
  } catch (e: unknown) {
    const error = e as ErrorObject;
    reject({
      status: error.status || 500,
      message: error.message,
    });
  }
});

export {
  LoginWithEmailAndPassword,
  TypeLoginWithEmailAndPassword,
  LoginWithEmailAndPasswordError,
  LoginWithEmailAndPasswordResponse,
}