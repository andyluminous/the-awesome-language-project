-- Create "quests" table
CREATE TABLE "public"."quests" ("id" integer NOT NULL GENERATED ALWAYS AS IDENTITY, "quest_name" character varying NULL, "country" character varying NULL, "description" character varying NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NULL, PRIMARY KEY ("id"));
