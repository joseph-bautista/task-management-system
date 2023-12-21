# Simple Task Management System
This is a simple task management system that you can add tasks and tag tha task as backlog, ready to do, in progress and done.

# Setting up the system
1. Clone the repository by opening your terminal and run the 
> git clone https://github.com/<user-name>/task-management-system.git
2. Go to the directory of the project by running
> cd task-management-system 
3. Create your .env file to the root of the project and update necessary details such as database details.
> You may refer to the .env.example file
4. On the terminal run 
> composer install
5. Install Laravel Sail by running the command below and just follow the configuration after.
> php artisan sail:install 
6. Open your docker and run
> ./vendor/sail up
7. After that, we can run the migration and seed it
> ./vendor/sail artisan migrate:fresh --seed
10. Now that the backend is set up. We can now begin setting up the front end by running
> npm install

> npm run dev

And viola! We have set up our simple fintech portal.

>http://localhost

You can use this credentials:
>user1@example.com

>123456Aa#

# Technologies Used
1. Laravel
2. MySQL
3. Inertia
4. ReactJS
5. PHP 8.2

# References
1. https://laravel.com/docs/10.x
3. https://inertiajs.com/
4. https://react.dev/