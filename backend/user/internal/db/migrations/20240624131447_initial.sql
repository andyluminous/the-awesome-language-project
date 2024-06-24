-- Create "users" table
CREATE TABLE "public"."users" (
  "id" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
  "email" character varying NOT NULL,
  "password" character varying NOT NULL,
  "name" character varying NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NULL,
  "deleted_at" timestamptz NULL,
  PRIMARY KEY ("id")
);
