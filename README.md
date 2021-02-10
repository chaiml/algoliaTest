# A simple API written in Node.js that performs a text search using [Algolia](https://www.algolia.com).

> A simple API that accepts one parameter (the search term) and returns the relevant results from Algolia.

## Usage

### Install Dependencies

```
npm install
```

### Environment variables

Create an `.env` file in the route directory with the following values:

```
ALOGLIA_APPLICATION_ID=NGTNBA9J44
ALOGLIA_ADMIN_ID=50f2665452a5c29c054e6b2fa3e01a34
```

### Run

```
npx nodemon server.js
```

### Example of API request

GET http://localhost:5000/users/?q=Ellis

### Example of API response

```
[
    {
        "id": 17,
        "firstName": "Blanche",
        "lastName": "Ellis",
        "street": "Toris Avenue",
        "city": "Nimlugge",
        "state": "AZ",
        "zip": 97367
    }
]
```

## Notes

- Sample data file for index creation is available [here.](https://drive.google.com/file/d/1w1CG2HqB6KcA96I9ATcoy7jxeFK92BU9/view)
- The search is done on the following fields only:
  First Name, Last Name and Street.
- The API returns JSON format.
