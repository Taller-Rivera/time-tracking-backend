import {ErrorRequestHandler} from "express";

export type ErrorObject = ErrorRequestHandler & {
  status: number;
  message: string;
}