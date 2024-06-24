env "local" {
  url = "postgres://postgres:postgres@:6432/talp-db-user?sslmode=disable"
  migration {
    dir = "file://migrations"
  }
}
