module.exports = [
    { path: '/users', content: {
        "post": {
            "tags": [
                "users"
            ],
            "parameters": [
            ],
            "security": [
                {
                    "bearerAuth": []
                }
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
    } }
]