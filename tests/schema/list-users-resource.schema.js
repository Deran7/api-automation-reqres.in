export const VALID_LIST_USERS_RESOURCE_PARAM_RESPONSE_SCHEMA = {
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
                    "name",
                    "year",
                    "color",
                    "pantone_value"
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
                    "name": {
                        "type": "string",
                        "title": "The name Schema",
                        "examples": [
                            "cerulean",
                            "fuchsia rose",
                            "true red",
                            "aqua sky",
                            "tigerlily",
                            "blue turquoise"
                        ]
                    },
                    "year": {
                        "type": "integer",
                        "title": "The year Schema",
                        "examples": [
                            2000,
                            2001,
                            2002,
                            2003,
                            2004,
                            2005
                        ]
                    },
                    "color": {
                        "type": "string",
                        "title": "The color Schema",
                        "examples": [
                            "#98B2D1",
                            "#C74375",
                            "#BF1932",
                            "#7BC4C4",
                            "#E2583E",
                            "#53B0AE"
                        ]
                    },
                    "pantone_value": {
                        "type": "string",
                        "title": "The pantone_value Schema",
                        "examples": [
                            "15-4020",
                            "17-2031",
                            "19-1664",
                            "14-4811",
                            "17-1456",
                            "15-5217"
                        ]
                    }
                },
                "examples": [{
                    "id": 1,
                    "name": "cerulean",
                    "year": 2000,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                },
                {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                },
                {
                    "id": 3,
                    "name": "true red",
                    "year": 2002,
                    "color": "#BF1932",
                    "pantone_value": "19-1664"
                },
                {
                    "id": 4,
                    "name": "aqua sky",
                    "year": 2003,
                    "color": "#7BC4C4",
                    "pantone_value": "14-4811"
                },
                {
                    "id": 5,
                    "name": "tigerlily",
                    "year": 2004,
                    "color": "#E2583E",
                    "pantone_value": "17-1456"
                },
                {
                    "id": 6,
                    "name": "blue turquoise",
                    "year": 2005,
                    "color": "#53B0AE",
                    "pantone_value": "15-5217"
                }]
            },
            "examples": [
                [{
                    "id": 1,
                    "name": "cerulean",
                    "year": 2000,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                },
                {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                },
                {
                    "id": 3,
                    "name": "true red",
                    "year": 2002,
                    "color": "#BF1932",
                    "pantone_value": "19-1664"
                },
                {
                    "id": 4,
                    "name": "aqua sky",
                    "year": 2003,
                    "color": "#7BC4C4",
                    "pantone_value": "14-4811"
                },
                {
                    "id": 5,
                    "name": "tigerlily",
                    "year": 2004,
                    "color": "#E2583E",
                    "pantone_value": "17-1456"
                },
                {
                    "id": 6,
                    "name": "blue turquoise",
                    "year": 2005,
                    "color": "#53B0AE",
                    "pantone_value": "15-5217"
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
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        },
        {
            "id": 3,
            "name": "true red",
            "year": 2002,
            "color": "#BF1932",
            "pantone_value": "19-1664"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "year": 2003,
            "color": "#7BC4C4",
            "pantone_value": "14-4811"
        },
        {
            "id": 5,
            "name": "tigerlily",
            "year": 2004,
            "color": "#E2583E",
            "pantone_value": "17-1456"
        },
        {
            "id": 6,
            "name": "blue turquoise",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }]
}