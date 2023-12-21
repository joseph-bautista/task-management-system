<?php

namespace App\Services\Task\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UpdatedSuccessResponse;
use App\Services\Task\Models\Task;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class TaskStatusController extends Controller
{
    use ApiResponse;

    public function __invoke(Request $request)
    {
        $task = Task::find($request->id);
        $task->status = $request->status;
        $task->save();
        return $this->successResponse(
            new UpdatedSuccessResponse(
                $task, $task->user
            )
        );
    }
}
