module.exports = [       
    { path: '/users', content: {        
        "get": {
            "tags": [
                "users"
            ],
            "parameters": [
                {          
                    "in": "header",
                    "name": "page",
                    "required": false,
                    "type": "integer",
                    "minimum": "1",
                    "default": "0",
                    "description": "The number of items to skip before starting."
                },
                {            
                    "in": "header",
                    "name": "limit",
                    "required": false,
                    "type": "integer",
                    "minimum": "1",
                    "maximum": "50",
                    "default": "10",
                    "description": "The maximum number of items to return per page."
                }               
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "List of all users",
            "description": "List of all users on the system",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "user": [
                                          {
                                            "id": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                            "name": "name",
                                            "email": "email@gmail.com",
                                            "password": "test2d",
                                            "createdAt": "2020-11-30T18:18:23.041Z",
                                            "updatedAt": "2020-11-30T18:24:07.813Z",
                                            "deletedAt": null
                                          }
                                        ],
                                        "paging": {
                                          "offset": "0",
                                          "limit": "10"
                                        }
                                      },
                                      "messages": [
                                        "Result success!"
                                      ]
                                }
                            }
                        }
                    }
                }                
            }
        }
    } },
    { path: '/users/{id}', content: {
        "get": {
            "tags": [
                "users"
            ],
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "string",
                        "example": "we41bdf04-5bb9-41ae-9718-453bd17c023213r"
                    },
                    "required": true,
                    "description": "User ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Find User by ID",
            "description": "Find User by ID in system",
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
                                        "createdAt": "2020-11-30T18:18:23.041Z",
                                        "updatedAt": "2020-11-30T18:18:23.041Z",
                                        "deletedAt": null
                                      },
                                      "messages": [
                                        "Result success!"
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
                                        "User not found"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        },
        "patch": {
            "tags": [
                "users"
            ],
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "string",
                        "example": "aa1bdf04-5bb9-41ae-9718-453bd17c0407"
                    },
                    "required": true,
                    "description": "User ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Update User by ID",
            "description": "Update User by ID",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [                               
                            ],
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "name"
                                },
                                "password": {
                                    "type": "string",
                                    "example": "test2d"
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
                                        "name": "name",
                                        "email": "email@gmail.com",
                                        "password": "test2d",
                                        "createdAt": "2020-11-30T18:18:23.041Z",
                                        "updatedAt": "2020-11-30T18:24:07.813Z",
                                        "deletedAt": null
                                      },
                                      "messages": [
                                        "User updated!"
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
                                        "User not found"
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
        },
        "delete": {
            "tags": [
                "users"
            ],
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "string",
                        "example": "acsbdf04-5bb9-41ae-9718-453bd17c09999"
                    },
                    "required": true,
                    "description": "User ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Delete user by ID",
            "description": "Delete user by ID in system",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": 1,
                                    "messages": [
                                        "User deleted"
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
                                    "result": [],
                                    "messages": [
                                        "User not found"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    } },   
    { path: '/users/send', content: {
        "post": {
            "tags": [
                "users"
            ],            
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [                               
                            ],
                            "properties": {
                                "userId": {
                                    "type": "string",
                                    "example": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                },
                                "listName": {
                                    "type": "string",
                                    "example": "mylist"
                                },
                                "emails": {
                                    "type": "string",
                                    "example": ['alex@email.com']
                                }                               
                            }
                        }
                    }
                },
                "required": true
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Send emails",
            "description": "Send emails",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {                                
                                    "result": {},
                                    "messages": [
                                        "Emails sendeds."
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
                                        "User not found"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    } },
]