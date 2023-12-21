<?php

namespace App\Services\User\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\DataJsonResponse;
use App\Models\User;
use App\Traits\ApiResponse;

class UserController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function __invoke()
    {
        $users = User::orderBy('name')->get();
        return $this->successResponse(new DataJsonResponse($users));
    }

}
