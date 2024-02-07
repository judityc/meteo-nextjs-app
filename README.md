# meteo-nextjs-app

#### Demo: https://meteo-nextjs-app.vercel.app/

## Description:

- Meteo App is created to generate long-term weather conditions based on selected city name. Default weather table provides conditions for Vilnius city.

![Readme-img/app-img.png](https://github.com/judityc/meteo-nextjs-app/assets/123310773/d448aeb6-57ea-4595-b2f5-ff7a5cacfda7)

- Select provides list of of locations for which weather forecast data can be provided.
  
![Readme-img/app-select.png](https://github.com/judityc/meteo-nextjs-app/assets/123310773/7dedb715-2ef3-44b0-93fc-8ac6674ae047)

- Mobile app version can also be used

## Technologies Used: 
For styling components `Chakra UI` library was used. 

## Why Next.js
Due to `cors` issues with source API https://api.meteo.lt/v1/ project from Vite React was migrated to Next.js
Backend part was covered in collaboration with Ramūnas Musteikis.

## TODO
- Use skeleton for table loading (DONE)
- Add suport for query params in url (use place code)