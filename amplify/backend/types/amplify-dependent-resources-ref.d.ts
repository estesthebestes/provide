export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "provide": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3providestorage607096d9": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "provide45a17f62": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "rest": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}