import {Request, Response} from "express";
import { LoginWithEmailAndPassword, LoginWithEmailAndPasswordResponse } from "../../../database/methods/login.w.email";
import {ErrorObject} from "../../../types/error";

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const VALUES_UNDEFINED = !email || !password;
    const NO_VALUES = email === "" || password === "";

    if (VALUES_UNDEFINED || NO_VALUES) {
      res.status(400).json({
        status: 400,
        message: "Email and password are required",
      });
      return;
    }

    const response = await LoginWithEmailAndPassword(email, password) as LoginWithEmailAndPasswordResponse; 
    res.status(200).json({
      status: 200,
      message: "User logged in successfully",
      token: response.token,
    });
  } catch (e: unknown) {
    const error = e as ErrorObject;
    res.status(500).json({
      message: error.message,
    });
  }
};