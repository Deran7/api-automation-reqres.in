export const VALID_DELAYED_RESPONSE_PARAM_RESPONSE_SCHEMA = {
    "title": "Root Schema",
    "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
        
    ],
    "properties": {
        "page": {
            "type": "integer",
            "default": 0,
            "title": "The page Schema",
            "examples": [
                1
            ]
        },
        "per_page": {
            "type": "integer",
            "default": 0,
            "title": "The per_page Schema",
            "examples": [
                6
            ]
        },
        "total": {
            "type": "integer",
            "default": 0,
            "title": "The total Schema",
            "examples": [
                12
            ]
        },
        "total_pages": {
            "type": "integer",
            "default": 0,
            "title": "The total_pages Schema",
            "examples": [
                2
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "id",
                    "email",
                    "first_name",
                    "last_name",
                    "avatar"
                ],
                "properties": {
                    "id": {
                        "type": "integer",
                        "title": "The id Schema",
                        "examples": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6
                        ]
                    },
                    "email": {
                        "type": "string",
                        "title": "The email Schema",
                        "examples": [
                            "george.bluth@reqres.in",
                            "janet.weaver@reqres.in",
                            "emma.wong@reqres.in",
                            "eve.holt@reqres.in",
                            "charles.morris@reqres.in",
                            "tracey.ramos@reqres.in"
                        ]
                    },
                    "first_name": {
                        "type": "string",
                        "title": "The first_name Schema",
                        "examples": [
                            "George",
                            "Janet",
                            "Emma",
                            "Eve",
                            "Charles",
                            "Tracey"
                        ]
                    },
                    "last_name": {
                        "type": "string",
                        "title": "The last_name Schema",
                        "examples": [
                            "Bluth",
                            "Weaver",
                            "Wong",
                            "Holt",
                            "Morris",
                            "Ramos"
                        ]
                    },
                    "avatar": {
                        "type": "string",
                        "title": "The avatar Schema",
                        "examples": [
                            "https://reqres.in/img/faces/1-image.jpg",
                            "https://reqres.in/img/faces/2-image.jpg",
                            "https://reqres.in/img/faces/3-image.jpg",
                            "https://reqres.in/img/faces/4-image.jpg",
                            "https://reqres.in/img/faces/5-image.jpg",
                            "https://reqres.in/img/faces/6-image.jpg"
                        ]
                    }
                },
                "examples": [{
                    "id": 1,
                    "email": "george.bluth@reqres.in",
                    "first_name": "George",
                    "last_name": "Bluth",
                    "avatar": "https://reqres.in/img/faces/1-image.jpg"
                },
                {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                },
                {
                    "id": 3,
                    "email": "emma.wong@reqres.in",
                    "first_name": "Emma",
                    "last_name": "Wong",
                    "avatar": "https://reqres.in/img/faces/3-image.jpg"
                },
                {
                    "id": 4,
                    "email": "eve.holt@reqres.in",
                    "first_name": "Eve",
                    "last_name": "Holt",
                    "avatar": "https://reqres.in/img/faces/4-image.jpg"
                },
                {
                    "id": 5,
                    "email": "charles.morris@reqres.in",
                    "first_name": "Charles",
                    "last_name": "Morris",
                    "avatar": "https://reqres.in/img/faces/5-image.jpg"
                },
                {
                    "id": 6,
                    "email": "tracey.ramos@reqres.in",
                    "first_name": "Tracey",
                    "last_name": "Ramos",
                    "avatar": "https://reqres.in/img/faces/6-image.jpg"
                }]
            },
            "examples": [
                [{
                    "id": 1,
                    "email": "george.bluth@reqres.in",
                    "first_name": "George",
                    "last_name": "Bluth",
                    "avatar": "https://reqres.in/img/faces/1-image.jpg"
                },
                {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                },
                {
                    "id": 3,
                    "email": "emma.wong@reqres.in",
                    "first_name": "Emma",
                    "last_name": "Wong",
                    "avatar": "https://reqres.in/img/faces/3-image.jpg"
                },
                {
                    "id": 4,
                    "email": "eve.holt@reqres.in",
                    "first_name": "Eve",
                    "last_name": "Holt",
                    "avatar": "https://reqres.in/img/faces/4-image.jpg"
                },
                {
                    "id": 5,
                    "email": "charles.morris@reqres.in",
                    "first_name": "Charles",
                    "last_name": "Morris",
                    "avatar": "https://reqres.in/img/faces/5-image.jpg"
                },
                {
                    "id": 6,
                    "email": "tracey.ramos@reqres.in",
                    "first_name": "Tracey",
                    "last_name": "Ramos",
                    "avatar": "https://reqres.in/img/faces/6-image.jpg"
                }]
            ]
        },
        "support": {
            "type": "object",
            "default": {},
            "title": "The support Schema",
            "required": [
                "url",
                "text"
            ],
            "properties": {
                "url": {
                    "type": "string",
                    "default": "",
                    "title": "The url Schema",
                    "examples": [
                        "https://reqres.in/#support-heading"
                    ]
                },
                "text": {
                    "type": "string",
                    "default": "",
                    "title": "The text Schema",
                    "examples": [
                        "To keep ReqRes free, contributions towards server costs are appreciated!"
                    ]
                }
            },
            "examples": [{
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }]
        }
    },
    "examples": [{
        "page": 1,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }]
}