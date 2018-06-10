define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the  product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>brand of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the  productpassed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size  of the  product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "styleCode",
            "description": "<p>styleCode  of the  productpassed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>seller of the  productpassed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color  of the  product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the  product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n  \"message\": \"product created Succesfully\",\n  \"status\": 200,\n  \"data\": [\n      {\n          \"name\": \"FastTrack watch\",\n          \"price\": 3000,\n          \"brand\": \"FastTrack\",\n          \"seller\": \"advc\",\n          \"quantity\": 2,\n          \"category\": \"Watch\",\n          \"size\": \"12\",\n          \"color\": \"silver\",\n          \"specifications\": [],\n          \"styleCode\": \"def\",\n          \"productId\": \"ryByu7YkQ\",\n          \"__v\": 0\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/delete/:productId",
    "title": "Delete  product from  cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductId",
            "description": "<p>of the  product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Removed Successfully from cart\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1CartDeleteProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/delete/:productId",
    "title": "Delete  product",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductId",
            "description": "<p>of the  product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Removed Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsDeleteProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/products/edit/:productId",
    "title": "",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \" product edited succesfully\",\n    \"status\": 200,\n    \"data\": {\n        \"name\": \"FastTrack watch\",\n        \"price\": 3000,\n        \"brand\": \"FastTrack\",\n        \"seller\": \"advc\",\n        \"quantity\": 2,\n        \"category\": \"Watch\",\n        \"size\": \"12\",\n        \"color\": \"silver\",\n        \"specifications\": [],\n        \"styleCode\": \"def\",\n        \"_id\": \"5b0ba7ddb0adb80c34663a21\",\n        \"productId\": \"ryByu7YkQ\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsEditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/add/:productId",
    "title": "add product to cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productI should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"product  added to cart\",\n    \"status\": 200,\n    \"data\": {\n        \"name\": \"FastTrack watch\",\n        \"price\": 3000,\n        \"brand\": \"FastTrack\",\n        \"seller\": \"advc\",\n        \"quantity\": 2,\n        \"category\": \"Watch\",\n        \"size\": \"12\",\n        \"color\": \"silver\",\n        \"specifications\": [],\n        \"styleCode\": \"def\",\n        \"_id\": \"5b0ba7ddb0adb80c34663a21\",\n        \"productId\": \"ryByu7YkQ\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1CartAddProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/listAll",
    "title": "Get all Products  from cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \" al products from the  cart\",\n   \"status\": 200,\n   \"data\": [\n       {\n           \"name\": \"FastTrack watch\",\n           \"price\": 3000,\n           \"brand\": \"FastTrack\",\n           \"seller\": \"advc\",\n           \"quantity\": 2,\n           \"category\": \"Watch\",\n           \"size\": \"12\",\n           \"color\": \"silver\",\n           \"specifications\": [],\n           \"styleCode\": \"def\",\n           \"productId\": \"ryByu7YkQ\",\n           \"__v\": 0\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no produxt Available\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1CartListall"
  },
  {
    "type": "get",
    "url": "/api/v1/products/listAll",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"products  available\",\n   \"status\": 200,\n   \"data\": [\n       {\n           \"name\": \"FastTrack watch\",\n           \"price\": 3000,\n           \"brand\": \"FastTrack\",\n           \"seller\": \"advc\",\n           \"quantity\": 2,\n           \"category\": \"Watch\",\n           \"size\": \"12\",\n           \"color\": \"silver\",\n           \"specifications\": [],\n           \"styleCode\": \"def\",\n           \"productId\": \"ryByu7YkQ\",\n           \"__v\": 0\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no produxt Available\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsListall"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:productId",
    "title": "Get a single  product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productI should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"product found\",\n    \"status\": 200,\n    \"data\": {\n        \"name\": \"FastTrack watch\",\n        \"price\": 3000,\n        \"brand\": \"FastTrack\",\n        \"seller\": \"advc\",\n        \"quantity\": 2,\n        \"category\": \"Watch\",\n        \"size\": \"12\",\n        \"color\": \"silver\",\n        \"specifications\": [],\n        \"styleCode\": \"def\",\n        \"_id\": \"5b0ba7ddb0adb80c34663a21\",\n        \"productId\": \"ryByu7YkQ\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerceRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProductid"
  }
] });
