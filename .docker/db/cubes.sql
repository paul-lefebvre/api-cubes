/*==============================================================*/
/* Nom de SGBD :  PostgreSQL 7.3                                */
/* Date de cr�ation :  16/12/2021 19:03:42                      */
/*==============================================================*/

CREATE SCHEMA lfc_db;

CREATE USER docker WITH ENCRYPTED PASSWORD 'docker' LOGIN SUPERUSER INHERIT NOREPLICATION;

GRANT ALL PRIVILEGES ON SCHEMA lfc_db TO docker;

ALTER SCHEMA lfc_db OWNER TO docker;

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
create table lfc_db.ADHERER (
GRP_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_ADHERER primary key (GRP_ID, USR_ID)
);

/*==============================================================*/
/* Index : ADHERER_PK                                           */
/*==============================================================*/
create unique index ADHERER_PK on lfc_db.ADHERER (
GRP_ID,
USR_ID
);

/*==============================================================*/
/* Index : ADHERER_FK                                           */
/*==============================================================*/
create  index ADHERER_FK on lfc_db.ADHERER (
GRP_ID
);

/*==============================================================*/
/* Index : ADHERER2_FK                                          */
/*==============================================================*/
create  index ADHERER2_FK on lfc_db.ADHERER (
USR_ID
);

/*==============================================================*/
/* Table : CATEGORIES                                           */
/*==============================================================*/
create table lfc_db.CATEGORIES (
CAT_ID               SERIAL               not null,
TITLE                VARCHAR(300)         null,
DESCRIPTION          VARCHAR(999)         null,
IMG                  VARCHAR(900)         null,
NB_POSTS             INT4                 null,
CREATED_AT           DATE                 null,
constraint PK_CATEGORIES primary key (CAT_ID)
);

/*==============================================================*/
/* Index : CATEGORIES_PK                                        */
/*==============================================================*/
create unique index CATEGORIES_PK on lfc_db.CATEGORIES (
CAT_ID
);

