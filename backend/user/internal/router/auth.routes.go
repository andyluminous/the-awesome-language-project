package router

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"backend-user-app/internal/db"
)

type LoginRequestBody struct {
	Email    string
	Password string
}

func AddAuthRoutes(r *gin.Engine) {
	r.POST("/auth/login", handleLogin)
	r.POST("/auth/register", handleRegistration)
}

func handleLogin(c *gin.Context) {

	var body LoginRequestBody

	if err := c.BindJSON(&body); err != nil {
		fmt.Printf("ERR %v", err)
	}
	user := db.GetUserByEmail(body.Email)
	if user.Password != body.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "UNAUTHORIZED"})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"message": "Login successful!",
		})
	}
}

func handleRegistration(c *gin.Context) {

	var body LoginRequestBody

	if err := c.BindJSON(&body); err != nil {
		panic(fmt.Sprintf("Error parsing request body %v", err))
	}
	_, err := db.CreateUser(body.Email, body.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"message": "User created successfully!",
		})
	}

}
