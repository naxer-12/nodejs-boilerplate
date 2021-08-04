import { Express, Request, Response } from "express";
import validateRequest from './middleware/validateRequest';



import {
  createPostHandler,
  updatePostHandler,
  getPostHandler,
  deletePostHandler,
} from "./controller/post.controller";

import {
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
} from "./schema/post.schema";
export default function (app: Express) {

  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));


  app.post(
    "/api/posts",
    validateRequest(createPostSchema),
    createPostHandler
  );

  // Update a post
  app.put(
    "/api/posts/:postId",
    validateRequest(updatePostSchema),
    updatePostHandler
  );

  // Get a post
  app.get("/api/posts/:postId", getPostHandler);

  // Delete a post
  app.delete(
    "/api/posts/:postId",
    validateRequest(deletePostSchema),
    deletePostHandler
  );



}