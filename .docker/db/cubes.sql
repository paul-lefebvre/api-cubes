/*==============================================================*/
/* Nom de SGBD :  PostgreSQL 7.3                                */
/* Date de cr�ation :  16/12/2021 19:03:42                      */
/*==============================================================*/

CREATE SCHEMA lfc;

drop index IF EXISTS ADHERER2_FK;

drop index IF EXISTS ADHERER_FK;

drop index IF EXISTS ADHERER_PK;

drop table IF EXISTS ADHERER;

drop index IF EXISTS CATEGORIES_PK;

drop table IF EXISTS CATEGORIES;

drop index IF EXISTS COMMENTER_FK;

drop index IF EXISTS COMMENTS_PK;

drop table IF EXISTS COMMENTS;

drop index IF EXISTS CONVERSATIONS_PK;

drop table IF EXISTS CONVERSATIONS;

drop index IF EXISTS DISCUTER2_FK;

drop index IF EXISTS DISCUTER_FK;

drop index IF EXISTS DISCUTER_PK;

drop table IF EXISTS DISCUTER;

drop index IF EXISTS EVENTS_PK;

drop table IF EXISTS EVENTS;

drop index IF EXISTS GROUPS_PK;

drop table IF EXISTS GROUPS;

drop index IF EXISTS LIER2_FK;

drop index IF EXISTS LIER_FK;

drop index IF EXISTS LIER_PK;

drop table IF EXISTS LIER;

drop index IF EXISTS LIKER_FK;

drop index IF EXISTS LIKES_PK;

drop table IF EXISTS LIKES;

drop index IF EXISTS UPLOADER_FK;

drop index IF EXISTS MEDIAS_PK;

drop table IF EXISTS MEDIAS;

drop index IF EXISTS NOTIFICATIONS_PK;

drop table IF EXISTS NOTIFICATIONS;

drop index IF EXISTS NOTIFIER2_FK;

drop index IF EXISTS NOTIFIER_FK;

drop index IF EXISTS NOTIFIER_PK;

drop table IF EXISTS NOTIFIER;

drop index IF EXISTS PARTICIPER2_FK;

drop index IF EXISTS PARTICIPER_FK;

drop index IF EXISTS PARTICIPER_PK;

drop table IF EXISTS PARTICIPER;

drop index IF EXISTS RELATIONS_PK;

drop table IF EXISTS RELATIONS;

drop index IF EXISTS REPONDRE_FK;

drop index IF EXISTS RESPONSES_PK;

drop table IF EXISTS RESPONSES;

drop index IF EXISTS PUBLIER_FK;

drop index IF EXISTS CATEGORISER_FK;

drop index IF EXISTS RESSOURCES_PK;

drop table IF EXISTS RESSOURCES;

drop index IF EXISTS SIGNALER_FK;

drop index IF EXISTS SIGNALEMENTS_PK;

drop table IF EXISTS SIGNALEMENTS;

drop index IF EXISTS SOUMETTRE_FK;

drop index IF EXISTS SURVEYS_PK;

drop table IF EXISTS SURVEYS;

drop index IF EXISTS USERS_PK;

drop table IF EXISTS USERS;

drop index IF EXISTS UTILS_PK;

drop table IF EXISTS UTILS;

/*==============================================================*/
/* Table : ADHERER                                              */
/*==============================================================*/
create table lfc.ADHERER (
GRP_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_ADHERER primary key (GRP_ID, USR_ID)
);

/*==============================================================*/
/* Index : ADHERER_PK                                           */
/*==============================================================*/
create unique index ADHERER_PK on lfc.ADHERER (
GRP_ID,
USR_ID
);

/*==============================================================*/
/* Index : ADHERER_FK                                           */
/*==============================================================*/
create  index ADHERER_FK on lfc.ADHERER (
GRP_ID
);

/*==============================================================*/
/* Index : ADHERER2_FK                                          */
/*==============================================================*/
create  index ADHERER2_FK on lfc.ADHERER (
USR_ID
);

