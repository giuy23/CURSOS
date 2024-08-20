<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return view('user.index', compact('users'));
    }

    public function create()
    {
      $user = User::create([
        'name' => 'juanjo',
        'email' => 'demo@demo.com',
        'password' => Hash::make('123456789'),
        'age' => 25,
        'address' => 'calle demostración 12',
        'zip_code' => 290909,
      ]);

      return redirect()->route('user.index');
    }
}
