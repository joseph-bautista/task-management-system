<?php

namespace App\Services\Task\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CreatedSuccessResponse;
use App\Http\Resources\DataJsonResponse;
use App\Http\Resources\DeletedSuccessResponse;
use App\Http\Resources\UpdatedSuccessResponse;
use App\Services\Task\Models\Task;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::with('user')->orderBy('created_at', 'DESC')->get();
        return $this->successResponse(new DataJsonResponse($tasks));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $task = Task::create($request->all());
        $task->user_id = $request->user_id;
        $task->save();
        return $this->successResponse(new CreatedSuccessResponse($task,$task->user));
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return $this->successResponse(
            new DataJsonResponse(
                $task
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $task->update($request->all());
        $task->user_id = $request->user_id;
        $task->save();
        return $this->successResponse(
            new UpdatedSuccessResponse(
                $task, $task->user
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        return $this->successResponse(new DeletedSuccessResponse($task->delete()));
    }
}