/*==============================================================*/
/* Table : CATEGORIES                                           */
/*==============================================================*/
create table lfc.CATEGORIES (
CAT_ID               SERIAL               not null,
TITLE                VARCHAR(300)         null,
DESCRIPTION          VARCHAR(999)         null,
IMG                  VARCHAR(900)         null,
NB_POSTS             INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_CATEGORIES primary key (CAT_ID)
);

INSERT INTO lfc.categories (CAT_ID,TITLE,DESCRIPTION,IMG,NB_POSTS,CREATED_AT) VALUES (1,'Jardinage','Venez cultiver votre potager','img/jardin.png',18,'2022-03-21');
INSERT INTO lfc.categories (CAT_ID,TITLE,DESCRIPTION,IMG,NB_POSTS,CREATED_AT) VALUES (2,'Bricolage','Participer aux sessions tuto avec notre Mr Bricolage','img/brico.png',12,'2022-02-21');
INSERT INTO lfc.categories (CAT_ID,TITLE,DESCRIPTION,IMG,NB_POSTS,CREATED_AT) VALUES (3,'Decoration','Apprenez à dynamiser votre intérieur','img/deco.png',12,'2022-03-12');
INSERT INTO lfc.categories (CAT_ID,TITLE,DESCRIPTION,IMG,NB_POSTS,CREATED_AT) VALUES (4,'Location','Louer tout ce que vous souhaitez','img/loc.png',8,'2022-03-14');


/*==============================================================*/
/* Index : CATEGORIES_PK                                        */
/*==============================================================*/
create unique index CATEGORIES_PK on lfc.CATEGORIES (
CAT_ID
);

/*==============================================================*/
/* Table : COMMENTS                                             */
/*==============================================================*/
create table lfc.COMMENTS (
COM_ID               SERIAL               not null,
RES_ID               INT4                 not null,
ANSWERS              VARCHAR(999)         null,
ID_OWNER             INT4                 null,
IS_RESPONSE          INT4                 null,
ID_RESPONSE_TO_USR   INT4                 null,
IS_SIGNALED          INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_COMMENTS primary key (COM_ID)
);

INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (1,1,'Tu auras l ambition de ton père pour toi aussi améliorer notre société et notre vie courante',6,1,1,1,'2022-03-21');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (2,2,'Tu as eu tout à fait raison. Tu en as déjà trop fait pour cette socété qui ne pense qu à faire la guerre',1,2,2,2,'2022-03-21');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (3,3,'Jamais simple ...',9,3,3,3,'2022-03-18');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (4,4,'Bravo à toi !',5,4,4,4,'2022-03-19');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (5,1,'Ces mots sont un véritable hommage à ton père. On pense à lui ...',3,1,1,1,'2022-03-21');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (6,2,'Les regrets ne servent à rien. Tu as consacré assez de temps pour nous. Maintenant profite de ta nouvelle vie et de ta nouvelle famille',4,2,2,2,'2022-03-23');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (7,4,'Une véritable prouesse !!',7,4,4,4,'2022-03-16');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (8,4,'Incroyable réalisation',2,4,4,4,'2022-03-15');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (9,5,'Y pense toujours',7,4,4,4,'2022-03-16');
INSERT INTO lfc.comments (COM_ID,RES_ID,ANSWERS,ID_OWNER,IS_RESPONSE,ID_RESPONSE_TO_USR,IS_SIGNALED,CREATED_AT) VALUES (10,6,'Parfois on ne peut pas réussir',8,4,4,4,'2022-03-17');


/*==============================================================*/
/* Index : COMMENTS_PK                                          */
/*==============================================================*/
create unique index COMMENTS_PK on lfc.COMMENTS (
COM_ID
);

/*==============================================================*/
/* Index : COMMENTER_FK                                         */
/*==============================================================*/
create  index COMMENTER_FK on lfc.COMMENTS (
RES_ID
);

