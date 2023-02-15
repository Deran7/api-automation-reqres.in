export const VALID_UPDATE_BOOKING_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "name",
        "job"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": ""
        }
    }
}