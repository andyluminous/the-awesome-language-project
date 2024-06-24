package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Conn *gorm.DB

func CreateDbConnection(connectionString string) {
	var err error
	Conn, err = gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err != nil {
		panic("Failed to connect database.")
	}
}