/*==============================================================*/
/* Table : CONVERSATIONS                                        */
/*==============================================================*/
create table lfc.CONVERSATIONS (
CVS_ID               SERIAL               not null,
IS_MUTE              INT4                 null,
LAST_MSG             VARCHAR(50)          null,
NOTIFY_CONV          INT4                 null,
IS_BLOCKED           INT4                 null,
IS_SIGNALED          INT4                 null,
IS_UNREAD            INT4                 null,
CREATED_AT           DATE                 null,
LAST_MSG_AT          DATE                 null,
constraint PK_CONVERSATIONS primary key (CVS_ID)
);

/*==============================================================*/
/* Index : CONVERSATIONS_PK                                     */
/*==============================================================*/
create unique index CONVERSATIONS_PK on lfc.CONVERSATIONS (
CVS_ID
);

/*==============================================================*/
/* Table : DISCUTER                                             */
/*==============================================================*/
create table lfc.DISCUTER (
CVS_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_DISCUTER primary key (CVS_ID, USR_ID)
);

/*==============================================================*/
/* Index : DISCUTER_PK                                          */
/*==============================================================*/
create unique index DISCUTER_PK on lfc.DISCUTER (
CVS_ID,
USR_ID
);

/*==============================================================*/
/* Index : DISCUTER_FK                                          */
/*==============================================================*/
create  index DISCUTER_FK on lfc.DISCUTER (
CVS_ID
);

/*==============================================================*/
/* Index : DISCUTER2_FK                                         */
/*==============================================================*/
create  index DISCUTER2_FK on lfc.DISCUTER (
USR_ID
);

/*==============================================================*/
/* Table : EVENTS                                               */
/*==============================================================*/
create table lfc.EVENTS (
EVT_ID               SERIAL               not null,
OWNER                INT4                 null,
TITLE                VARCHAR(300)         null,
DESCRIPTION          VARCHAR(999)         null,
NB_USERS             INT4                 null,
MAX_USERS            INT4                 null,
ACTUAL_JACKPOT       DECIMAL              null,
MAX_JACKPOT          DECIMAL              null,
LAT                  DECIMAL              null,
LONG                 DECIMAL              null,
START_AT             DATE                 null,
CREATED_AT           DATE                 null,
constraint PK_EVENTS primary key (EVT_ID)
);

INSERT INTO lfc.events (EVT_ID,OWNER,TITLE,DESCRIPTION,NB_USERS,MAX_USERS,ACTUAL_JACKPOT,MAX_JACKPOT,LAT,LONG,START_AT,CREATED_AT) VALUES (1,1,'Jardin','ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',5,10,1.2,1.3,123135,123135,'2022-03-21','2022-03-21');
INSERT INTO lfc.events (EVT_ID,OWNER,TITLE,DESCRIPTION,NB_USERS,MAX_USERS,ACTUAL_JACKPOT,MAX_JACKPOT,LAT,LONG,START_AT,CREATED_AT) VALUES (2,2,'Brico','ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',5,10,1.2,1.3,123135,123135,'2022-03-21','2022-03-21');
INSERT INTO lfc.events (EVT_ID,OWNER,TITLE,DESCRIPTION,NB_USERS,MAX_USERS,ACTUAL_JACKPOT,MAX_JACKPOT,LAT,LONG,START_AT,CREATED_AT) VALUES (3,3,'Déco','ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',5,10,1.2,1.3,123135,123135,'2022-03-21','2022-03-21');
INSERT INTO lfc.events (EVT_ID,OWNER,TITLE,DESCRIPTION,NB_USERS,MAX_USERS,ACTUAL_JACKPOT,MAX_JACKPOT,LAT,LONG,START_AT,CREATED_AT) VALUES (4,4,'Menage','ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',5,10,1.2,1.3,123135,123135,'2022-03-21','2022-03-21');

/*==============================================================*/
/* Index : EVENTS_PK                                            */
/*==============================================================*/
create unique index EVENTS_PK on lfc.EVENTS (
EVT_ID
);

