import { Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

export const getUsers = async function (
       request: Request,
       response: Response
): Promise<Response> {
       const users = await getRepository(User).find();
       return response.json(users);
};

export const getUser = async function (
       request: Request,
       response: Response
): Promise<Response> {
       const user = await getRepository(User).findOne(request.params.id);
       return response.json(user);
};

export const createUser = async function (
       request: Request,
       response: Response
): Promise<Response> {
       const newUser = getRepository(User).create(request.body);
       const result = await getRepository(User).save(newUser);
       return response.json(result);
};

export const updateUser = async function (
       request: Request,
       response: Response
): Promise<Response> {
       const user = await getRepository(User).findOne(request.params.id);
       if (user) {
              getRepository(User).merge(user, request.body);
              const result = await getRepository(User).save(user);
              return response.json(result);
       }

       return response.status(404).json({
              message: "Not user found",
              error: "Error 404 Not user found",
              status: "404",
       });
};

export const deleteUser = async function (
       request: Request,
       response: Response
): Promise<Response> {
       const user = await getRepository(User).delete(request.params.id);
       return response.json(user);
};
