CREATE SCHEMA IF NOT EXISTS "instance";

CREATE  TABLE "instance"."admin" ( 
	username             varchar(100)  NOT NULL  ,
	pass                 varchar(100)  NOT NULL  ,
	CONSTRAINT idx_admin PRIMARY KEY ( username )
 );

CREATE  TABLE "instance".individual_scores ( 
	user_email           varchar(100)  NOT NULL  ,
	presentation_number  varchar(200)  NOT NULL  ,
	organization         integer    ,
	attractiveness       integer    ,
	legibility           integer    ,
	technical_originality integer    ,
	significance_and_longevity integer    ,
	substantiation       integer    ,
	overall_impression   integer    ,
	paper                boolean    ,
	lecture_tour         boolean    ,
	comments             varchar(250)    ,
	CONSTRAINT idx_individual_scores PRIMARY KEY ( user_email, presentation_number )
 );

CREATE  TABLE "instance".presentations ( 
	"number"             varchar(6)  NOT NULL  ,
	title                varchar(200)  NOT NULL  ,
	presenter_name       varchar(100)  NOT NULL  ,
	"time"               timestamp  NOT NULL  ,
	"type"               varchar(100)  NOT NULL  ,
	"day"                varchar(10)  NOT NULL  ,
	CONSTRAINT idx_presentations PRIMARY KEY ( "number" )
 );

CREATE  TABLE "instance".scores ( 
	presentation_number  varchar(6)  NOT NULL  ,
	presentation_title   varchar(200)  NOT NULL  ,
	total_score          integer  NOT NULL  ,
	num_reviews          integer  NOT NULL  ,
	average_score        integer    ,
	organization         integer  NOT NULL  ,
	attractiveness       integer  NOT NULL  ,
	legibility           integer  NOT NULL  ,
	technical_originality integer  NOT NULL  ,
	significance_and_longevity integer  NOT NULL  ,
	substantiation       integer  NOT NULL  ,
	overall_impression   integer  NOT NULL  ,
	CONSTRAINT idx_scores PRIMARY KEY ( presentation_number )
 );

CREATE  TABLE "instance".users ( 
	first_name           varchar(100)  NOT NULL  ,
	last_name            varchar(100)  NOT NULL  ,
	email                varchar(100)  NOT NULL  ,
	company              varchar(50)  NOT NULL  ,
	CONSTRAINT idx_users PRIMARY KEY ( email )
 );

ALTER TABLE "instance".scores ADD CONSTRAINT fk_scores FOREIGN KEY ( presentation_number ) REFERENCES "instance".presentations( "number" );

COMMENT ON COLUMN "instance".individual_scores.paper IS 'Should this presentation be presented as a paper?';

COMMENT ON COLUMN "instance".individual_scores.lecture_tour IS 'Should this presentation be considered for the "Distinguished Lecture Tour"?';
