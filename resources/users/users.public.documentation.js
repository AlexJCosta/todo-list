module.exports = [    
    { path: '/signup', content: {
        "post": {
            "tags": [
                "public"
            ],
            "parameters": [
            ],            
            "summary": "User registration",
            "description": "User registration in system",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [
                                "name",
                                "email",
                                "password"                                
                            ],
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "Alex Costa"
                                },
                                "email": {
                                    "type": "email",
                                    "example": "email@gmail.com"
                                },                                
                                "password": {
                                    "type": "string",
                                    "example": "todo2021"
                                }                                
                            }
                        }
                    }
                },
                "required": true
            },
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "id": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                        "name": "Alex Costa",
                                        "email": "email@gmail.com",
                                        "password": "todo2021",
                                        "updatedAt": "2020-11-30T18:18:23.041Z",
                                        "createdAt": "2020-11-30T18:18:23.041Z",
                                        "deletedAt": null
                                      },
                                      "messages": [
                                        "User created!"
                                      ]
                                }
                            }
                        }
                    }
                },               
                "422": {
                    "description": "Error: Unprocessable Entity",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {},
                                    "messages": [
                                        "User.name cannot be empty"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    } },    
    { path: '/signin', content: {
        "post": {
            "tags": [
                "public"
            ],
            "parameters": [    
            ],
            "summary": "User authentication",
            "description": "User authentication in ssytem",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [
                                "email",
                                "password",
                            ],
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "example": "email@gmail.com"
                                },
                                "password": {
                                    "type": "string",
                                    "example": "todo2021"
                                }
                            }
                        }
                    }
                },
                "required": true
            },
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "user": {
                                          "id": "c70429dd-920a-42c6-9740-3e3cbcfd78ab",
                                          "name": "Alex Costa",
                                          "email": "email@gmail.com",
                                          "password": "$2a$10$Ti1jGiqwVC6BNg2JDNasF.1dVNru3jYs8iC0mzyAvsHMQ9tQTJfx2",
                                          "createdAt": "2020-12-04T19:42:34.982Z",
                                          "updatedAt": "2020-12-04T19:42:34.982Z",
                                          "deletedAt": null
                                        },
                                        "admin": true,
                                        "master_admin": true,
                                        "iat": 1607295175838,
                                        "exp": 1607316775838
                                      },
                                      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiYzcwNDI5ZGQtOTIwYS00MmM2LTk3NDAtM2UzY2JjZmQ3OGFiIiwibmFtZSI6IkFsZXggQ29zdGEiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJFRpMWpHaXF3VkM2Qk5nMkpETmFzRi4xZFZOcnUzallzOGlDMG16eUF2c0hNUTl0UVRKZngyIiwiY3JlYXRlZEF0IjoiMjAyMC0xMi0wNFQxOTo0MjozNC45ODJaIiwidXBkYXRlZEF0IjoiMjAyMC0xMi0wNFQxOTo0MjozNC45ODJaIiwiZGVsZXRlZEF0IjpudWxsfSwiYWRtaW4iOnRydWUsIm1hc3Rlcl9hZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3Mjk1MTc1ODM4LCJleHAiOjE2MDczMTY3NzU4Mzh9.a9eT2xKA9KqUKkEdPZEMnT2Rp9eRCvrboxNGKerEEzM",
                                      "messages": [
                                        "Success!"
                                      ]
                                }
                            }
                        }
                    }
                },
                "401": {
                    "description": "Error: Unauthorized",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {},
                                    "messages": [
                                        "Invalid user/password"
                                    ]
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Error: Not Found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {},
                                    "messages": [
                                        "Invalid user/password"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    } }   
]