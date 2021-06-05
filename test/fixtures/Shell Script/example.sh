#!/bin/bash

# Single line comment

curl -s -o "response.json" -X POST -d "{\"hello\":\"world\"}" -H "Content-Type: application/json" -H "Authorization: Token $RELEASE_TOKEN" https://api.example.local/v1/

if [ ! -e response.json ]; then
	echo "File doesn't exist"
	exit 1
fi

MY_VALUE=$(jq --raw-output '.id // empty' response.json)
echo "Value is $MY_VALUE"

if [ ! -n "$MY_VALUE" ]; then
	exit 1
fi
