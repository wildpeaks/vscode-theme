-- Single line comment
DROP INDEX IF EXISTS "myindex";
DROP TABLE IF EXISTS "mytable" CASCADE;
DROP VIEW IF EXISTS "myview" CASCADE;

CREATE UNIQUE INDEX "myindex" ON "orders"("uid");

CREATE TABLE "mytable" (
	"uid" int8,
	"added" timestamp NOT NULL DEFAULT now(),
	"data" jsonb NOT NULL,
	PRIMARY KEY ("uid")
);

CREATE VIEW "myview" AS
SELECT
	"uid"
FROM
	"orders"
ORDER BY
	"uid" DESC
LIMIT
	1
;

COMMENT ON TABLE "orders" IS 'Orders data from the Yahoo API';
COMMENT ON COLUMN "orders"."uid" IS 'Order ID from Yahoo';
COMMENT ON VIEW "myview" IS 'Most recent Order UID';
