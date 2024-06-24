# .PHONY: create-migration
# create-migration:
#   atlas migrate diff $(NAME) --to file://schema/schema.sql --dev-url "postgres://postgres:postgres@:6432/talp-db-user?sslmode=disable" --format '{{ sql . "  " }}'

.PHONY: run-user-backend
run-user-backend:
	go run ./cmd/talp-user/app.go