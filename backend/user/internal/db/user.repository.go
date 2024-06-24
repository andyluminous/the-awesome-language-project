package db

import (
	"backend-user-app/internal/models"
)

func GetUserByEmail(email string) models.User {
	var user models.User
	Conn.Where("email = ?", email).First(&user)
	return user
}

func CreateUser(email string, password string) (int64, error) {
	user := models.User{Email: email, Password: password}
	result := Conn.Create(&user)
	return result.RowsAffected, result.Error
}
