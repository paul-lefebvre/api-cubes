
import follow from "./follow.js";
import unfollow from "./unfollow.js";
import create from './create.js';
import update from './update.js';
import deleteOne from './deleteOne.js';
import findOne from './findOne.js';
import findAll from './findAll.js';
import logIn from './logIn.js';
import logout from './logout.js';
import upload from './upload.js';

// IMPORT/EXPORT CUSTOM FCT HERE

const controller = {
  create,
  update,
  deleteOne,
  findOne,
  findAll,
  logIn,
  logout,
  follow,
  unfollow,
  upload,
};


export default controller;