<?php

use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

// Route::controller(NoteController::class)->group(function () {
//   Route::get('/note', 'index')->name('note.index');
//   Route::get('/note/create', 'create')->name('note.create');
//   Route::get('/note/edit/{note}', 'edit')->name('note.edit');
//   Route::get('/note/show/{note}', 'show')->name('note.show');
//   Route::post('/note/store', 'store')->name('note.store');
//   Route::put('note/update/{note}', 'update')->name('note.update');
//   Route::delete('note/destroy/{note}', 'destroy')->name('note.destroy');
// });

Route::resource('/note', NoteController::class);
// Route::apiResource('/note', NoteController::class);
