CREATE SCHEMA IF NOT EXISTS "instance";

CREATE  TABLE "instance"."Presentations" ( 
	title                varchar(200)  NOT NULL  ,
	presenter_name       varchar(100)    ,
	"time"               timestamp    ,
	CONSTRAINT idx_presentations PRIMARY KEY ( title )
 );

CREATE  TABLE "instance"."Users" ( 
	user_id              integer  NOT NULL  ,
	user_first_name      varchar(100)  NOT NULL  ,
	user_last_name       varchar(100)  NOT NULL  ,
	user_email           varchar(100)  NOT NULL  ,
	user_company         varchar(50)  NOT NULL  ,
	CONSTRAINT idx_users PRIMARY KEY ( user_id )
 );

CREATE  TABLE "instance".individual_scores ( 
	user_id              integer  NOT NULL  ,
	presentation_title   varchar(200)  NOT NULL  ,
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
	CONSTRAINT idx_individual_scores PRIMARY KEY ( user_id, presentation_title )
 );

CREATE  TABLE "instance".scores ( 
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
	CONSTRAINT idx_scores PRIMARY KEY ( presentation_title )
 );

COMMENT ON COLUMN "instance".individual_scores.paper IS 'Should this presentation be presented as a paper?';

COMMENT ON COLUMN "instance".individual_scores.lecture_tour IS 'Should this presentation be considered for the "Distinguished Lecture Tour"?';