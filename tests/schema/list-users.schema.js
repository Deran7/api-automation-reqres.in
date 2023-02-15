export const VALID_LIST_USERS_PARAMS_RESPONSE_SCHEMA = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
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
            "title": "The page Schema",
            "type": "integer",
            "default": 0,
            "examples": [
                2
            ]
        },
        "per_page": {
            "title": "The per_page Schema",
            "type": "integer",
            "default": 0,
            "examples": [
                6
            ]
        },
        "total": {
            "title": "The total Schema",
            "type": "integer",
            "default": 0,
            "examples": [
                12
            ]
        },
        "total_pages": {
            "title": "The total_pages Schema",
            "type": "integer",
            "default": 0,
            "examples": [
                2
            ]
        },
        "data": {
            "title": "The data Schema",
            "type": "array",
            "default": [],
            "examples": [
                [{
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg"
                }]
            ]
        },
        "support": {
            "title": "The support Schema",
            "type": "object",
            "default": {},
            "required": [
                "url",
                "text"
            ],
            "properties": {
                "url": {
                    "title": "The url Schema",
                    "type": "string",
                    "default": "",
                    "examples": [
                        "https://reqres.in/#support-heading"
                    ]
                },
                "text": {
                    "title": "The text Schema",
                    "type": "string",
                    "default": "",
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
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }]
}