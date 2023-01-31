
# App-ApiGifApp

Aplicación construida en React, la cual consume un servicio de Api de la plataforma "GIPHY Developers"


## Caracteristicas

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Demo

![App Screenshot](https://techcrunch.com/wp-content/uploads/2020/05/GIPHYBrandGuide.jpg)


## API GIPHY

#### Get all items

```http
  GET api.giphy.com/v1/gifs/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | Search query term or phrase. Adding @<username> anywhere in the q parameter effectively changes the search query to be a search for a specific user’s GIFs (user has to be public and verified user by GIPHY.) |

#### Get item

```http
  GET api.giphy.com/v1/gifs/search?api=valoran
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


