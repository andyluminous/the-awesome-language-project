package main

import (
	"backend-user-app/internal/db"
	"backend-user-app/internal/router"

	"github.com/gin-gonic/gin"
)

func main() {
	connectionString := "host=localhost user=postgres password=postgres dbname=talp-db-user port=6432 sslmode=disable"
	r := gin.Default()

	db.CreateDbConnection(connectionString)
	router.ApplyRoutes(r)

	r.Run()
}
