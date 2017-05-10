var schema = (function() {
    return {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Validation Schema ",
        "description": "A schema to validate against partner data validation config file",
        "type": "object",
        "properties": {
            "transformation_id": {
                "description": "The unique identifier for transformation",
                "type": "integer"
            },
            "rows" : {
                "type": "object",
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0,
                        "exclusiveMinimum": false
                    },
                    "tolerance" :{
                        "type": "number",
                        "minimum": 0.0,
                        "exclusiveMinimum": false,
                        "maximum": 1.0,
                        "exclusiveMaximum": false
                    }
                }
            },
            "columns": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "type": {
                            "enum": [ "Date", "Integer", "Decimal", "Category", "Time", "Boolean" ]
                        },
                        "format": {
                            "type": "string"
                        },
                        "set": {
                            "type": "array",
                            "items" :{
                                "type": "string"
                            }
                        }
                    },
                    "required": ["name", "type"]
                },
                "minItems": 1,
                "uniqueItems": true
            }
        },
        "required": ["transformation_id", "columns"]
    };
})();