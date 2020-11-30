module.exports = [
    { path: '/toDos', content: {
        "post": {
            "tags": [
                "toDos"
            ],
            "parameters": [
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "ToDo registration",
            "description": "ToDo registration in system",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [
                                "name",
                                "toDoUserId"                                                      
                            ],
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "My To Do List"
                                },
                                "toDoUserId": {
                                    "type": "string",
                                    "example": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
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
                                        "id": "68d6b066-cbc5-4042-b6c7-94b4f6907f20",
                                        "name": "My To Do List",
                                        "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                        "updatedAt": "2020-11-30T20:51:05.222Z",
                                        "createdAt": "2020-11-30T20:51:05.222Z",
                                        "deletedAt": null
                                      },
                                      "messages": [
                                        "ToDo created!"
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
                                        "ToDo.name cannot be empty"
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
                "toDos"
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
            "summary": "List of all toDos",
            "description": "List of all toDos on the system",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "todo": [
                                          {
                                            "id": "68d6b066-cbc5-4042-b6c7-94b4f6907f20",
                                            "name": "My To Do List",
                                            "createdAt": "2020-11-30T20:51:05.222Z",
                                            "updatedAt": "2020-11-30T20:51:05.222Z",
                                            "deletedAt": null,
                                            "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                          },
                                          {
                                            "id": "617b9724-a6f5-47f4-9395-746df8fefc3c",
                                            "name": "My To Do List 2",
                                            "createdAt": "2020-11-30T20:51:35.428Z",
                                            "updatedAt": "2020-11-30T20:51:35.428Z",
                                            "deletedAt": null,
                                            "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
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
    { path: '/toDos/{id}', content: {
        "get": {
            "tags": [
                "toDos"
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
                    "description": "ToDo ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Find ToDo by ID",
            "description": "Find ToDo by ID in system",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "id": "68d6b066-cbc5-4042-b6c7-94b4f6907f20",
                                        "name": "My To Do List",
                                        "createdAt": "2020-11-30T20:51:05.222Z",
                                        "updatedAt": "2020-11-30T20:51:05.222Z",
                                        "deletedAt": null,
                                        "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
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
                                        "ToDo not found"
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
                "toDos"
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
            "summary": "Update ToDo by ID",
            "description": "Update ToDo by ID",
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
                                        "id": "68d6b066-cbc5-4042-b6c7-94b4f6907f20",
                                        "name": "name",
                                        "createdAt": "2020-11-30T20:51:05.222Z",
                                        "updatedAt": "2020-11-30T21:02:36.801Z",
                                        "deletedAt": null,
                                        "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                      },
                                      "messages": [
                                        "ToDo updated!"
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
                                        "ToDo not found"
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
                                        "ToDo.name cannot be empty"
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
                "toDos"
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
                    "description": "ToDo ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Delete ToDo by ID",
            "description": "Delete ToDo by ID in system",
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
                                        "ToDo deleted"
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
                                        "ToDo not found"
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