/*==============================================================*/
/* Table : GROUPS                                               */
/*==============================================================*/
create table lfc.GROUPS (
GRP_ID               SERIAL               not null,
OWNER                INT4                 null,
NAME                 VARCHAR(300)         null,
NB_USERS             INT4                 null,
IS_PRIVATE           INT4                 null,
DESCRIPTION          VARCHAR(999)         null,
INVITE_CODE          VARCHAR(10)          null,
EXPIRE_CODE_AT       DATE                 null,
CREATED_AT           DATE                 null,
constraint PK_GROUPS primary key (GRP_ID)
);
INSERT INTO lfc.groups (GRP_ID,OWNER,NAME,NB_USERS,IS_PRIVATE,DESCRIPTION,INVITE_CODE,EXPIRE_CODE_AT,CREATED_AT) VALUES (1,1,'Jardin',18,1,'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','bonjour','2022-05-26','2022-03-21');
INSERT INTO lfc.groups (GRP_ID,OWNER,NAME,NB_USERS,IS_PRIVATE,DESCRIPTION,INVITE_CODE,EXPIRE_CODE_AT,CREATED_AT) VALUES (2,2,'Brico',36,1,'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','bonjour','2022-05-26','2022-03-21');
INSERT INTO lfc.groups (GRP_ID,OWNER,NAME,NB_USERS,IS_PRIVATE,DESCRIPTION,INVITE_CODE,EXPIRE_CODE_AT,CREATED_AT) VALUES (3,3,'Deco',22,1,'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','bonjour','2022-05-26','2022-03-21');
INSERT INTO lfc.groups (GRP_ID,OWNER,NAME,NB_USERS,IS_PRIVATE,DESCRIPTION,INVITE_CODE,EXPIRE_CODE_AT,CREATED_AT) VALUES (4,4,'Menage',45,1,'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','bonjour','2022-05-26','2022-03-21');

/*==============================================================*/
/* Index : GROUPS_PK                                            */
/*==============================================================*/
create unique index GROUPS_PK on lfc.GROUPS (
GRP_ID
);

