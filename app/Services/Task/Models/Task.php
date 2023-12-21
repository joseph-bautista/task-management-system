<?php

namespace App\Services\Task\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    protected $hidden = [
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'date: d M Y',
        'updated_at' => 'date: d M Y',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
