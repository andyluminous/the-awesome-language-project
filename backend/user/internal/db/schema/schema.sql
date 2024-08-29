CREATE TABLE "public"."users" (
  "id" int GENERATED ALWAYS AS IDENTITY,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "name" varchar,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz,
  "deleted_at" timestamptz,
  PRIMARY KEY ("id")
);

CREATE TABLE "public"."quests" (
  "id" int GENERATED ALWAYS AS IDENTITY,
  "quest_name" varchar,
  "country" varchar,
  "description" varchar,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz,
  PRIMARY KEY ("id")
);

