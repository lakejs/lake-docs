### requestAction

Defines a URL where the file will be uploaded.

* Type: `URL string`

Its response data should follow the following format:

```json
{
  "url": "http://example.com/foo.ext"
}
```

You can use the [transformResponse](#transformresponse) config to convert the data returned by your API.


### requestMethod

Defines an HTTP method for the request.

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`


### requestTypes

Defines allowed MIME types for the upload.

* Type: `string[]`


### requestFieldName

Defines the field name for the uploaded file.

* Type: `string`
* Default: `file`


### requestWithCredentials

Defines whether or not cross-site `Access-Control` requests should be made using credentials such as cookies, authentication headers.

* Type: `boolean`
* Default: `false`


### requestHeaders

Defines custom headers for the upload request.

* Type: `Record<string, string>`


### transformResponse

Defines a function to transform the response before handling it.

* Type: `(body: any) => any`
