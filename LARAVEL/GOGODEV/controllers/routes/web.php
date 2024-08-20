<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
  Route::get('/', 'index')->name('user.index');
  Route::get('/create', 'create')->name('user.create');
});

// Route::get('/', [UserController::class,'index']);
