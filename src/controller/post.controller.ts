import { Request, Response } from "express";
import { get } from "lodash";
import {
  createPost,
  findPost,
  findAndUpdate,
  deletePost,
} from "../service/post.service";

export async function createPostHandler(req: Request, res: Response) {

  const body = req.body;

  const post = await createPost({ ...body });

  return res.send(post);
}

export async function updatePostHandler(req: Request, res: Response) {

  const postId = get(req, "params.postId");
  const update = req.body;

  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }


  const updatedPost = await findAndUpdate({ postId }, update, { new: true });

  return res.send(updatedPost);
}
export async function getPostHandler(req: Request, res: Response) {
  const postId = get(req, "params.postId");
  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }

  return res.send(post);
}

export async function deletePostHandler(req: Request, res: Response) {

  const postId = get(req, "params.postId");

  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }



  await deletePost({ postId });

  return res.sendStatus(200);
}
