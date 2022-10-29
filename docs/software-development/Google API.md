---
layout: meth
parent: Software Development
---

# Google API

## create service account key

create a project -> IAM -> service account -> create service account -> fill in and then download the key json

## Google Sheet API

- [official doc](https://developers.google.com/sheets/api)
- [prerequisite using service account](https://robocorp.com/docs/development-guide/google-sheets/interacting-with-google-sheets)

### enable google sheet API

APIs & Services -> Enable APIs & services -> + -> find google sheet api and enable it

### auth with service account key

<https://developers.google.com/identity/protocols/oauth2/service-account#authorizingrequests>

add your email written in the json as your google sheet's editor

minimal auth+read+write example

```python
from google.oauth2 import service_account
from googleapiclient.discovery import build

#auth
SERVICE_ACCOUNT_FILE = '</path/to/your/json>'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# to use the json/dict of the key directly
# credentials = service_account.Credentials.from_service_account_info(<dict of key>, scopes=SCOPES)
service = build('sheets', 'v4', credentials=credentials)
sheet = service.spreadsheets()
sheet_id = "<your sheet id>"

# read
result = sheet.values().get(
    spreadsheetId=sheet_id,
    range="A:Z"
).execute()
print(result)

# write
values = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
]
body = {
    'values': values
}
result = sheet.values().update(
    spreadsheetId=sheet_id, 
    range='D1:F3', # range can be broader than the actual range
    body=body,
    valueInputOption='RAW',
).execute()
print(result)
```

### valueInputOption

[doc](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption)

- `USER_ENTERED`: write as if it's user entered i.e. may be auto converted to other types
- `RAW`: write as raw, no type conversion

### methods

- `get`
	- read
- `update`
	- update
- `clear`
	- delete
	- won't delete the format (e.g. background color) you set, only the data

### batchUpdate

```python
body = {
	"requests": [
		<Request>
	]
}
sheet.batchUpdate(spreadsheetId=sheet_id, body=body).execute()
```

see <https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request> for available requests

### insert empty rows

to insert new rows in row 2 ~ 5

```python
body = {
	"requests": [
		{
			"insertDimension": {
				"range": {
					"sheetId": sheet_gid,
					"dimension": "ROWS",
					"startIndex": 1,
					"endIndex": 5
				},
			}
		},
	],
}
sheet.batchUpdate(spreadsheetId=sheet_id, body=body).execute()
```

see `sheet_gid` by inspecting the url (unique for each tab)

<https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#InsertDimensionRequest>