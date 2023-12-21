<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = array(
            0 => array(
                'name' => "User 1",
                'email' => "user1@example.com",
                'password' => "123456Aa#"
            ),
            1 => array(
                'name' => "User 2",
                'email' => "user2@example.com",
                'password' => "123456Aa#"
            ),
            2 => array(
                'name' => "User 3",
                'email' => "user3@example.com",
                'password' => "123456Aa#"
            ),
            3 => array(
                'name' => "User 4",
                'email' => "user4@example.com",
                'password' => "123456Aa#"
            ),
            4 => array(
                'name' => "User 5",
                'email' => "user5@example.com",
                'password' => "123456Aa#",
            )
        );


        foreach ($users as $user) {
            User::create($user);
        }
    }
}
