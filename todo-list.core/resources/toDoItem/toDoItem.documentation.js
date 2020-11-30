module.exports = [
    { path: '/toDoItems', content: {
        "post": {
            "tags": [
                "toDoItems"
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
                                "toDoItemUserId",
                                "toDoId"
                            ],
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "My To Do Item"
                                },
                                "toDoItemUserId": {
                                    "type": "string",
                                    "example": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                },
                                "toDoId": {
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
                                        "id": "3fa116f1-af84-4ab4-a66c-46847d11e622",
                                        "name": "My To Do Item",
                                        "toDoItemUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                        "toDoId": "617b9724-a6f5-47f4-9395-746df8fefc3c",
                                        "updatedAt": "2020-11-30T21:24:12.928Z",
                                        "createdAt": "2020-11-30T21:24:12.928Z",
                                        "deletedAt": null
                                      },
                                      "messages": [
                                        "ToDoItem created!"
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
                "toDoItems"
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
            "summary": "List of all toDoItems",
            "description": "List of all toDoItems on the system",
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
                                            "name": "My To Do Item",
                                            "createdAt": "2020-11-30T20:51:05.222Z",
                                            "updatedAt": "2020-11-30T20:51:05.222Z",
                                            "deletedAt": null,
                                            "toDoUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                          },
                                          {
                                            "id": "617b9724-a6f5-47f4-9395-746df8fefc3c",
                                            "name": "My To Do Item 2",
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
    { path: '/toDoItems/{id}', content: {
        "get": {
            "tags": [
                "toDoItems"
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
                    "description": "ToDoItem ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Find ToDoItem by ID",
            "description": "Find ToDoItem by ID in system",
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "example": {
                                    "result": {
                                        "id": "a171a568-3a1e-444e-9066-ac471f675ad0",
                                        "name": "My To Do List",
                                        "createdAt": "2020-11-30T21:19:21.520Z",
                                        "updatedAt": "2020-11-30T21:19:21.520Z",
                                        "deletedAt": null,
                                        "toDoItemUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                        "toDoId": "617b9724-a6f5-47f4-9395-746df8fefc3c"
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
                                        "ToDoItem not found"
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
                "toDoItems"
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
                    "description": "ToDoItem ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Update ToDoItem by ID",
            "description": "Update ToDoItem by ID",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": [  
                                "name",
                                "toDoItemUserId",
                                "toDoId"
                            ],
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "name"
                                },
                                "toDoItemUserId": {
                                    "type": "string",
                                    "example": "dac34c51-8c03-44df-9228-fe76d29f8b0d"
                                },
                                "toDoId": {
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
                                        "id": "3fa116f1-af84-4ab4-a66c-46847d11e622",
                                        "name": "name",
                                        "createdAt": "2020-11-30T21:24:12.928Z",
                                        "updatedAt": "2020-11-30T21:36:00.355Z",
                                        "deletedAt": null,
                                        "toDoItemUserId": "dac34c51-8c03-44df-9228-fe76d29f8b0d",
                                        "toDoId": "617b9724-a6f5-47f4-9395-746df8fefc3c"
                                      },
                                      "messages": [
                                        "ToDoItem updated!"
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
                                        "ToDoItem not found"
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
                                        "ToDoItem.name cannot be empty"
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
                "toDoItems"
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
                    "description": "ToDoItem ID"
                }
            ],
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "summary": "Delete ToDoItem by ID",
            "description": "Delete ToDoItem by ID in system",
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
                                        "ToDoItem deleted"
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
                                        "ToDoItem not found"
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