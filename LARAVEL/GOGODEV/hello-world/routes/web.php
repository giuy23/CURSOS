<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'landing.index')->name('index');
Route::view('/about', 'landing.about')->name('about');
// Route::get('/mi/ruta', ControladorDelaRuta);
// Route::post();
// Route::put();
// Route::delete();
// Route::patch();