/*==============================================================*/
/* Table : RELATION                                                */
/*==============================================================*/
CREATE TABLE lfc.RELATION (
	REL_ID 		SERIAL 			NOT NULL,
	FOLLOWER_ID 	INT4 			NOT NULL,
	FOLLOWED_ID 	INT4 			NOT NULL,
	CREATED_AT      DATE            null,
	constraint PK_REL primary key (REL_ID)
);
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (1,1,2,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (2,1,3,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (3,1,7,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (4,2,4,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (5,2,5,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (6,2,6,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (7,3,2,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (8,3,4,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (9,4,2,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (10,4,1,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (11,4,5,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (12,5,6,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (13,5,2,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (14,6,5,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (15,6,9,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (16,7,4,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (17,7,6,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (18,7,1,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (19,8,3,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (20,8,6,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (21,9,1,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (22,9,4,'2022-03-21');
INSERT INTO lfc.relation (REL_ID,FOLLOWER_ID,FOLLOWED_ID,CREATED_AT) VALUES (23,9,5,'2022-03-21');

/*==============================================================*/
/* Index : REL_PK                                             */
/*==============================================================*/
create unique index REL_PK on lfc.RELATION (
REL_ID
);

/*==============================================================*/
/* Index : REL_FK                                            */
/*==============================================================*/
create index REL_FK on lfc.RELATION (
FOLLOWER_ID
);

/*==============================================================*/
/* Index : REL2_FK                                            */
/*==============================================================*/
create index REL2_FK on lfc.RELATION (
FOLLOWED_ID
);



/*==============================================================*/
/* Table : LIKES                                                */
/*==============================================================*/
create table lfc.LIKES (
LIK_ID               SERIAL               not null,
USR_ID               INT4                 not null,
ENTITY_ID            INT4                 null,
IS_POST              INT4                 null,
IS_EVENT             INT4                 null,
IS_SURVEY            INT4                 null,
IS_COMMENT           INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_LIKES primary key (LIK_ID)
);

/*==============================================================*/
/* Index : LIKES_PK                                             */
/*==============================================================*/
create unique index LIKES_PK on lfc.LIKES (
LIK_ID
);

/*==============================================================*/
/* Index : LIKER_FK                                             */
/*==============================================================*/
create  index LIKER_FK on lfc.LIKES (
USR_ID
);

/*==============================================================*/
/* Table : MEDIAS                                               */
/*==============================================================*/
create table lfc.MEDIAS (
MED_ID               SERIAL               not null,
RES_ID               INT4                 not null,
PATH                 VARCHAR(999)         null,
IS_PICTURE           INT4                 null,
IS_GIF               INT4                 null,
IS_VIDEO             INT4                 null,
UPLOADED_AT          DATE                 null,
constraint PK_MEDIAS primary key (MED_ID)
);

/*==============================================================*/
/* Index : MEDIAS_PK                                            */
/*==============================================================*/
create unique index MEDIAS_PK on lfc.MEDIAS (
MED_ID
);

/*==============================================================*/
/* Index : UPLOADER_FK                                          */
/*==============================================================*/
create  index UPLOADER_FK on lfc.MEDIAS (
RES_ID
);

/*==============================================================*/
/* Table : NOTIFICATIONS                                        */
/*==============================================================*/
create table lfc.NOTIFICATIONS (
NOT_ID               SERIAL               not null,
ENTITY_ID            INT4                 null,
ANSWERS              VARCHAR(999)         null,
READED               INT4                 null,
IS_LIKE              INT4                 null,
IS_COM               INT4                 null,
IS_COM_RESPONSE      INT4                 null,
IS_NEW_POST          INT4                 null,
IS_NEW_FRIEND        INT4                 null,
IS_INVITE_GRP        INT4                 null,
IS_NEW_MSG           INT4                 null,
IS_NEW_SURVEY        INT4                 null,
FW_ICON              VARCHAR(100)         null,
CREATED_AT           DATE                 null,
constraint PK_NOTIFICATIONS primary key (NOT_ID)
);

/*==============================================================*/
/* Index : NOTIFICATIONS_PK                                     */
/*==============================================================*/
create unique index NOTIFICATIONS_PK on lfc.NOTIFICATIONS (
NOT_ID
);

/*==============================================================*/
/* Table : NOTIFIER                                             */
/*==============================================================*/
create table lfc.NOTIFIER (
NOT_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_NOTIFIER primary key (NOT_ID, USR_ID)
);

/*==============================================================*/
/* Index : NOTIFIER_PK                                          */
/*==============================================================*/
create unique index NOTIFIER_PK on lfc.NOTIFIER (
NOT_ID,
USR_ID
);

/*==============================================================*/
/* Index : NOTIFIER_FK                                          */
/*==============================================================*/
create  index NOTIFIER_FK on lfc.NOTIFIER (
NOT_ID
);

/*==============================================================*/
/* Index : NOTIFIER2_FK                                         */
/*==============================================================*/
create  index NOTIFIER2_FK on lfc.NOTIFIER (
USR_ID
);

/*==============================================================*/
/* Table : PARTICIPER                                           */
/*==============================================================*/
create table lfc.PARTICIPER (
USR_ID               INT4                 not null,
EVT_ID               INT4                 not null,
constraint PK_PARTICIPER primary key (USR_ID, EVT_ID)
);

/*==============================================================*/
/* Index : PARTICIPER_PK                                        */
/*==============================================================*/
create unique index PARTICIPER_PK on lfc.PARTICIPER (
USR_ID,
EVT_ID
);

/*==============================================================*/
/* Index : PARTICIPER_FK                                        */
/*==============================================================*/
create  index PARTICIPER_FK on lfc.PARTICIPER (
USR_ID
);

/*==============================================================*/
/* Index : PARTICIPER2_FK                                       */
/*==============================================================*/
create  index PARTICIPER2_FK on lfc.PARTICIPER (
EVT_ID
);

/*==============================================================*/
/* Table : RESPONSES                                            */
/*==============================================================*/
create table lfc.RESPONSES (
REP_ID               SERIAL               not null,
SRV_ID               INT4                 not null,
ANSWERS              VARCHAR(999)         null,
USR_ANSWER_ID        INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_RESPONSES primary key (REP_ID)
);

/*==============================================================*/
/* Index : RESPONSES_PK                                         */
/*==============================================================*/
create unique index RESPONSES_PK on lfc.RESPONSES (
REP_ID
);

/*==============================================================*/
/* Index : REPONDRE_FK                                          */
/*==============================================================*/
create  index REPONDRE_FK on lfc.RESPONSES (
SRV_ID
);

/*==============================================================*/
/* Table : RESSOURCES                                           */
/*==============================================================*/
create table lfc.RESSOURCES (
RES_ID               SERIAL               not null,
USR_ID               INT4                 not null,
CAT_ID               INT4                 not null,
ANSWERS              VARCHAR(999)         null,
IS_SIGNALED          INT4                 null,
NB_VIEWS             CHAR(10)             null,
NB_LIKES             INT4                 null,
NB_SHARES            INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_RESSOURCES primary key (RES_ID)
);

INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (1,1,1,'Ma petite vie de fille de IronMan : voir tout ce que mon père à réaliser pour sauver le monde entier. Thanos aurait dû bien se tenir !',0,47,25,18,'2022-02-28');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (2,2,2,'En quittant la vie des avangers j ai remonté le temps pour retrouver mon amour perdu. Nous avons eu beaucoup de temps à rattraper ensemble. Je ne regrette rien. Sauver le monde n est pas de tout repos...',0,21,19,10,'2022-02-12');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (3,3,3,'Etre traqué continuellement ne rend pas la vie facile. Je suis parti. Loin de toute civilisation. Je suis maintenant en pleine forêt, seul, sans rien d autre que la faune sauvage pour me tenir compagnie.',0,74,13,28,'2022-03-18');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (4,4,4,'Le controle du temps est facile lorsque les bons outils sont là pour vous aider. Il ne faut simplement pas en abuser. Sinon des distorsions temporelles peuvent se créer et peuvent rendre le retour en arrière impossible',0,2,56,55,'2022-03-11');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (5,5,1,'Suis toujours la petite araignée sympa du quartier. Tony me manque. Mais je reste à l affût de tous méfaits qui peuvent arriver. Les Avengers seront toujours là pour protéger la planète dans tous les cas.',0,2,34,36,'2022-02-16');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (6,6,2,'Je suis le résultat d une expérience scientifique. Ce fait me rend quasi invincible face à des ennemis dôtés de grands pouvoirs. Hélas je n ai pas pu sauver Vision. Il me manque terriblement. Mais l entrainement avec toute l equipe m apporte du réconfort.',0,2,34,12,'2022-03-06');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (7,7,3,'Tous les Gardiens de la Galaxie sont avec moi pour vous souhaiter un bon retour à la normal. Amusez-vous, retrouvez-vous tous ensemble pour profiter de la vie !!!',0,2,31,26,'2022-03-18');
INSERT INTO lfc.ressources (RES_ID,USR_ID,CAT_ID,ANSWERS,IS_SIGNALED,NB_VIEWS,NB_LIKES,NB_SHARES,CREATED_AT) VALUES (8,8,4,'Vous pensez bien que ce n est pas Natasha qui publie ce post. Ils ont fait un film sur elle et sa famille. Je ne connaissais pas sa sœur. Elle est aussi triste que moi. Nous partageons énormément de souvenirs...',0,2,45,21,'2022-02-18');



/*==============================================================*/
/* Index : RESSOURCES_PK                                        */
/*==============================================================*/
create unique index RESSOURCES_PK on lfc.RESSOURCES (
RES_ID
);

/*==============================================================*/
/* Index : CATEGORISER_FK                                       */
/*==============================================================*/
create  index CATEGORISER_FK on lfc.RESSOURCES (
CAT_ID
);

/*==============================================================*/
/* Index : PUBLIER_FK                                           */
/*==============================================================*/
create  index PUBLIER_FK on lfc.RESSOURCES (
USR_ID
);

/*==============================================================*/
/* Table : SIGNALEMENTS                                         */
/*==============================================================*/
create table lfc.SIGNALEMENTS (
SIG_ID               SERIAL               not null,
USR_ID               INT4                 null,
USR_SIGNALED_ID      INT4                 null,
SUBJECT              VARCHAR(300)         null,
FILE                 VARCHAR(900)         null,
ANSWERS              VARCHAR(999)         null,
REASON               VARCHAR(300)         null,
CREATED_AT           DATE                 null,
constraint PK_SIGNALEMENTS primary key (SIG_ID)
);

/*==============================================================*/
/* Index : SIGNALEMENTS_PK                                      */
/*==============================================================*/
create unique index SIGNALEMENTS_PK on lfc.SIGNALEMENTS (
SIG_ID
);

/*==============================================================*/
/* Index : SIGNALER_FK                                          */
/*==============================================================*/
create  index SIGNALER_FK on lfc.SIGNALEMENTS (
USR_ID
);

/*==============================================================*/
/* Table : SURVEYS                                              */
/*==============================================================*/
create table lfc.SURVEYS (
SRV_ID               SERIAL               not null,
USR_ID               INT4                 not null,
TITLE                VARCHAR(300)         null,
DESCRIPTION          VARCHAR(999)         null,
QUESTIONS            TEXT                 null,
WHICH_GROUP          INT4                 null,
IS_PRIVATE_GROUP     INT4                 null,
NB_VIEWS             CHAR(10)             null,
NB_LIKES             INT4                 null,
NB_SHARES            INT4                 null,
START_AT             DATE                 null,
END_AT               DATE                 null,
CREATED_AT           DATE                 null,
constraint PK_SURVEYS primary key (SRV_ID)
);

/*==============================================================*/
/* Index : SURVEYS_PK                                           */
/*==============================================================*/
create unique index SURVEYS_PK on lfc.SURVEYS (
SRV_ID
);

/*==============================================================*/
/* Index : SOUMETTRE_FK                                         */
/*==============================================================*/
create  index SOUMETTRE_FK on lfc.SURVEYS (
USR_ID
);

/*==============================================================*/
/* Table : USERS                                                */
/*==============================================================*/
create table lfc.USERS (
USR_ID               SERIAL               not null,
PSEUDO               VARCHAR(50)          null,
FIRSTNAME            VARCHAR(50)          null,
LASTNAME             VARCHAR(50)          null,
TEL                  VARCHAR(30)          null,
MAIL                 VARCHAR(300)         null,
PASSWORD             VARCHAR(900)         null,
ROLES                TEXT                 null,
STATUS               INT4                 null,
CREATED_AT           DATE                 null,
LAST_CON             DATE                 null,
RESET_CODE           VARCHAR(10)          null,
BIRTH_DATE           DATE                 null,
GENDER               INT4                 null,
IS_ONLINE            INT4                 null,
ACTUAL_LAT           DECIMAL              null,
ACTUAL_LONG          DECIMAL              null,
BIO                  VARCHAR(999)         null,
AVATAR_IMG           VARCHAR(900)         null,
constraint PK_USERS primary key (USR_ID)
);

INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (1,'IronMan','Morgan','Stark','0232356564','mstark@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','05-29-1970',1,1,123135,45646,'Adore les cheeseburgers','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (2,'CaptainAmerica','Steeve','Rogers','0232356564','srogers@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','07-04-1918',1,1,123135,45646,'Suis un très vieux bonhomme','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (3,'Hulk','Bruce','Banner','0232356564','bbanner@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','12-18-1969',1,1,123135,45646,'Peux devenir tout vert','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (4,'Dr Strange','Stephen','Strange','0232356564','sstrange@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','04-23-1971',1,1,123135,45646,'Adore contrôler le temps','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (5,'Spider-Man','Peter','Parker','0232356564','pparker@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','08-10-2001',1,1,123135,45646,'Adore contrôler le temps','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (6,'Wanda Maximoff','Wanda','Maximoff','0232356564','wmaximoff@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','03-12-1988',1,1,123135,45646,'Aurait pu sauver tout le monde mais non','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (7,'Star Lord','Peter','Quill','0232356564','pquill@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','09-09-1985',1,1,123135,45646,'Contribue à sauver tout le monde','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (8,'Black Widow','Natasha','Romanoff','0232356564','nromanoff@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','10-05-1984',1,1,123135,45646,'Aime tuer les gens et amoureuse de Hulk','unknown.png');
INSERT INTO lfc.users (USR_ID, PSEUDO, FIRSTNAME,LASTNAME,TEL,MAIL,PASSWORD,ROLES,STATUS,CREATED_AT,LAST_CON,RESET_CODE,BIRTH_DATE,GENDER,IS_ONLINE,ACTUAL_LAT,ACTUAL_LONG,BIO,AVATAR_IMG) VALUES (9,'Captain Marvel','Carol','Danvers','0232356564','cdanvers@gmail.com','!Passw0rd','Citoyen',1,'2022-03-21','2022-03-21','azerty','02-23-1982',1,1,123135,45646,'Super badass','unknown.png');


/*==============================================================*/
/* Index : USERS_PK                                             */
/*==============================================================*/
create unique index USERS_PK on lfc.USERS (
USR_ID
);

/*==============================================================*/
/* Table : UTILS                                                */
/*==============================================================*/
create table lfc.UTILS (
UTL_ID               SERIAL               not null,
VALUE                VARCHAR(999)         null,
NUMBER               INT4                 null,
"DECIMAL"            DECIMAL              null,
DATE                 DATE                 null,
constraint PK_UTILS primary key (UTL_ID)
);

/*==============================================================*/
/* Index : UTILS_PK                                             */
/*==============================================================*/
create unique index UTILS_PK on lfc.UTILS (
UTL_ID
);

alter table lfc.ADHERER
   add constraint FK_ADHERER_ADHERER_GROUPS foreign key (GRP_ID)
      references lfc.GROUPS (GRP_ID)
      on delete restrict on update restrict;

alter table lfc.ADHERER
   add constraint FK_ADHERER_ADHERER2_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.COMMENTS
   add constraint FK_COMMENTS_COMMENTER_RESSOURC foreign key (RES_ID)
      references lfc.RESSOURCES (RES_ID)
      on delete restrict on update restrict;

alter table lfc.DISCUTER
   add constraint FK_DISCUTER_DISCUTER_CONVERSA foreign key (CVS_ID)
      references lfc.CONVERSATIONS (CVS_ID)
      on delete restrict on update restrict;

alter table lfc.DISCUTER
   add constraint FK_DISCUTER_DISCUTER2_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.RELATION
   add constraint FK_REL_USERS foreign key (FOLLOWER_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.RELATION
   add constraint FK_REL_REL_USERS foreign key (FOLLOWED_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.LIKES
   add constraint FK_LIKES_LIKER_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.MEDIAS
   add constraint FK_MEDIAS_UPLOADER_RESSOURC foreign key (RES_ID)
      references lfc.RESSOURCES (RES_ID)
      on delete restrict on update restrict;

alter table lfc.NOTIFIER
   add constraint FK_NOTIFIER_NOTIFIER_NOTIFICA foreign key (NOT_ID)
      references lfc.NOTIFICATIONS (NOT_ID)
      on delete restrict on update restrict;

alter table lfc.NOTIFIER
   add constraint FK_NOTIFIER_NOTIFIER2_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.PARTICIPER
   add constraint FK_PARTICIP_PARTICIPE_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.PARTICIPER
   add constraint FK_PARTICIP_PARTICIPE_EVENTS foreign key (EVT_ID)
      references lfc.EVENTS (EVT_ID)
      on delete restrict on update restrict;

alter table lfc.RESPONSES
   add constraint FK_RESPONSE_REPONDRE_SURVEYS foreign key (SRV_ID)
      references lfc.SURVEYS (SRV_ID)
      on delete restrict on update restrict;

alter table lfc.RESSOURCES
   add constraint FK_RESSOURC_CATEGORIS_CATEGORI foreign key (CAT_ID)
      references lfc.CATEGORIES (CAT_ID)
      on delete restrict on update restrict;

alter table lfc.RESSOURCES
   add constraint FK_RESSOURC_PUBLIER_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.SIGNALEMENTS
   add constraint FK_SIGNALEM_SIGNALER_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc.SURVEYS
   add constraint FK_SURVEYS_SOUMETTRE_USERS foreign key (USR_ID)
      references lfc.USERS (USR_ID)
      on delete restrict on update restrict;

