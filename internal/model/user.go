package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
}

func (m *User) TableName() string {
	return "user"
}
