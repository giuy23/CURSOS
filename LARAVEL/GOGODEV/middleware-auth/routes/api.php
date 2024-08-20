<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExampleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::get('/', [ExampleController::class, 'index'])->name("example.index");
// Route::get('/no-access', [ExampleController::class, 'noAccess'])->name("example.no-access");

// Route::middleware(['example', 'auth', 'admin'])->group(function(){
    //     Route::get('/', [ExampleController::class, 'index'])->name("example.index");
    //     Route::get('/', [ExampleController::class, 'index'])->withoutMiddleware('admin');
    // });

    Route::post('/create', [AuthController::class, 'createUser'])->name('user.create');
    Route::post('/login', [AuthController::class, 'loginUser'])->name('user.login');

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');
