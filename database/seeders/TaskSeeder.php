<?php

namespace Database\Seeders;

use App\Services\Task\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tasks = array(
            0 => array(
                'name' => "Task 1",
                'description' => "Task 1 Description",
            ),
            1 => array(
                'name' => "Task 2",
                'description' => "Task 2 Description",
            ),
            2 => array(
                'name' => "Task 3",
                'description' => "Task 3 Description",
            ),
            3 => array(
                'name' => "Task 4",
                'description' => "Task 4 Description",
            ),
            4 => array(
                'name' => "Task 5",
                'description' => "Task 5 Description",
            )
        );


        foreach ($tasks as $task) {
            Task::create($task);
        }
    }
}
