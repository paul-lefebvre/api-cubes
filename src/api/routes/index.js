import userRoute from './users.js';
import surveyRoute from './surveys.js';
import signalementRoute from './signalements.js';
import ressourceRoute from './ressources.js';
import responseRoute from './responses.js';
import relationRoute from './relations.js';
import notificationRoute from './notifications.js';
import mediaRoute from './medias.js';
import likeRoute from './likes.js';
import groupRoute from './groups.js';
import eventRoute from './events.js';
import conversationRoute from './conversations.js';
import commentRoute from './comments.js';
import categoryRoute from './categories.js';


/* Export routes here */
export default (app) => {

  userRoute(app);
  surveyRoute(app);
  signalementRoute(app);
  ressourceRoute(app);
  responseRoute(app);
  relationRoute(app);
  notificationRoute(app);
  mediaRoute(app);
  likeRoute(app);
  groupRoute(app);
  eventRoute(app);
  conversationRoute(app);
  commentRoute(app);
  categoryRoute(app);

};