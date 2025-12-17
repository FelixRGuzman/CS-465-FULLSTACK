# CS-465 Full Stack Development with MEAN | Class Reflection and 8-1 Journal:

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Throughout the duration of this class I used two different setups. The customer side initially used Express with Handlebars which was relatively simple to implement and to start using. However, compared to the Angular SPA that we constructed for the administrative side it was quite slow as it didn’t have real-time updates. The SPA required TypeScript and tons of trial and error to set up due to a disparity in the Angular version, and even without that it is still much harder to set up naturally.

## Why did the backend use a NoSQL MongoDB database?

We used MongoDB because it’s a requirement for the MEAN stack. The main advantage was that it stores data as documents that look just like the code I was already writing. This made it easier to check my work; I could just open MongoDB Compass and see my trip data exactly how it was supposed to appear in the app without having to worry about complex table structures. This differs from MySQL because MySQL requires pre-defined immutable tables. MongoDB however, lets me save data as objects that matched my code and offered much more flexibility.

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JavaScript and TypeScript are the languages I used to write the logic, while JSON is just the text format used to move data. JSON acts as a bridge in this process and isn’t really comparable. My Express backend pulled data from the database and sent it as a JSON string to the Angular frontend. This allowed the two different parts of the app which were running on different ports to talk to each other and share the same trip info.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One of my main struggles occurred while trying to follow Module 6. The guide was not fully compatible with my version of Angular so I had to improvise. I refactored by moving the data logic out of the components and into a Data Service and then had to devise a function to force refresh the data as the data wouldn't refresh naturally. Additionally, we also used a Trip Card component as one of the core features of this application allowing us to design and reuse it for every trip. This kept everything consistent and saved me from writing the same HTML over and over.

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

To summarize, Endpoints are the URLs (like /api/trips) and methods are the actions like GET or PUT. As their respective name implies they have completely different purposes. I was able to test these and the rest of my application by using tools like Postman, MongoDB Compass, and the Chrome browser's Inspect tools to figure out multiple issues. For example, it helped me figure out why I was getting CORS errors or port conflicts. For security, I used JWT (tokens) and a .env file to hide my keys. I had to test to make sure that if I wasn't logged in, the server would block me from editing any trips. It all worked well and was one of the most interesting parts of this project.

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course was a lesson in patience and debugging. Module 6 was quite difficult and took hours of trial and error to get the servers and data to sync up. I learned how to handle the MEAN stack which I’ve heard of for a long time but never attempted as I decided to learn PHP and MySQL instead. This helped me familiarize with a NoSQL database and modern stack as well as how to actually use GitHub. Before this, I barely touched GitHub, but after dozens of commits to save my progress from breaking, I finally see why it’s necessary. Mastering these tools and learning how to keep going when the instructions don't work makes me a much better developer as I will now be even more ready to take on any task despite any initial issues that may be presented.