/*==============================================================*/
/* Table : COMMENTS                                             */
/*==============================================================*/
create table lfc_db.COMMENTS (
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

/*==============================================================*/
/* Index : COMMENTS_PK                                          */
/*==============================================================*/
create unique index COMMENTS_PK on lfc_db.COMMENTS (
COM_ID
);

/*==============================================================*/
/* Index : COMMENTER_FK                                         */
/*==============================================================*/
create  index COMMENTER_FK on lfc_db.COMMENTS (
RES_ID
);

/*==============================================================*/
/* Table : CONVERSATIONS                                        */
/*==============================================================*/
create table lfc_db.CONVERSATIONS (
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
create unique index CONVERSATIONS_PK on lfc_db.CONVERSATIONS (
CVS_ID
);

/*==============================================================*/
/* Table : DISCUTER                                             */
/*==============================================================*/
create table lfc_db.DISCUTER (
CVS_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_DISCUTER primary key (CVS_ID, USR_ID)
);

/*==============================================================*/
/* Index : DISCUTER_PK                                          */
/*==============================================================*/
create unique index DISCUTER_PK on lfc_db.DISCUTER (
CVS_ID,
USR_ID
);

/*==============================================================*/
/* Index : DISCUTER_FK                                          */
/*==============================================================*/
create  index DISCUTER_FK on lfc_db.DISCUTER (
CVS_ID
);

/*==============================================================*/
/* Index : DISCUTER2_FK                                         */
/*==============================================================*/
create  index DISCUTER2_FK on lfc_db.DISCUTER (
USR_ID
);

/*==============================================================*/
/* Table : EVENTS                                               */
/*==============================================================*/
create table lfc_db.EVENTS (
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

/*==============================================================*/
/* Index : EVENTS_PK                                            */
/*==============================================================*/
create unique index EVENTS_PK on lfc_db.EVENTS (
EVT_ID
);

/*==============================================================*/
/* Table : GROUPS                                               */
/*==============================================================*/
create table lfc_db.GROUPS (
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

/*==============================================================*/
/* Index : GROUPS_PK                                            */
/*==============================================================*/
create unique index GROUPS_PK on lfc_db.GROUPS (
GRP_ID
);

/*==============================================================*/
/* Table : LIER                                                 */
/*==============================================================*/
create table lfc_db.LIER (
USR_ID               INT4                 not null,
REL_ID               INT4                 not null,
constraint PK_LIER primary key (USR_ID, REL_ID)
);

/*==============================================================*/
/* Index : LIER_PK                                              */
/*==============================================================*/
create unique index LIER_PK on lfc_db.LIER (
USR_ID,
REL_ID
);

/*==============================================================*/
/* Index : LIER_FK                                              */
/*==============================================================*/
create  index LIER_FK on lfc_db.LIER (
USR_ID
);

/*==============================================================*/
/* Index : LIER2_FK                                             */
/*==============================================================*/
create  index LIER2_FK on lfc_db.LIER (
REL_ID
);

/*==============================================================*/
/* Table : LIKES                                                */
/*==============================================================*/
create table lfc_db.LIKES (
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
create unique index LIKES_PK on lfc_db.LIKES (
LIK_ID
);

/*==============================================================*/
/* Index : LIKER_FK                                             */
/*==============================================================*/
create  index LIKER_FK on lfc_db.LIKES (
USR_ID
);

/*==============================================================*/
/* Table : MEDIAS                                               */
/*==============================================================*/
create table lfc_db.MEDIAS (
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
create unique index MEDIAS_PK on lfc_db.MEDIAS (
MED_ID
);

/*==============================================================*/
/* Index : UPLOADER_FK                                          */
/*==============================================================*/
create  index UPLOADER_FK on lfc_db.MEDIAS (
RES_ID
);

/*==============================================================*/
/* Table : NOTIFICATIONS                                        */
/*==============================================================*/
create table lfc_db.NOTIFICATIONS (
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
create unique index NOTIFICATIONS_PK on lfc_db.NOTIFICATIONS (
NOT_ID
);

/*==============================================================*/
/* Table : NOTIFIER                                             */
/*==============================================================*/
create table lfc_db.NOTIFIER (
NOT_ID               INT4                 not null,
USR_ID               INT4                 not null,
constraint PK_NOTIFIER primary key (NOT_ID, USR_ID)
);

/*==============================================================*/
/* Index : NOTIFIER_PK                                          */
/*==============================================================*/
create unique index NOTIFIER_PK on lfc_db.NOTIFIER (
NOT_ID,
USR_ID
);

/*==============================================================*/
/* Index : NOTIFIER_FK                                          */
/*==============================================================*/
create  index NOTIFIER_FK on lfc_db.NOTIFIER (
NOT_ID
);

/*==============================================================*/
/* Index : NOTIFIER2_FK                                         */
/*==============================================================*/
create  index NOTIFIER2_FK on lfc_db.NOTIFIER (
USR_ID
);

/*==============================================================*/
/* Table : PARTICIPER                                           */
/*==============================================================*/
create table lfc_db.PARTICIPER (
USR_ID               INT4                 not null,
EVT_ID               INT4                 not null,
constraint PK_PARTICIPER primary key (USR_ID, EVT_ID)
);

/*==============================================================*/
/* Index : PARTICIPER_PK                                        */
/*==============================================================*/
create unique index PARTICIPER_PK on lfc_db.PARTICIPER (
USR_ID,
EVT_ID
);

/*==============================================================*/
/* Index : PARTICIPER_FK                                        */
/*==============================================================*/
create  index PARTICIPER_FK on lfc_db.PARTICIPER (
USR_ID
);

/*==============================================================*/
/* Index : PARTICIPER2_FK                                       */
/*==============================================================*/
create  index PARTICIPER2_FK on lfc_db.PARTICIPER (
EVT_ID
);

/*==============================================================*/
/* Table : RELATIONS                                            */
/*==============================================================*/
create table lfc_db.RELATIONS (
REL_ID               SERIAL               not null,
TYPE                 VARCHAR(50)          null,
CREATED_AT           DATE                 null,
constraint PK_RELATIONS primary key (REL_ID)
);

/*==============================================================*/
/* Index : RELATIONS_PK                                         */
/*==============================================================*/
create unique index RELATIONS_PK on lfc_db.RELATIONS (
REL_ID
);

/*==============================================================*/
/* Table : RESPONSES                                            */
/*==============================================================*/
create table lfc_db.RESPONSES (
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
create unique index RESPONSES_PK on lfc_db.RESPONSES (
REP_ID
);

/*==============================================================*/
/* Index : REPONDRE_FK                                          */
/*==============================================================*/
create  index REPONDRE_FK on lfc_db.RESPONSES (
SRV_ID
);

/*==============================================================*/
/* Table : RESSOURCES                                           */
/*==============================================================*/
create table lfc_db.RESSOURCES (
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

/*==============================================================*/
/* Index : RESSOURCES_PK                                        */
/*==============================================================*/
create unique index RESSOURCES_PK on lfc_db.RESSOURCES (
RES_ID
);

/*==============================================================*/
/* Index : CATEGORISER_FK                                       */
/*==============================================================*/
create  index CATEGORISER_FK on lfc_db.RESSOURCES (
CAT_ID
);

/*==============================================================*/
/* Index : PUBLIER_FK                                           */
/*==============================================================*/
create  index PUBLIER_FK on lfc_db.RESSOURCES (
USR_ID
);

/*==============================================================*/
/* Table : SIGNALEMENTS                                         */
/*==============================================================*/
create table lfc_db.SIGNALEMENTS (
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
create unique index SIGNALEMENTS_PK on lfc_db.SIGNALEMENTS (
SIG_ID
);

/*==============================================================*/
/* Index : SIGNALER_FK                                          */
/*==============================================================*/
create  index SIGNALER_FK on lfc_db.SIGNALEMENTS (
USR_ID
);

/*==============================================================*/
/* Table : SURVEYS                                              */
/*==============================================================*/
create table lfc_db.SURVEYS (
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
create unique index SURVEYS_PK on lfc_db.SURVEYS (
SRV_ID
);

/*==============================================================*/
/* Index : SOUMETTRE_FK                                         */
/*==============================================================*/
create  index SOUMETTRE_FK on lfc_db.SURVEYS (
USR_ID
);

/*==============================================================*/
/* Table : USERS                                                */
/*==============================================================*/
create table lfc_db.USERS (
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

/*==============================================================*/
/* Index : USERS_PK                                             */
/*==============================================================*/
create unique index USERS_PK on lfc_db.USERS (
USR_ID
);

/*==============================================================*/
/* Table : UTILS                                                */
/*==============================================================*/
create table lfc_db.UTILS (
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
create unique index UTILS_PK on lfc_db.UTILS (
UTL_ID
);

alter table lfc_db.ADHERER
   add constraint FK_ADHERER_ADHERER_GROUPS foreign key (GRP_ID)
      references lfc_db.GROUPS (GRP_ID)
      on delete restrict on update restrict;

alter table lfc_db.ADHERER
   add constraint FK_ADHERER_ADHERER2_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.COMMENTS
   add constraint FK_COMMENTS_COMMENTER_RESSOURC foreign key (RES_ID)
      references lfc_db.RESSOURCES (RES_ID)
      on delete restrict on update restrict;

alter table lfc_db.DISCUTER
   add constraint FK_DISCUTER_DISCUTER_CONVERSA foreign key (CVS_ID)
      references lfc_db.CONVERSATIONS (CVS_ID)
      on delete restrict on update restrict;

alter table lfc_db.DISCUTER
   add constraint FK_DISCUTER_DISCUTER2_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.LIER
   add constraint FK_LIER_LIER_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.LIER
   add constraint FK_LIER_LIER2_RELATION foreign key (REL_ID)
      references lfc_db.RELATIONS (REL_ID)
      on delete restrict on update restrict;

alter table lfc_db.LIKES
   add constraint FK_LIKES_LIKER_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.MEDIAS
   add constraint FK_MEDIAS_UPLOADER_RESSOURC foreign key (RES_ID)
      references lfc_db.RESSOURCES (RES_ID)
      on delete restrict on update restrict;

alter table lfc_db.NOTIFIER
   add constraint FK_NOTIFIER_NOTIFIER_NOTIFICA foreign key (NOT_ID)
      references lfc_db.NOTIFICATIONS (NOT_ID)
      on delete restrict on update restrict;

alter table lfc_db.NOTIFIER
   add constraint FK_NOTIFIER_NOTIFIER2_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.PARTICIPER
   add constraint FK_PARTICIP_PARTICIPE_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.PARTICIPER
   add constraint FK_PARTICIP_PARTICIPE_EVENTS foreign key (EVT_ID)
      references lfc_db.EVENTS (EVT_ID)
      on delete restrict on update restrict;

alter table lfc_db.RESPONSES
   add constraint FK_RESPONSE_REPONDRE_SURVEYS foreign key (SRV_ID)
      references lfc_db.SURVEYS (SRV_ID)
      on delete restrict on update restrict;

alter table lfc_db.RESSOURCES
   add constraint FK_RESSOURC_CATEGORIS_CATEGORI foreign key (CAT_ID)
      references lfc_db.CATEGORIES (CAT_ID)
      on delete restrict on update restrict;

alter table lfc_db.RESSOURCES
   add constraint FK_RESSOURC_PUBLIER_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.SIGNALEMENTS
   add constraint FK_SIGNALEM_SIGNALER_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

alter table lfc_db.SURVEYS
   add constraint FK_SURVEYS_SOUMETTRE_USERS foreign key (USR_ID)
      references lfc_db.USERS (USR_ID)
      on delete restrict on update restrict;

